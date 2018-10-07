---
author: "Kat Tow"
linktitle: "Online Learning Association"
title: "Online Learning Association"
subtitle: "IA and UX"
weight: 10
---
{{% section id="ola-top"%}}
### Introduction

This project was completed as part of a graduate course on Information Architecture at the University of Wisconsin - Milwaukee. The premise of the project is the redesign of a fictional company website. The project, and this case study, will refer to the fictional Online Learning Association (OLA), a professional association for those working in online learning, training, and development.

What follows is an excerpt from the final report. The full <a href="/IA_DesignReport.pdf">final report</a> is available as well.

You can jump to:

* <a href="#ola-context">Information Environment</a>
* <a href="#ola-ca">Competitive Analysis</a>
* <a href="#ola-ia-design">IA Design</a>
* <a href="#ola-wireframes">Wireframes</a>
* <a href="#ola-conclusion">Conclusion</a>
{{% /section %}}

{{% section id="ola-context" %}}
### Information Environment
#### Website Business Context
The redesign of the Online Learning Association (OLA) website (onlinelearningassociation.com) is essential to the support of OLA’s mission to provide learning, resources, networking, and professional development to online learning professionals. Developing and providing up-to-date resources and education creates a great deal of content on the OLA website.

#### Website Content
Most users arrive at the OLA website seeking information about a specific area of online learning, such as responsive design, AR/VR/immersive learning, education and development leadership, learning theories, and many more. To support different users with diverse preferences, backgrounds, and experience, OLA shares resources in many different types; blog posts, white papers, research reports, event descriptions, podcasts, conference recordings, webcasts, and videos. Although written posts and webpages dominate due to their relative ease-of-development, media recordings (e.g., webcasts, video, etc.) receive a large amount of traffic and rank highly in user surveys. These myriad content types are comprised of HTML pages, PDF documents, JPEGs, PNGs, MP4s, and MP3s. Accurately cataloguing the current array will allow clear direction in the bottom-up portion of the site redesign.

#### Website Users
##### Primary User Groups

* Instructional Designer
* Learning Technologist
* Education Manager
* L&D Executive

##### Secondary User Groups
* Teacher
* Education Consultant

#### User personas
{{< figure src="/img/ola/OLA_Persona_Melissa.jpg" >}}
{{< figure src="/img/ola/OLA_Persona_Jordan.jpg" >}}
{{% /section %}}

{{% section id="ola-ca"%}}
### Competitive Analysis

The first step in the redesign of the Online Learning Association (OLA) website, onlinelearningassociation.com, will be a competitive analysis of the eLearning Guild’s primary website, elearningguild.com. This analysis will not include publication sites run by the eLearning Guild. This report will focus on the main body of the eLearning Guild website, and will not focus heavily on the the conference sub-sites hosted on the same domain. However, many of the observations made regarding the primary site design also apply to the conference sections.

#### Organization Systems
##### Top-Down Structure

The eLearning Guild employs an ambiguous top-down structure, integrated with a hypertext structure. The primary top-down structure uses a task/topic hybrid organization scheme. A site map is available, although it does omit a few pages of the site. Functionally, top-level categories lead to the same page as their first child, however eLearning Guild has chosen to maintain the parent-child organization, perhaps in part to compensate for the shallow nature of certain sections.

*Note: The site map, and this report, do not include the taxonomy of the conference sites (Learning Solutions, Realities360, and DevLearn) which are hosted on the same domain. Each of these is constructed as full-fledged websites in their own right, and including their full taxonomy would require a much deeper list.*

##### Taxonomy
For the full taxonomy, see the <a href="/IA_DesignReport.pdf">final report</a> pages 8-10.

In reviewing the top-down taxonomy, it is fairly clear that the integration of the nonlinear hypertext structure creates the opportunity for confusion. For instance, users may click into one category’s “Library” or “Archive” and decide it isn’t what they want. If that user browses to another category’s Library and the same page loads, albeit with different filtered content, they may become confused. Understandability problems are very likely to ensue.

