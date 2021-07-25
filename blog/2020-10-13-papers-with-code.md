---
title: 'Papers with Code + arXiv = Reproducible, Organized Research'
date: '2020-10-13'
description: Millions of scientific articles are shared openly via arXiv, a Cornell-powered website that focuses on open access to research. The Papers with Code website hosts academic papers which also share their backing software so that experiments can be faithfully reproduced. Through a joint collaboration, Papers with Code now provides category classification and code references for articles in the arXiv database.
publicationType: blog
category: blog
image: '/assets/img/2020-10-13-papers-with-code-pwc2.jpg'
---

![Easily browse 
  [state-of-the-art machine learning code](https://paperswithcode.com/sota) 
  on Papers with Code
](/assets/img/2020-10-13-papers-with-code-pwc2.jpg)

# Synopsis

Millions of scientific articles are shared openly via
[arXiv](http://arxiv.org/), a Cornell-powered website that focuses on
open access to research. The 
[Papers with Code](https://paperswithcode.com/) website hosts academic papers which
also share their backing software so that experiments can be faithfully
reproduced. Through a joint collaboration, Papers with Code now provides
category classification and code references for articles in the arXiv
database.

# arXiv Distributes Research Findings

We all love [arXiv](http://arxiv.org/). Despite some quirks here and
there, the premise is fantastic. The website provides an open-access
archive to physics, mathematics, computer science, quantitative biology,
quantitative finance, statistics, electrical engineering and systems
science, and economics. As of October 2020, the site has over 1.7
million articles published. Anybody can access these articles at any
time for no cost. This enables knowledge to be shared at a rate unheard
of in previous generations, while still maintaining author attribution
for credit assignment purposes.

Previously, new research developments mainly spread through the use of
academic journals, which were human-prepared and likely not free. While
this process achieves organization and sharing of information, it is
biased and it is exclusive. The process is biased due to the collective
biases of the workers that prepared the journals, accepting some and
rejecting others. Of course, this likely works more often than it
doesn't; however, I believe it's far from perfect. Additionally, the
process is exclusive because it puts a price tag on obtaining the
information. Yes, the world runs on exchanging items of value. That does
not mean that value must be currency, nor does it mean that the currency
must come directly from the end consumers.

The development of arXiv aids the movement towards freer information
flow in the world. With this site, ground-breaking research can now
disseminate through the world as fast as the internet's cables can pump
it. Additionally, due to the open nature of the website, anyone can use
the [arXiv API](https://arxiv.org/help/api) to programmatically peruse
the articles. Once you have an API, you. have a data set. Once you have
a data set, you have the potential for beautiful visualizations, such as
this one.

![A high-level view of 
  [Paperscape](https://paperscape.org/)'s
  interaction visualization of arXiv
  articles.
](/assets/img/2020-10-13-papers-with-code-paperscape.png)

# Papers with Code Distributes Reproduction of Research Findings

The fact that arXiv enables open research sharing alone is great for the
global research community. However, the vast majority of new research in
scientific fields now has software backing the research's findings.
Failing to provide that software corresponds to a failing to provide all
of the assets required to validate the research. In an
information-centric world where most of the data available 
[has been created in the past few years](https://www.mediapost.com/publications/article/291358/90-of-todays-data-created-in-two-years.html),
the ability to use software to independently demonstrate that a
research's findings are valid has become ever more important. Long gone
are the days where you could read a paper and immediately know its
validity. Randomized optimization algorithms and varying data sources
require software and data to be provided in order to fully validate
modern research.

![A few of the 
  [highest-rated repositories](https://paperswithcode.com/greatest) 
  on Papers with Code.
](/assets/img/2020-10-13-papers-with-code-pwc.png)

Papers with Code (PwC), a website which organizes access to technical
papers which also provide the software used to create the paper's
findings, has grown immensely in the past few years. Coupled with the
increase of publicly-available data sets, modern research has started to
converge back towards full transparency and credibility. PwC has been
consistently improving their website as well. One can easily navigate
the state of the art via browsing either by task (e.g. object detection,
sentiment analysis, etc) or by method (e.g. attention, convolutions).
Additionally, as seen below, PwC also uses data collected from the
papers to track how software frameworks and code availability are
trending over time.

This service empowers the common user to enjoy the state of the art of
machine learning like never before. Want to see some of the best models
related to
[COVID-19](https://paperswithcode.com/task/covid-19-detection)? How
about [word
embeddings](https://paperswithcode.com/task/word-embeddings), [image
generation](https://paperswithcode.com/task/image-generation), or
[speech
recognition](https://paperswithcode.com/task/speech-recognition)?
Everything is right at your fingertips.

![Time-based trends of framework usage and paper code availability, managed by 
  [Papers with Code](https://paperswithcode.com/trends).
](/assets/img/2020-10-13-papers-with-code-pwc-trends.png)

# arXiv with PwC Democratizes Modern Science

The greatest of results happen through collaboration, and these two
websites are definitely no exception. PwC has teamed up with arXiv to
hook directly into their website, providing readers links to software
implementations for all papers that share them. There is no more need to
click into the paper and search footnotes and references, hoping for the
magical "GitHub" keyword to appear in all its majesty. Although a
seemingly minor change, this integration increasingly encourages authors
to provide these additional experiment details with submissions so that
readers can better validate the findings. I imagine any model trained to
predict the value of a paper would place high weight on the has_code
feature!

![A preview of the 
  [EfficientNet arXiv page](https://arxiv.org/abs/1905.11946) 
  with links to Papers with Code.
](/assets/img/2020-10-13-papers-with-code-arxiv-pwc.png)

The integration between PwC and arXiv also provides auto-categorization
of papers, based on their titles and abstracts. Now, authors will have
the option to adopt the auto-suggested category of their paper, in order
to better organize content and increase reader reach. Continuing the
spirit of open access, they have made the model repository publicly
available [right here](https://github.com/arXiv/arxiv-classifier). How
great is that? A previous version of this model was not made available,
which caused lots of confusion about its inner workings. That problem
has now been resolved.

# Conclusion

Due to the statistical nature of modern technology research, findings
now require software and data experiment details in addition to white
paper documentation for validation. The staggering rate of information
production also needs open access and automated organization. The arXiv
and Papers with Code websites have been making large headways in these
spaces, bringing order from the chaos. In a recent collaboration, we now
can enjoy integration between these services, as well as the benefit
created from the combination of their data. The whole is definitely
greater than the sum of the parts.

Keep learning!

# Links

- [arXiv](http://arxiv.org/)
- [arXiv API](https://arxiv.org/help/api)
- [PwC arXiv classifier](https://github.com/arXiv/arxiv-classifier)
- [Papers with Code](https://paperswithcode.com/)
- [Paperscape](https://paperscape.org/)
