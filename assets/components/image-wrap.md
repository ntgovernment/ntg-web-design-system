# Image with text wrap component

This file collects documentation for the *Image with text wrap* component. It covers both the modern `<figure>`‑based pattern and the legacy/image utility classes that were previously scattered across SCSS comments and boilerplate examples.

## Overview

There are three different image systems in the codebase:

1. **Legacy CMS classes** (`.content .imagehalf`, `.imagethird`, `.imagequarter`, `.imagefull`)
   - Added by content editors in Squiz Matrix WYSIWYG fields.
   - Designed to float alongside text using Bootstrap's `float-start`/`float-end` utilities.
   - Automatically collapse to full width on screens below `md`.
   - These classes remain in the stylesheet for backward compatibility but should *not* be used for new work.

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
   - These classes do *not* include mobile stacking; prefer `.ntg-image-wrap` when possible.

## Migrating content

- Existing CMS content using the legacy `.content .image*` classes will continue to function.
- When editing or creating new content, switch to the modern `.ntg-image-wrap` pattern for better responsiveness and maintainability.

## Boilerplate examples

All demo markup has been centralized in `index.html` under the **Images** section. Examples illustrate the `image-left` and `image-right` flavors of the standalone `.imagethird` class; the full-page `image-wrap.html` has been removed.

## Stylesheet notes

The Sass partial `src/sass/ntgbase/partials/ntgovau-images.scss` contains all styling related to the three systems. The detailed explanatory comments originally present in the file have been migrated here; the stylesheet itself now contains minimal annotations with a reference to this Markdown document.

---

Refer to this file whenever you need to understand or modify image/write-wrap related code. It serves as a single source of truth for both human developers and automated agents.