# Image with text wrap component

This file collects documentation for the _Image with text wrap_ component. It covers both the modern `<figure>`‑based pattern and the legacy/image utility classes that were previously scattered across SCSS comments and boilerplate examples.

## Overview

There are three different image systems in the codebase:

1. **Legacy CMS classes** (`.content .imagehalf`, `.imagethird`, `.imagequarter`, `.imagefull`)
   - Added by content editors in Squiz Matrix WYSIWYG fields.
   - Designed to float alongside text using Bootstrap's `float-start`/`float-end` utilities.
   - Automatically collapse to full width on screens below `md`.
   - These classes remain in the stylesheet for backward compatibility but should _not_ be used for new work.

2. **Modern component** (`.ntg-image-wrap`)
   - Usage:
     ```html
     <figure class="ntg-image-wrap ntg-image-wrap--left ntg-image-wrap--half">
       <img src="..." alt="..." />
       <figcaption>Optional caption</figcaption>
     </figure>
     <p>Text wraps around the floating image on desktop...</p>
     <div class="ntg-content-clearfix"></div>
     ```
   - Floats left/right on `md+`, stacks full width on mobile.
   - Modifier classes: `--left`/`--right`, size `--half`/`--third`/`--quarter`, style `--shadow`/`--rounded`.
   - Preferred for all new development; fully responsive and semantic.

3. **Standalone float size classes** (`.imagehalf`, `.imagethird`, `.imagequarter`)
   - Applied directly to `<img>` elements when a wrapper is unavailable.
   - Often used in CMS-produced HTML without a `.content` container.
   - Pair with Bootstrap float utilities. Gap rules exist to add spacing between the image and text:
     - `img.float-start.image* { margin-right: 1.5rem; }`
     - `img.float-end.image*   { margin-left:  1.5rem; }`
   - These classes do _not_ include mobile stacking; prefer `.ntg-image-wrap` when possible.

4. **Directional utility classes** (`.image-left`, `.image-right`)
   These provide a lightweight, markup‑level two‑column layout using only
   paragraphs and the `:has()` pseudo‑selector. They exist purely in the
   stylesheet and require the precise DOM pattern shown below; if your
   markup cannot be structured this way, use the `.ntg-image-wrap`
   component instead.
   - **Markup pattern**

     ```html
     <p><img class="image-left" src="..." alt="..." /></p>
     <p>Text that will sit to the right of the image on desktop.</p>
     <!-- or for the opposite orientation -->
     <p><img class="image-right" src="..." alt="..." /></p>
     <p>Text that will sit to the left of the image on desktop.</p>
     ```

     - the `<img>` must be the only child of its paragraph.
     - the text paragraph must immediately follow the image paragraph.
     - extra wrapper elements break the selector logic.

   - **Desktop layout (sm and above / ≥576px)**
     - `.image-left`: image column is _32%_ wide with a right-hand gap of
       _3%_; the adjacent paragraph fills _64%_.
     - `.image-right`: image column floats right at _32%_; the following
       paragraph floats left at _64%_.
     - the 3 % gap ensures the combined width never exceeds 99 %, avoiding
       wrapping issues.
     - layout is achieved purely with CSS – no additional floats or grid
       utilities required for `.image-left`.

   - **Mobile behaviour (xs / <576px)**
     - both classes revert to block display; paragraphs stack vertically
       in source order with no horizontal margins or floats.
     - float resets are applied for the `.image-right` pattern.

   - **Browser support & notes**
     - relies on the `:has()` selector which is supported in modern
       Chromium, WebKit and Firefox releases; it does _not_ work in
       Internet Explorer or the last legacy Safari versions.
     - this pattern was introduced to replace the previous float‑based
       `.imagethird` gap hacks; the old utility classes (`.imagethird`,
       etc.) remain for backward compatibility but new content should
       prefer this directional pattern or the `.ntg-image-wrap`
       component.
     - `.image-right` uses float-based columns intentionally to keep the
       text on the left; since the layout is applied to sibling
       paragraphs the float order mirrors the visual order.

   For full details and the reasoning behind each system, see the source
   comments in `src/sass/ntgbase/partials/ntgovau-images.scss` and
   search for `// .image-left` as a bookmark.  
   The markup examples live in `index.html` under the **Images** section.

## Migrating content

- Existing CMS content using the legacy `.content .image*` classes will continue to function.
- When editing or creating new content, switch to the modern `.ntg-image-wrap` pattern for better responsiveness and maintainability.

## Boilerplate examples

All demo markup has been centralized in `index.html` under the **Images** section. Examples illustrate the `image-left` and `image-right` flavors of the standalone `.imagethird` class; the full-page `image-wrap.html` has been removed.

## Stylesheet notes

The Sass partial `src/sass/ntgbase/partials/ntgovau-images.scss` contains all styling related to the three systems. The detailed explanatory comments originally present in the file have been migrated here; the stylesheet itself now contains minimal annotations with a reference to this Markdown document.

---

Refer to this file whenever you need to understand or modify image/write-wrap related code. It serves as a single source of truth for both human developers and automated agents.
