# Agentive Design System

A comprehensive design system and website prototype for an AI & Product Development Library.

## 🎯 Overview

This design system implements the "Hospitable Builder" identity—combining the credibility of a tech founder with the warmth of a gracious host. It's a hands-on learning library built for reuse, clarity, and trust.

## 📁 Files Included

- **`design-system.css`** - Complete CSS design system with all foundation tokens, components, and utilities
- **`index.html`** - Homepage/landing page for the library
- **`pattern-guided-templates.html`** - Example pattern page showing Learn/Build structure

## 🎨 Design Foundations

### Color System
- **Brand Primary (Purple)** - The "Human" side (#963BF7)
- **Brand Secondary (Orange)** - The "AI" side (#F7621E)  
- **Neutral Grays** - Warm-leaning for readability
- **Semantic Colors** - Success, Warning, Error states
- **Dark Mode Support** - Full theme switching capability

### Typography
- **Primary Font:** Inter (400, 500, 600 weights)
- **Code Font:** JetBrains Mono (400 weight)
- **Scale:** Hero (120px) → H1-H5 → Body XL/LG/MD/SM/XS → Code

### Spacing
- **Component Spacing:** 8px (tight) → 16px (default) → 24-64px (generous)
- **Layout Gaps:** 16px (sm) → 32px (md) → 64px (lg) → 96px (xl)
- **Based on 8-point grid system**

### Border & Radius
- **Border Width:** 1px (default) | 2px (emphasized)
- **Border Radius:** 28px (sm) → 36px (md, default) → 40px (lg) → 48px (xl) → 120px (round)
- **Optical Roundness:** Inner radius = Outer radius - padding

### Shadows
- **sm:** Subtle elevation (cards, panels)
- **md:** Medium elevation (dropdowns, hover states)
- **lg:** High elevation (modals, dialogs)

## 🧩 Key Components

### Buttons
```html
<button class="btn btn-primary">Primary Action</button>
<button class="btn btn-secondary">Secondary Action</button>
```

### Cards
```html
<div class="card">
  <!-- Card content -->
</div>
```

### Tags (Capability Tags)
```html
<span class="tag">Generate</span>
<span class="tag">Structure</span>
```

### Learn/Build Containers
```html
<div class="container-learn">
  <!-- Learn mode content: explanation, rationale -->
</div>

<div class="container-build">
  <!-- Build mode content: templates, examples, actions -->
</div>
```

### Tables
```html
<table class="table">
  <thead>
    <tr><th>Field</th><th>Description</th></tr>
  </thead>
  <tbody>
    <tr><td>Field name</td><td>Description text</td></tr>
  </tbody>
</table>
```

### Example Blocks
```html
<div class="example-block">
  // Code or example content
</div>
```

### Advisory Blocks
```html
<div class="advisory-block advisory-success">Success message</div>
<div class="advisory-block advisory-warning">Warning message</div>
<div class="advisory-block advisory-error">Error message</div>
```

## 📐 Layout Structure

### Page Container
```html
<div class="container">
  <!-- Max-width: 1000px, centered -->
</div>
```

### Sections
```html
<section class="section-md">
  <!-- 32px vertical padding -->
</section>
```

## 🎯 Pattern Page Structure

Every pattern page follows this canonical structure:

1. **Page Header**
   - Pattern label
   - Pattern name (H2 size)
   - Capability tags
   - One-line purpose

2. **LEARN Section**
   - What This Is
   - Problem Framing
   - When to Use / Avoid
   - Comparison blocks

3. **BUILD Section**
   - Template structure
   - Input/output tables
   - Example blocks
   - Action buttons (Download, Copy, Fork)

4. **Supporting Sections**
   - Design Considerations
   - Risks & Tradeoffs
   - Related Patterns

5. **Page Footer**
   - Version number
   - Last updated date

## 🌓 Dark Mode

Toggle dark mode by adding `data-theme="dark"` to the HTML element:

```html
<html data-theme="dark">
```

All color tokens automatically adapt to dark mode.

## 📱 Responsive Design

- Desktop-first approach (1000px container)
- Mobile breakpoint at 768px
- Grid layouts adapt from multi-column to single column
- Button groups stack vertically on mobile

## 🎨 Design Principles

1. **Calm over exciting** - No hype, no buzzwords
2. **Clarity over cleverness** - Plain language always
3. **Structure over decoration** - Function drives form
4. **Learning and building are inseparable** - Dual-mode support

## ✨ Voice & Tone

- Calm, not hype
- Confident, not absolute
- Clear, not clever
- Opinionated, but reasoned

Write like a thoughtful product lead explaining decisions to a peer.

## 🚀 Usage

1. Open `index.html` in a web browser to see the homepage
2. Navigate to `pattern-guided-templates.html` to see a complete pattern page example
3. Use `design-system.css` as the foundation for all pages
4. Follow the canonical pattern structure for new pattern pages

## 🎓 Philosophy

This system embodies the "Hospitable Builder" persona:
- **Smart casual** aesthetic (blazer + flannel)
- **Open kitchen** philosophy (dissectable & transparent)
- **Inclusive exclusivity** (removes intimidation, shares knowledge)
- **Confidence building** (users leave feeling capable)

Every element should be:
- ✅ Dissectable
- ✅ Comprehensible
- ✅ Modular
- ✅ Actionable
- ✅ Teachable
- ✅ Adaptable

## 📋 Success Criteria

This system is successful if:
- A PM can define a feature clearly
- A designer can justify decisions
- A builder can ship faster
- A beginner doesn't feel lost
- An expert doesn't feel constrained
- Professionals maintain critical thinking throughout

---

**Built for reuse, clarity, and trust.**
