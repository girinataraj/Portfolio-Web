# V2 project assets and verified interactions

Verified 11 November 2026 from the owner's public repositories. Six assets total **214,864 bytes (~210 KiB)**. These are authentic existing project assets, optimized with the installed Sharp library; no fabricated application screenshot or replacement UI was generated. Source image content and full aspect ratio are preserved. Product images are illustrations, not photographs.

## Asset manifest

All final paths below are relative to the portfolio root. Queue screenshots keep their original dimensions; Sacred product illustrations are resized from 960×960 to 720×720. Original source downloads are retained only in ignored `qa/v2-source/` for verification.

| Local file | Final dimensions | Bytes | Exact source URL |
| --- | --- | ---: | --- |
| `public/projects/v2/queue-customer-desktop.webp` | 1366×1198 | 50,558 | [Customer desktop PNG](https://raw.githubusercontent.com/girinataraj/QueueLess-Pulse/main/docs/screenshots/react-customer-1366.png) |
| `public/projects/v2/queue-staff-desktop.webp` | 1366×1067 | 40,964 | [Staff desktop PNG](https://raw.githubusercontent.com/girinataraj/QueueLess-Pulse/main/docs/screenshots/react-staff-1366.png) |
| `public/projects/v2/queue-customer-mobile.webp` | 390×1203 | 38,380 | [Customer mobile PNG](https://raw.githubusercontent.com/girinataraj/QueueLess-Pulse/main/docs/screenshots/react-customer-390.png) |
| `public/projects/v2/sacred-stillness.webp` | 1200×750 | 8,560 | [Original Stillness SVG](https://raw.githubusercontent.com/girinataraj/sacred-commerce/main/public/editorial/stillness-mountains.svg) |
| `public/projects/v2/sacred-ceramic-bowl.webp` | 720×720 | 25,402 | [Handcrafted Ceramic Bowl WebP](https://raw.githubusercontent.com/girinataraj/sacred-commerce/main/public/products/handcrafted-ceramic-bowl.webp) |
| `public/projects/v2/sacred-cotton-stole.webp` | 720×720 | 51,000 | [Forest Cotton Stole WebP](https://raw.githubusercontent.com/girinataraj/sacred-commerce/main/public/products/forest-cotton-stole.webp) |

For every download, Git's blob SHA-1 (`sha1("blob " + byteLength + NUL + bytes)`) matched the live GitHub tree entry exactly:

| Source | Git blob SHA |
| --- | --- |
| Customer desktop | `62f2a7020feae45092dea9319d7d4bbc6eded31a` |
| Staff desktop | `05421bb38eb1921029603d56142d049a14229b6d` |
| Customer mobile | `cf9e68bbfa029f4baca12913085d107cbb078f27` |
| Stillness mountains | `a0028d982f264baf13e3a8da1be7af4f813709f9` |
| Ceramic bowl | `25da15f884728cf8d40b93ac53c37ec6f2beef43` |
| Cotton stole | `e0128d3bb9cbdcc59942d5647b354dc1fd04c5ff` |

## QueueLess screenshot scope

These are the repository's published **development screenshots with synthetic data**, not a claim about the current hosted deployment. The customer images display a local development recovery URL. The public repository's [verification report](https://github.com/girinataraj/QueueLess-Pulse/blob/main/docs/FRONTEND_VERIFICATION.md) documents fixture screenshots and their limits. Do not describe these as production patient records or label the portfolio interaction a live backend.

Suggested alt text:

- Customer desktop: “QueueLess Pulse development screenshot showing a customer ticket, queue position and cancel action.”
- Staff desktop: “QueueLess Pulse development screenshot showing the staff console with a called ticket and Complete, Skip and Call Next actions.”
- Customer mobile: “QueueLess Pulse customer ticket view at a 390-pixel mobile viewport.”

## Exact minimal queue state model

Primary code: [models.py](https://github.com/girinataraj/QueueLess-Pulse/blob/main/models.py) and [app.py](https://github.com/girinataraj/QueueLess-Pulse/blob/main/app.py), inspected directly. `Ticket`'s database check permits exactly:

`WAITING`, `CALLED`, `COMPLETED`, `SKIPPED`, `CANCELLED`.

Verified transitions:

| Action | Transition | Important constraint |
| --- | --- | --- |
| Join queue | New ticket → `WAITING` | `Ticket` defaults to WAITING; the first audit event is named `CREATED`, which is not a status. |
| Call Next | Oldest `WAITING` → `CALLED` | Staff must have permission for this service; refuses with 409 while another ticket in the same service is CALLED. FIFO selection orders by ticket ID. |
| Complete | `CALLED` → `COMPLETED` | Only a called ticket can finish; sets finish timestamp and writes its event. |
| Skip | `CALLED` → `SKIPPED` | Only a called ticket can be skipped. Source does not return it to WAITING. |
| Cancel ticket | `WAITING` → `CANCELLED` | Requires the issuing browser's owner session. CALLED cannot be cancelled. |

Source anchors: [join](https://github.com/girinataraj/QueueLess-Pulse/blob/main/app.py#L272), [cancel](https://github.com/girinataraj/QueueLess-Pulse/blob/main/app.py#L315), [call next](https://github.com/girinataraj/QueueLess-Pulse/blob/main/app.py#L357), [finish/complete/skip](https://github.com/girinataraj/QueueLess-Pulse/blob/main/app.py#L379).

A small portfolio explainer may use a labeled fictional ticket and these exact transitions. Clearly label it **interactive concept / local simulation**. Disable invalid actions. Reset is a portfolio simulation control, not a verified QueueLess server operation. Do not invent WebSocket behavior: the project documents live refresh/polling. Do not invent numeric wait-time accuracy, real-patient readiness or served-customer metrics.

## Sacred asset names and factual scope

Official product records are in [prisma/seed-data.ts](https://github.com/girinataraj/sacred-commerce/blob/main/prisma/seed-data.ts). Image associations and descriptions are in [product-visuals.ts](https://github.com/girinataraj/sacred-commerce/blob/main/src/features/demo/product-visuals.ts).

- **Handcrafted Ceramic Bowl**, slug `handcrafted-ceramic-bowl`, category Home & Craft. Original illustration depicts a speckled ivory ceramic bowl with irregular rim and green interior.
- **Forest Cotton Stole**, slug `forest-cotton-stole`, category Natural Living. Original illustration depicts a deep green woven cotton stole with soft folds and fringed ends.
- **Stillness mountains**, `public/editorial/stillness-mountains.svg`: original manually authored composition of an imagined indigo mountain horizon and crescent. The WebP is a rasterization of that exact SVG.

[Asset authorship documentation](https://github.com/girinataraj/sacred-commerce/blob/main/docs/assets.md) explicitly says product illustrations were created for the independent fictional demo using AI-assisted asset creation/local optimization and are **not verified product photographs**. Editorial SVGs are self-contained original work. No affiliation with Isha Foundation or Isha Life is implied. Reuse is for the owner's own portfolio; public visibility alone is not a general third-party license.

Safe minimal storefront flow, from the [README](https://github.com/girinataraj/sacred-commerce/blob/main/README.md): browse/search/filter/sort → product details → browser-local guest cart → validated **simulated** success/decline checkout. Light/Moonlight preference is remembered locally. No real payment, reserved stock, shipping, durable hosted order or verified hosted authentication is claimed. A portfolio product interaction should remain a labeled concept with no real checkout CTA, pricing promise or implied product sale.

## Validation

- Six raw downloads matched their GitHub source blob hashes.
- Sharp decoded and produced valid WebP outputs with the dimensions listed above.
- Full six-image montage visually inspected: actual QueueLess role views and unchanged Sacred illustrations; no image-content synthesis or misleading UI compositing.
- No dependency additions, app code changes, resume edits, data-model edits, paid services or deployments were performed in this asset task.

## Responsive derivatives added during release QA

Sharp resized and re-encoded the unchanged originals: `queue-staff-640.webp` (640px, 10,762 bytes), `queue-mobile-200.webp` (200px, 10,596 bytes), `queue-customer-768.webp` (768px, 16,394 bytes). `public/assets/Giri1-384.webp` is a 384px, 9,188-byte version of the authentic existing portrait. No retouching or synthesized content was introduced. The original images remain available; HTML srcsets choose suitable files for viewport and pixel density.
