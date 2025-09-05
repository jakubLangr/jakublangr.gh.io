Title: Predictions R hard
Date: 2014-09-14 21:00
Tags: modeling, R, statistics, GJP
Category: technical
Slug: hello-world
Author: Jakub Langr
Summary: Quick and dirty statistical modeling in R for social scientists, decision makers and enthusiasts. Insights from my involvement in a US intelligence project.

# ... or quick and dirty statistical modeling in R

Recently, I decided to start a blog and my ongoing involvement in the [Good Judgment Project (GJP)](http://goodjudgmentproject.com/), which is part of US government's [Intelligence Advanced Research Projects Activity (IARPA)](http://www.iarpa.gov), more specifically the ACE Project, proved to be a decent excuse to do so. 

I have joined GJP mid-Season 3 (hence I haven't participated fully) and then I tested into season 4 (combination of general intelligence test and political knowledge). This test alone was a treat, because it followed all the guidelines about best practices of hiring (to my knowledge) and I knew that if I get in, this will be a lot of fun. What I did not know at the time was that only one in ten will actually be accepted into GJP, otherwise I would probably put in a lot more work into the test.

Despite this mess-up, I joined a project and met my amazing fellow forecasters in my team. At the time of joining, I already knew that I will be putting numeric probabilistic values on how the world might soon turn out to be (e.g. will there be a direct Russia-Ukraine confrontation in Crimea). All of these questions are well-defined using a very sophisticated set of definitions, but making the evaluation criteria very flexible and as to allow GJP Team to 'resolve' each question in the spirit rather than the letter of the question.

Number of these questions have allowed for use of publicly available datasets and so I would like to offer some code that I used to ease up my work as a forecaster. This particular example is relates to a question that resolved yesterday: If on a certain date the area of ice on the Arctic sea will be more than what it was last year.

The following R code downloads, cleans and plots some time-series representation of the record ed data of the ice for the past couple of years. It is _super-simple_, but I was able to do it from question to quantitative probabilities in about 30 minutes, so this is just to demonstrate that even such simple code can help you make a much more solid prediction. This was necessary, because my team's forecasts were all over the place (among 9 forecasters we ranged 5-80%) and statistical modeling is a great way how to deal with data that is normally quite counter-intuitive and complex.

```R
library('TTR')
library('reshape')
library('tseries')
library('forecast')
 

# Loading, cleaning (missing values are by default assigned value of -9999)
read.csv('http://www.ijis.iarc.uaf.edu/seaice/extent/plot_v2.csv') -> data
replace(data,data=='-9999',NA) -> data
colSums(is.na(data))

# Melt changes the columns (there is a column for each year) into just one column 'value'
data_ts <- melt(data[,3:18])
ts = ts(data_ts, deltat=1/365)
data_ts = na.remove(ts[,2])

# Decomposes the time-series plots the decomposition and the forecast (as well as prints it)
decomposed_ts = decompose(data_ts)
plot(decomposed_ts)
ts_forecast = HoltWinters(data_ts,gamma=F)
forecasts = forecast.HoltWinters(ts_forecast,h=8)
forecasts
plot.forecast(forecasts)
data[250:260,c(1,2,18)]
```

For GJP purposes, the confidence intervals produced by this model are especially useful, because they give you an idea of how confident you can be in your predictions:

```R
> forecasts 
Point Forecast Lo 80 Hi 80 Lo 95 Hi 95 
16.73710 4981786 4920648 5042924 4888284 5075288 
16.73995 4963324 4867154 5059494 4816245 5110403 
16.74279 4944862 4814956 5074768 4746188 5143536 
16.74564 4926399 4762199 5090600 4675277 5177522 
16.74849 4907937 4708313 5107562 4602638 5213237 
16.75134 4889475 4653078 5125872 4527937 5251014 
16.75419 4871013 4596412 5145614 4451047 5290979 
16.75704 4852551 4538291 5166811 4371932 5333170 

```

One of the plots here can help elucidate why my team might have been all over the place: there are many factors influencing how much ice there will be on a given day: sure, there is the seasonal (summer-winter) cycle, which matters a lot, but there is also some random element as well as measurement error. I fear that lots of my fellow forecasters (perhaps including myself for a long time) fell victim to [over-fitting](http://en.wikipedia.org/wiki/Overfitting) to the random element. Sure, we could observe the pattern from the previous year, but no one from the team--to my knowledge--plotted the data to see what (approximate) influence each of the two factors have. This is why decomposition is so great:

## Decomposed time-series plot

<img src="Public/blog/gjp_modelling_ts_decomposition.svg" alt="Timeseries decomposition of ice-area" align="center" style="width: 620px;"/>

One interesting element of the decomposition is the trend, which I was expecting to see fairly clear evidence of global warming, but instead I really found out "just" evidence of climate change. Though, of course, I am no climatologist, so perhaps that interesting dip in the year 2000 had some other (spurious?) reasons. 

The decomposition, although helpful, was not what I considered the main advantage of this little exercise: I was then able to use a time-series statistical model called HoltWinters to predict the area of ice (no pun intended?), which uses exponential smoothing that is quite fitting in these conditions (I wonder whether these statistical puns significantly affect my readership?). This model is appropriate mainly because there is a lot of historical data and the data is always very constrained to a certain range (e.g. a 3 sigma change is _actually_ extremely unlikely, which cannot be said of all financial data this model is applied to). 


# Thoughts about GJP itself

GJP is what I think social science should be: quantifiable, based on best-practices and aiming to get as close to the truth as possible, not tell the best story. This was, interestingly enough, the conclusion (_simplifying tremendously_) of Professor Philip Teltock in [his book Expert Political Judgment](http://www.amazon.com/Expert-Political-Judgment-Good-Know/dp/0691128715). Namely that the political forecasters that tell the best story are usually favored by the media, because it sells well, but they tend to do worse than most others on accuracy. Professor Tetlock is now one of the main organizers of GJP and so it is a great honor to work as his lab rat, because it helps to do cutting-edge research and it helps me to learn a ton in the process.

One additional gift every forecaster got from the GJP was a set of presentations of best practices of forecasting, which I think were fascinating, albeit oftentimes simple guidelines to stick to. But as with everything, it is much more a matter of putting these into practice rather that makes a great forecaster. 

Couple of interesting things that I noticed about myself looking at old predictions: 

## 1. I am overly cautious

Reading loads of literature about randomness and its role in human society (Kahneman, Taleb, Tversky, Ariely, Mlodinow etc.) I was overly careful about putting down anything close to 1% or 99%, even though some questions call for it (likelihood of a massive reform of international institutions in a short timespan). Good Judgment, after all, is not only very well calibrated, but it is also very discriminating. 

## 2. I struggle with randomness

Interesting point about randomness--to some extent related to the previous one--how do we square the fact that randomness is just a model and yet we keep on invoking the properties of randomness when talking about the world. But, at least on the level of humans, each action is supposedly deterministic. Yes, some might call on the [famous George Box quote](http://www.quantumdiaries.org/2014/07/04/wrong/), but that does not really answer why in a situation of imperfect information _random_ is the _best_ model. This is especially confusing given the amount of strategic interaction and social influence in the world. 

This turned out to be a problem with with some of the GJP predictions I make, because I want to stick to randomness as a baseline (because it seems to be best practice), but then struggle to always justify this to myself and square it with the rest of information. This especially bothered me outside of GJP, however. In Mlodinow's book [The Drunkard's Walk](http://www.amazon.com/The-Drunkards-Walk-Randomness-Rules/dp/0307275175), he specifically used the example of production studio's CEOs as someone who is faced with great randomness in the movies. But each action in this immensely complex chain of interactions is deterministic, strategic and influenced by one's surroundings. Why is randomness an emergent property of human systems? Seems non-obvious.

## 3. Conditional interaction is hard
### (especially cross-culture)

There was a question on what would DPRK do, should the United States take a bold, but merely supportive, military action in aid of South Korea. Our team struggled to agree even if the bold action would increase chance of state DPRK being more aggressive towards South Korea or less so. Would the desire to prove something to US (or more generally, the West) outweigh the potential risks, because of the importance of the precedent or would the bold action scare off DPRK? Both ways of reasoning sounded equally plausible to me at the time so I just followed what my initial prediction was. But really, there was no reason for it. The question whether I got it right or wrong is irrelevant in this case; the question is: would I be able to make a good prediction next time? I fear that so far the answer is no and so I never swayed too far off 50%. I will probably need to devise a way of breaking these ties.


Feedback? Comments? Question? I am happy to hear it! Contact me at james [dot] langr [at] gmail [dot] com.