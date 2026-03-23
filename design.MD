# PAOUVIR Design System Document



## 1. Overview & Creative North Star: "The Sonic Gallery"

This design system moves away from the utilitarian "database" feel of traditional music apps and toward a "Sonic Gallery." The objective is to treat every band, album, and user interaction as a curated piece of art.



**The Creative North Star** is defined by **Atmospheric Depth**. We break the standard grid by using intentional asymmetry—such as shifting text alignments or utilizing varying card sizes—to create a rhythmic flow that mimics the dynamics of music. We avoid the "boxed-in" feeling of legacy web design by using tonal layering and blurred translucency, making the UI feel like it is floating in a space of pure sound.



---



## 2. Colors & Atmospheric Polish



The palette is rooted in sophisticated purples, moving from deep, rhythmic shadows to ethereal, high-frequency highlights.



### The "No-Line" Rule

**Borders are strictly prohibited for sectioning.** To separate the sidebar from the main content or a header from a list, use background shifts. For example, a sidebar should use `surface-container` against a main content area of `surface`. Boundaries are felt through tonal change, not drawn with lines.



### Surface Hierarchy & Nesting

Depth is achieved through a "Paper-on-Glass" stacking logic:

1. **Base Layer:** `surface` (#f9f5ff) — The canvas.

2. **Sectioning:** `surface-container-low` (#f3effa) — For large grouped areas.

3. **Interactive Elements:** `surface-container-lowest` (#ffffff) — For cards and inputs to provide maximum "lift."



### Glass & Gradient Signature

To evoke a premium, modern feel, floating players or navigation overlays must use **Glassmorphism**.

- **Token:** `surface-variant` at 60% opacity with a `24px` backdrop-blur.

- **CTA Soul:** Primary buttons and hero accents should utilize a subtle linear gradient: `primary` (#8628c4) to `primary-container` (#cb80ff) at a 135-degree angle. This prevents the "flat" look and adds a professional luster.



---



## 3. Typography: The Editorial Voice



We use a dual-typeface system to balance high-end character with extreme legibility.



* **Display & Headlines (Plus Jakarta Sans):** Chosen for its contemporary, geometric rhythm. Use `display-lg` for hero sections with tight letter-spacing (-0.02em) to create an authoritative, editorial impact.

* **Body & Labels (Manrope):** A workhorse font with an expansive x-height. Manrope ensures that even at `body-sm` (#0.75rem), metadata like "Track Duration" or "Artist Bio" remains hyper-readable.

* **Hierarchy Note:** Use `headline-sm` for album titles and `label-md` for secondary metadata (genre/year). The contrast between the bold Jakarta and the clean Manrope defines the platform’s "Premium Community" identity.



---



## 4. Elevation & Depth: Tonal Layering



Traditional drop shadows are largely replaced by **Tonal Layering**.



* **The Layering Principle:** To make a Band Card pop, do not add a border. Place the `surface-container-lowest` card on a `surface-container-high` background. The difference in luminance creates a natural, soft edge.

* **Ambient Shadows:** Where physical lift is required (e.g., a modal or a floating play button), use a shadow that mimics a soft studio light: `0px 12px 32px rgba(134, 40, 196, 0.08)`. The shadow is tinted with the `primary` color to keep the palette harmonious.

* **The Ghost Border:** If a form field needs definition against a white background, use the `outline-variant` (#aeacb5) at **15% opacity**. It should be a "whisper" of a line, never a "statement."



---



## 5. Components



### Buttons

* **Primary:** Gradient (Primary to Primary-Container), `xl` (1.5rem) roundedness. Text: `on-primary` (#fceeff).

* **Secondary:** `surface-container-highest` background with `primary` text. No border.

* **Tertiary/Ghost:** No background. `primary` text. Use for low-emphasis actions like "Cancel."



### Music Cards (Bands & Albums)

* **Visual Style:** Rounded corners at `lg` (1rem).

* **Structure:** Image-first layout. The text sits below the image, utilizing `title-md` for names.

* **Interaction:** On hover, the card should scale slightly (1.02x) and the background should shift to `surface-bright`.

* **No Dividers:** Separate list items with `spacing-6` (1.5rem) of vertical white space.



### Rating Indicators

* **Visuals:** Use the `tertiary` (#6c5a00) for active star states.

* **Design:** Ratings should be accompanied by `label-md` text to provide a contemporary, data-driven look (e.g., "4.8/5").



### Input Fields

* **Style:** `surface-container-low` background, `md` roundedness.

* **States:** On focus, the "Ghost Border" becomes 100% `primary` opacity, and a subtle `primary` ambient shadow is applied.



---



## 6. Do’s and Don’ts



### Do

* **Do** use `spacing-12` and `spacing-16` for page margins to give the content "room to breathe"—this is the hallmark of high-end design.

* **Do** use the `full` roundedness scale for "Play" buttons and "Add" chips to create a friendly, touch-ready interface.

* **Do** favor asymmetric layouts. For example, left-align your headlines but right-align your "See All" actions to create visual tension.



### Don’t

* **Don’t** use pure black (#000000) for text. Always use `on-surface` (#2f2e35) to maintain the soft, premium feel.

* **Don’t** use 1px solid borders to separate songs in a list. Use `surface-container` shifts or simply ample white space.

* **Don’t** use standard "drop shadows" with grey colors. Always tint your shadows with the primary purple to keep the "Sonic Gallery" atmosphere intact.
