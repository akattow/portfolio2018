---
author: "Kat Tow"
linktitle: "Nerd Fitness"
title: "Nerd Fitness"
subtitle: "App research & design"
weight: 11
case_feature_img: "nerdfitness/NF3personas.png"
---
{{% section id="nf-top" %}}
### Introduction

Nerd Fitness (NF) is a popular blog and fitness community that encourages users to build healthy habits. NF uses a "Questing" system in which users form good habits to gather experience points.

Thhis project was an exercise in redesigning the Quest system to help users track the habits they are forming and guide them on their journey.

You can jump to:

* <a href="#nf-research">Research</a>
* <a href="#nf-define">Defining the Project</a>
* <a href="#nf-design">Design</a>
* <a href="#nf-tldr">Conclusion</a>
{{% /section %}}

{{% section id="nf-research" %}}
### Research

{{< figure src="/img/nerdfitness/NF_screenshot.png" caption="This project is not officially affiliated with Nerd Fitness." >}}

#### Architecture

I began my project with a critical analysis of the current system. NF began as a blog, and has grown into a large community, adding forums, guides, coaching, andmore. These new features have been added onto the previous system but not fully integrated. The site architecture is extremely fractured. Although users have a single login and a profile, they must navigate through a series of submenus to access their profile and other features.

I did not undertake a full review of the NF site architecture - suffice to say that it is badly disjointed and difficult for users to navigate without bookmarking sections important to them. Below is a brief diagram showing a section of improved architecture that would bring all of the different user profiles together at the top of the hierarchy.

{{< figure src="/img/nerdfitness/NF_existing_structure.png" caption="An abridged sitemap showing the primary functions for this project" >}}

#### User research

The goal of my user research was not to test actual interactions with the NF website, but to discover what parts of the disjointed system users found most useful, which features were being passed over, and why.

I began with qualitative observation within the user community (via the forums and Facebook groups). Using those insights, I created a survey for current active members of Nerd Fitness. I gathered responses from 72 users, including many additional comments and feedback from participants. You can read the <a href="https://docs.google.com/forms/d/e/1FAIpQLSfLzQDXB7hHOrPusfw5iOnaMaQYg7QIqqCzvAkz7FZrQrJ-LA/viewanalytics" target="_blank">survey and results.</a>

{{< figure src="/img/nerdfitness/NF_survey.png" caption="Google Forms was a quick and easy way to gather user input." >}}

I compiled three primary user personas. The personas are based not only on the survey participant data but also on qualitative observation in the official forums and Facebook groups and a few user interviews. You can <a href="https://www.figma.com/file/CRBE0MbZKZUSLlsn5rj3vzPk/User_Persona" target="_blank">read the full personas here.</a>

{{< figure src="/img/nerdfitness/NF3personas.png" caption="Most of the users who participated in my survey were women." >}}
{{% /section %}}

{{% section id="nf-define" %}}
### Defining the project

The NF site is fractured across multiple sub-domains and can be difficult to navigate. This is not just a technical challenge, but a content challenge. The site emphasizes a "Questing" system, but the quests are not organized in a meaningful or useful order.

Nerd Fitness emphasizes the importance of building habits, and encourages users to both form habits and chase specific goals. Both one-time goals ("do 10 regular push-ups") and habit-forming ("avoid soda for a week") are mixed together in the current system, with no functionality to sort between them. I wanted to re-design the architecture of the system define two different categories: one-time goals, Achievements, and ongoing goals, Quests.

I identified the following priorities for my redesign:

#### Quests & achievements

Problem: Quests can be filtered by fantasy class (i.e. "Warrior" or "Monk") but not by function or focus, i.e. ongoing/one-time and the incorporated categories of Mindset, Nutrition, and Fitness.

Solution: Separate and define Achievements and Quests, and improve search/filter functionality. Achievements should be one-time accomplishments that are tied to the user's "class" while Quests should be longer-term or ongoing efforts tied to health categories (Mindset, Nutrition, and Fitness).

#### Log & learn

Problem: 44.4% of users reported that they are not currently tracking habits in any way, and a large number of respondents mentioned varying degrees of dissatisfaction with their habit tracking system.

Solution: Integrate habit tracking into quest completion to encourage and enable users.

#### Guide & encourage

Problem: 92% of users surveyed reported that the quest system had influenced their decision to join NF (51% said it was a major factor in their decision) but only 22% said they are regularly updating their quest log. Additional qualitative observation of users shows many new users are confused and overwhelmed, and turn to other users for guidance outside of the system.

Solution: Provide a suggested Quest path for users to complete (similar to the existing workout path). This supports new users and expands the existing gamification that the system is designed around.

#### Convenient & accessible

Problem: The NF system is currently only accessible via the website. The site is not optimal on mobile, and requires users to hop between domains to check their quests, workouts, and forum activity. Moving between domains is difficult and often slow.

Solution: Improve the existing user profile to act as a central hub to directly access other features and functionality. This should exist as a progressive web app, supporting users habit-building with optional push notifications.
{{% /section %}}

{{% section id="nf-design" %}}
### Design

I began the design process by sketching out designs for a central user hub, as well as quest screens and interactions.

{{< figure src="/img/nerdfitness/sketch_display.png" caption="A few initial sketches" >}}

Feel free to <a href="https://www.figma.com/file/Yf2tI8mZeLjDYZmahhgoeu/NF-lo-fi" target="_blank">explore my low-fi prototype</a>. I iterated some smaller design items and added the NF images and branding for the <a href="https://www.figma.com/file/ARPOnGLyKl7WIcVIq1PXZc/NF-hi-fi" target="_blank">high-fi prototype.</a>

{{% flex %}}
{{< figure src="/img/nerdfitness/lowfi_current_quests.png" caption="Low-fi quests" class="flex-figure" >}}

{{< figure src="/img/nerdfitness/hifi_current_quests.png" caption="Hi-fi quests" class="flex-figure" >}}
{{% /flex %}}
{{% /section %}}

{{% section id="nf-tldr"%}}
### tl;dr
My research showed major problems for users tracking not only what they have accomplished, but what else they might want to accomplish as part of their overall fitness goals. Users typically ended up siloed in one section of the NF website (e.g. forums, their profile page) or out of the system entirely.

I ended up creating mobile prototypes for a progressive web app. This app reimagines the fractured architecture of the NF site while simultaneously offering one unified portal for users. It also defines the difference between Quests and Achievements, and offering tracking built in to the user's profile.
{{% /section %}}

Thanks for reading! You can always <a href="#nf-top">jump back to the top</a>.