Title: On MOOCs: Projects, Practice and Perspective
Date: 2015-01-23 21:00
Tags: R, education, python, reviews
Category: technical
Slug: moocs-part1
Author: Jakub Langr
Summary:  I said I will stop at finishing 14 online courses... and I am doing three MOOCs again. Review of my learning journey, projects I have done, reviews of great and good courses, my (brief) take on practices. **UPDATED**.

It has been quite a while since I started my first MOOC at Coursera. I think now is the time to reflect on the courses I have finished, what I have learned as well as what to recommend to my fellow MOOCers. I will try to broadly classify (and score, because if you are anything like me, you occasionally dislike the imprecision of natural language) the courses I have finished and then I will try to give my take on MOOCs in general.

# 1. Awesome Courses

## [Social Network Analysis](https://www.coursera.org/course/sna)
This course by [Lada Adamic](http://www.ladamic.com/) was definitely one of the most awesome courses regardless of platform, country or institution that I have been involved in. Not only was Lada willing to have Google Hangout sessions with the course participants, but the course was excellently done: we have worked with [Gephi](http://gephi.github.io/), programmed in [NetLogo](https://ccl.northwestern.edu/netlogo/) and used the [R SNA package](http://cran.r-project.org/web/packages/sna/sna.pdf)(or at least I did in my projects). The course was a great balance of (social) network analysis, problem sets and optional programming assignments. You can view mine [here](Public/US_Contributions.pdf) (though bear in mind, I have done almost 2 years ago so it is not something I am particularly proud of). 

__Score__: 10/10

__Skills learned:__ R, Gephi, NetLogo, different metrics characterizing a graph

## [Data Analysis](https://www.coursera.org/course/dataanalysis) and [Computing for Data Analysis](https://www.coursera.org/course/compdata)
Long before Coursera introduced the 'Data Science specialization' (that in my opinion seems way too superficial), Coursera was offering these two amazing Courses that together were actually undiluted first year graduate bioinformatics courses for students at Johns Hopkins University. The problem with a lot of the later MOOCs is that they were starting to get too simple to actually teach me anything and so the pool of people who was actually taking these courses was a lot worse. I think the latter is also an issue, because half of the learning experience is the community. Like the people putting interesting thoughts on the forums or the moderators (or in this case, the community itself) trying to prevent cheating (mostly unintentional, I hope, why else would you do a MOOC?) and so on. I have been taking this courses with statistics PhDs and other people with amazing insights and experience and I think that is probably why the learning experience was so amazing and all the four projects including [the final one](Public/blog/Cellphone_data_Prediction.pdf) were something that gave me a solid grounding for the Social Network Analysis MOOC to use R as well as for my [internship in the summer of 2013](http://goo.gl/sEUFMa).

__Score__: 9/10

__Skills learned:__ Through exploration of R basics, statistics, basic machine learning, data preparation

## [Science of Uncertainty, Introduction to Probability](https://www.edx.org/course/introduction-probability-science-mitx-6-041x-0#.VMPxF4ptN5Q)
This course was amazing, but also __very__ hard. This is the undiluted MIT 6.041 course. The commitment from the teaching staff of MIT (including the professor [John Tsitsiklis](http://www.mit.edu/~jnt/home.html)) was incredible. Generally, I got a great answer for any of my questions in a shorter period of time then most of my professors at my home institution. The treatment was very rigorous that keeping up with the Oxford workload while doing this 12 week course proved quite difficult. But it was so much more rewarding to see the certificate of completion afterwards.

__Score__: 10/10

__Skills learned:__ Probability theory, Statistics, Inference 

## [Machine Learning](https://www.coursera.org/course/ml)
Ah yes, this is where it all started. I had to, of course, eventually finish this course. Andrew Ng (my personal hero) created this course back in April 2012 and I believe it might be now in its 10th iteration. This course will give you a taster of Support Vector Machines, Recommender Systems, Artificial Neural Networks (basis for [Deep Learning](http://en.wikipedia.org/wiki/Deep_learning)) and many others. The awesome thing about this course was that it abstracts _everything else_ apart from the ML algorithms to a package that you download so all you need to write is the machine learning algorithm. This means that this course is a mere introduction to machine learning and this alone cannot be considered to give you enough knowledge to actually go out and program some of them in production. This course was just so much fun, because of all the cool stuff that you write that I still have to give it 10/10. Plus, in the right data science tradition, this course has been continuously improved for each iteration.

__Score__: 10/10

__Skills learned:__ Machine Learning, MATLAB, Statistics


# 2. Great Courses

## [Computational Thinking and Data Science](https://www.edx.org/course/introduction-computational-thinking-data-mitx-6-00-2x-0)
This course was a great application of Object-Oriented Programming and simulations. I have to say I have gotten so much support on the forums it was incredible. (I do not recall, however, whether this was mostly staff or other students. Either way, great answers.) I think that the course, however, was too short and might have been more rigorous. (Though I do understand this was only a half an MIT course and probably simplified.) But I just admire professor Guttag as a person for being one of the first to get on board with MOOCs. This course was also a very different take on data science from the usual approach, as here you focus on simulations--e.g. behavior of different virus populations based on applications of different drugs/medicines and the genetically inherited (hence the OOP design) resistance to different active components of these drugs.

__Score__: 8/10 

__Skills learned:__ OOP, Simulations, Stochastic Algorithm Testing


## [Udacity Algorithms](https://www.udacity.com/course/cs215)
I finished this course before Udacity changed their business model from offering free courses with no deadlines to one where they only offer paid courses (though the material is still free, but you cannot get a certificate). This course was quite hard and the support was sparse (for a MOOC). But this meant that I just had to spend a bit more time thinking about the problem, which was probably helpful in the end to my general CS skills. I think that all the concepts were quite well explained and overall I think that there was sufficient practice to really understand the material. Though there was not so much of a 'course feel', which there was in both Coursera and EdX. But despite this, they recorded [probably the most awesome CS theory song in existence](https://www.youtube.com/watch?v=stdG3BGmhqo), so I cannot really question anything about this course. 

__Score__: 8/10 

__Skills learned:__ Algorithms, Data Structures, Social Network Computation 

## [Udacity Data Wrangling with MongoDB](https://www.udacity.com/course/ud032)
This course is a bit different from all the others: you can either take it for free (but no certificate at the end) or you can pay $200 for each month and have a personal coach, human-verified project at the end and get that certificate. Partially, because I wanted to evaluate Udacity's new business model and partially because I knew that data wrangling is a huge part of data science, I finished this course in about month and a half. Surprisingly there is very little about MongoDB -- it is only introduced in the last 20% of the course, but that does not mean that the course does not teach you helpful skills. It does! Web scraping and XML parsing are definitely useful skills and I think that the course is appropriate in difficulty, though I think that it could be a bit harder at times to really force the students to organize their code well and debug more complex data cleaning parsers.

__Score__: 8/10

__Skills learned__: Website Scraping, Data Wrangling with Python and MongoDB

## [Social and Economic Networks: Models and Analysis](https://www.coursera.org/course/networksonline)
Normally economists (especially the really famous ones) are not too keen to join MOOCs, but that just makes [Matthew Jackson](https://web.stanford.edu/~jacksonm) that much more awesome. This class was fun and allegedly a graduate level, though it must have been very diluted, because I found the material (although going to greater depth than the Michigan Course) quite easy. There was again some work with Gephi and this time even Pajek, though sadly no R. But I should note that there were more advanced versions of the course that one could participate in (sadly, with no recognition) that I wanted to participate in, but unfortunately I did not have the time. So I think potentially this could have been an 8/10.

__Score__: 7/10 

__Skills learned:__ More computational and mathematical methods for social network analysis

## [Statistical Learning](http://online.stanford.edu/course/statistical-learning)
This course covers an explanation of most of a recent book by Trevor Hastie, Robert Tibshirani and others: [An Introduction to Statistical Learning, with Applications in R](http://www-bcf.usc.edu/~gareth/ISL/) and some of their more advanced book, [Elements of Statistical Learning](http://statweb.stanford.edu/~tibs/ElemStatLearn/). This course is fun to take, though I mentioned 'explanation' for a reason. This course will provide you with a thorough explanation of fairly advanced statistical concepts, but definitely will not test you rigorously enough. Usually, especially if you buy the discounted versions of one of the books, you will get enough knowledge and training to apply some of these concepts sensibly. But you will still need to work hard to test yourself and to really probe the ideas with no assistance. Regardless of whether you do, the lectures are really fun to listen to and explain concepts very well.

__Score__: 7/10 

__Skills learned:__ Machine Learning, Intermediate Statistics, Computation

## [Introduction à la programmation orientée objet (en Java)](https://www.coursera.org/course/initprogjava)
I think I pretty much took this course, because programming in English is too mainstream. But it was really nice to learn a language from 0 in a very organized environment. What I genuinely appreciate is the walk-throughs on how to set up the Java environment in Windows, Ubuntu and Mac. But what I think was by far the best thing about this course was that the actual instructors were _so commonly_ involved on the forums, helping people. Even I once received some help from one of the instructors, which was great. Coding-wise, the MOOC was quite simple, but I assume approximately on the same level every other intro course for non-CS majors would be. 

__Skills learned:__ Java, French, Basic Data Structures

__Score__: 7/10

## [IIT's Web Intelligence and Big Data](https://www.coursera.org/course/bigdata)
This course was quite fun and relatively easy to grasp. The concepts revolved around the mathematics (and some programming) of the Big Data technologies, as well as their (recent) history. The problem sets were well done, though sometimes seemed bit too shallow and I would appreciate a bit more programming. The programming assignments were great: tested a whole array of important skills and technologies, but were only three through the entire course. This course was allegedly supposed to be taken as a half-course by actual IIT engineers. I, however, seem quite skeptical of that, as it seemed a bit too easy if true. But generally quite fun and insightful. Though the MOOC seemed to be a bit mass produced with little involvement from the IIT staff after a while.

__Skills learned:__ Map-Reduce and other "big data algorithms" (locality sensitive hashing, page rank etc.)

__Score__: 7/10

## [Introduction to Finance](https://www.coursera.org/course/introfinance)
This course was my first MOOC I finished so I still remember quite a lot the odd details, as well as some of the catch-phrases the professor was using ("It's not about finance, it's about love.") as well as the fact that people (probably still stuck in the school mentality), were trying to ease their way through the course. I actually learned a lot of interesting concepts I did not know. With this said, I started this course in June 2012, which is just two or three months after Coursera launched. But that meant that some aspects of the course were quite not ready. The platform was great, but I feel like courses tended to be a bit better structured in the later courses. But the fact that I was trying out the first iteration also meant that right now the course could be a 10/10.

__Skills learned:__ Basic accounting, basic financial modeling (but going beyond NPV etc.), Excel

__Score__: 7/10

## [Getting and Cleaning Data](https://www.coursera.org/course/getdata)
This course was by the same Jeffrey Leek and Roger Peng that I admired so much and it was part of the data science specialization. But it was just not nearly as good as the previous two. And because by this point I knew that data science is 90% data cleaning and 10% complaining about data cleaning (I think I used this as a joke somewhere, but it _might_ not be my line, but I could not find the original source.), I wanted to learn more about how to do it efficiently. I wanted to try out the new specialization that the company that I so love and admire was spearheading. But the course was quite short, and although overall well-done, it was just not a very transformative experience. I think that I also really knew about 95% of this course, so I did not even watch most the lectures. Next week I always dived in in hopes of learning something new. I think for a beginner it could be a decent course, but I am still not sure if I would pay $49 for it. Though I understand the tradeoff Coursera was facing.

__Skills learned:__ (potentially) Data wrangling, RegEx, `reshape` and other useful packages.

__Score__: 6/10

# 3. Good Courses

There good thing about the MOOCs is that if I don't like the course, the instruction seems crappy or I have hard time understanding the professors or I just do not like something, I can drop it. Moreover, there is so many great and awesome courses that I could not even do those that seemed 'good'--i.e. I would most likely like to take them if they were one part of the curriculum at my home institution. 

# Best practices

I think there are 3 key strategies to successfully finishing the MOOC. But the key insight is that most people who do not finish a MOOC usually do not finish it because of lack of time, not because of lack of aptitude. So lack of persistence is your key enemy. To crush your enemy, you have to:

## 1. Assess quickly the time commitment of a course. 
I still remember that [convex optimization course](https://class.stanford.edu/courses/Engineering/CVX101/Winter2014/about) by Stanford that I really wanted to take. But, alas, I could not. I did not have the time as I had a busy schedule _and_ I was doing another MOOC (or two?) at the time. I realized that this was a rigorous class that required substantial time commitment. But I needed to drop it, because if you do not take each commitment seriously, you will probably not finish any of them.

## 2. Honor your commitments
Meaning also that you should immediately unenroll from the courses you know you cannot finish. This will hopefully also give you the respect towards your commitment that you will also finish the ones you have elected to keep.

## 3. Commit to deadlines, minimum benchmarks
There is a reason why I only finished one free course on Udacity: because there are no deadlines (well, until they introduced the payment by the month). These help you get stuff done, because now you have to or all (or at least something) is lost. All major platforms have it now, so please use it.

Benchmarks are also very helpful: there were courses (like both of the SNA ones) where I knew I wanted a distinction, because I wanted to know the stuff _well_. Then there were courses, where I just wanted a brief overview so I only watched lectures (not listed, because I technically, haven't finished them). But decide quickly what your goals are and then follow them.

I would also love to do a general post on MOOCs, but I think things are best kept separate. <!-- Generally, I think MOOCs will fundamentally change the nature of education (for reasons that deserve a separate post), _provided_ that they manage to meaningfully integrate themselves to people's lives. We could already see many interesting initiatives like the one by [Obama for teachers for their professional development](https://www.edsurge.com/n/2014-11-19-free-coursera-pd-thanks-to-the-president). But currently MOOCs are mostly a domain of people who are happy to sacrifice some degree of social life for learning (totally worth it). Though I do not doubt there are exceptions, it seems that most people I know (and online statistics confirm this) are too busy to actually finish the courses.  -->

Anyway, hope this was helpful. As always, I would welcome any reaction. Get in touch!