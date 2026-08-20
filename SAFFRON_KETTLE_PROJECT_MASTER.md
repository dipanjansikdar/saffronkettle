# SAFFRON KETTLE --- MASTER PROJECT DOCUMENT

**Project:** Saffron Kettle\
**Website:** saffronkettle.com\
**Business:** Home-based Indian food / cloud kitchen\
**Primary market:** Helsingborg, Sweden\
**Long-term vision:** Build a recognizable Indian food brand that can
eventually expand beyond Helsingborg and Sweden.

------------------------------------------------------------------------

# CURRENT STATE

## Completed

-   [x] Domain
-   [x] GitHub setup
-   [x] Cloudflare setup
-   [x] Logo placement
-   [x] Hero
-   [x] Our Story
-   [x] What We Serve
-   [x] Why Saffron Kettle
-   [x] V1.0 baseline locked in GitHub
-   [x] V1.1 Our Story refinement locked in GitHub
-   [x] Revision 6 visual baseline
-   [x] V1.3 Featured Food structure and carousel logic
-   [x] Featured Food data moved to `data/featured-food.json`
-   [x] Shared JavaScript carousel logic implemented for all three cards
-   [x] Independent 5-second timers implemented for each card
-   [x] Independent dots and dish-name updates implemented for each card

## Current task

-   [ ] Verify V1.3 + JSON-driven carousel on GitHub Pages/custom domain
-   [ ] Replace placeholder food artwork with actual food images and
    visually review the crossfade

## Next

-   [ ] Contact / Order
-   [ ] Footer
-   [ ] Full mobile optimization
-   [ ] Final testing
-   [ ] Final deployment check

## Current website section structure

1.  **Hero** --- dark
2.  **Our Story** --- cream
3.  **What We Serve** --- dark
4.  **Why Saffron Kettle + Discovery** --- cream, treated as one section
5.  **Featured Food** --- dark
6.  **Contact / Order** --- cream
7.  **Footer** --- dark

## Current design baseline

Revision 6 is the current workable visual baseline.

The following are established: - Consistent section-label typography -
Compact section spacing intended to keep each major section roughly
within one scroll window - Consistent card language between What We
Serve and Why Saffron Kettle - Shared card border, padding, hover lift,
hover border and typography - No numbering or underline treatment on the
Why Saffron Kettle pillars - Approved short Why Saffron Kettle
introduction: \> Indian food has a bigger story to tell --- beyond the
familiar.

## Version Baselines

-   **V1.0** --- Initial approved website baseline.
-   **V1.1** --- Approved refinement of the Our Story section; current
    stable baseline.

### V1.1 Our Story --- LOCKED

Approved story identity:

> Rooted in Bengal. Shaped by India. Inspired by discovery. Conceived in
> Sudipta's Kitchen.

Approved continuation:

> And that is only the beginning.

The stacked presentation and compact typography are part of the approved
V1.1 treatment. Do not change the Our Story wording, hierarchy, or
layout without explicit approval.

## Locked

-   Black + gold visual direction
-   Hero
-   Our Story
-   Tagline direction: **Made with Love**

## Do not change without explicit approval

-   Hero
-   Our Story
-   Brand direction
-   Core visual identity

------------------------------------------------------------------------

# 1. BRAND IDENTITY

## Brand Name

**Saffron Kettle**

The name was selected because it: - starts with **S** - works with the
desired **SK** initials - feels connected to food and cooking - can work
as a broader brand if the business expands

## Tagline

**Made with Love**

This is the current approved tagline.

## Monogram

**SK**

The SK monogram is intended to become an important visual element of the
brand.

## Brand Personality

The brand should feel: - Warm - Authentic - Premium but approachable -
Homemade - Indian - Proud - Welcoming - Modern without losing cultural
identity

------------------------------------------------------------------------

# 2. VISUAL DIRECTION

## Primary Theme

**Black + Gold**

The website should have an elegant, premium appearance rather than
looking like a generic restaurant template.

## General Design Direction

Desired characteristics: - Dark/elegant background - Gold accents -
High-quality food photography - Strong typography - Generous spacing -
Clean layouts - Premium but warm - Mobile-friendly - Avoid excessive
visual clutter

The website should feel like a **real food brand**, not simply a
home-cooking hobby page.

------------------------------------------------------------------------

# 3. WEBSITE TECHNOLOGY

## Current Stack

-   HTML
-   CSS
-   JavaScript where required
-   GitHub for source code/hosting
-   Cloudflare for DNS/domain management

## Domain

**saffronkettle.com**

## Current Infrastructure

**Domain → Cloudflare → GitHub-hosted website**

## Source-of-truth rule

