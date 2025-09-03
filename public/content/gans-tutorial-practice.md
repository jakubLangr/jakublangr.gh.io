Title: Coding for GANS & (Semi)-Learning
Date: 2017-09-10 14:00
Tags: python, AI, semi-supervised learning, GANs, Generative, Adverserial, Neural Networks, code
Category: technical
Slug: gans-code
Author: Jakub Langr
Summary: As it often happens, I get busy at work and forget to publish something I should have really done months ago. Well, this code is that thing. But at least it's now nice and shiny.

##  Intro
I'll jump straight into what we have explained on a high-level [last time](http://jakublangr.com/gans-tutorial.html). The code is also available on [GitHub](https://github.com/jakubLangr/Gans-Semi-Supervised/blob/master/gans_semi_supervised_learning.ipynb) and on [Medium](https://medium.com/@james.langr). This part is identical to the Jupyter notebook, except it is lacking the code output.

##  Generative Adverserial Networks & Semi-Supervised Learning
# By Jakub Langr (originally written March 2017)
This code was written for me to experiment with some of the recent advancements in AI. I chose specificially semi-supervised learning and Generative Adverserial Networks (GANs) to push myself. Some of the code was done as a homework for the [Creative Applications of Deep Learning Course](https://www.kadenze.com/courses/creative-applications-of-deep-learning-with-tensorflow-iv), which was extremely helpful in helping me learn about modern AI. Some of the broad framework came as pre-coded set-up and explanations for the last part of the course by [Parag Mital](https://www.linkedin.com/in/pkmital), but this usage of his code is completely novel and took a lot of engineering, stitching together and abstractions.
In this Jupyter Notebook I do the following things:
1. Import all the necessary dependencies (as well as some that I just used during development but not in final version)
2. Use a GAN approach to generate synethic images. 
    + More specifically, [this recently extremely popular unsupervised technique](http://blog.aylien.com/introduction-generative-adversarial-networks-code-tensorflow/) can learn the higher representations of what constitutes a human face (along with many attributes in the latent space) on the [Celeb Dataset](mmlab.ie.cuhk.edu.hk/projects/CelebA.html) by competing another network to fool each other (explained later)
    + Alternatively, one can think of this approach as using an auto-encoder-style gene generative model that tries to generate new examples based on a seeding factor.
3. This seeding factor or 'latent feature space' invariably encode some aspects of the generative models and once understood, can be used to predictiably manipulate the nature of generated images--e.g. baldness, gender or smile. 
4. We can therefore generate an almost infinite supply of new examples and because we know how we manipulate the latent space, we can know their labels. In this example, we created 40,000 of Men and Women faces that can now be used for further training
5. Then we train the next layer classifier on the synthetic data for a binary classification of men or women faces.  Instead of training a new classifier from scratch, however, we use a `transfer learning` approach using Oxford's `Visual Geometry Group` or `vgg16` pre-trained network to get higher accuracy without having to training for days on a massive cluster.
6. We use the different `vgg16` Celebrity face predictions (`2623` to be exact) and train a simple fully connected two-layer neural network on the synthetic examples with the labels. (This is in stead of the typical transfer learning approach that cuts off the last layer and trains on those. Here we simply split that into 2 steps)
7. Use the 100 hand-labelled (by me) examples to evalute the accuracy of the new classifier.

### Motivation
This is really exciting because it allow us to train classifier with having virtually no labelled data as long as we have lots of unlabelled data, [which is a tremendously promising strategy especially for smaller companies with smaller datasets](http://jakublangr.com/ai-2016-review.html).


### Brief definition of terms:
**Semi-supervised learning**: is basically using unlabelled data in addition labelled data during the traing process

**Generative Adverserial Netwokrs**: explained in detail below

The code was done in `Tensorflow 1.0.0`.

```
# First check the Python version
import sys
if sys.version_info < (3,4):
    print('You are running an older version of Python!\n\n',
          'You should consider updating to Python 3.4.0 or',
          'higher as the libraries built for this course',
          'have only been tested in Python 3.4 and higher.\n')
    print('Try installing the Python 3.5 version of anaconda'
          'and then restart `jupyter notebook`:\n',
          'https://www.continuum.io/downloads\n\n')

# Now get necessary libraries
try:
    import os
    import pandas as pd
    import pickle
    import tflearn
    import pickle
    from joblib import Parallel, delayed
    import random
    import multiprocessing
    import numpy as np
    import matplotlib.pyplot as plt
    from skimage.transform import resize
    from skimage import data
    from scipy.misc import imresize
    from scipy.ndimage.filters import gaussian_filter
    import IPython.display as ipyd
    import tensorflow as tf
    from libs import utils, datasets, dataset_utils, nb_utils
except ImportError as e:
    print(e)
    print("Make sure you have started notebook in the same directory",
          "as the provided zip file which includes the 'libs' folder",
          "and the file 'utils.py' inside of it.  You will NOT be able",
          "to complete this assignment unless you restart jupyter",
          "notebook inside the directory created by extracting",
          "the zip file or cloning the github repo.")
    print(e)

# We'll tell matplotlib to inline any drawn figures like so:
%matplotlib inline
plt.style.use('ggplot')

```

<a name="part-1---generative-adversarial-networks-gan--deep-convolutional-gan-dcgan"></a>
# Generative Adversarial Networks (GAN) / Deep Convolutional GAN (DCGAN)

<a name="introduction"></a>
## Introduction

Recall that a Generative Adversarial Network is two networks, a generator and a discriminator.  The "generator" takes a feature vector and decodes this feature vector to become an image. The discriminator is exactly like the encoder of the Autoencoder, except it can only have 1 value in the final layer.  We use a sigmoid to squash this value between 0 and 1, and then interpret the meaning of it as: 1, the image you gave me was real, or 0, the image you gave me was generated by the generator, it's a FAKE! So the discriminator is like an encoder which takes an image and then perfoms lie detection.  Are you feeding me lies?  Or is the image real?  

Consider the AutoEncoders for instance.  The loss function operated partly on the input space.  It said, per pixel, what is the difference between my reconstruction and the input image?  The l2-loss per pixel.  Recall at that time we suggested that this wasn't the best idea because per-pixel differences aren't representative of our own perception of the image.  One way to consider this is if we had the same image, and translated it by a few pixels.  We would not be able to tell the difference, but the per-pixel difference between the two images could be enormously high.

The GAN does not use per-pixel difference.  Instead, it trains a distance function: the discriminator.  The discriminator takes in two images, the real image and the generated one, and learns what a similar image should look like!  That is really the amazing part of this network and has opened up some very exciting potential future directions for unsupervised learning.  Another network that also learns a distance function is known as the siamese network.  We didn't get into this network in this course, but it is commonly used in facial verification, or asserting whether two faces are the same or not.

The GAN network is notoriously a huge pain to train!  For that reason, we won't actually be training it.  Instead, we'll discuss an extension to this basic network called the VAEGAN (Variational Auto Encoder GAN). For now, let's stick with creating the GAN.

Let's first create the two networks: the discriminator and the generator.  We'll first begin by building a general purpose encoder which we'll use for our discriminator.  What we want is for the input placeholder to be encoded using a list of dimensions for each of our encoder's layers.  In the case of a convolutional network, our list of dimensions should correspond to the number of output filters.  We also need to specify the kernel heights and widths for each layer's convolutional network.

We'll first need a placeholder.  This will be the "real" image input to the discriminator and the discrimintator will encode this image into a single value, 0 or 1, saying, yes this is real, or no, this is not real.

This description was kindly provided by Parag under [MIT License](http://jakublangr.com/ai-2016-review.html).

```
net = CV.get_celeb_vaegan_model()

```

We'll load the graph_def contained inside this dictionary.  It follows the same idea as the `inception`, `vgg16`, and `i2v` pretrained networks.  It is a dictionary with the key `graph_def` defined, with the graph's pretrained network.  It also includes `labels` and a `preprocess` key.  We'll have to do one additional thing which is to turn off the random sampling from variational layer.  This isn't really necessary but will ensure we get the same results each time we use the network.  We'll use the `input_map` argument to do this.  Don't worry if this doesn't make any sense, as we didn't cover the variational layer in any depth.  Just know that this is removing a random process from the network so that it is completely deterministic.  If we hadn't done this, we'd get slightly different results each time we used the network (which may even be desirable for your purposes).


Now let's get the relevant parts of the network: `X`, the input image to the network, `Z`, the input image's encoding, and `G`, the decoded image.  In many ways, this is just like the Autoencoders we learned about above, except instead of `Y` being the output, we have `G` from our generator!  And the way we train it is very different: we use an adversarial process between the generator and discriminator, and use the discriminator's own distance measure to help train the network, rather than pixel-to-pixel differences.

```
X = g.get_tensor_by_name('net/x:0')
Z = g.get_tensor_by_name('net/encoder/variational/z:0')
G = g.get_tensor_by_name('net/generator/x_tilde:0')
```

Let's get some data to play with:

```
files = sorted(datasets.CELEB())
img_i = 20
img = plt.imread(files[img_i])
plt.imshow(img)

```

Exploring the Celeb Net Attributes¶
Let's now try and explore the attributes of our dataset. We didn't train the network with any supervised labels, but the Celeb Net dataset has 40 attributes for each of its 200k images. These are already parsed and stored for you in the net dictionary:

Find the Latent Encoding for an Attribute
The Celeb Dataset includes attributes for each of its 200k+ images. This allows us to feed into the encoder some images that we know have a specific attribute, e.g. "smiling". We store what their encoding is and retain this distribution of encoded values. We can then look at any other image and see how it is encoded, and slightly change the encoding by adding the encoded of our smiling images to it! The result should be our image but with more smiling. That is just insane and we're going to see how to do it. First lets inspect our latent space:
Latent Feature Arithmetic
Let's now try to write a general function for performing everything we've just done so that we can do this with many different features. We'll then try to combine them and synthesize people with the features we want them to have...


```
def get_features_for(label='Bald', has_label=True, n_imgs=50):
    # Helper function to obtain labels and then preprocessing and returning
    # a vector for the seeding function for GAN
    # basically figures out the embedding for a particular attribute
    label_i = net['labels'].index(label)
    label_idxs = np.where(net['attributes'][:, label_i] == has_label)[0]
    label_idxs = np.random.permutation(label_idxs)[:n_imgs]
    imgs = [plt.imread(files[img_i])[..., :3]
            for img_i in label_idxs]
    preprocessed = np.array([CV.preprocess(img_i) for img_i in imgs])
    zs = sess.run(Z, feed_dict={X: preprocessed})
    return np.mean(zs, 0)

```


Now we use the code to create an interpolation between "Male" and "Not Male" (Female) images. Because we are only using the two endpoints, we get two images: a 100% Man and 100% Woman (please note that we can also get anything in between by doing a weighed average of the two seeding vectors).


```
def gan_generate_data(num_iter=20000,imgs=15):
    # generates 2*(number of iter) images 
    # adding random number of pictures for each synthesis (to increase variation)
    # returns list of [Male, Female] * num_iter images
    generated_images = []
    
    for i in range(num_iter):

        n_imgs = random.choice(range(imgs-10, imgs+10))

        z1 = get_features_for('Male', True, n_imgs=n_imgs)
        z2 = get_features_for('Male', False, n_imgs=n_imgs)

        notmale_vector = z2 - z1
        amt = np.linspace(0, 1, 2)
        zs = np.array([z1 + notmale_vector*amt_i for amt_i in amt])
        g = sess.run(G, feed_dict={Z: zs})
        
        generated_images.append(g[0])
        generated_images.append(g[1])
        
        if i%1000==0:
            print('Iteration number : {}'.format(i))
        
    return generated_images

generated_data = gan_generate_data()
    
```

Okay good, we have the data to play around with and it's saved in a pickle file so we don't have to re-create it. Now, let's just add one hot encoded labels (we have done this in predictable manner -- i.e. male (0) is always first). We can just sense-check it and get the shape of the overall sample.

```
labels = [0,1] * 20000
generated_data = np.array(generated_data)
generated_data.shape
```

<a name="extensions"></a>
## Extensions
Now let's get to the transfer learning part. First we have to get out network, `vgg16`.

```
from libs import vgg16, inception, i2v

net = vgg16.get_vgg_face_model()

```
## Transfer Learning
Here we get the `vgg16` network, which we have loaded up earlier and use it to generate the predictions for one of its own pre-trained classes. However, since we want to predict a different task, we then use the `transferred_predictions` function to get the predictions for the 2623 different classes and then use that as an input to the next classifier to train it on recognizing gender. 


In order to do this effectively we must first do some image processing, which we do in `transferred_df`.

```

def transferred_predictions(img):
    # gets an image (`np.array`) as an input outputs net's final layer predictions 
    results = []
    
    # Grab the tensor defining the input to the network
    x = g.get_tensor_by_name(names[0] + ":0")

    # And grab the tensor defining the softmax layer of the network
    softmax = g.get_tensor_by_name(names[-2] + ":0")
    
    with tf.Session(graph=g) as sess, g.device('/cpu:0'):
        # Remember from the lecture that we have to set the dropout
        # "keep probability" to 1.0.
        res = softmax.eval(feed_dict={x: img } ) # , Not using droput here
                    # 'net/dropout_1/random_uniform:0': [[1.0] * 4096],
                    # 'net/dropout/random_uniform:0': [[1.0] * 4096]})
        test_array = res.argsort()[-5:][::-1].flatten()
        results = ([(res.flatten()[int(idx)], 
                net['labels'][int(idx)])
               for idx in test_array ])

        result = pd.DataFrame(results, columns=['score','label']) # .sort(columns='score')
        
        results.append(result.score)
    
    return results

def transferred_df(generated_data):
    # does the preprocessing of the `list` of generated_data and outputs `list` of predictions
    results = []
    
    for i in range(len(generated_data)):
        img = imresize(generated_data[i], size=(224,224,3))
        img = net['preprocess'](img)[np.newaxis]
        result = transferred_predictions(img)
        results.append(result)
        
        if i%1000==0:
            print("Current image id {}".format(i))
        
    return results


def parallel_transfer_eval(generated_data):
    # returns parallely executed `transferred_df` using first split (fs), second (ss) and third (ts) as divisors
    pool = multiprocessing.Pool(4)
    fs = int(len(generated_data)/4)
    ss = int(2*len(generated_data)/4)
    ts = int(3*len(generated_data)/4)
    target = generated_data[:fs], generated_data[fs:ss], generated_data[ss:ts],generated_data[ts:]
    results = pool.map(transferred_df, zip(target))
    # results = Parallel(n_jobs=4)(delayed(transferred_df)(img) for img in generated_data)

    return results

```
## Leveraging transfer learning
Now we use the predictions made by `vgg16` in a typical [Transfer Learning](http://cs231n.github.io/transfer-learning/) paradigm. Here we just take the last layer of predictions, reshape the features and feed it to a next layer classifier (sometimes also done by removing the last (few) Fully Connected Layers) and putting training the whole network. Here we just create a new one just on the last layer. The practice supports both approaches. 

```
from sklearn.cross_validation import train_test_split

# train-test for proper evaluation
train_X, test_X, train_y, test_y = train_test_split(X, y )

tflearn.init_graph(num_cores=8, gpu_memory_fraction=0.5)

# set up the network
net = tflearn.input_data(shape=[None, 2623])
net = tflearn.fully_connected(net, 2, activation='softmax')
net = tflearn.regression(net, optimizer='adam', loss='categorical_crossentropy')

# train
model = tflearn.DNN(net)
model.fit(generated_data, labels, validation_set=train_X)


from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import LabelEncoder

# reshape labels so that they match what the network expects
labels = ['Male', 'Female'] * 10000
encoder = LabelEncoder()
encoder.fit(labels)
labels = encoder.transform(labels)
labels = np_utils.to_categorical(labels)
labels.shape

test_imgs = np.array([CV.preprocess(plt.imread(file)) for file in files[:100]])
test_imgs.shape

```

And we're done with this bit as we have scores for both generated and hand-labelled images (test)! This only is the first step, however, in our journey, as now we have to transfer the `vgg16` generated scores onto the new classifier (the last bit in transfer learning, which is typically simplified by cutting off the last layer and just re-running the network with a new final layer, but here done explicitly for training purposes.)

## Training and evaluating a new classifier 
For simplicity, we will just use the `tflearn` classifier so that we have an easier job using transfer learning given the complexity of all the previous work:
1. we train (based on the synthetic data and the therefore completely predictable labels)
2. we evalute on the handlablled examples (by me) 

```
from __future__ import absolute_import
from __future__ import division
from __future__ import print_function


labels = [0,1] * 10000

feature_columns = [tf.contrib.layers.real_valued_column("", dimension=2623)]


classifier = tf.contrib.learn.DNNClassifier(feature_columns=feature_columns,
                                            hidden_units=[2623,512],
                                            gradient_clip_norm=.01,
                                            optimizer=tf.train.AdamOptimizer(learning_rate=0.1),
                                            n_classes=2)
                                            # model_dir='./model')

# Fit model.
classifier.fit(x=array,
               y=labels,
               batch_size=256,
               steps=10000)


# Evaluate accuracy.
test_labels = np.array([0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1,
       0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0,
       0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1,
       1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1,
       0, 0, 0, 0, 0, 0, 0, 0])

# test_array = np.array([ [res[0] for res in result] for result in test_array ])

accuracy_score = classifier.evaluate(x=test_array,
                                     y=test_labels)["accuracy"]
print('Accuracy: {0:f}'.format(accuracy_score))
```


# General discussion

The results were not that stellar, however, I think this is a fascinating research area and quite likely it is going to be one of the biggest areas for the future of AI: but we still got better than random (consistently) and might get better if I spent more time on this.

Moreover this code can probably fine-tuned and re-used with only minor modifications in many industry applications:
(a) 3D object generation
(b) [Pix2Pix applications](https://www.youtube.com/watch?v=u7kQ5lNfUfg) that manages to create new images based on style or just a generation of maps from satelite images. The possibilities here are *literally endless*.
(c) Remastering Old Movies.
Just to name a few.

Thank you for reading and if any of this was of interest, explore this website for more!

