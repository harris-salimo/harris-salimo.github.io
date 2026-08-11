# Project visuals

Approved project-card media specification for the portfolio.

## Decision

Use a coherent set of designed typographic placeholders for the initial portfolio release. The selected repositories contain no production screenshots ready for reuse, and their available surfaces range from authenticated web applications to a command-line computer-vision tool. A mixed set of partial application captures would therefore misrepresent the projects and weaken the visual rhythm of the approved reference.

The placeholders preserve that reference's flat-color sequence and can later be replaced one by one with approved real screenshots without changing the card component API.

## Assets

| Project | Asset | Background | Text |
| --- | --- | --- | --- |
| Expense Tracker | `src/assets/projects/expense-tracker.svg` | `#9E1C1C` | White |
| Manager | `src/assets/projects/manager.svg` | `#7C75CA` | White |
| Message App | `src/assets/projects/message-app.svg` | `#5E8F4D` | White |
| Inventory | `src/assets/projects/inventory.svg` | `#C363B4` | White |
| Face Detector | `src/assets/projects/face-detector.svg` | `#D88F39` | `#0B1009` |
| eShop Starter | `src/assets/projects/eshop-starter.svg` | `#4BA2D2` | `#0B1009` |

Every asset uses a 1200 × 900 view box, giving a 4:3 aspect ratio. Render the full asset without cropping, with a centered focal point. Reserve the 4:3 area before loading to prevent layout shift.

## Accessibility

The project name inside each placeholder duplicates the adjacent card heading. Render these assets with an empty HTML alternative (`alt=""`) so screen readers do not announce the same project twice. The project heading and repository link provide the meaningful accessible content and action.

The SVG `<title>` remains useful when an asset is inspected independently, but it does not replace the explicit empty `alt` on the portfolio image element.

## Replacement contract

Future screenshots must:

- represent a real project surface rather than a mock interface;
- be approved before replacing a placeholder;
- use or crop cleanly to 4:3 at desktop, tablet, and mobile widths;
- document their focal point and alternative text;
- preserve the existing asset key and card data contract where practical;
- avoid introducing or implying a demo link that does not exist.
