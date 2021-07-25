---
title: On the Golden Ticket Into Machine Learning
date: '2020-01-11'
description: There's a better approach than asking whether you need math to do machine learning.
publicationType: blog
background: '#353b48'
image: '/assets/img/2020-01-11-golden-ticket-robot-piano.jpg'
---

![A robot playing a piano](/assets/img/2020-01-11-golden-ticket-robot-piano.jpg)

## Introduction

One of the more popular questions I've seen and gotten in the past few
years from folks goes along the lines of "How much math and statistics
knowledge is needed to get into machine learning?" I understand the
underlying drive for the question, but it really misses the point. These
curious friends and colleagues *think* that they are asking a relatively
straight-forward question, but the reality is much different. Asking a
question like this is akin to asking something like "How much biology
do you need to know to work in a hospital?" or "How much law do you
need to know to fight crime?"

## Let's Be Specific

I'm sure you saw this answer coming: *it depends*. Of course, it
depends. What matters, even more, is why and how it depends, and what
more you need to know in order to effectively answer the question for
yourself. There is no singular answer to this question; the answer is
unique to each individual person, after clarifying what kind of work is
desired.

So, you want to work in a hospital? Awesome. What are you doing there
-- conducting surgeries, scheduling appointments, or cleaning toilets?
These roles require distinct and diverse backgrounds of experience and
personality, and one cannot give a sufficient answer to the initial
question until more information is gleaned.

Over time, the ML & AI industry has been converged to some distinct role
divisions that encompass the full spectrum of using data and algorithms
to deliver outstanding new products and services to our world. Below,
I'll give you a feel for each of them, so that you will be much more
equipped to answer your burning question and move forward from it.

## The ML-Enabled Software Engineer

