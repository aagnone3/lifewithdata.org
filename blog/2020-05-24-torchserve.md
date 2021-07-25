---
title: 'PyTorch Levels Up Its Serving Game with TorchServe'
date: '2020-05-24'
description: With TorchServe, Facebook and AWS continue to narrow the gap between machine learning research and production.
publicationType: blog
category: blog
image: '/assets/img/2020-05-24-torchserve-pytorch.png'
---

![PyTorch logo](/assets/img/2020-05-24-torchserve-pytorch.png)

With TorchServe, Facebook and AWS continue to narrow the gap between
machine learning research and production.

In recent years, PyTorch has largely overtaken Tensorflow as the machine
learning model training framework that is 
[preferred for research-leaning data scientists](https://pureai.com/articles/2019/10/10/machine-learning-framework-popularity.aspx).
There are a few reasons for this, but mainly that Pytorch is built for
Python as its first-class language of use, whereas Tensorflow's
architecture stays much closer to its C/C++ core. Although both
frameworks do have C/C++ cores, Pytorch does *loads more* to make its
interface [pythonic](https://docs.python-guide.org/writing/style/).
For those unfamiliar with the term, it basically means the code is easy
to understand and doesn't make you feel like an adversarial teacher
wrote it for an exam question.

Pytorch's cleaner interface has resulted in mass adoption for folks
whose main priority is to quickly turn their planned analyses into
actionable results. We don't have time to play with a static
computation graph API that makes me feel like a criminal for wanting to
place a breakpoint to debug a tensor's value. We need to prototype
something and get moving onto the next experiment.

# It's Not All Sunshine & Rainbows

However, this advantage comes at a cost. With Pytorch, we can easily
churn through experiment after experiment, tossing results over the
fence to be put into production at a similar speed. Sadly, getting these
models serving in production has been slower than the experimentation
throughput due to a lack of production-ready frameworks that encapsulate
away API complexity. At least, these frameworks have been missing for
Pytorch.

Tensorflow has long had a truly impressive model serving framework,
[TFX](https://www.tensorflow.org/tfx). Truthfully, there's not much
missing in its framework, provided that you are knee-deep in the
Tensorflow ecosystem. If you have a TF model and are using Google Cloud,
use TFX until it breathes its last breath. If you are not in that camp,
combining TFX and PyTorch has been anything but plug and play.

# A New Hope

Fear no more! PyTorch's 
[1.5 release](https://pytorch.org/blog/pytorch-library-updates-new-model-serving-library/)
brings the initial version of 
[TorchServe](https://pytorch.org/serve) as
well as experimental support of
[TorchElastic](https://github.com/pytorch/elastic) with Kubernetes for
large-scale model training. Software powerhouses Facebook and AWS
continue to supercharge PyTorch's capabilities and provide a
competitive alternative to Google's Tensorflow-based software
pipelines.

> TorchServe is a flexible and easy-to-use library for serving PyTorch
> models in production performantly at scale. It is cloud and
> environment agnostic and supports features such as multi-model
> serving, logging, metrics, and the creation of RESTful endpoints for
> application integration.
>
> [PyTorch Docs](https://pytorch.org/blog/pytorch-library-updates-new-model-serving-library/)

Let's parse some of those qualities because they're worth a focused
repetition:

-   Serve PyTorch models in production performantly _at scale_
-   Cloud and environment _agnostic_
-   Multi-model serving
-   Logging
-   Metrics
-   RESTful endpoints

Any ML model in production that has these characteristics is bound to
make your fellow engineers very happy.

# Let's TorchServe DenseNet

TorchServe provides most things you'd expect from a serving API right
out of the box. On top of that, it additionally offers 
[default inference handlers](http://pytorch.org/serve/default_handlers.html) 
for image-based and text-based models. Due to my audio background, I'd be
remiss to not slip in my complaint that once again audio-based models
are left out of first-class support. Audio remains the black sheep in
the machine learning world for now! Alas, I digress...

The 
[DenseNet](https://towardsdatascience.com/densenet-2810936aeebb)
architecture, which yields good results on image classification tasks,
is provided as a default model in TorchServe. The PyTorch engineers
provide a 
[pre-built docker image](http://pytorch.org/serve/install.html#running-with-docker), but I
[added](https://github.com/aagnone3/pytorch-serve-overview/blob/master/Dockerfile)
a few things to it for the demonstration below. If you want to re-create for yourself, run the four 
[commands here](https://github.com/aagnone3/pytorch-serve-overview#steps).

## Up and Running

With a few passed command-line arguments to the `torchserve` command, we
have a production-ready service ready to provide model predictions.
Without bogging down the article with the nitty-gritty, you can use a
quick driver script to pump an image through the server from either a
URL or local path.

Cliche time! Cats and dogs, here we go.

![A (cute) puppy](https://github.com/aagnone3/pytorch-serve-overview/blob/master/images/puppy.jpg?raw=true)

```bash
Blenheim_spaniel: 97.00%

Papillon: 1.40%

Japanese_spaniel: 0.94%

Brittany_spaniel: 0.41%
```

Spot on! Three of the top four as spaniel sub-breeds, and around 1% of
the not-so-different papillon breed isn't anything to clamor about.

How about a teeny tiny kitten, **but** with an extra fur hat on? I guess
his natural fur and ears weren't good enough for the photo? Regardless,
surely this won't change too much as far as the network's
predictions...

```bash
./query.sh images/kitten-2.jpg
```

![A kitten](https://github.com/aagnone3/pytorch-serve-overview/blob/master/images/kitten-2.jpg?raw=true)

```bash
Egyptian_cat: 24.90%

Marmoset: 20.75%

Tabby: 11.22%

Patas: 10.17%
```

Well then...

There's certainly a majority vote in the top 4 for cats, but the
predictions barely edge out the Marmoset and Patas predictions, which
are both classifications for\...monkeys.

![A Marmoset monkey
    [[Source]](https://i.pinimg.com/originals/dc/3f/30/dc3f30c60c17cd798fd668225f221a47.jpg)
](/assets/img/2020-05-24-torchserve-marmoset.jpg)

![A Patas monkey
    [[Source]](https://i.pinimg.com/originals/5f/9b/40/5f9b4037e77df9c6fa5a91896299f425.jpg)
](/assets/img/2020-05-24-torchserve-patas.jpg)

Not as cute.

Ok, one more! How about Troy Polamalu, a former NFL player whose _hair_ at one point was 
[insured for $1 million](https://www.huffpost.com/entry/troy-polamalu-hair-insure_n_700047)
by the company Head and Shoulders?

```bash
./query.sh images/polamalu-hair.jpg
```

![Troy Polamalu's hair](https://github.com/aagnone3/pytorch-serve-overview/blob/master/images/polamalu-hair.jpg?raw=true)

```bash
Sarong: 31.01%

Miniskirt: 27.77%

Wig: 20.82%

Neck_brace: 4.00%
```

Well...A for effort, I guess. Having a decent chunk of belief in the
presence of a wig definitely makes sense. I wonder whether it's the
tights, the total, or something about the ridiculousness of the hair
that causes the sarong and mini-skirt predictions. For the curious,
now's a great chance to apply 
[attention techniques](https://lilianweng.github.io/lil-log/2018/06/24/attention-attention.html#soft-vs-hard-attention)
to debug what parts of the image were used heavily in influencing the classification.

# TorchServe In Action

One step lower, here's a demo of some raw cURL commands. Keep in mind,
all of this API behavior came out of the box. All I provided was the
choice of model and the input image.

![Driving a local TorchServe instance](2020-05-24-torchserve-pytorch-serve-demo-2.gif)Driving a local TorchServe instance

# Conclusion

I've barely touched the surface of TorchServe, and that's a good
thing. If I could demonstrate all of its functionality in a simple blog
post, it would be nowhere near production ready. Maybe allow a few more
versions to turn over before putting it behind anything
mission-critical. But Facebook and AWS have set an exciting foundation
for greasing the skids between PyTorch-based research and production.