It’s easy to notice in the taxonomy that the top-down taxonomy is polyhierarchical. “Contact” exists as both a top-level and a child of “About the Guild.” “Conference Archive” and “Online Events Archive” exist inside both “Content” and “Events” (both lead to the “Curated Content” page). While the duplication of “Contact” is unlikely to cause any issues, the repetition of the Conference and Online Events Archives is almost guaranteed to cause understandability issues. Presumably, these were included under Content because they link back to the “Curated Content” page, as do all other Libraries/Archives/Directories, and are included under Events in order to improve findability for that content - users seeking a past recording from a live event may not look under “Content.” However, users who see the labels in both categories may become confused, a major understandability issue.

Overall, utilizing a top-down structure as the primary organizational principle for the website makes sense; it allows the user to quickly get a sense of the complex range of content and services provided by the eLearning Guild. Despite this, the site as-is features a number of potential understandability issues.

#### Website Labeling Systems
##### Contextual Links
Most pages on the eLearning Guild site feature hypertext links out to other pages, which is to be expected. However, there are occasional examples of contextual links to pages not included in the site’s navigation (e.g., “Types of Articles” and “Submitting Queries” are **only** accessible through contextual links on the “Call for Writers” page). Moreover, the design for contextual labels appear to have been developed ad-hoc, as they lack internal consistency on a number of fronts.

Below to the left, contextual links are included both as text in body sentences, lowercase. Later on the same page, contextual links appear as list items separated by pipes, capitalized. On another page (right) contextual links are used almost as a sub-menu unique to the page, as capitalized list items. These comprise internal inconsistencies across style, presentation, and syntax.

{{< figure src="/img/ola/contextual-links.png" caption="Retrieved February 18, 2018 from eLearingGuild.com" >}}

##### Headings
The headings of the eLearning Guild site are also subject to stylistic and syntactical inconsistency. A quick sampling of of on-page h1 headers reveals the following: “About Guild Research,” “Plus Package,” “Membership is FREE!” and “Exploring Topics Shaping our Industry.” The clear inconsistencies between verb/noun structure and capitalization are obvious with only a small (random!) sample. 
Aside from those issues with style and syntax, the labels are presented consistently and have no outstanding issues with granularity, comprehensiveness, or audience.

##### Icons
The eLearning Guild website makes some use of icons, but that use is strikingly inconsistent. Below, you will see that some, but not all, icons accompany textual labels. Some, but not all, icons are flat colors (the RSS Feed icon features a gradient square). Some, but not all icons are enclosed in boxes as part of the icon. In fact, although these labels are very inconsistent, it is unlikely that inconsistency will cause any major usability issues for site user. However, that does not exclude the fact that the icon system could be improved.

{{< figure src="/img/ola/icons.png" caption="Retrieved February 18, 2018 from eLearingGuild.com" >}}

##### Navigation System Labels
Most of the navigation system labels on the eLearning Guild website are straightforward and familiar; at the top level we see “Search,” “Login,” “Site Map,” and “About the Guild,” which are all easily understandable. They are accompanied by the verb-based labels “Join,” “Contact,” and “Request Info.” Other than those three, the navigation labels are consistently noun-based. Although this is a syntax inconsistency, it is unlikely to cause any user issues. Aside from that, the navigation labels are consistent in style, presentation, granularity, and comprehensiveness. However, there is not strong consistency or clarity in terms of audience.

Much more likely to cause understandability and findability problems are the labels “Content” and “Events.” There is some ambiguity here, these terms may not be clear to the audience. The child categories of “Content” are especially fertile ground for confusion. Users are unlikely to know or understand the difference between “Learning Solutions Magazine” articles and “Guild Publications;” between “Conference Archive” and “DemoFest Archive;” between “Product Directory” and “Supplier Directory.” Moreover, the distinction between a “Library,” “Archive,” and “Directory” is unclear. While these terms undoubtedly have clear meaning to internal stakeholders, many users are unlikely to understand the jargon.

