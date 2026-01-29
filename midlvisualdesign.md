# Midl Visual Language System

## 1. Design DNA
The core philosophy of the Midl design language is defined by a **flat, spacious, and contrast-driven** aesthetic. It emphasizes breathing room for every block, calm and complementary motion, and visuals that add energy without overcrowding the layout.

### Key Characteristics
- **Spacious:** Measured dynamic accents and floating gradients.
- **Contrast-Driven:** Clear distinction between elements using color and borders.
- **Minimal:** Graphics are clean with abstract shapes.

---

## 2. Color Palette
The color system is designed to be soft yet high-contrast, utilizing a warm, neutral background with deep black accents and vibrant orange gradients.

### Backgrounds & Blocks

| Usage | Hex Code | Tailwind Token | Description |
| :--- | :--- | :--- | :--- |
| **Canvas Background** | `#EEEEEB` | `bg-midl-canvas` | Very light gray-beige. For main page backgrounds. |
| **Emphasised** | `#F6F6F3` | `bg-midl-surface-1` | Slightly lighter. For distinguishing sections. |
| **Emphasised 2** | `#FDFCFA` | `bg-midl-surface-2` | Almost white. For highlights or focus areas. |
| **Accent** | `#1A1A1A` | `bg-midl-accent` | Deep almost-black. For accent blocks and footer. |

### Text Colors

| Usage | Hex Code | Tailwind Token | Description |
| :--- | :--- | :--- | :--- |
| **Primary Text** | `#030303` | `text-midl-primary` | Deep almost black. Headings and main content. |
| **Secondary Text** | `#969696` | `text-midl-secondary` | Mid gray. Creates hierarchy. |

### Gradients
Gradients should be used with **blur effects** to add soft energy.

- **Accent Gradient 1:** `#FF7E3D` → `#FFDE7B` (Soft orange to yellow)
- **Accent Gradient 2:** `#F67710` → `#FDBF2D` (50% opacity)

---

## 3. Typography

- **Font Family:** Object Sans
- **Weights:** Regular, Medium
- **Styles:** Regular, Slanted
- **Micro-Interaction:** Use the *Primary Text* color within a sentence of *Secondary Text* to highlight keywords or numbers.

---

## 4. Borders & Radius

### Borders
- **Style:** Subtle outlines for informational blocks.
- **Logic:** Use outlines to define structure without visual weight.

### Radius
- **Soft & Approachable:** Up to **24px** for large frames.
- **Consistency:** Ensure buttons, cards, and inputs share the same radius logic.

---

## 5. Grid & Spacing

- **Vertical Spacing:** Highly spacious. Major blocks are separated by roughly **400px** to create a "feeling of openness."
- **Composition:** One main element per block to avoid clutter.
- **Margins:** Large side margins with a centered layout.