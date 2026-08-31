# SAFFRON KETTLE — MASTER PROJECT DOCUMENT

**Project:** Saffron Kettle  
**Website:** saffronkettle.com  
**Business:** Home-based Indian food / cloud kitchen  
**Primary market:** Helsingborg, Sweden  
**Long-term vision:** Build a recognizable Indian food brand that can eventually expand beyond Helsingborg and Sweden.

---

# CURRENT STATE

**Last updated:** 2026-08-31

## Completed

- [x] Domain
- [x] GitHub setup
- [x] Cloudflare setup
- [x] Logo placement
- [x] Hero
- [x] Our Story
- [x] What We Serve
- [x] Why Saffron Kettle
- [x] Featured Food / Menu
- [x] Contact / Order
- [x] Privacy Policy page

## Current task

- [ ] Footer / legal links finalization
- [ ] Full mobile optimization
- [ ] Final testing
- [ ] Final deployment check

## Locked

- Black + gold visual direction
- Hero
- Our Story
- Tagline: **Made with Heart. Served with Pride.**
- Current `mailto:` contact implementation
- Current privacy approach: no server-side contact-form storage

---

# 1. BRAND IDENTITY

## Brand Name

**Saffron Kettle**

The name was selected because it:
- starts with **S**
- works with the desired **SK** initials
- feels connected to food and cooking
- can work as a broader brand if the business expands

## Tagline

**Made with Heart. Served with Pride.**

This is the current approved tagline.

## Monogram

**SK**

The SK monogram is intended to become an important visual element of the brand.

## Brand Personality

The brand should feel:
- Warm
- Authentic
- Premium but approachable
- Homemade
- Indian
- Proud
- Welcoming
- Modern without losing cultural identity

---

# 2. VISUAL DIRECTION

## Primary Theme

**Black + Gold**

The website should have an elegant, premium appearance rather than looking like a generic restaurant template.

## General Design Direction

Desired characteristics:
- Dark/elegant background
- Gold accents
- High-quality food photography
- Strong typography
- Generous spacing
- Clean layouts
- Premium but warm
- Mobile-friendly
- Avoid excessive visual clutter

The website should feel like a **real food brand**, not simply a home-cooking hobby page.

---

# 3. WEBSITE TECHNOLOGY

## Current Stack

- HTML
- CSS
- JavaScript where required
- GitHub for source code/hosting
- Cloudflare for DNS/domain management

## Domain

**saffronkettle.com**

## Additional domains

The project has also considered/used additional domains including:
- sudiptaskitchen.se
- saffronkettle.se

These domains may be redirected to the primary website/domain as required.

## Current Infrastructure

**Domain → Cloudflare → GitHub-hosted website**

## Source-of-truth rule

The GitHub project is the **source of truth for the actual website code**.

---

# 4. WEBSITE STRUCTURE

The website contains:
1. Hero
2. Our Story
3. What We Serve
4. Why Saffron Kettle
5. Featured Food / Menu
6. Contact / Order
7. Footer
8. Privacy Policy page

---

# 5. HERO — LOCKED

The Hero section has been completed and approved.

## Design direction

Two-column layout.

### Left
- Saffron Kettle branding/message
- Main headline
- Supporting text
- CTA/action

### Right
- Styled food visual/image

**Status: LOCKED**

Do not redesign unless explicitly requested.

---

# 6. OUR STORY — LOCKED

The Our Story section has been completed and approved.

**Status: LOCKED**

The approved positioning includes:

**Rooted in Bengal. Shaped by India. Inspired by discovery.**

The story should not overemphasize Bengal to the point of making Saffron Kettle appear to be exclusively a Bengali-food business.

---

# 7. WHAT WE SERVE — COMPLETED

The What We Serve section has been completed.

## Important content decision

Do **not** describe the food simply as:

> "North Indian and South Indian cuisine."

Indian cuisine is broader than those two categories and the brand should remain open to different regional and culinary traditions.

**Status: COMPLETED**

---

# 8. WHY SAFFRON KETTLE — COMPLETED

The Why Saffron Kettle section has been implemented.

## Core themes

- Made with care
- Authentic flavours
- Quality ingredients
- Homemade character
- Attention to detail
- Small-batch preparation
- Food made with pride

**Status: COMPLETED**

---

# 9. FEATURED FOOD / MENU — COMPLETED

The Featured Food / Menu functionality has been implemented.

Featured food content is maintained through the website's featured-food data rather than requiring every dish to be hard-coded directly into the main page structure.

The exact final commercial menu may evolve over time.

Do not invent new final menu items without discussing them first.

**Status: COMPLETED**

---

# 10. CONTACT / ORDER — COMPLETED

The Contact / Order section has been implemented.

## Current functionality

The contact form collects:
- Name
- Email
- Phone
- Enquiry type
- Message