The GitHub project is the **source of truth for the actual website
code**.

ChatGPT conversation history should not be treated as the authoritative
copy of the code.

------------------------------------------------------------------------

# 4. WEBSITE STRUCTURE

The planned website contains:

1.  Hero
2.  Our Story
3.  What We Serve
4.  Why Saffron Kettle
5.  Featured Food / Menu
6.  Contact / Order
7.  Footer

------------------------------------------------------------------------

# 5. HERO --- LOCKED

The Hero section has been completed and approved.

## Design direction

Two-column layout:

### Left

-   Saffron Kettle branding/message
-   Main headline
-   Supporting text
-   CTA/action

### Right

-   Styled food visual/image

The Hero should remain consistent with the black-and-gold premium
design.

**Status: LOCKED**

Do not redesign unless explicitly requested.

------------------------------------------------------------------------

# 6. OUR STORY --- LOCKED

The Our Story section has been completed and approved.

**Status: LOCKED**

The current approved version should not be changed unless explicitly
requested.

------------------------------------------------------------------------

# 7. WHAT WE SERVE --- LOCKED

The What We Serve section has now been completed and approved.

## Important content decision

Do **not** describe the food simply as:

> "North Indian and South Indian cuisine."

We specifically decided against limiting the brand that way because
Indian cuisine is much broader and there are many regional and culinary
traditions that should eventually be represented.

## Approved positioning

The section communicates that Saffron Kettle offers a broad selection of
Indian food inspired by different regions, traditions and styles.

The wording remains inclusive rather than creating a rigid regional
classification.

**Status: LOCKED**

Do not change the approved What We Serve content, hierarchy, or design
without explicit approval.

# 8. WHY SAFFRON KETTLE --- LOCKED

The Why Saffron Kettle section has now been completed and approved.

## Purpose

Explain what differentiates Saffron Kettle from ordinary
restaurant/takeaway food.

## Approved pillars

The section uses three pillars:

-   **Beyond the Familiar**
-   **Made with Love**
-   **India Undiscovered**

## Approved introduction

> Indian food has a bigger story to tell --- beyond the familiar.

## Design treatment

-   Cream background
-   Same section-label typography used across the website
-   Pillars use the same card language as What We Serve
-   No pillar numbering
-   No pillar underline
-   Matching card border, padding, hover lift, hover border and
    typography
-   Subtle hover interaction

The Discovery statement is treated as part of this same section rather
than as a separate website section.

**Status: LOCKED**

Do not change the approved Why Saffron Kettle content, hierarchy, or
design without explicit approval.

# 9. FEATURED FOOD / MENU --- V1.3 IN PROGRESS

The Featured Food section has been implemented as the next major website
feature.

## Purpose

Show customers selected food categories and rotating featured dishes
while keeping the page visually clean and easy to maintain.

## Current structure

The section contains three independent cards:

1.  **Bengali Favourites**
2.  **Indian Classics**
3.  **Beyond the Familiar**

Each card contains:

-   Image area
-   Dish name
-   Five navigation dots
-   Category label
-   Short descriptive copy
-   Discover link

## Current carousel behaviour

Each card has its own:

-   Current dish index
-   Five-second timer
-   Navigation dots
-   Dish-name update
-   Image update
-   Fade-out / update / fade-in transition

The timers are intentionally independent. Reusing the same JavaScript
logic must not synchronize the three cards.

The current transition uses a short fade-out before the image and dish
name are updated, followed by a fade-in.

## Current data model

Dish names and image paths are being moved out of JavaScript into:

`data/featured-food.json`

The JSON data is intended to become the single maintenance point for
Featured Food content.

The JavaScript should contain the carousel logic only and should not
contain three separate hard-coded dish arrays.

## Current placeholder data

### Bengali Favourites

-   Shorshe Ilish
-   Chingri Malai Curry
-   Kosha Mangsho
-   Dhokar Dalna
-   Mishti Doi

### Indian Classics

-   Butter Chicken
-   Chicken Tikka
-   Biryani
-   Paneer Tikka
-   Dal Makhani

### Beyond the Familiar

-   Macher Jhol
-   Laal Maas
-   Kashmiri Rogan Josh
-   Chettinad Chicken
-   Malabar Parotta

These are working placeholder/demo entries for the carousel structure.
They are not yet the final production menu.

## HTML-to-data connection

Each card is identified in HTML using a data attribute:

-   `data-carousel="bengali"`
-   `data-carousel="classic"`
-   `data-carousel="discovery"`

These identifiers allow the shared JavaScript logic to connect each card
to its corresponding JSON data set without maintaining three separate
logic blocks.

## Current image status

The current carousel uses placeholder SVG artwork.