##### Organization & Labeling
The labeling systems on the eLearning Guild website suffer from a clear lack of planning and guidelines. Many labels don’t differentiate themselves, are jargon-y, and don’t make a good impression. They are likely to cause users findability and understandability issues, resulting in a much longer path of discovery and a more complicated search/browse path for users. Paired with the unusual polyhierarchical top-down organization system, this seems to be a system built by internal stakeholders with little or no user testing, feedback, or information architecture from outside stakeholders.

#### Website Navigation Systems and Conventions
The eLearning Guild website features consistent global navigation across content (except for subsites, discussed below). The global navigation at the top of the page includes many of the navigation conventions covered by Krug (2014): a site logo which also acts as a home button, assorted utilities, the primary navigation, and a search bar. Breadcrumbs and indicators are absent. The primary navigation is basically the same as the top level of the site taxonomy, although the utility pages (e.g. “About the Guild”) exist at the same hierarchical level.

Some of the utilities are combined with the primary navigation in smaller viewports (Figures 2 & 3), and have the same treatment in the drop-down menu, making the links indistinguishable. One could even argue that these links (About the Guild, Contact, Info, and Site Map) are being treated as primary navigation. However, the nature of this content and the treatment of these links on the desktop view strongly suggests they are acting as utilities. It seems more likely, especially given other design elements on the site, that the designers worked “desktop-first” and the treatment of the utility links in the mobile drop-down was made identical for convenience. 

Surprisingly, the eLearning Guild site features no local navigation except for page titles. Breadcrumbs and “You Are Here’ indicators are conspicuously absent.

However, each of the Guild’s conferences has a subsite hosted on the elearningguild.com domain. These subsites have local navigation that replaces most of the global navigation: each subsite substitutes new primary navigation, part of the utilities, the search bar, and the footer navigation. They also replace the eLearning Guild site logo with a conference site logo. Although these subsites will not be considered any further since they rely on different architecture and design than the primary eLearning Guild site, the change in navigation is worth noting. Technically this is local navigation for the greater elearningguild.com web domain, yet the local navigation almost entirely replaces the (otherwise) global navigation.

#### Website Search Functionality
The eLearning Guild site presents a simple search as part of its global navigation. The search bar is present and consistent on every page except subsites (which replace most of the global navigation, see above).

The site’s search function does include the conference subsites, but the label allowing users to select each subsite is not well-defined: labels reading “Content Library” and “Events” may not communicate clearly to users who are unfamiliar with the Guild’s content. Somewhat more helpfully, the search also offers search zones of Source and Topic.

Search results include the representational components of title, date of publication, author, and source. Descriptive components include summaries and keywords. However, not all content items have all component information included or displayed. For instance, some items display different components. One result may display a title, a date, and keywords. However, buried in the keywords may be information on an author and an earlier date. Another search result may display a title, as well as subheads for the author, date, and source. Instead of keywords, the result displays the beginning of the article.

The search does not include advanced search functionality, although it does support revision via search zones (see above). After a search, results are initially ranked by relevance. Sort order options include Date (Oldest to Newest, Newest to Oldest) and Alphabetical (A-Z, Z-A). The search query is repeated in the results page. When results are filtered, it is easy to see where results came from. However, the initial search does not indicate that “all” zones are being searched. The results page does a fair job of explaining what happened to the user; it is easy to see the sort order setting and the number of results retrieved. However, if zero results are retrieved, the search does not offer further help.
{{% /section %}}

{{% section id="ola-ia-design"%}}
### Information Architecture Design
The following textual overview of the OLA redesign should inform and enhance the annotated wireframes for the site design, below this section.

#### Website Organization Systems
The redesigned OLA website organizes content by type. The top-level taxonomy, as identified in the site map diagram (below), groups content into six types: membership, resources, publications, events, careers, and general/company information.

{{< figure src="/img/ola/wireframe-sitemap.png" caption="OLA sitemap">}}

