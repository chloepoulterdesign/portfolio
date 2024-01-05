---
title: "Commissioning a design system for Aveni"
date: "2022-08-11T22:40:32.169Z"
template: "post"
draft: false
slug: "aveni-design-system"
category: "Workshops"
tags:
  - "Leadership"
  - "Design System"
  - "Design Consistency"
description: "With a new front-end team on board and already pushing the limits of the Material UI system we were using, I raised support to build a design system of our own. I nurtured a new designer on the team to develop a suitable concept for the new design language and structure the work to build out the full system."
socialImage: "/media/image-0.jpg"
---

## Joining Aveni

When I joined Aveni, the UI broadly used Material Design 2 with components available on MUI.com, plus a few odd exceptions. Without any regular design guidance or reviewing the UI roughly included functionality that had been designed by a contractor for them, with some usability issues, annoyances and inconsistencies. 

![A useable UI had been built by the engineering team following specs provided by a contractor.](/media/ds-calldetailspreredesign.png)

Unfortunately, without any specific front-end resource and therefore unable to customise components, they were unable to progress towards the more complicated and customised functionality they wanted, especially in relation to audio controls and data visualisation:

![The team were unable to achieve the remaining designs they had with Material UI and without Front End expertise.](/media/ds-contractordesigns.png)

Unconvinced that much of the designed functionality was really necessary, I set out on a heuristic evaluation, identifying a list of minor usability improvements such as:
- scrolling and paginated areas employed on a scrolling page
- inconsistent typography
- poor information hierarchy
- lack of directed workflow, guidance or instruction (read about how I changed this [here](/posts/aveni-vision)!)

## Embracing Material UI
I resolved that most of the usability issues and lack of personality in the UI could be resolved by adopting Material UI more closely and paying attention to the implemented experience. 

![I started to pay more attention to implementing Material UI at a high quality.](/media/ds-bettermaterialwork.png)

When my first design team member came on board, I needed to pay more attention to internal tools. I used Glitch to explore and then finalise colour rules.

![I used glitch to experiment with a themed set of Material components.](/media/ds-glitch.png)

I themed the Google-provided Figma Material UI library and created Figma components for us to use. This was a surprisingly sub-optimal experience!

![The google-provided Figma document themed with Aveni colours, radii and type.](/media/ds-muifigma.png)

## Problems afoot
Soon enough, we faced further problems. Alongside Material's heavy use of the primary colour and focus on mobile (not a device type of any interest to our users), I discovered that MUI were not planning to build components that we needed or support the newly released Material 3.0. MUI's decision to diverge from the (sensible) restrictions that give Material UI its personality meant that our UI was becoming increasingly soulless, and we would soon be supported less and less by Google with design guidance.
While I was happy to continue working with MUI, the hire of some front-end developers and a new member in my team was a great opportunity to pivot to a design system of our own.

Selling a custom design system to the company was surprisingly simple. With implementation time a constant complaint the efficiencies a design system offered, along with the opportunity to breathe life into Aveni, was welcome.

## Commissioning
Our new design team member joined us and I used the design system evaluation and redesign project as an onboarding tool. I knew the new staff enjoyed UI work the most, had more UI skills than the rest of us, and would need a good opportunity to become familiar with the product. 
I created a project brief for the designer, suggesting a project plan, timeline and setting a few requirements for the output - timelessness & modernity.

![A written project brief and plan for creating design language concepts, evaluating them and proceeding to an MVP of the design system.](/media/ds-muifigma.png)

I asked the designer to focus initially on the design language and principles that would underly the system, inspired by the strong principles which made IBM's carbon make sense. 

The designer's first concepts clearly struggled with the existing Aveni brand colours. Tuning into the user demographic and seriousness of the risk & compliance and financial services sectors, they had toned down the primary pink and relied on the secondary navy blue colour which aged and ubiquitised the platform.

![The designer's first concept - a dark blue screen with bright pink navigation](/media/ds-concept1.png)
![The designer's second concept - a light screen with dark blue navigation](/media/ds-concept2.png)

I directed the designer further towards my vision for a light but colourful, more modern platform by leading a group moodboarding session. 

![I redirected the designer using a collaborative moodboarding session](/media/ds-moodboard.png)

We couldn't escape the glassmorphic dark UIs that were very trendy at the time, and entertained the option of a dark and light theme. 

![The designer produced a trendy concept for a dark glassmorphic UI](/media/ds-darkconcept.png)

Unfortunately without a graphic designer to support the team, and not enough engineering resource to launch two themes at once, I had to direct the designer to focus their efforts on a light theme. I encouraged them to consider light glassmorphism and aurora trends instead, acknowledging also that these aspects of a design would age quickly.

![A light UI concept with purple gradient accents](/media/ds-gradientconcept.png)
![A light UI concept with pastel aurora accents](/media/ds-auroraconcept.png)

Both concepts hinged on introducing a new purple brand colour to the platform - which the designer had identified didn't align with the user demographic. Struggling for direction, we shared 4 minified concepts with a panel of users and internal staff. 
To evaluate their responses, I led the team to codify our goals for the design system. We used words to describe this and chose the concept with the closest-aligning descriptions offered by users in testing. 

![4 minified UI concepts we shared with users](/media/ds-4UIconcepts.png)

![A statement capturing the intent of our new design language](/media/ds-goals.png)

Since we'd identified a year previously that the key to Aveni's adoption and commercial success was providing a place for users to act on AI findings, *Action-first* became our key principle. We interpreted this in a range of ways applicable to a design language and system:
- emphasis (via colour, shape, motion, progressive disclosure, metaphor and content) is applied to the action the user should take in the particular interaction (as opposed to passive activities like data visualisation)
- distraction is avoided by creating single-function experiences that intuitively support task completion
- an opinionated range of features and configuration options keeps users out of the weeds and on the most efficient path

The user feedback we recieved confirmed our assumptions:
- Heavy use of the pink brand colour wasn't attractive
- The 

The first easy decision to codify of the design system, according to our new action-led principle, was rules over the use of screen real-estate to support action and provide contextual data to support action. 