Actual food images have not yet been inserted.

The fade/crossfade behaviour should be reviewed again once the real
images are available.

## Current status

**STRUCTURE AND LOGIC WORKING LOCALLY**

**JSON DATA MODEL WORKING LOCALLY**

**FINAL VISUAL BASELINE NOT YET LOCKED**

Do not mark Featured Food as fully LOCKED until the actual images have
been inserted and the visual result has been reviewed.

------------------------------------------------------------------------

# 10. CONTACT / ORDER

Planned section.

Potential functionality: - Contact information - Ordering instructions -
Pickup information - Delivery information - Order CTA - Social media
links - Future online ordering

For the first website version, this does not necessarily need to be a
full automated ordering system.

A proper ordering application can be added later.

------------------------------------------------------------------------

# 11. FOOTER

Planned section.

Potential elements: - Saffron Kettle logo - SK monogram - Tagline -
Navigation links - Contact information - Social links - Copyright -
Legal/business information

Exact content is not yet finalized.

------------------------------------------------------------------------

# 12. IMAGES & ASSETS

## Logo

The logo has been moved into the project's images folder.

Current path:

`images/logo.jpeg`

When referring to the logo in HTML, maintain the correct relative path.

## Image rule

All website images should be stored/managed consistently.

Avoid mixing inconsistent paths such as:

`logo.jpeg`

and

`images/logo.jpeg`

unless the file genuinely exists at both locations.

------------------------------------------------------------------------

# 13. RESPONSIVE DESIGN

The website must work well on: - Desktop - Laptop - Tablet - Mobile
phone

Mobile responsiveness is part of the core website design.

Particular attention should be given to: - Navigation - Hero layout -
Food images - Text size - Buttons - Cards - Spacing - Menu layouts

------------------------------------------------------------------------

# 14. DESIGN PRINCIPLES

Every new section should follow these principles.

## Consistency

New sections must visually belong to the existing Hero and Our Story
sections.

## Premium but warm

Avoid making the website look like a corporate luxury brand.

It should retain the feeling of food made with care.

## Authenticity

Avoid stereotypical or exaggerated "Indian restaurant" design.

## Simplicity

Do not add visual elements merely because they are technically possible.

## Mobile-first thinking

Every section should be checked on mobile.

------------------------------------------------------------------------

# 15. CONTENT PRINCIPLES

The website should communicate:

**Indian food made with care and pride.**

Avoid: - Overly generic restaurant clichés - Excessive claims about
"100% authentic" unless justified - Limiting Indian cuisine to only
North/South categories - Overly complicated descriptions - Making the
business sound larger than it currently is

The brand can be ambitious without pretending to already be a large
restaurant chain.

------------------------------------------------------------------------

# 16. CURRENT DEVELOPMENT STATUS

## Completed

-   [x] Domain
-   [x] GitHub setup
-   [x] Cloudflare setup
-   [x] Logo placement
-   [x] Hero
-   [x] Our Story
-   [x] What We Serve
-   [x] Why Saffron Kettle
-   [x] Revision 6 visual baseline

## In progress

-   [ ] Verify Featured Food carousel deployment on GitHub Pages/custom
    domain
-   [ ] Replace placeholder food artwork with final images
-   [ ] Final visual review of Featured Food crossfade and spacing

## Upcoming

-   [ ] Contact / Order
-   [ ] Footer
-   [ ] Full mobile optimization
-   [ ] Final testing
-   [ ] Final deployment check

# 17. FUTURE APP / ORDERING SYSTEM

The website may eventually evolve into a complete ordering platform.

## Customer

Potential functionality: - Browse menu - Food categories - Food
details - Shopping cart - Customer account - Pickup/delivery selection -
Checkout - Online payment - Order confirmation - Order history

## Admin

Potential functionality: - Admin login - Dashboard - Manage dishes -
Manage prices - Manage availability - View orders - Update order
status - Customer/order information

## Future integrations

Potentially: - Stripe - Email notifications - SMS/WhatsApp
notifications - Delivery management - Customer database - Analytics

This is a **future phase**, not part of the current basic website build.

------------------------------------------------------------------------

# 18. AI DEVELOPMENT STRATEGY

ChatGPT is currently the primary AI development partner.

Use ChatGPT for: - Architecture - Planning - HTML/CSS/JavaScript -
Debugging - Design decisions - Content - Code review - Explaining
technical concepts

Potential future tools: - Lovable --- rapid AI application development -
Claude / Claude Code --- large-codebase development and coding
assistance - Replit --- application development and deployment

Do not add additional tools unless they provide a clear benefit.

------------------------------------------------------------------------

# 19. SOURCE-OF-TRUTH RULE

