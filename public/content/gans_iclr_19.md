Title: GANs & applied ML @ ICLR 2019
Date: 2019-05-11 21:00
Tags: AI artificial intelligence  
Category: technical
Slug: iclr19-gans
Author: Jakub Langr
Summary: Understanding the bleeding-edge GAN papers from one of the world's best known AI research conferences. Some musings on the academic workshops on "applied ML".

<div align="center">
<img src="images/ian_talk.jpg" alt="LayoutGAN" align='center'
 style="width: 95%; height: auto " />
</div>



**TL;DR: at the bottom.**

I have just returned from [International Conference on Learning Representations (ICLR)](iclr.cc) 2019 in New Orleans and what a fruitful year that was on GAN papers. In the first section, I discuss the themes featuring papers on image synthesis (BigGAN), audio (WaveGAN), feature selection (KnockoffGAN), 3D, text & tabular and many other! The second part of this article is then focused on more practical ML considerations.

# Fortune favours the prepared
Before going to ICLR, I made a list of all the talks & workshops that had something that I wanted to learn. This meant a very busy Monday—where at one point four interesting workshops were running in parallel (more on the workshops in the "Applied ML" section). It also meant a busy Tuesday where the organizers put 37 GAN papers into the day. This meant starting the poster session early and finishing late. I have kept track of all this using a [spreadsheet](https://docs.google.com/spreadsheets/d/1H6Atx9GRflN94fOt1Eil5UqHMWWReWUksjVqqbKhtmU/edit#gid=0).

 I have included links to all the papers I mention and there are even links to the [livestreamed workshops](https://slideslive.com/iclr) as well as the [plenary session, which also heavily featured GANs](https://www.facebook.com/pg/iclr.cc/videos/?ref=page_internal).

## Generated Adversarial section
Here I want to explore the changes specifically just discussing Generative Adversarial Networks (GANs). As many have said, this is an exciting new technology that—unlike most of other ML—has only been around for less than 5 years. In the spirit of the previous [ICML 2018 article](https://towardsdatascience.com/all-icml-gans-generative-papers-2018-62b4521bf92), I talked to academics so you don't have to, but given the volume of the content, it is no longer possible to go through every paper, so I will just pick some main themes.

<div align="center">
<img src="images/biggan.png" alt="BigGAN" align='center'
 style="width: 95%; height: auto " />
</div>



# Theme 1: Image synthesis is maturing
[Ian Goodfellow frequently talks](http://www.iangoodfellow.com/slides/) of how deep learning revolutions in 2012, enabled a "Cambrian explosion" of machine learning applications. This is because in any technical field the first order of business is to make a technology work reliably and that enables a whole wealth of downstream applications. 

This has somewhat happened with image synthesis. Now that [BigGAN can reliably generate very diverse high-fidelity images](https://arxiv.org/abs/1809.11096), we can start thinking about applying it for other use-cases. One example is using BigGAN as a way to augment the existing training data (i.e. artificially increasing the number of data points by synthesizing new ones). Now even though there was [another paper accepted at ICLR that showed the limitations of this technique](https://openreview.net/forum?id=rJMw747l_4). It seems that in this case of a balanced dataset, the GAN data augmentation has likely limited impact on the downstream task. But the sheer fact that this is a proposal that is seriously studied seems like a good sign and still leaves many data-augmentation avenues unexplored.

Another downstream task that we may care about is image synthesis with fewer labels. In the original BigGAN, we are using all labels in ImageNet to synthesize the 1,000 types of objects. [However in another ICLR paper](https://arxiv.org/pdf/1903.02271.pdf), we can see equally high quality pictures with just 10% of the labels and even better results than BigGAN with just 20% by using self and semi-supervised learning.

Furthermore, ICLR featured [several](https://openreview.net/forum?id=rkxoNnC5FQ) [papers](https://openreview.net/forum?id=ryxwJhC9YX) that had interesting proposals to achieve more granular control over the generated images. So now that giraffe you always wanted in your photos instead of your ex can be just in the right spot.

I am just amazed at how quickly the field is moving that in less than 5 years since the original paper, we have managed to produce 1000 classes of 512x512 images that are realistic enough to be used in downstream applications. In the words of [Károly Zsolnai-Fehér](https://www.youtube.com/channel/UCbfYPyITQ-7l4upoX8nvctg), what a time to be alive!

# Theme 2: Exotic data types / applications.

Another substantial theme in this year's ICLR was the presence of more "exotic" data types and applications. I'll just go through a couple of the more interesting ones. To me, this again seems somewhat indicative of the growing maturity of GANs as a field. 

* [WaveGAN](https://openreview.net/forum?id=ByMVTsR5KQ): is a conditional synthesis of audio using GANs using dilated convolutions and DCGAN-like architecture. 
* [TimbreTron](https://openreview.net/forum?id=S1lvm305YQ): uses CycleGAN to transfer music from one instrument (domain) to music of another (domain) instrument.
* [PateGAN](https://openreview.net/forum?id=S1zk9iRqF7): is a GAN to generate synthetic data with differential privacy guarantees.
* [KnockoffGAN](https://openreview.net/forum?id=ByeZ5jC5YQ): is a way to do robust feature selection with GANs with knockoffs. Overall, this paper would be one of the more convoluted ones.
* [LayoutGAN](https://openreview.net/forum?id=HJxB5sRcFQ): way to generate UI wire-frames using GANs by sensibly composing the different UI elements in a 2D space.
* [CompositionalGAN](https://openreview.net/group?id=ICLR.cc/2019/Workshop/DeepGenStruct): ways to generate realistic looking compositions by matching different 3D objects and composing them to produce new scenes with realistic lighting and occlusion.
* [3D point cloud generation](https://openreview.net/forum?id=SJeXSo09FQ), [Protein backbone generation]() & [Generating labelled graph](https://openreview.net/group?id=ICLR.cc/2019/Workshop/DeepGenStruct): these papers are outside of my area of expertise and papers in this broad area featured at ICML 2018 as well, but it is great to see that the work is continuing.

# Theme 3: Theoretical advances

As always, there were many papers dealing with some aspect of training ([rejection sampling](https://openreview.net/forum?id=S1GkToR5tm), [relativistic GAN](https://openreview.net/forum?id=S1erHoR5t7), [variational discriminator bottleneck](https://openreview.net/forum?id=HyxPx3R9tm)) or some theoretical property of generative models (e.g. [latent space interpolations](https://openreview.net/forum?id=SyMhLo0qKQ) or [invertibility of GANs](https://arxiv.org/pdf/1802.05701.pdf)). 

While academics tend to love this area, at ICML '18, the results were somewhat mixed. I felt that many papers introduced a _huge_ amount of extra complexity to derive some properties that I did not think are hugely interesting or do not expect them to become the de facto standard the same way e.g. Wasserstein GAN or gradient penalties are.

Fortunately, at ICLR that was not the case. All three techniques from above plus [averaging during training](https://openreview.net/forum?id=SJgw_sRqFQ) all look like simple, effective techniques that could easily become the standard pattern for the future state of the art.

## Applied Machine Learning

<div align="center">
<img src="images/adobe_poster.jpg" alt="LayoutGAN" align='center'
 style="width: 95%; height: auto " />
</div>


As someone who still frequently has to worry about how I am going to productionize the systems I am building. I was very pleasantly surprised that even the workshop organizers from ICLR thought this was important. So I was trying to capture all the interesting content from the following workshops:


* [Reproducibility in ML](https://sites.google.com/view/icml-reproducibility-workshop/home): this ended up being a pretty useful workshop in the end. As a side note, there only about 7 people when I was there, so I wonder what that says about the state of our field. Generally, I regard reproducibility to be an incredibly important topic, because reproducibility is really the __level 0__ of understanding how deployed ML systems behave. So all this talk about fairness & bias is almost pointless if we do not get this right.
* [Debugging ML](https://debug-ml-iclr2019.github.io/): This was a pretty useful workshop, but a lot of the presentations sadly either did not release code or were very academic. I will definitely try to investigate [Model Assertions](https://dawn.cs.stanford.edu//2019/03/11/modelassertions/), as the idea makes a lot of sense to me. Overall, debugging again is extremely key for us to ensure that we somewhat understood how the models are building. Everything from adversarial examples to neural nets being able to fit randomly assigned labels are all indicators that we need more tools to understand deep learning.
* [Learning from limited labelled data](https://lld-workshop.github.io/): This is incredibly interesting as little data is a frequent business reality. I was encouraged by the fact that [Christopher Re](https://cs.stanford.edu/people/chrismre/) was involved, however, I do not feel that for me there were any particularly strong takeaways.
* [Generating highly structured data](https://deep-gen-struct.github.io/): Despite Bengio's crowded talk in the beginning, I did not find the oral presentations to be _that_ useful, though I highly recommend checking out the accepted papers.

## Conclusion
Overall, I am constantly amazed at the rate of progress of ML and academic conferences have their disadvantages, but if you plan & prepare accordingly, you will get much more of them than any other conference I have ever been to.

** TL;DR: **

* We generate realistic 512x512 in extreme variety, which leads to further applications.
* GANs seem to be getting more traction in other data types, but the maturity is approx. where images were in 2016.
* Even academics are now thinking more about practical considerations & ML tooling—though they do not always call it that.

Thanks Dr. Daniel Duma and Harpal Singh for their excellent feedback. 
