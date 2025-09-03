Title: Prioritised list of AI threats
Date: 2018-01-30 21:00
Tags: AI artificial intelligence  
Category: non-technical
Slug: prioritized-ai-threats
Author: Jakub Langr
Summary: My contribution to what I feel like is fundamentally lacking from the "dangers of AI" debate. 


### Prioritized list of AI threats: care about what you Musk

(I apologise for the bad joke, but the original name of the article was “SELECT
FROM ai_threats ORDER BY danger DESC” and even though I cannot *possibly imagine
*anything more exciting than a SQL query, I thought it detracted exactly the
types of readers I wanted to engage the most.)

Recently, I witnessed a conversation on LinkedIn between two professionals who
both work in AI — albeit as non technical staff. This conversation was about
[Google’s
AutoML](https://research.googleblog.com/2017/05/using-machine-learning-to-explore.html),
a system that can automatically optimise itself to achieve better performance at
a given task. The tragedy stems from the wording that the Google research blog
has used: The article calls the two networks controller and a child. Then the
article went on to explain that AI designed can outperform the human made ones.

Needless to say the term child has caused a mild panic as it has been reported
by several
[mainstream](http://www.independent.co.uk/life-style/gadgets-and-tech/news/google-child-ai-bot-nasnet-automl-machine-learning-artificial-intelligence-a8093201.html)
[media](https://www.dailystar.co.uk/news/latest-news/664713/google-artificial-intelligence-ai-child-NASNet-AutoML)
[outlets](http://www.dailymail.co.uk/sciencetech/article-5146963/Google-supercomputer-creates-AI-child.html)
such as [the
Sun](https://www.thesun.co.uk/tech/5072741/google-nasnet-ai-child-reinforcement-learning/)
and
[similar](http://www.ibtimes.co.uk/googles-ai-clones-itself-smarter-more-powerful-man-made-one-1643413).
This panic stemmed from the framing along the lines of ‘AI creates its own
children that outperform humans’, but this inaccuracy is all too often because
AI researchers and AI practitioners do not do not participate in these debates.
Using the terms such as “child” and describing the output of this network as
smarter than what humans would design is sure to make for some good headlines.
However, describing what happened as “algorithm uses a set of predefined rules
to achieve a slightly better performance” is nowhere near as scary but it is
probably more accurate.

The example above is more funny than anything else, but I think demonstrates a
deeper point that the AI discussion can stray far off from where the real
concerns are for the couple of years to come.

As much as I appreciate the public interest in AI safety, the interest of people
with limited technical experience and understanding of AI is ultimately lead to
a reframing of the debate that I think is actively unhelpful or even harmful to
the ultimate goal.

As an AI practitioner, about to release an educational resource on [Generative
Adversarial Networks](http://jakublangr.com/gans-code.html), I feel the need to
frame this discussion in the way that I see it. Without a doubt, there will be
subjective judgements but given the state of the discussion I feel like this is
important contribution nonetheless.

I’ll start off with the most controversial part: [in line with Francois
Chollet](https://twitter.com/fchollet/status/945581226424983554), a staff
researcher at Google and the author of one of the most popular deep learning
frameworks, I believe that artificial general intelligence is still very far
off. Therefore worrying about super intelligence is maybe not irrelevant but it
is definitely not urgent.

Applied historians and AI researchers have long talked about this idea of
intelligence explosion. I’m not completely sure to whom I should credit this
line of reasoning but I first [heard it from Dr Joanna Bryson lecturing at
Oxford Martin School](https://www.youtube.com/watch?v=wtxoNap_UBc). The lecture
is great and you should definitely listen to it, but the gist is: ultimately it
does not make sense to worry about artificial intelligence explosion. AI will do
much more damage simply by augmenting malicious human actors and helping them
reach scale.

Intuitively this makes sense: same as with nuclear weapons, AI is ultimately
just a technology and it depends how it’s going to be used by humans. This
coupled with the fact that in actual fact most AI is what some call “idiot
savants” and therefore [catastrophically failing in even minor cases of
deviation from the original
task](https://www.fastcodesign.com/90156089/trippy-stickers-trick-computers-into-thinking-a-banana-is-a-toaster),
leads us to the inevitable conclusion that superintelligence destroying humanity
is very unlikely to be a concern in the [“decades to
come”](https://www.facebook.com/nipsfoundation/videos/1552446408179926/).

So what then is in my opinion worth worrying about?

1.  **Russia or other nation states augmented by AI**

The first on this list is something that we have already seen. Except in the
future, just by applying existing, enterprise technology, this can be made much
more scalable and therefore dangerous. Not to mention that [China will invest
$150 billion into
AI](https://www.cnbc.com/2017/07/21/china-ai-world-leader-by-2030.html).
(Though, to be fair, China has, compared to Russia, shown much less appetite to
get involved in OECD countries’ politics.)

In the age of [hybrid warfare](https://en.wikipedia.org/wiki/Hybrid_warfare),
[cyber attacks against nation
states](https://www.theguardian.com/world/2007/may/17/topstories3.russia) and
[cybernetic sabotage of nuclear
programs](https://en.wikipedia.org/wiki/Stuxnet), we are faced with a lot of
questions in the world that is in theory completely untraceable. The mounting
allegations of Russian meddling with the American election results certainly do
not help. What’s worse is that an assault this fundamental on the world’s most
powerful democracy [has allegedly cost a quarter of what a F-35 fighter jet
would
cost](http://www.homelandsecuritynewswire.com/dr20171009-social-media-is-first-tool-of-21stcentury-warfare-and-it-s-cheaper-than-f35-sen-warner).

If you’re anywhere else in the world and think that somehow the downfall of
America will not mean anything to you, think again. Not only is there evidence
of [Russian interference in the Brexit vote by the usage of a massive
sophisticated network of Twitter bots trying to sow discord into the British
society](https://techcrunch.com/2017/11/15/study-russian-twitter-bots-sent-45k-brexit-tweets-close-to-vote/),
but there is also evidence of Russian meddling in the Dutch, German, French and
British election.

Now if that doesn’t scare you, there is also substantial evidence that Cambridge
Analytica — Robert Mercer and other shadowy figures funded organisation — [is
ramping up its capacity to use data analytics and AI to influence the population
in the US and the
UK](https://www.theguardian.com/politics/2017/mar/04/nigel-oakes-cambridge-analytica-what-role-brexit-trump).

Finally if you examine the dynamics of these AI augmented attempts to stir
discord, they do so across every pre-existing social divide on both sides of the
fence. For example, foreign bots [have been detected in America both supporting
the NFL players and opposing
them](https://www.washingtonpost.com/world/national-security/lawmaker-russian-trolls-trying-to-sow-discord-in-nfl-kneeling-debate/2017/09/27/5f46dce0-a3b0-11e7-ade1-76d061d56efa_story.html?utm_term=.4092dbceb812),
criticising Trump and supporting him, as well as taking advantage of gender,
sexuality and identity issues to further divide American society.

Do not get me wrong all these are in principle solvable, mostly again by AI, but
currently neither tech companies nor government are putting enough of an effort
to truly address them. And even if you believe that the paragraphs about are
just some crazy conspiracy theory, you have to recognise that this is at least
plausible and that we currently do not have any monitoring in place to prevent
this.

**2. AI destroying social fabric**

[Remember that an average person checks their phone about 150 times a day and
think about what this does to ability to have social
interaction.](https://www.elitedaily.com/news/world/study-people-check-cell-phones-minutes-150-times-day)
Also the perfect ever obedient technology is a really poor mental model for our
children on how to interact with the world and especially other humans. Make no
mistake: the software and hardware products you buy today are loaded with AI
that constantly learns how to capture your attention.

This is not even mentioning that spending a lot of time on Facebook makes us
less happy; [anger and outrage drives most of interactions on Facebook because
those illicit higher response
rates](https://www.cbsnews.com/news/early-facebook-investor-roger-mcnamee-urges-company-to-fix-their-product/);
and the looming fear of automation is making many fair for their jobs there for
making them more anxious. This is not even diving into the problem of [online
echo chambers, which is a massive problem as the linked article
describes](https://www.scientificamerican.com/article/fake-online-news-spreads-through-social-echo-chambers/).

Moreover, when you think about the [human colossus
](https://waitbutwhy.com/2017/04/neuralink.html)and its most advanced
intelligence product: corporations, we run into another quagmire. This [tweet
](https://twitter.com/mcclure111/status/939968291363225602)summarises it well:
“Just super amazing how people immediately see the problem with “what if an AI
were designed to create paperclips at all costs” but don’t see a red flag in
“we’re going to design our entire society around a mechanical social process
that maximizes for short-term capital growth”. Coporations are the original
super intelligence, because they aggregate knowledge of dozens of humans in
pursuit of one goal.

The solution for now definitely is to just t[hink about whether all the time you
spend with technology is time well
spent](https://soundcloud.com/best-of-tech-startups/dfj-thought-leaders-making-technology-less-manipulative-tristan-harris-time-well-spent)
and in the long run start thinking about the psychological effects automation
and universal basic income.

**3. Non-state actors augmented by AI**

The third angle has to do much less with nation-states or corporations and much
more how independent people or groups of individuals can act. I will only give
you a glimpse of what I mean as I believe this one is less urgent and we’ll keep
shortening with decreasing importance.

Plus I’ve already mostly explained and a lot of the bears a thing as similar as
in the nation state example except now or dealing with much more decentralised
group with much fewer resources. [But people are only thinking about it in terms
of the security
ramifications](https://www.weforum.org/agenda/2016/11/the-4th-industrial-revolution-and-international-security/)
and autonomous weapons.

I generally believe the nation states will be able to co-ordinate via UN or
otherwise to maybe ban development but most likely usage of [autonomous weapons
technology](http://autonomousweapons.org). I do not believe, however, that the
non state actors will adhere to the same standards when it comes to the
s[laughter bots](http://autonomousweapons.org/slaughterbots/) and similar.

This is already happening in tiny doses; groups like Anonymous and platforms
like Silk Road have demonstrated government’s incapacity to deal with actors
that fall outside their scope. Especially if their host government proves
uncooperative. So we may have to deal with things like cyber-terrorism, hackers
at an unprecedented scale and automated political propaganda from non-state
actors.

**4. Super intelligence**

Originally, I wanted to put super intelligence as fifth but then a few of my
friends under the influence of Google Deepmind’s safety team convinced me
otherwise. I will not argue about the timing of super intelligence; much has
been written about this topic by others.

I will just say that there are [many researchers who believe not even if we
achieve singularity soon there will be limited impact on the
world](https://medium.com/@francois.chollet/the-impossibility-of-intelligence-explosion-5be4a9eda6ec).
Anecdotally, just think about the smartest kid in your High School class. How
far have they made it? Has their intelligence helped them so much? In fact, is
it even possible to construct a consistently more intelligent approach when we
consider [that in optimization there is no free
lunch](https://en.wikipedia.org/wiki/No_free_lunch_in_search_and_optimization)?

Perhaps the argument here is that the growth of AI is exponential and so evolved
AI is to a human as say a human is to a horse. Horse will never be an inventor.
So it is quantitatively so much better that it is qualitatively different.
However this I also take an issue with, because people typically use biological
systems as an obvious parallel to AI without much justification. The growth of
AI is not like the growth of a human from a child to an adult. AI can solve many
problems with superhuman performance but a seemingly similar problem will be
virtually impossible.

Furthermore, although there are reasons that is super intelligence might have
the capacity to harm humans, remember that despite billions of dollars of
investment Siri still barely understand what you mean. Let’s say we completely
must do speech recognition in speech in synthesis in the next year (extremely
optimistic) and in the two years after that we manage to productionize this. In
the next five, we solve perception and in the five after that unsupervised
understanding and in the 10 after that common sense reasoning. But all (1–3) of
the above are things that are potentially happening *right now*. Does it still
seem that urgent?

But overall, I would love to pose to anyone this challenge: how do you even
imagine super intelligence to destroy humanity? Why would it even care?

**5. AI just making mistakes or cutting corners**

These two problems are closely interlinked, because I don’t believe that anyone
wants to write AI that will make mistakes. But as I said this point is very
close fifth. Ultimately I believe that the chances are 50–50 that even if we get
to singularity, we will simply not know whether this is going to be completely
purposeful. In fact, we still [do not really understand why deep learning works
completely](https://arxiv.org/abs/1611.03530).

Ultimately, AI researchers and practitioners will be under pressure from their
managers, sponsors or other stakeholders and therefore forced to cut corners. To
be fair to the public debate, I think this is the one point where spreading
awareness — however rudimentary — is extremely useful.

So overall as much as AI safety seems like a [fun problem that a lot of
philosophers were waiting for a long time, we should avoid judging the
technology by its
narrative](https://twitter.com/fchollet/status/945581226424983554); at least for
the time being.

It took me about 2 days to write this article. In this time, the initial story
[has happened
again](https://twitter.com/OriolVinyalsML/status/954243674182967296), which just
shows, in my opinion, how frequent those popular misinterpretations tend to be.

Want to join the conversation? See more at
[jakublangr.com](http://jakublangr.com/) or [tweet at
me](https://twitter.com/langrjakub)!
