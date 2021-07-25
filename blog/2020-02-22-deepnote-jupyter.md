---
title: 'Deepnote Sets Course to Become the Jupyter Killer'
date: '2020-02-22'
description: Deepnote, a San-Fransisco-based startup, aims to provide a better Jupyter notebook experience through seamless features and external integrations
publicationType: blog
category: blog
image: '/assets/img/2020-02-22-deepnote-jupyter-deepnote.png'
---

![A Deepnote notebook in action](/assets/img/2020-02-22-deepnote-jupyter-deepnote.png)

DeepNote, a small [team](https://www.deepnote.com/) based out of San
Fransisco, wants to take the place of Jupyter in your data science
workflows. I think they just might do it.

> If you are a data scientist like me, you probably spend more time on
> engineering tasks rather than on actual research. Installing
> libraries, managing databases, keeping track of your experiments,
> debugging code, running out of memory... You get the idea.
>
> The "About" [page](https://www.deepnote.com/about/) of DeepNote

Jupyter notebooks are fantastic for data science prototyping. In a
single environment, one can seamlessly perform exploratory analysis,
visualize data, and build ML model prototypes.

That being said, not too long ago, most data scientists thought the
[Spyder IDE](https://www.spyder-ide.org/) was the be-all-end-all. Even
the greatest of tools eventually meet their demise, whether due to lack
of fit, lack of ongoing support, or something else entirely.

Despite the wild popularity of Jupyter notebooks in the data science
community, many have also pointed out some important weaknesses. The
ability of new tools to resolve weaknesses in existing tools in a better
or faster way usually enables their adoption over the status quo
toolset(s). Let's take a look at some of the exciting differentiators
DeepNote offers.

# Real-Time Collaboration

Google's suite of online collaboration tools (Docs, Sheets, Slides,
etc) took a huge bite out of Microsoft Office's market share, without
many added features. How did they do it? The main differentiator that
left the world beating a path to their door was *real-time
collaboration*.

By collaborating live with your co-workers in Google's suite, you no
longer need to develop things in lock-step or hassle with merging
differences. Furthermore, you always know where your collaborators are
currently working, which makes dividing work even easier.

DeepNote brings this functionality right out of the box, enabling
seamless collaboration in a shared computation environment. Indeed, this
does bring about issues of the namespace changing around you. However, I
imagine this is a much better problem to face than that of having to
share Jupyter notebooks that need to be re-run to acquire a given state.

Real-time DeepNote collaboration in action
([source](https://docs.deepnote.com/))

Additionally, DeepNote provides various permission levels for each
collaborator: view, execute, edit, admin, and owner. This allows a ton
of control over operationalizing these notebooks.

First, imaging a teacher-student scenario. An instructor of an online
course can walk through a shared notebook with the virtual classroom.
The instructor possesses the admin/owner permission, while the rest of
the classroom contains only view permissions.

As another example, consider a superior reviewing the work of a team
member. The team member uses owner permissions to have complete control
over the notebook. The superior uses edit permissions to provide inline
feedback, but cannot execute any of the cells. By keeping execute
permissions with only the team member, the superior cannot change (read:
contaminate) the team member's namespace.

# Variable Explorer

One aspect of Spyder IDEs that I really missed in Jupyter notebooks (at
least, without an extension/widget) is an easily-accessible namespace
explorer. Sure, there are the `who`/`whos` magic commands. However,
these do not really stand up to a comparison with Spyder's offering.

Once again, we have DeepNote filling the gap!

![DeepNote notebooks provide beautiful summaries of your variables
([source](https://docs.deepnote.com/))](https://miro.medium.com/max/1200/0*ABMuncTGdAs6FRdu)

Aside from a solid variable explorer, no self-respecting notebook
environment would be complete without a pretty pandas `DataFrame`
display.

![Yes, DeepNote notebooks have pretty pandas `DataFrame` displays too
([source](https://docs.deepnote.com/))](https://miro.medium.com/max/1400/0*M2ij6UhwMJs91omy)

.

# DeepNote Attaches to Cloud Hardware

I'm sure you've heard of the rule of thumb (more of a complaint,
really) that around 80% of data science is everything but the math and
stats. In the cloud computing setting, this ratio becomes more like
90/10, with an extra 10% of time lost to putting the right compute
horsepower underneath your notebooks.

![Easily view and choose which hardware your notebook is running on
    [[Source]](https://docs.deepnote.com/)
](/assets/img/2020-02-22-deepnote-jupyter-deepnote-hardware.png)

DeepNote understands your pain and provides seamless access to
cloud-based hardware to fit your every need. By seamless, I mean you set
everything up in the notebook interface itself! Oh, and by the way, they
don't shut down your kernel unless it's actually idle.

# Python Package Management

Python has a great package management system. DeepNote realizes that and
adheres to a `requirements.txt` file in its working directory. Even
then, it's still easy to forget to install some dependencies upfront.
When this happens, we don't realize the omission until we try to import
and hit a failure!

To aid with this, DeepNote's notebooks will actively monitor your
package imports, notifying you of dependencies missing from your
declared requirements. Also, if the requirements file doesn't yet
exist, it takes a best guess at what the file should be. Spoiler alert:
the guess is usually correct.

![The DeepNote package manager recommending the install of a missing dependency
    [Source](https://docs.deepnote.com/)
](/assets/img/2020-02-22-deepnote-jupyter-road.gif)

# DeepNote Integrates With...A Lot

![An example of creating a new project
    [Source](https://docs.deepnote.com/)
](https://miro.medium.com/max/1400/0*-Zr-Gsl18NX4LbHp)

Lastly, DeepNote offers virtually all of the integrations you would
expect to use. For keeping all of your notebook's organized, you can
choose from various connections to source control repositories. This can
be utilized during notebook creation as well as for writing back
updates.

Source control aside, DeepNote notebooks also allow connections to cloud
computing data stores, such as S3, GCS, and common database engines.

![Formally connect to various cloud infrastructure
([source](https://docs.deepnote.com/))](https://miro.medium.com/max/1400/0*rfOEwJNi7FW4pgNB)

# That's It For Now

While DeepNote is not yet in the realm of truly killing off Jupyter, the
trajectory certain exists. I'm eager to see how they continue! However,
don't just take my word for it. Sign up for their [early access
program](https://www.deepnote.com/), just like I did. They responded
within a week, and we've been casually discussing improvements since!
Don't just complain about the status quo, be a part of improving it.
