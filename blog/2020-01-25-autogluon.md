---
title: 'With AutoGluon, AWS Brings AutoML to their Platform'
date: '2020-01-25'
description: 'With the release of AutoGluon, AWS now offers both managed and automated machine learning in its cloud platform, further lowering the bar into ML & AI.'
publicationType: blog
category: blog
image: '/assets/img/2020-01-25-autogluon-painting.png'
---

![Gluon's Logo](/assets/img/2020-01-25-autogluon-gluon.png)

AWS has responded to its competitors' developments in the deep learning
AutoML space, introducing AutoGluon throughout its machine learning
cloud services. The framework builds upon existing frameworks to provide
a focused, modular solution for learning how each digital brain is
shaped for a specific learning task. However, with similar developments
in this space, a core question arises. *Are they playing for the team of
open source, or just looking to make everyone use the software that
_they_ have control over?*

Either way, let's step through the lineage of AutoGluon, to fully
understand its position in the space.

## MXNet

MXNet, another Apache project, is the chosen deep learning architecture
framework for Amazon. Although several other such frameworks exist,
Amazon deserves credit here for donating the project to the Apache
Software Foundation. Doing so aligns with some core goals of open source
collaboration, which is to standardize and lower the bar for similar
efforts.

## Gluon

Gluon, an imperative software framework for deep learning models
[launched in 2017](https://aws.amazon.com/blogs/machine-learning/introducing-gluon-an-easy-to-use-programming-interface-for-flexible-deep-learning/)
by AWS and Microsoft, aims to bring some order from the chaos of the
numerous similar-but-different machine learning software libraries.

![
  [Source](https://medium.com/@phunter/deep-learning-for-hackers-with-mxnet-2-neural-art-284f3f5ac3ab)
](/assets/img/2020-01-25-autogluon-painting.png)

Furthermore, the Apache nature of the Gluon project has led to some
fantastic learning material created around it. Its main website has an
ever-growing body of 
[lessons and examples](https://gluon.mxnet.io/#deep-learning-the-straight-dope) 
from classical machine learning to standard deep learning to Bayesian deep
learning. The authors have a rather intriguing goal:

> To our knowledge there's no source out there that teaches either (1)
> the full breadth of concepts in modern deep learning or (2)
> interleaves an engaging textbook with runnable code. We'll find out by
> the end of this venture whether or not that void exists for a good
> reason.
>
> [Source](https://gluon.mxnet.io/#deep-learning-the-straight-dope)

## AutoGluon

AutoGluon now layers on top of MXNet and Gluon, offering automated
learning of neural networks for a given text, image, or tabular data.
The library includes a few of the state-of-the-art algorithms for
[neural architecture search](https://autogluon.mxnet.io/tutorials/nas/index.html) 
(NAS), both for conventional deep learning architectures and for reinforcement
learning agents. If you are interested in the nut & bolts of the
approach, see 
[Jesus Rodriguez's article on Medium](https://towardsdatascience.com/amazon-gets-into-the-automl-race-with-autogluon-some-automl-architectures-you-should-know-about-aceaaccaeb8b).

## Working Together, But Separately?

Naturally, AWS has also made it seamless to utilize AutoGluon within its
machine learning platform, Sagemaker. However, despite the AWS-Microsoft
collaboration on Gluon, the two have notably created their own NAS
libraries. Just last month, Microsoft open-sourced 
[Project Petridish](https://www.microsoft.com/en-us/research/blog/project-petridish-efficient-forward-neural-architecture-search/),
a forward architecture search library. Most importantly, while they may
eventually improve upon cross-cloud compatibility, both libraries are
currently deeply coupled with their respective clouds.

![
  [Source](https://towardsdatascience.com/battle-of-the-deep-learning-frameworks-part-i-cff0e3841750)
](/assets/img/2020-01-25-autogluon-frameworks.png)

The figure above shows how large companies have been rolling out
ever-more software libraries, hoping that developers stick to *theirs*.
Additionally, there is a glaring deficiency of direct attempt at
*compatibility between them*. It's not so much "hey everyone, let's
all share this" as much as it is "hey everyone, use ours and not
theirs." This reminds me of the battle amongst telephone providers. How
many of you have enjoyed the strain of trying to sync an Android phone
with something based on the iCloud, or vice versa?

## Get Your Hands Dirty

Ready to give the library a try? Whether you deploy locally or in the
cloud, here are a few options for diving in:

### Pre-trained Models

Gverab one of the 
[pre-trained models](https://autogluon.mxnet.io/model_zoo/index.html) 
off the shelf and apply it to your own task! Supporting code to *re-train* that same
model is also provided for re-producibility.

### Kaggle

[Kaggle](https://www.kaggle.com/) scratches most machine learning itches
in practice. The platform offers ways to learn, collaborate, and compete
with others through open data sets, shared workspaces, and formal
competitions. AutoGluon's docs share some
[snippets](https://autogluon.mxnet.io/tutorials/tabular_prediction/tabular-kaggle.html)
for quickly applying AutoGluon in your Kaggle workspaces.

### Sagemaker

The Sagemaker platform greatly 
[improved in 2019](https://aws.amazon.com/blogs/aws/amazon-sagemaker-studio-the-first-fully-integrated-development-environment-for-machine-learning/),
offering what AWS claims is the first true IDE for machine learning in
Sagemaker Studio. It's still too soon to definitively say, but that
platform shows great promise.

### I'm Just Trying to Keep Up

For those keen on simply keeping up with developments in the neural
architecture search space,
[automl.org](https://www.automl.org/automl/literature-on-neural-architecture-search/)
does very well at keeping up with developments.

***
