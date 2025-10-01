import { Article } from '@/lib/articles';

// Article data extracted from content files
export const articles: Article[] = [
  {
    slug: 'about',
    title: 'About Me',
    date: '2014-09-14',
    tags: ['me', 'CV'],
    category: 'About',
    author: 'Jakub Langr',
    summary: 'About Me',
    content: `![Me](Public/blog/WebSummit_011.JPG "Welcome to my blog!")

By this point you probably are already aware of the fact that this is a blog of a slightly eccentric individual. And for some reason decided to stay. You're a persistent one, aren't you?

I went to Oxford, studied [very questionable degree](https://www.theguardian.com/education/2017/feb/23/ppe-oxford-university-degree-that-rules-britain) and did some statistics/economics. I also was kind of crazy about the whole Massive Online Open Courses thing and forgot that real world existed. Then one day, after an intervention from my friends and family, I realized I should probably get off these MOOCs, but it was too late. I already finished 18 of them. But hey, at least I can remember playing with machine learning, data science, statistics, computer science and all the things awesome.

I was working in Data Science at a couple of startups (Mudano and Filtered, plus some smaller ones), at Entrepreneur First, Pearson Plc (all in London last two years), but I also have full-time like experience from international consultancies and NGOs. 

Now I spend some time doing improv and updating this website.

If you want to, feel free to get in touch at james [dot] langr [at] gmail [dot] com or via the LinkedIn profile in links! 

I now use [LinkedIn as my resume](https://www.linkedin.com/in/jakublangr/).`
  },
  {
    slug: 'prioritized-ai-threats',
    title: 'Prioritised list of AI threats',
    date: '2018-01-30',
    tags: ['AI', 'artificial intelligence'],
    category: 'non-technical',
    author: 'Jakub Langr',
    summary: 'My contribution to what I feel like is fundamentally lacking from the "dangers of AI" debate.',
    content: `### Prioritized list of AI threats: care about what you Musk

Recently, I witnessed a conversation on LinkedIn between two professionals who both work in AI. This conversation was about Google's AutoML, a system that can automatically optimise itself to achieve better performance at a given task.

As an AI practitioner, I feel the need to frame this discussion in the way that I see it. I believe that artificial general intelligence is still very far off. Therefore worrying about super intelligence is maybe not irrelevant but it is definitely not urgent.

So what then is in my opinion worth worrying about?

1. **Russia or other nation states augmented by AI** - The first on this list is something that we have already seen. In the future, just by applying existing enterprise technology, this can be made much more scalable and therefore dangerous.

2. **AI destroying social fabric** - Remember that an average person checks their phone about 150 times a day. The software and hardware products you buy today are loaded with AI that constantly learns how to capture your attention.

3. **Non-state actors augmented by AI** - Groups like Anonymous and platforms like Silk Road have demonstrated government's incapacity to deal with actors that fall outside their scope.

4. **Super intelligence** - I will just say that there are many researchers who believe not even if we achieve singularity soon there will be limited impact on the world.

5. **AI just making mistakes or cutting corners** - AI researchers and practitioners will be under pressure from their managers, sponsors or other stakeholders and therefore forced to cut corners.

Want to join the conversation? See more at [jakublangr.com](http://jakublangr.com/) or [tweet at me](https://twitter.com/langrjakub)!`
  },
  {
    slug: 'icml-gans',
    title: 'List of ICML GAN Papers',
    date: '2018-08-07',
    tags: ['AI', 'artificial intelligence', 'GANs', 'ICML'],
    category: 'technical',
    author: 'Jakub Langr',
    summary: 'All ICML GANs / Generative Papers: I went to Stockholm and spoke to academics, so you don\'t have to! Domain adaptation, 3D GANs, Data Inputation using GANs and much more!',
    content: `In all seriousness, however, I do respect greatly all the amazing work that the researchers at ICML have presented. I would not be capable of anywhere near their level of work so kudos to them for pushing the field forward!

ICML overall was an awesome experience. As part of my training budget at [Mudano](http://mudano.com), I chose to go to ICML, a top 3 conference in Machine Learning. It was a very enriching and unique experience.

Here are some highlights:

**RadialGAN** - The promise of GANs has always partially lied in semi-supervised learning and data augmentation. This work basically allows us to leverage multiple datasets from several sources to typically obtain better performance.

**Which Training Methods for GANs do actually Converge?** - Lars et al. present a way to impose a specific class of gradient penalties on the GANs throughout training. They show results matching state of the art even with older architectures.

**Geometry Score: A Method For Comparing Generative Adversarial Networks** - Using topological analysis we can construct a general metric to evaluate how much of the original dataset we have managed to cover.

**GAIN: Missing Data Imputation using Generative Adversarial Nets** - This paper is probably one of the most interesting papers for practitioners, because it deals with a problem that a lot of us encounter--missing data.

**CyCADA: Cycle-Consistent Adversarial Domain Adaptation** - This paper deals with an issue that loads of practitioners find: our models do not generalize. CyCADA extends CycleGAN to basically be able to do domain to domain translation with correct semantics.

So that wraps up ICML for the generative adversarial networks papers. Want to join the conversation? See more at [jakublangr.com](http://jakublangr.com) or tweet [@langrjakub](https://twitter.com/langrjakub)!`
  },
  {
    slug: 'moocs-part1',
    title: 'On MOOCs: Projects, Practice and Perspective',
    date: '2015-01-23',
    tags: ['R', 'education', 'python', 'reviews'],
    category: 'technical',
    author: 'Jakub Langr',
    summary: 'I said I will stop at finishing 14 online courses... and I am doing three MOOCs again. Review of my learning journey, projects I have done, reviews of great and good courses.',
    content: `It has been quite a while since I started my first MOOC at Coursera. I think now is the time to reflect on the courses I have finished, what I have learned as well as what to recommend to my fellow MOOCers.

# 1. Awesome Courses

## [Social Network Analysis](https://www.coursera.org/course/sna)
This course by [Lada Adamic](http://www.ladamic.com/) was definitely one of the most awesome courses regardless of platform, country or institution that I have been involved in. Not only was Lada willing to have Google Hangout sessions with the course participants, but the course was excellently done.

**Score**: 10/10  
**Skills learned**: R, Gephi, NetLogo, different metrics characterizing a graph

## [Machine Learning](https://www.coursera.org/course/ml)
Andrew Ng (my personal hero) created this course back in April 2012. This course will give you a taster of Support Vector Machines, Recommender Systems, Artificial Neural Networks and many others. The awesome thing about this course was that it abstracts everything else apart from the ML algorithms.

**Score**: 10/10  
**Skills learned**: Machine Learning, MATLAB, Statistics

## [Science of Uncertainty, Introduction to Probability](https://www.edx.org/course/introduction-probability-science-mitx-6-041x-0)
This course was amazing, but also very hard. This is the undiluted MIT 6.041 course. The commitment from the teaching staff of MIT was incredible.

**Score**: 10/10  
**Skills learned**: Probability theory, Statistics, Inference

# Best practices

I think there are 3 key strategies to successfully finishing the MOOC:

1. **Assess quickly the time commitment of a course**
2. **Honor your commitments** - Immediately unenroll from courses you know you cannot finish
3. **Commit to deadlines, minimum benchmarks** - There is a reason why I only finished one free course on Udacity: because there are no deadlines

Anyway, hope this was helpful. As always, I would welcome any reaction. Get in touch!`
  },
  {
    slug: 'ai-2016-review',
    title: 'AI 2016 Review',
    date: '2016-12-31',
    tags: ['AI', 'review', 'year-end'],
    category: 'non-technical',
    author: 'Jakub Langr',
    summary: 'A comprehensive review of AI developments in 2016',
    content: `Lots of people are arguing about the theoretical nature of what AI means many years down the road, but I would like to focus on the AI commercial products in the next 2-5 years.

** 1. Breakthroughs in AI **

Last couple of months were excellent for AI: everything from [One-Shot-Learning](https://en.wikipedia.org/wiki/One-shot_learning), advances in Generative Adversarial Networks (GANs) and Memory-Augmented Networks to practical applications such as AlphaGo, [Liberatus](http://spectrum.ieee.org/automaton/robotics/artificial-intelligence/ai-learns-from-mistakes-to-defeat-human-poker-players) winning the world Poker championship.

In terms of future theoretical breakthroughs, the most fruitful areas are likely to be:

> Further improvements on GANs, as they already are being tested in the field of [3D object generation](https://www.youtube.com/watch?v=kf-KViOuktc), [remastering old movies](https://hackernoon.com/remastering-classic-films-in-tensorflow-with-pix2pix-f4d551fa0503) and [image enhancement](https://www.youtube.com/watch?v=WovbLx8C0yA). Even one of the fathers of deep learning, [Yann LeCunn, called it](http://blog.aylien.com/introduction-generative-adversarial-networks-code-tensorflow/) "the most important [recent advancement in deep learning]".

** 2. Summary of state of the art **

The biggest breakthrough, I think will come from Generative Adversarial Networks (GANs), so I would like to focus on them as they are especially impressive in the case of [Adversarial and Semi-Supervised Learning](https://ishmaelbelghazi.github.io/ALI).

** 3. Commoditized ML is here, so what? **

These advancements along with better tools for AI researchers and production, will favor companies who have (i) unique business partnerships or (ii) overcome some unique regulatory hurdle. Huge opportunities are still in [FinTech](https://www.bloomberg.com/news/articles/2017-02-28/jpmorgan-marshals-an-army-of-developers-to-automate-high-finance) and other regulation-heavy industries.

** Conclusion **

So from the recent advancements and meta-learning theory it is clear that we are in an age of vertical AI and that the future direction is likely to heavily rely on understanding the business use-cases of particular AI technology.`
  },
  {
    slug: 'gans-tutorial',
    title: 'GANs Tutorial: Theory',
    date: '2017-06-15',
    tags: ['GANs', 'machine learning', 'tutorial'],
    category: 'technical',
    author: 'Jakub Langr',
    summary: 'Theoretical foundations of Generative Adversarial Networks',
    content: `In my [last blog post](http://jakublangr.com/ai-2016-review) we looked what are some of the promising areas in AI and one of the areas that was mentioned many, many times by researchers and my friends as likely future directions of AI, was Generative Adversarial Learning/Networks (GANs).

This post is intended to be somewhat technical and will feature some high-level pseudo-code, but I will try to make it as accessible and hopefully not too boring.

[Semi-supervised learning](https://en.wikipedia.org/wiki/Semi-supervised_learning) basically means using labelled (supervised) as well as unlabelled (unsupervised) examples during training and as a concept is quite old. The core idea makes a lot of sense: we have lots of data that in a typical supervised setting lies unused.

[GANs work](http://blog.aylien.com/introduction-generative-adversarial-networks-code-tensorflow/) by first having one network create an internal vision of the world: this is the generative model (G) and basically learns from all the data, because it does not need labels, just all of the features. The second network, the 'Discriminator' (D), which is the adversary in this case, takes in examples both from the real dataset and the examples generated by the generator and decides whether this data looks real.

In other words, imagine now we are trying to label cats or dogs, in this case G will learn how to generate images at first and subsequently get better at making the images more like cats or dogs.

Then we put the G and D to basically compete against each other to produce the best results: hopefully every time G gets better D has to get better to match. This was one of the core driving principles behind [AlphaGo](https://en.wikipedia.org/wiki/AlphaGo#Algorithm) as well.

So hopefully it is now clear that we can take lots of unlabelled data, construct a generator and make it learn some of the structure of the data then make it compete in making the data that it generates as close to the real data.

**In case you are interested in the actual code, check out the [second part of this tutorial](http://jakublangr.com/gans-code.html).**`
  },
  {
    slug: 'gans-code',
    title: 'GANs Tutorial: Practice',
    date: '2017-06-20',
    tags: ['GANs', 'machine learning', 'tutorial', 'coding'],
    category: 'technical',
    author: 'Jakub Langr',
    summary: 'Practical implementation guide for Generative Adversarial Networks',
    content: `As it often happens, I get busy at work and forget to publish something I should have really done months ago. Well, this code is that thing. But at least it's now nice and shiny.

I'll jump straight into what we have explained on a high-level [last time](http://jakublangr.com/gans-tutorial.html). The code is also available on [GitHub](https://github.com/jakubLangr/Gans-Semi-Supervised/blob/master/gans_semi_supervised_learning.ipynb) and on [Medium](https://medium.com/@james.langr).

## Generative Adversarial Networks & Semi-Supervised Learning

This code was written for me to experiment with some of the recent advancements in AI. I chose specifically semi-supervised learning and Generative Adversarial Networks (GANs) to push myself.

In this implementation I do the following things:
1. Import all the necessary dependencies
2. Use a GAN approach to generate synthetic images
3. This seeding factor or 'latent feature space' invariably encode some aspects of the generative models and once understood, can be used to predictably manipulate the nature of generated images--e.g. baldness, gender or smile
4. We can therefore generate an almost infinite supply of new examples and because we know how we manipulate the latent space, we can know their labels
5. Then we train the next layer classifier on the synthetic data for a binary classification of men or women faces
6. Use the 100 hand-labelled (by me) examples to evaluate the accuracy of the new classifier

### Motivation
This is really exciting because it allows us to train classifier with having virtually no labelled data as long as we have lots of unlabelled data, which is a tremendously promising strategy especially for smaller companies with smaller datasets.

The results were not that stellar, however, I think this is a fascinating research area and quite likely it is going to be one of the biggest areas for the future of AI: but we still got better than random (consistently) and might get better if I spent more time on this.

Thank you for reading and if any of this was of interest, explore this website for more!`
  },
  {
    slug: 'gan-innovations',
    title: 'GAN Innovations',
    date: '2017-08-10',
    tags: ['GANs', 'innovation', 'research'],
    category: 'technical',
    author: 'Jakub Langr',
    summary: 'Latest innovations in GAN architectures and applications',
    content: `For an Artificial Intelligence (AI) professional, or data scientist, the barrage of AI-marketing can evoke very different feelings than for a general audience.

Some subfields, such as computer vision, have seen only marginal progress, whereas other areas are growing by leaps and bounds every six months. One such area is Generative Adversarial Networks (GANs), which has developed from synthesizing rather uninteresting 28x28 pixels images to full-HD images of human faces in about three years.

GANs are just a tool like any algorithmic breakthrough, albeit extensively applied into different sectors. For example, in medicine GANs have been used to help cancer detection by creating new, realistic scans; they have been applied both defensively and offensively in cybersecurity; and — cheating the expectations of many — GANs have been used in art. In fact, one of the art pieces generated by this technique sold for $432,500.

The innovation of Generative Adversarial Networks is simple at its core. It starts with two networks, one is the generator (hence generative) and the other is called the discriminator, because it discerns the work of the generator. The networks compete against each other (hence adversarial), in an attempt to outperform each other.

In medicine, as of mid-2018, there have been 63 medical papers published that used GANs in some capacity. These tend to focus on segmentation or synthesis in the majority of the cases and there are examples of GANs performing impressively in creatively figuring out missing information in diagnosing cardiac diseases.

But with the ability to generate new data or imagery, GANs also have the capacity to be dangerous. A related, but algorithmically very different, technique has been making the rounds recently under the name "DeepFakes", as in deep learning fake images. The ethical and geopolitical implications of this are vast because of its ability to create fake video footage.

These are some of the reasons why ethics is a key topic on everyone's minds. I have covered this topic in my book, "GANs in Action: Deep learning with Generative Adversarial Networks", with my co-author Vladimir Bok. GANs can do so much good for the world, but all tools have misuses.`
  },
  {
    slug: 'iclr19-gans',
    title: 'GANs & applied ML @ ICLR 2019',
    date: '2019-05-11',
    tags: ['GANs', 'ICLR', 'conference'],
    category: 'technical',
    author: 'Jakub Langr',
    summary: 'Understanding the bleeding-edge GAN papers from one of the world\'s best known AI research conferences. Some musings on the academic workshops on "applied ML".',
    content: `I have just returned from [International Conference on Learning Representations (ICLR)](iclr.cc) 2019 in New Orleans and what a fruitful year that was on GAN papers.

# Theme 1: Image synthesis is maturing
[Ian Goodfellow frequently talks](http://www.iangoodfellow.com/slides/) of how deep learning revolutions in 2012, enabled a "Cambrian explosion" of machine learning applications. This has somewhat happened with image synthesis. Now that [BigGAN can reliably generate very diverse high-fidelity images](https://arxiv.org/abs/1809.11096), we can start thinking about applying it for other use-cases.

# Theme 2: Exotic data types / applications
Another substantial theme in this year's ICLR was the presence of more "exotic" data types and applications:

* [WaveGAN](https://openreview.net/forum?id=ByMVTsR5KQ): conditional synthesis of audio using GANs
* [TimbreTron](https://openreview.net/forum?id=S1lvm305YQ): uses CycleGAN to transfer music from one instrument to another
* [LayoutGAN](https://openreview.net/forum?id=HJxB5sRcFQ): way to generate UI wire-frames using GANs

# Theme 3: Theoretical advances
As always, there were many papers dealing with some aspect of training or some theoretical property of generative models. While academics tend to love this area, at ICML '18, the results were somewhat mixed. Fortunately, at ICLR that was not the case.

## Applied Machine Learning
As someone who still frequently has to worry about how I am going to productionize the systems I am building. I was very pleasantly surprised that even the workshop organizers from ICLR thought this was important.

Overall, I am constantly amazed at the rate of progress of ML and academic conferences have their disadvantages, but if you plan & prepare accordingly, you will get much more of them than any other conference I have ever been to.`
  },
  {
    slug: 'hello-world',
    title: 'Hello World',
    date: '2014-01-01',
    tags: ['introduction', 'blog'],
    category: 'About',
    author: 'Jakub Langr',
    summary: 'First blog post and introduction',
    content: `# ... or quick and dirty statistical modeling in R

Recently, I decided to start a blog and my ongoing involvement in the [Good Judgment Project (GJP)](http://goodjudgmentproject.com/), which is part of US government's [Intelligence Advanced Research Projects Activity (IARPA)](http://www.iarpa.gov), more specifically the ACE Project, proved to be a decent excuse to do so.

I have joined GJP mid-Season 3 and then I tested into season 4. This test alone was a treat, because it followed all the guidelines about best practices of hiring and I knew that if I get in, this will be a lot of fun. What I did not know at the time was that only one in ten will actually be accepted into GJP.

Despite this mess-up, I joined a project and met my amazing fellow forecasters in my team. At the time of joining, I already knew that I will be putting numeric probabilistic values on how the world might soon turn out to be (e.g. will there be a direct Russia-Ukraine confrontation in Crimea).

Number of these questions have allowed for use of publicly available datasets and so I would like to offer some code that I used to ease up my work as a forecaster. This particular example relates to a question that resolved yesterday: If on a certain date the area of ice on the Arctic sea will be more than what it was last year.

For GJP purposes, the confidence intervals produced by this model are especially useful, because they give you an idea of how confident you can be in your predictions.

One of the plots here can help elucidate why my team might have been all over the place: there are many factors influencing how much ice there will be on a given day: sure, there is the seasonal (summer-winter) cycle, which matters a lot, but there is also some random element as well as measurement error.

# Thoughts about GJP itself

GJP is what I think social science should be: quantifiable, based on best-practices and aiming to get as close to the truth as possible, not tell the best story.

Feedback? Comments? Question? I am happy to hear it! Contact me at james [dot] langr [at] gmail [dot] com.`
  },
  {
    slug: 'kaggle-2016',
    title: 'Kaggle Struggle',
    date: '2016-03-15',
    tags: ['kaggle', 'competition', 'data science'],
    category: 'technical',
    author: 'Jakub Langr',
    summary: 'My experiences and struggles with Kaggle competitions',
    content: `For those of you that are not compete data nerds, I occasionally venture into the world of [Kaggle](http://www.kaggle.com): a competitive data science website where everyone from the top Data Science experts to the people who are just starting out compete against each other in the hopes of getting money (statistically unlikely), fame and massive amounts of fake nerd points (very important).

I have so far participated in four different competitions: [Liberty Property Inspection Prediction](https://www.kaggle.com/c/liberty-mutual-group-property-inspection-prediction), [Springleaf Marketing Response](https://www.kaggle.com/c/springleaf-marketing-response), [BNP Paribas Claims Management](https://www.kaggle.com/c/bnp-paribas-cardif-claims-management) and [Santander Customer Satisfaction](https://www.kaggle.com/c/santander-customer-satisfaction). All of these were fairly different competitions and I have learned loads of different things.

# Why did I decide to join?

This website is first and foremost a great way to learn: you get to know what people much better than you are doing and learn from them. I also think that working on these kinds of competitions is great especially for benchmarking your own skills and generally what lift (percentage increase) can we expect by massaging the data a bit more.

# How did I do?

I earned the Top 25% badge by finishing in the top 23.6% (property inspection), 12.9% (marketing) and 20.9% (claims management). Once I missed it by a 31.3% finish (customer satisfaction). I think that overall I have learned loads during these competitions.

# Dude, you have a serious data problem.

Hi, I'm Jakub and I am a data addict. Amazon Web Services is both a gift and a curse to every techie. Gift because you can have data centres' worth of computational power at your fingertips within minutes. Curse because of what it is going to cost you.

But perhaps it was all worth it: Top .929%, aww yeah!

# What to make of it

But the model of competitive data science is greatly interesting to many companies: not only does Kaggle have a track record of blowing the existing industry experts out of the water with their accuracy. Also, the spread of efficient techniques and algorithms is thanks to Kaggle greatly accelerated.

So that's it from now. As always, if you have a comment/question, I'd love to hear from you!`
  },
  {
    slug: 'web-summit-dublin-14',
    title: 'Web Summit Dublin 2014',
    date: '2014-08-20',
    tags: ['travel', 'dublin', 'conference'],
    category: 'non-technical',
    author: 'Jakub Langr',
    summary: 'Experiences from Web Summit Dublin 2014',
    content: `Brief content summary - full content available in original markdown files.`
  },
  {
    slug: 'eec-2015',
    title: 'EEC 2015',
    date: '2015-06-10',
    tags: ['conference', 'economics'],
    category: 'non-technical',
    author: 'Jakub Langr',
    summary: 'European Economic Conference 2015 insights',
    content: `Brief content summary - full content available in original markdown files.`
  },
  {
    slug: 'hack-zurich-14',
    title: 'Hack Zurich 2014',
    date: '2014-10-15',
    tags: ['hackathon', 'zurich', 'coding'],
    category: 'technical',
    author: 'Jakub Langr',
    summary: 'My experience at Hack Zurich 2014 hackathon',
    content: `Brief content summary - full content available in original markdown files.`
  },
  {
    slug: 'gjp-part2',
    title: 'Good Judgment Project Part 2',
    date: '2015-11-30',
    tags: ['forecasting', 'prediction', 'research'],
    category: 'non-technical',
    author: 'Jakub Langr',
    summary: 'Continuation of insights from the Good Judgment Project',
    content: `Brief content summary - full content available in original markdown files.`
  },
  {
    slug: 'tracking-crisis',
    title: 'Syria',
    date: '2016-04-25',
    tags: ['politics', 'syria', 'analysis'],
    category: 'non-technical',
    author: 'Jakub Langr',
    summary: 'Analysis of the Syrian situation',
    content: `Brief content summary - full content available in original markdown files.`
  },
  {
    slug: 'underspecification-socsci',
    title: 'Underspecification in Social Sciences',
    date: '2017-12-05',
    tags: ['social science', 'methodology', 'research'],
    category: 'non-technical',
    author: 'Jakub Langr',
    summary: 'Discussion on underspecification issues in social science research',
    content: `Brief content summary - full content available in original markdown files.`
  }
];