The available enquiry categories include:
- Ordering food
- Catering
- Private event
- Menu information
- General enquiry

## Current contact architecture

The website currently uses a **`mailto:` approach**.

The website does **not** send the form submission to a server.

JavaScript creates an email link and opens the visitor's configured email application.

The visitor can then review and send the email through their own email service.

## Current business email

**sudiptaskitchen@outlook.com**

## Email-client fallback

If no email application is configured, the visitor is instructed to email:

**sudiptaskitchen@outlook.com**

directly.

## Privacy characteristic

The current contact form does not:
- submit information to a Saffron Kettle web server
- store submissions in a website database
- require a server-side form-processing service
- create an online customer account

The information becomes part of the email only if the visitor chooses to send the message.

## Future ordering

Online ordering is still a future development phase.

A proper ordering application may eventually be added.

**Status: COMPLETED — CURRENT BASIC IMPLEMENTATION**

---

# 11. FOOTER

## Planned elements

Potential elements:
- Saffron Kettle logo
- SK monogram
- Tagline
- Navigation links
- Contact information
- Social links
- Copyright
- Legal/business information
- Privacy Policy link

## Current status

The Footer requires final review to ensure:
- Privacy Policy is linked correctly
- navigation links work
- contact information is correct
- legal/business information is appropriate
- mobile layout is clean

**Status: IN PROGRESS**

---

# 12. PRIVACY POLICY — COMPLETED

A dedicated **`privacy.html`** page has been created.

## Current privacy model

The website currently does not have:
- a user account system
- a website database
- server-side contact-form storage
- advertising tracking
- behavioural tracking cookies

## Contact form

The Contact form uses a `mailto:` link.

The website itself does not store the submitted information.

When a visitor chooses to send an enquiry, the email is handled through:
- the visitor's own email service
- Saffron Kettle's email provider

## Information visitors may provide

Visitors may voluntarily provide:
- Name
- Email address
- Phone number
- Enquiry category
- Message contents

## Use of information

Information received through email is used to:
- respond to enquiries
- communicate about relevant orders
- communicate about catering enquiries
- communicate about events
- respond to other legitimate requests

Contact information is not used for unrelated marketing purposes unless there is an appropriate lawful basis or consent where required.

## Retention

Email information may be retained only for as long as reasonably necessary to:
- handle the enquiry
- fulfil a resulting business relationship
- meet applicable legal or accounting obligations

## GDPR rights

The Privacy Policy explains that, depending on the circumstances, visitors may have rights under the GDPR concerning their personal data, including rights relating to:
- access
- correction
- deletion
- restriction of processing

Privacy-related requests should be directed to:

**sudiptaskitchen@outlook.com**

## Future changes

If the website later introduces server-side forms, databases, analytics, advertising, behavioural tracking, customer accounts, online ordering, payment processing, or other services involving personal data, the privacy/data-processing approach must be reviewed and the Privacy Policy updated accordingly.

**Status: COMPLETED**

---

# 13. IMAGES & ASSETS

## Logo

Current path:

`images/logo.jpeg`

Maintain consistent relative paths.

## Image rule

All website images should be stored and referenced consistently.

## Food images

Food imagery should maintain the premium, warm and authentic visual direction.

Avoid generic stock imagery where possible.

---

# 14. RESPONSIVE DESIGN

The website must work well on:
- Desktop
- Laptop
- Tablet
- Mobile phone

Particular attention should be given to:
- Navigation
- Hero layout
- Food images
- Text size
- Buttons
- Cards
- Spacing
- Menu layouts
- Contact form
- Privacy page
- Footer

Mobile optimization remains part of the final review process.

**Status: IN PROGRESS**

---

# 15. DESIGN PRINCIPLES

## Consistency

New sections must visually belong to the existing Hero and Our Story sections.

## Premium but warm

Avoid making the website look like a corporate luxury brand.

## Authenticity

Avoid stereotypical or exaggerated "Indian restaurant" design.

## Simplicity

Do not add visual elements merely because they are technically possible.

## Mobile-first thinking

Every section should be checked on mobile.

---

# 16. CONTENT PRINCIPLES

The website should communicate:

**Indian food made with care and pride.**

Avoid:
- Overly generic restaurant clichés
- Excessive claims about "100% authentic" unless justified
- Limiting Indian cuisine to only North/South categories
- Overly complicated descriptions
- Making the business sound larger than it currently is

The brand can be ambitious without pretending to already be a large restaurant chain.

---

# 17. CURRENT DEVELOPMENT STATUS

## Completed

- [x] Domain
- [x] GitHub setup
- [x] Cloudflare setup
- [x] Logo placement
- [x] Hero
- [x] Our Story
- [x] What We Serve
- [x] Why Saffron Kettle
- [x] Featured Food / Menu
- [x] Contact / Order
- [x] Privacy Policy

## In progress