![Photo by 
    [Ramiz Dedaković](https://unsplash.com/@ramche) on Unsplash
](/assets/img/2020-01-11-golden-ticket-cat-200x300.jpg)

Are you a software engineer, proactively looking to maintain the edge in
the ever-growing software development job market? You keep hearing more
and more about how 
[AI is the new electricity](https://www.gsb.stanford.edu/insights/andrew-ng-why-ai-new-electricity)
and 
[data is the new oil](https://www.economist.com/leaders/2017/05/06/the-worlds-most-valuable-resource-is-no-longer-oil-but-data).
Surely this is a train that you don't want to miss, so you want to
ensure that you are up-to-date on how these solutions get integrated
into existing production systems to deliver more value to users. You're
likely interested in comfortably interfacing with libraries for popular
viral models out there, like those that can look at this image and
determine "that's a cat!" from only the pixel values. The roles
you're looking for typically have broad titles like "software engineer - machine learning".

Good news for those in this category! Breaking into these roles is
relatively easy. Numerous crash-course educational content exists across
the web, from 
[Fast.ai](https://www.fast.ai/) 
to
[Udacity](https://www.udacity.com/course/intro-to-machine-learning--ud120)
to
[Coursera](https://www.coursera.org/learn/machine-learning-with-python).
Many of these sites are very developer-friendly, providing hands-on
learning approaches to get you up and running with your own
implementations. For many folks, this will "scratch the itch" that
they feel with regards to Machine Learning and Artificial Intelligence.

## The Data Analyst

The data analyst enjoys being around machine learning solutions but does
not prefer the details of designing or developing them. Rather, the
focus is put onto grounded, time-proven descriptions and statistical
aggregations of data to drive more business value for a product that is
otherwise not necessarily data-oriented. Additionally, the data that is
usually used in these roles is very structured (timestamps, True/False,
this-or-that fields) as opposed to unstructured (pixels, audio samples,
sensor measurements), which makes analysis much more straight-forward.

For example, a common data analysis job is to ingest data from a few
existing databases, summarize the data fields and their interactions,
and explain how changing the value one field effects the rest. The
changed field could be the average daily number of Uber drivers in a
city, and how adding more drivers would increase revenue and decrease
time-to-pickup, while increasing total employee wages to pay.

![Source: 
    [Tableau Server](https://www.tableau.com/resource/server-admin-welcome)
](/assets/img/2020-01-11-golden-ticket-tableau-dashboard.jpg)

Nothing too scary, right? People in this line of work typically combine
their algebra and basic statistics knowledge with some business and
digital presentation proficiency to stand out from the crowd.

## The Data Engineer

The role of a data engineer emerged as big data brought
exponentially-increasing amounts of data into legacy databases, causing
massive increases in latency and forcing innovation in areas like
distributed computing and horizontal scaling. While a data analyst
typically gets to assume a neatly prepared database is waiting for
analysis, the data engineer's work sits on the other side of the
curtain.

The work of a data engineer involves working with diverse, dynamic data
structures to ingest them in a reproducible fashion into the one or many
databases that Data analysts and other business intelligence (BI)
representatives work from. However, this job is not so simple as writing
a bunch of SQL commands for different databases.

![Source: 
    [Amazon AWS Blog](https://aws.amazon.com/blogs/big-data/how-coursera-manages-large-scale-etl-using-aws-data-pipeline-and-dataduct/)
](/static/img/2020-01-11-golden-ticket-data-pipeline.png)

Data engineers in today's data-littered world must possess the
knowledge of how distributed databases and computing architectures can
be leveraged to provide horizontally-scalable data pipelines that can be
run several times per day to create the relatively-simplified data
stores that can be used by others. Without these heroes in place, the
amount of time and effort it would take for analysts and BI
representatives would be far too great for the routine reports that get
generated for clients.

## The Machine Learning Engineer

So far, we have data engineers fighting the good fight against massive
amounts of disparate data, enabling data analysts to routinely provide
insight within and outward from the company. In addition to this
insight, businesses are now also using data and ML algorithms to replace
more and more of the arduous and complex tasks we previously had to
perform manually.

For example, how should a bank determine the interest rate to offer to a
potential client requesting a loan? Naturally, you'd expect it to vary
relative to how likely it is that the client would fail to pay back the
loan. How should they determine that estimate? Enter machine learning.

More notably, more and more companies are building data-first products,
leveraging the powerful combination of algorithms and data to build
solutions that *shatter* previous offerings. For example, one of the
products we build at Pindrop is a 
[text-independent voice biometrics system](https://www.pindrop.com/technologies/deep-voice/), 
which leverages the recent resurgence of Deep Learning to make all of your
voice-based interactions with industry leaders secure and frictionless.

Machine learning engineers stand on the shoulders of their fellow data
engineers and ML-enabled software engineers, training and deploying
established machine learning models on-premise and in the cloud to make
the "Internet of Things" the "Internet of Smart Things." These guys
are up-to-date on all of the latest cloud software ecosystems but also
aren't afraid of some calculus, statistics, and linear algebra. They
are your ace-in-the-hole for connecting your engineering and research
departments, bridging the gap from bleeding edge to delivered value.

![Source:
[mc.ai](https://www.youtube.com/watch?v=sLktFah2Xi4)
](/static/img/2020-01-11-golden-ticket-sagemaker.png)

All that being said, they aren't expected to continuously push the
state-of-the-art. That is more the territory of the next role.

## The Researcher/Data Scientist

Ah, yes. Here we are. This is the role that many are thinking about when
they say "No, really. I want to be deep in the field, understanding
algorithms at their core and moving the state of the art forward. Now,
just how much math and statistics do you need for *that*?"

You need **a lot**.

![Image by 
    [Yukimi Yokoyama](https://pixabay.com/users/189748-189748/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=969516)
    from
    [Pixabay](https://pixabay.com/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=969516)
](/assets/img/2020-01-11-golden-ticket-fractals.jpg)

The field is growing rapidly and is still relatively nascent. Boundaries
of the state of the art are pushed monthly and from diverse academic
backgrounds. Computer scientists use algorithm optimizations and compute
infrastructure scaling to solve previously "intractable" problems.
Mathematicians prove theorems that allow novel algorithm creation and/or
simplification. Signal processing specialists provide helpful biases in
the form of efficient and illuminating transforms which give models a
quick-start to the learning process. Physicists use deep knowledge of
field, wave, and particle theories to approach the optimization problems
from entirely different points of view. In case you haven't noticed by
now, this isn't even an "ok I'll just go get a Ph.D." premise ---
numerous areas of academia are contributing to innovating machine
learning algorithms. Even if your decision is going for a doctorate, you
still need to decide your preferred concentration of study.

The useful approach to aiming your intellectual crosshairs is not to
"know how much math you need." Rather, consider it more of a
sequential process (of which I imagine the majority will stop at step
1):

1.  Given the descriptions above, what aspect(s) are you truly
    passionate about digging into day after day, for years of your life?
2.  If you still chose "machine learning algorithm development", you
    still will eventually need to become more familiar with some
    subjects than others. Your time and mental effort is a zero-sum game
    --- you simply cannot master all of the subjects equally with finite
    resources.

It's worth noting that choosing from the above topics is, of course, not
black and white. But, similar to directing your attention and effort,
gaining proficiency in each of these areas will come necessarily at a
missed opportunity to specialize in others. I am a strong believer in
operating in the gray areas between "generalist" and "one-trick pony",
the important part is that you understand your position on that spectrum
and work with it.

## What Software Do You Love?

![Source: [Microsoft Azure Blog](https://docs.microsoft.com/en-us/azure/architecture/data-guide/big-data/)](/static/img/2020-01-11-golden-ticket-big-data-pipeline.png)

Amidst all the jargon mentioned whenever trying to differentiate these
roles, here's a separate, crude way to estimate your passion's
direction: what software libraries and languages do you love using and
learning about the most? While these answers won't be perfectly
accurate, they should give you a fair idea to do some more digging on.

Do you love working with container orchestration in Kubernetes, or
enjoying how much Go has combined the best of the Java and C++ worlds
for the modern ML enthusiast? You may be headed on the **ML-enabled
software engineer** path.

Do you love working with data and visuals, but not so much the coding
that it takes? If you love a good pivot table in Excel or a beautiful
dashboard in Tableau, then it sounds like I'm talking to a **data
analyst.**

"Forget the models, man. They can't do much if the right data doesn't
get to them. Models need scalable data delivery solutions." If these
words come out of your mouth, and you salivate over a reproducible
Airflow pipeline with Spark transforms in your AWS EMR cluster, you
should apply for **data engineer** positions.

How about those who just can't get enough of
_both_ the worlds of turning a
fresh whitepaper into a trained model
_and_ deploying it on a cloud
provider to reliably deliver value to clients everywhere? You never
quite fit in fully with the "I love math but not code" and the "I'll
integrate APIs all day, just don't make me do math" crowds
because you love doing both. Any day is a good day if you're data
munging with Pandas in a Jupyter notebook. You, my friend, are a proper
**machine learning engineer**.

Or is it you, who has scoffed at all of this software library and
language nonsense? You wish there was just one language and library
everyone used, so we could all focus on moving the state of the art
forward with statistical approaches, clever derivation assumptions, and
application of new mathematical breakthroughs. You'll learn what it
takes to make the computer do what you want, but until then you're at a
whiteboard developing your next algorithm. For you, dive into the world
of **data science** and **machine learning research**.

![Image by 
    [Kirk Fisher](https://pixabay.com/users/kirkandmimi-763448/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2115485)
    from
    [Pixabay](https://pixabay.com/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2115485)
](/assets/img/2020-01-11-golden-ticket-fork-in-road.jpg)

## Where To Go From Here

If you take nothing else from this article, let it be the following:

*Your road to the future of ubiquitous Machine Learning and AI does not
require mathematical rigor if you do not want it to.*

I believe the vast majority of folks ask the question because
subconsciously they want the answer to be "Not a lot." It's not
*exactly* that, the answer is "not necessarily a lot." The field is
expanding in all directions, and, if you couldn't tell by now, it's an
all-hands-on-deck endeavor. Pick up your favorite tool, and jump on
board!

`youtube: https://www.youtube.com/watch?v=H0ztMWR3C04`