There are three different types of information.

### A. Project decisions

Stored in this Master Document.

### B. Actual website code

Stored in GitHub.

### C. Development discussion

Stored in ChatGPT conversation history.

If there is ever a conflict:

**GitHub = current actual code**

**Master Document = approved project decisions**

**Chat history = development discussion**

------------------------------------------------------------------------

# 20. CHANGE CONTROL

When something is explicitly approved, mark it:

**LOCKED**

When something is still being discussed:

**IN PROGRESS**

When something is only an idea:

**PROPOSED**

Do not silently change anything marked LOCKED.

If a new design conflicts with a locked decision, explicitly point out
the conflict before changing it.

------------------------------------------------------------------------

# 21. PROJECT WORKING RULE FOR CHATGPT

When continuing this project, ChatGPT should:

1.  Use this Master Document as the project baseline.
2.  Respect all LOCKED decisions.
3.  Avoid reintroducing previously rejected ideas.
4.  Ask before changing major design decisions.
5.  Prefer modifying the current code rather than rebuilding
    unnecessarily.
6.  When asked for a complete file, provide the complete current version
    rather than an incomplete fragment.
7.  Preserve working sections when adding new sections.
8.  Keep paths consistent.
9.  Check mobile responsiveness.
10. Clearly identify what changed.
11. Update this Master Document when a major project decision becomes
    locked.

------------------------------------------------------------------------

# 22. VERSION HISTORY

## Version 1.0 --- 2026-08-03

Initial Master Document created.

Locked sections: - Hero - Our Story

Current development: - What We Serve

## Version 1.1 --- Our Story refinement

Approved refinement of the Our Story section.

## Revision 6 --- 2026-08-19

Current workable visual baseline before Featured Food implementation.

Locked sections: - Hero - Our Story - What We Serve - Why Saffron Kettle

## Version 1.3 --- 2026-08-20

Featured Food implementation introduced.

Current state: - Three independent featured-food cards - Five rotating
data entries per card - Five-second independent timers - Independent
dots - Dish-name/image updates - Fade transition - JSON-driven data
model - Shared carousel logic

V1.3 remains **IN PROGRESS** until real images are inserted and the
custom-domain deployment is verified.

# 22B. CURRENT FEATURED FOOD IMPLEMENTATION --- V1.3

**Date:** 2026-08-20

### V1.3 implementation status

-   Featured Food section structure implemented.
-   Three cards implemented independently.
-   Five dish entries per card currently used as working data.
-   Carousel changes every 5 seconds.
-   Each card has its own timer and current index.
-   Dot navigation works independently for each card.
-   Dish name and image update together.
-   Fade transition added before and after each update.
-   Carousel data moved toward `data/featured-food.json`.
-   Shared JavaScript logic is used instead of three duplicated carousel
    logic blocks.
-   Placeholder SVG food images are currently used.
-   Real food photography is still pending.
-   Local testing with the JSON data file requires serving the site
    through a local web server rather than opening `index.html` directly
    from `file://`, because browser CORS/security rules block `fetch()`
    from a local file origin.

### Deployment status

GitHub Pages is configured to build from the `main` branch at repository
root.

The GitHub Pages `pages build and deployment` workflow has been running
successfully.

The custom domain `saffronkettle.com` is configured.

**Current action:** verify that the latest V1.3 files and JSON data are
the version actually being served by the custom domain before declaring
V1.3 deployed.

### Important maintenance decision

The Featured Food content should be maintained in JSON.

Future dish additions, removals, image-path changes and name changes
should normally be made in:

`data/featured-food.json`

The JavaScript should remain the reusable carousel engine.

# 23. UPDATE LOG

### 2026-08-19

-   Updated the Master Document to reflect the current website state.
-   Marked **What We Serve** as LOCKED.
-   Marked **Why Saffron Kettle** as LOCKED.
-   Confirmed the three Why pillars: Beyond the Familiar, Made with
    Love, India Undiscovered.
-   Confirmed the approved Why introduction: "Indian food has a bigger
    story to tell --- beyond the familiar."
-   Confirmed Why Saffron Kettle + Discovery are treated as one cream
    section.
-   Established Revision 6 as the current workable visual baseline.
-   Set Featured Food / Menu as the current development task.

Use this section for future major changes.

### 2026-08-03

-   Created project master document.
-   Hero marked LOCKED.
-   Our Story marked LOCKED.
-   What We Serve identified as the current development task.
-   Confirmed that the website should not restrict the cuisine
    description to North/South Indian cuisine.

------------------------------------------------------------------------

**MASTER DOCUMENT STATUS: ACTIVE --- V1.3 FEATURED FOOD IN PROGRESS**