- [ ] Footer / legal links finalization
- [ ] Full mobile optimization
- [ ] Final testing
- [ ] Final deployment check

## Upcoming

- [ ] Production deployment
- [ ] Final domain verification
- [ ] Final cross-device testing

---

# 18. FUTURE APP / ORDERING SYSTEM

The website may eventually evolve into a complete ordering platform.

## Customer

Potential functionality:
- Browse menu
- Food categories
- Food details
- Shopping cart
- Customer account
- Pickup/delivery selection
- Checkout
- Online payment
- Order confirmation
- Order history

## Admin

Potential functionality:
- Admin login
- Dashboard
- Manage dishes
- Manage prices
- Manage availability
- View orders
- Update order status
- Customer/order information

## Future integrations

Potentially:
- Stripe
- Email notifications
- SMS/WhatsApp notifications
- Delivery management
- Customer database
- Analytics

This is a **future phase**, not part of the current basic website build.

---

# 19. AI DEVELOPMENT STRATEGY

ChatGPT is currently the primary AI development partner.

Use ChatGPT for:
- Architecture
- Planning
- HTML/CSS/JavaScript
- Debugging
- Design decisions
- Content
- Code review
- Explaining technical concepts

Potential future tools:
- Lovable
- Claude / Claude Code
- Replit

Do not add additional tools unless they provide a clear benefit.

---

# 20. SOURCE-OF-TRUTH RULE

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

---

# 21. CHANGE CONTROL

When something is explicitly approved, mark it:

**LOCKED**

When something is still being discussed:

**IN PROGRESS**

When something is only an idea:

**PROPOSED**

Do not silently change anything marked LOCKED.

If a new design conflicts with a locked decision, explicitly point out the conflict before changing it.

---

# 22. PROJECT WORKING RULE FOR CHATGPT

When continuing this project, ChatGPT should:

1. Use this Master Document as the project baseline.
2. Respect all LOCKED decisions.
3. Avoid reintroducing previously rejected ideas.
4. Ask before changing major design decisions.
5. Prefer modifying the current code rather than rebuilding unnecessarily.
6. When asked for a complete file, provide the complete current version rather than an incomplete fragment.
7. Preserve working sections when adding new sections.
8. Keep paths consistent.
9. Check mobile responsiveness.
10. Clearly identify what changed.
11. Update this Master Document when a major project decision becomes locked.
12. Treat GitHub as the authoritative source for the actual website code.
13. Do not replace the current `mailto:` architecture with a server-side form without explicit approval.
14. Revisit the Privacy Policy whenever the website begins processing personal data through a new service or backend.

---

# 23. VERSION HISTORY

## Version 1.0 — 2026-08-03

Initial Master Document created.

Locked sections:
- Hero
- Our Story

Current development:
- What We Serve

---

## Version 1.1 — 2026-08-31

Website functionality and privacy documentation updated.

Completed/approved developments:
- What We Serve completed.
- Why Saffron Kettle completed.
- Featured Food / Menu functionality completed.
- Contact / Order section completed.
- Contact form implemented using `mailto:`.
- No server-side contact-form processing is currently used.
- No website database stores contact-form submissions.
- Fallback instructions added for visitors without a configured email application.
- Current business contact email confirmed as `sudiptaskitchen@outlook.com`.
- A visible privacy note was added to the Contact section.
- Dedicated `privacy.html` page created.
- Privacy Policy documents the current GDPR/privacy approach.
- Privacy-related requests are directed to `sudiptaskitchen@outlook.com`.
- Future server-side forms, databases, analytics, ordering systems or other personal-data processing will require a renewed privacy review.
- Footer/legal links remain subject to final review.
- Mobile optimization and final production testing remain outstanding.

---

# 24. UPDATE LOG

### 2026-08-03

- Created project master document.
- Hero marked LOCKED.
- Our Story marked LOCKED.
- What We Serve identified as the current development task.
- Confirmed that the website should not restrict the cuisine description to North/South Indian cuisine.

### 2026-08-31

- Updated Master Document to reflect current website status.
- Completed What We Serve.
- Completed Why Saffron Kettle.
- Completed Featured Food / Menu functionality.
- Completed Contact / Order implementation.
- Selected `mailto:` as the current contact-form architecture.
- Confirmed that the website does not currently store contact-form submissions on a server or in a website database.
- Added email-client fallback instructions.
- Confirmed business contact email as `sudiptaskitchen@outlook.com`.
- Added a concise privacy note to the Contact section.
- Created dedicated `privacy.html`.
- Added GDPR/privacy information to the Privacy Policy.
- Documented current information-use and retention approach.
- Documented visitor privacy rights.
- Established that future backend/data-processing changes require a privacy review.
- Footer/legal links identified as requiring final review.
- Mobile optimization and final deployment checks remain outstanding.

---

**MASTER DOCUMENT STATUS: ACTIVE**