The competitive analysis conducted on the eLearning Guild website identified a number of issues with the taxonomy of that site, including an ambiguous hierarchy that often eschewed landing or navigation pages. The OLA website design avoids this mistake by assigning landing pages to each first-level category in the taxonomy clearly establishing the hierarchical structure for second- and third-level pages.

The eLearning Guild website utilizes a polyhierarchical structure, redirecting users to the same massive “Curated Content” page from various levels and categories, which ultimately results in an unintelligible hierarchy for the average user and difficulty rediscovering previously-found content even for experienced users. As demonstrated in the site map diagram for the OLA website, content is organized strictly within the top-down taxonomy. Although individual content items are searchable from the content database (via the Advanced Search feature) the returned search results will still direct the user to the appropriate level in the established hierarchy.

{{< figure src="/img/ola/wireframe-search.jpg" >}}

#### Website Labelling Systems
Continuing the direct comparison with the eLearning Guild site, the OLA design improves upon the hodgepodge nature of the eLearning Guild labelling system - or rather, the lack thereof. The eLearning Guild site features numerous h1 headers on single pages, inconsistent noun/verb choice among labels, and intermittent use of icons. The OLA design will rely on a consistent style guide for labelling, which includes semantic HTML hierarchy (improving accessibility as well) and consistent use of textual labels.

Regarding label choice, rather than presentation, the OLA site will again improve upon the missteps of the eLearning Guild design. Some labels on the eLearning Guild site were identified as ambiguous in the competitive analysis (e.g., “Product Directory”, “Conference Archive”, etc.). These labels were especially problematic within the polyhierarchical organization of the eLearning Guild site, since each label’s contextual link sent the user to the same “Curated Content” page (with filters applied). The OLA design makes use of some similar labels, but the more structured taxonomy and strict hierarchy eliminates some of the confusion seen in the eLearning Guild site. That site also suffered from confusing insider and marketing labels (e.g. “Industry Perspectives”) which the OLA site actively avoids.

#### Website Navigation Systems and Conventions
The problems caused by the eLearning Guild’s taxonomy are compounded in their global navigation. Although structurally sound, the nature of the “Curated Content” redirect is almost certain to leave users feeling as though they have navigated to the wrong place. The OLA design may here rest again upon the laurels of a stricter taxonomy and presents a fairly standard global navigation on both desktop and mobile views that matches the top-level taxonomy.

One major issue in the eLearning Guild’s navigation system is the total lack of local navigation. Again compounded by the shallow polyhierarchical structure, site pages lack all local navigation, or even indicators in the global navigation of the user’s current location. The OLA design remedies this issue directly with a “You Are Here” indicator in the global navigation, as well as breadcrumbs and “You Are Here” indicated local navigation.

The OLA design also makes content items significantly more findable than on the eLearning Guild site. By making use of landing pages, users are easily able to mentally map where content lives and how it is related to other parts of the site.

#### Website Search Functionality
The eLearning Guild site relied on sometimes-confusing labels in their search system, which also served as the primary navigation element to content items. This of course causes the site major findability issues, and the OLA design remedies this as previously discussed in the Navigation section.
{{% /section %}}

{{% section id="ola-wireframes"%}}
### Annotated Wireframes
{{< figure src="/img/ola/wireframe-homepage.jpg" caption="OLA homepage wireframe">}}
---
{{< figure src="/img/ola/wireframe-l1.jpg" caption="Wireframe for landing pages">}}
---
{{< figure src="/img/ola/wireframe-l2.jpg" caption="Wireframe for location pages">}}
---
{{< figure src="/img/ola/wireframe-mobile.png" caption="Wireframe for mobile layout and menu">}}
{{% /section %}}

{{% section id="ola-conclusion"%}}
### Conclusion
This project was completed for a university course, and did require a desktop-first design. Were I to revisit this project, I would start from this research and begin a visual design process mobile-first to further develop and refine the vision for this site.

Thanks for reading! You can <a href="/IA_DesignReport.pdf">download the full report here</a> or <a href="#ola-top">jump back to the top</a>.
{{% /section %}}