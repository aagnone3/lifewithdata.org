---
title: 'With an AWS Copilot, Give Kubernetes a Second Thought'
date: '2020-08-22'
description: Kubernetes is a fantastic container orchestration tool for scalable cloud computing applications. However, we don’t always need all of its batteries included. Enter ECS, with its convenient copilot CLI.
publicationType: blog
category: blog
image: '/assets/img/2020-08-22-aws-copilot-copilot.jpg'
---

![Photo by 
  [Oscar Sutton](https://unsplash.com/@o5ky?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
  on
  [Unsplash](https://unsplash.com/s/photos/copilot?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
](/assets/img/2020-08-22-aws-copilot-copilot.jpg)

# Who Cares?

Kubernetes is a fantastic container orchestration tool for scalable
cloud computing applications. After years of development and use
internally, Google open-sourced the tool in 2014, leading to an
explosion of adoption from small businesses and enterprises alike. That
being said, we don't always need all of its batteries included. Although
it provides a relatively convenient
[declarative](https://medium.com/@zach.gollwitzer/imperative-vs-declarative-programming-procedural-functional-and-oop-b03a53ba745c)
interface via YAML configuration files, a solo developer or small team
still has numerous details to worry about for deployment, such as the
following:

-   Virtual private cloud (VPC)

-   SSL certificate

-   Load balancer

-   Container registry

All of these details are crucial for managing a cloud solution, and some
focus on this area as their main job. However, others want to focus on
the application itself.

In many small projects, you don't have a complex 80-bajillion-container
behemoth requiring Kubernetes for orchestration. I don't have stats for
this, but I bet most proof-of-concept projects consist of 1-4 containers
(Aside: sounds like a fun project to parse Github/Docker Hub to find
out). For these projects, having a rather straight-forward way to tell
your cloud provider "hey, here's a container image. Put this up in the
sky and charge me for what it consumes" would suffice.

Enter ECS, with its convenient new CLI `copilot`.

# From App to Deploy, Fast

I put together a demo application to drive this process and allow for
you to quickly see it in action. For the doers, you can find the link in
the
[Resources](https://www.lifewithdata.org/blog/aws-ecs-copilot-cli#resources)
section below. Let's take an off-the-shelf sentiment analyzer from the
NLTK library, and serve sentiment scores for text inputs using my new
favorite python API library: FastAPI. There is absolutely no need for me
to give an overview of FastAPI, because one of the following fits your
case:

1.  You already know and love it

2.  You are about to, via its [great
    documentation](https://fastapi.tiangolo.com/)

Remembering, application developers mainly care about 1) the application
code and 2) the container it sits in. Well, here they are.

`gist:368087abdc6c18af160e33a6568255db#fastapi-sentiment-routes.py`

`gist:d9bafc8754efacc0b9657f7a802dc2dc#fast-api-sentiment-dockerfile`

There's a `Makefile` with some convenience goodies as well, but I won't
throw that in your face. Check it out
[here](https://github.com/aagnone3/fastapi-sentiment/blob/master/Makefile)
if you're curious.

Now that we have our app, the deploy sequence is as simple as something
like below.

```bash
make build test
copilot init
copilot env init --name prod --profile default --app fastapi-sentiment
copilot svc deploy --name fastapi-sentiment --env prod
```

For those curious about seeing inside of the flow of the `copilot`
commands above, check out the show below, taken from Efe Karakus's
article on the AWS blog.

![An example terminal flow of initializing a copilot deployment
  [source](https://aws.amazon.com/blogs/containers/aws-copilot-an-application-first-cli-for-containers-on-aws/?nc1=b_rp)
](/assets/img/2020-08-22-aws-copilot-copilot2.gif)

You may be wondering how this compares to the canonical `kube apply -f
deployment.yml`, thinking that it's more commands to achieve the same
thing. Remember that the commands above will set up both your
[infrastructure and application]{style="text-decoration:underline"}.
Therefore, the equivalent comparison for a Kubernetes application would
be to combine all of the infrastructure-as-code (IaC) setup with the
Kubernetes config files. That...is much more work.

# We're Live

![Photo by 
  [Wil Stewart](https://unsplash.com/@wilstewart3)
  on
  [Unsplash](https://unsplash.com/s/photos/cheer?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
](/assets/img/2020-08-22-aws-copilot-beers.jpg)

With those few commands, our application is now publicly available (if
you so choose) for prime time. Not bad for a few lines of code. All of
this time saved can now be used for more prototyping, testing, or
playing with your cat.

![Some simple commands demonstrating access to the deployed
API](/assets/img/2020-08-22-aws-copilot-demo.gif)

This demo only scratches the surface of what ECS and `copilot` can and
will do. There are resources for pipelines, planned integrations with
`docker-compose`, and simple options for CI/CD integration. For more
reading, check out the resources below.

# Resources

- [Copilot wiki](https://github.com/aws/copilot-cli/wiki)
- [Copilot announcement
  article](https://aws.amazon.com/blogs/containers/introducing-aws-copilot/)
- [Code for my demo](https://github.com/aagnone3/fastapi-sentiment)
