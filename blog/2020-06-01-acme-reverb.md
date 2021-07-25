---
title: 'DeepMind Surges on, Releasing Acme and Reverb RL Libraries'
date: '2020-06-01'
description: DeepMind, an Alphabet subsidiary, continues to pump out useful software libraries for the machine learning research community. It just released Acme, an RL agent trainer, and Reverb, an RL agent data storage library.
publicationType: blog
category: blog
image: '/assets/img/2020-06-01-acme-reverb-logo.png'
---

![The Acme Logo](/assets/img/2020-06-01-acme-reverb-logo.png)

# The Gist

Deepmind, now wholly an Alphabeta subsidiary, is an innovating software
company focusing on Artificial Intelligence. You likely know of them due
to their accomplishments in training
[AlphaGo](https://deepmind.com/research/case-studies/alphago-the-story-so-far)
and then
[AlphaGoZero](https://deepmind.com/blog/article/alphago-zero-starting-scratch).
The AlphaGoZero reinforcement learning agent learned largely from
scratch to [become the Go world
champion](https://www.theverge.com/2019/11/27/20985260/ai-go-alphago-lee-se-dol-retired-deepmind-defeat).

Despite this and other radical successes, the company's academic
achievements have been faced with frustrations, due to a lack of
reproducibility. The ability to independently reproduce academic works
is the lifeblood for validation and further collaboration. Thus, it is
crucial to provide, especially in a world of increasing divide between
the compute-rich and everyone else.

DeepMind understands. They have gotten into a groove in recent years,
consistently releasing modular software libraries to aid fellow
researchers. These libraries have served numerous purposes, including
the following:

-   Reproducibility

-   Simplicity

-   Modularity

-   Parallelization

-   Efficiency

With the release of their Acme and Reverb libraries, this trend
continues nicely. In fact, the authors of the library explicitly call
out the high-level goals of Acme on their website:

> 1\. To enable the reproducibility of our methods and results  --- this
> will help clarify what makes an RL problem hard or easy, something
> that is seldom apparent.
>
> 2\. To simplify the way we (and the community at large) design new
> algorithms --- we want that next RL agent to be easier for everyone to
> write!
>
> 3\. To enhance the readability of RL agents --- there should be no
> hidden surprises when transitioning from a paper to code.
>
> [DeepMind Acme
> Authors](https://deepmind.com/research/publications/Acme)

# Ok, But How?

One of the ways in which they achieve these goals is through appropriate
levels of abstraction. The field of reinforcement learning is like an
onion, in that its best used in terms of its layers. At face value, you
have an agent that learns from data. Peeling back the data part, you see
that this data is either a stored data set or a live sequence of
experiences. Peeling back the agent, you see that it plans and takes
actions, resulting in a measured response from its environment. You can
again peel back more, and delve into policies, experience, replay, etc.
The illustration below shows this nicely.

![A hierarchical display of the reinforcement learning problem.
  [[Source]](https://deepmind.com/research/publications/Acme)
](/assets/img/2020-06-01-acme-reverb-unnamed.gif)

Another way in which Acme achieves its goals is via a scalable data
storage mechanism, implemented as the companion Reverb library. To
motivate this, consider the typical experience replay buffer for an
agent. How big does that buffer get? Usually, it's on the order of at
least tens to hundreds of thousands of experience tuples, and that's
per-agent. When working on a simulation involving thousands to millions
of agents, you get\....a lot.

By de-coupling, the notions of data producers (agents) and data
consumers (learners), an efficient data storage mechanism can sit
independently between the two. This is exactly what Reverb accomplishes.
As a company-backed library with over 70% code in C++ and a neat python
interface on top, I'm really excited to dive deep in this one.

`youtube: https://www.youtube.com/watch?v=3hnlDfJYWcI`

# Conclusion

By continuously releasing fantastic open source libraries like these,
DeepMind helps to lower the barrier for entry and level the playing
field for research in ML and AI. Pair this with low-cost cloud computing
solutions, and anyone can jump right in! Send in any cool projects you
make with these libraries. I can't wait to see them.

# Jump In

[\[Acme\] Github repository](https://github.com/deepmind/acme)

[\[Acme\] White
paper](https://github.com/deepmind/acme/blob/master/paper.pdf)

[\[Acme\] Google Colab
example](https://colab.research.google.com/github/deepmind/acme/blob/master/examples/tutorial.ipynb)

[\[Reverb\] Github repository](https://github.com/deepmind/reverb)

[\[Reverb\] Google Colab
example](https://colab.research.google.com/github/deepmind/reverb/blob/master/examples/demo.ipynb)
