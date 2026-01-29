# Design Research Library - Implementation Guide

## 🎉 What's Been Built

A comprehensive Design Research Documentation Library website using your custom design system with persistent sidebar navigation and 9 fully-implemented methodology pages.

### Core Files Created

1. **`research-library.html`** - Homepage with navigation structure
2. **`pattern-page.css`** - Shared CSS for all Pattern Page templates
3. **`sidebar.js`** - Navigation collapse/expand functionality
4. **`design-system.css`** - Updated with complete semantic token system

### ✅ Completed Methodology Pages

All pages follow the **Canonical Pattern Page Layout** with:
- **Page Header** (H1, capability tags, purpose statement)
- **LEARN Container** (white background, definitions & best practices)
- **BUILD Container** (Neutral-200 #DDD8DD background, templates & examples)
- **AI Co-Pilot Component** (primary border accent, comparison tables)

#### Pages Implemented:
1. ✅ **problem-hypothesis.html** - Problem framing & hypothesis validation
2. ✅ **secondary-research.html** - Desk research methods
3. ✅ **aeiou.html** - Observational framework with 5-category grid
4. ✅ **personas.html** - User archetype creation
5. ✅ **affinity-mapping.html** - Qualitative data clustering
6. ✅ **jtbd.html** - Jobs to Be Done framework
7. ✅ **5es-journey.html** - Journey mapping with horizontal flow visualization
8. ✅ **ira.html** - IRA framework with 3-column table (Insight → Recommendation → Action)

---

## 🏗️ Architecture & Design System Implementation

### Typography
- **Headings:** Geist font family (H1-H6)
- **Body Text:** Google Sans (Body XL/LG/MD/SM/XS)
- **Code Examples:** JetBrains Mono
- **Responsive Scaling:** Mobile base sizes → Desktop (640px+) larger sizes

### Color Tokens Applied
- **Surface Background:** `--surface-background` (Neutral-50 #F6F5F5)
- **Surface Primary:** `--surface-primary` (Neutral-25 #FAFAFA) - LEARN containers
- **BUILD Container:** `--neutral-200` (#DDD8DD) - visually distinct background
- **Surface Action:** `--surface-action` (Primary-500 #963BF7) - tags, headers
- **Border Action:** `--border-action` (Primary-500 #963BF7) - AI Co-Pilot borders
- **Text Body:** `--text-body` (Neutral-700 #44444A)
- **Text Heading:** `--text-heading` (Neutral-900 #050506)
- **Text Action:** `--text-action` (Primary-500 #963BF7) - links, accents

### Spacing & Layout
- **Sidebar:** 280px fixed width, sticky positioning
- **Component Spacing:** `--spacing-md/lg/xl/2xl` tokens
- **Gaps:** `--gap-md/lg` between major sections
- **Borders:** `--border-radius-sm/md/lg` for cards and containers
- **Shadows:** `--shadow-sm/md/lg` for elevation

### Pattern Page Template Structure
```html
<div class="research-layout">
  <!-- Sidebar with collapsible navigation -->
  <aside class="sidebar">...</aside>
  
  <main class="main-content">
    <!-- Page Header -->
    <header class="page-header">
      <div class="capability-tags">
        <span class="tag">Category</span>
      </div>
      <h1>Method Name</h1>
      <p class="purpose">One-line purpose statement</p>
    </header>

    <!-- LEARN/BUILD Split -->
    <div class="pattern-split">
      <section class="learn-container">
        <!-- White background, definitions, best practices -->
      </section>
      
      <section class="build-container">
        <!-- Neutral-200 background, templates, examples -->
      </section>
    </div>

    <!-- AI Co-Pilot -->
    <section class="ai-copilot">
      <h2>AI + Human Collaboration</h2>
      <div class="comparison-table">
        <div class="comparison-column">
          <h4>Human Value</h4>
          <ul>...</ul>
        </div>
        <div class="comparison-column">
          <h4>AI Value</h4>
          <ul>...</ul>
        </div>
      </div>
      <!-- Key Considerations, AI in the Loop Model, Watch-Outs -->
    </section>
  </main>
</div>
```

---

## 📋 Remaining Pages to Build

Use the existing pages as templates. Follow the same structure for consistency.

### Discovery & Research
- [ ] **steep-pestle.html** - STEEP/PESTLE environmental analysis
- [ ] **demographics.html** - Demographic research methods
- [ ] **primary-research.html** - Primary research overview
- [ ] **exploratory-interviews.html** - Interview methodology
- [ ] **exploratory-surveys.html** - Survey design & execution
- [ ] **discussion-guide.html** - Interview guide creation (phase/strategy/goal columns)

### Synthesis & Definition
- [ ] **set-analysis.html** - SET (Social, Emotional, Technical) analysis
- [ ] **framing-lenses.html** - Perspective framing techniques
- [ ] **directional-insights.html** - Insight generation
- [ ] **journey-mapping.html** - User journey mapping

### Strategy & Planning
- [ ] **prfaq.html** - Amazon PR/FAQ document method

### Execution & Testing
- [ ] **low-fidelity.html** - Low-fidelity prototyping
- [ ] **prototyping.html** - Prototyping methods
- [ ] **design-guide.html** - Design system documentation
- [ ] **testing.html** - Usability testing methods

---

## 🔧 How to Create New Pages

### 1. Copy Template
Start with an existing page (e.g., `problem-hypothesis.html`) and copy it.

### 2. Update Metadata
```html
<title>Your Method Name | Design Research Library</title>
```

### 3. Update Sidebar
```html
<nav class="nav-section active">
  <div class="nav-section-title">Your Category<span class="expand-icon">▸</span></div>
  <ul class="nav-links">
    <li><a href="your-method.html" class="active">Your Method</a></li>
    <!-- other links -->
  </ul>
</nav>
```

### 4. Fill Content Sections

**Page Header:**
- Update capability tags
- Write H1 title
- Write one-line purpose statement

**LEARN Container:**
- "What is [Method]?" - Definition and concept
- "Framework & Placement" - When to use this method
- "Best Practices" - 5-7 actionable tips

**BUILD Container:**
- "Template" - Code block or structured format
- "Step-by-Step Instructions" - Numbered list (5-10 steps)
- "Example" - Real-world application in example-box div

**AI Co-Pilot:**
- Comparison table (Human Value vs AI Value)
- Key Considerations (3-5 bullet points)
- "AI in the Loop" Model (3-step process)
- Watch-Outs (3-5 cautionary points)

### 5. Special Layouts

**For Table-Based Methods (like IRA):**
```css
<style>
  .method-table {
    width: 100%;
    border-collapse: collapse;
    /* custom styles */
  }
</style>
```

**For Flow Visualizations (like 5 E's):**
```css
<style>
  .flow-container {
    display: flex;
    gap: 16px;
    /* custom styles */
  }
</style>
```

**For Framework Grids (like AEIOU):**
```css
<style>
  .framework-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    /* custom styles */
  }
</style>
```

---

## 🎨 Design System Reference

### Color Palette
- **Primary:** #963BF7 (Purple)
- **Secondary:** #F7621E (Orange)
- **Neutral-25:** #FAFAFA (Surface Primary)
- **Neutral-50:** #F6F5F5 (Surface Background)
- **Neutral-100:** #EEEBEF
- **Neutral-200:** #DDD8DD (BUILD container)
- **Neutral-300:** #C9C4CC (Borders)
- **Neutral-700:** #44444A (Body Text)
- **Neutral-900:** #050506 (Headings)

### Typography Scale
- **Hero:** 64px/72px → 120px/132px
- **H1:** 40px/48px → 72px/80px
- **H2:** 28px/32px → 48px/52px
- **H3:** 24px/28px → 36px/40px
- **H4:** 20px/24px → 28px/32px
- **H5:** 18px/24px → 24px/28px
- **H6:** 16px/20px → 20px/24px
- **Body XL:** 24px/32px → 28px/36px
- **Body LG:** 18px/28px → 20px/30px
- **Body MD:** 16px/22px → 16px/24px
- **Body SM:** 14px/20px
- **Body XS:** 12px/16px

### Spacing Tokens
- **xs:** 8px
- **sm:** 16px
- **md:** 24px
- **lg:** 32px
- **xl:** 64px
- **2xl:** 96px

### Border Radius
- **sm:** 28px
- **md:** 36px
- **lg:** 40px
- **xl:** 48px
- **full:** 120px

---

## 🚀 Next Steps

1. **Complete remaining pages** following the template structure above
2. **Test navigation** - Ensure all sidebar links work correctly
3. **Responsive testing** - Verify mobile layouts (sidebar collapses, LEARN/BUILD stacks)
4. **Add Foundations pages** (Purpose, Mental Model, Voice) if needed
5. **Content review** - Map all content from Design Research Documentation.txt

---

## 📁 File Structure

```
agentive-design-system/
├── research-library.html          # Homepage
├── design-system.css              # Core design system tokens
├── pattern-page.css               # Shared pattern page styles
├── sidebar.js                     # Navigation functionality
├── problem-hypothesis.html        # ✅ Completed
├── secondary-research.html        # ✅ Completed
├── aeiou.html                     # ✅ Completed
├── personas.html                  # ✅ Completed
├── affinity-mapping.html          # ✅ Completed
├── jtbd.html                      # ✅ Completed
├── 5es-journey.html              # ✅ Completed
├── ira.html                       # ✅ Completed
├── [remaining pages to build]
└── RESEARCH-LIBRARY-README.md     # This file
```

---

## 💡 Tips

- **Consistency:** Always use the same HTML structure and CSS classes
- **Content Mapping:** Reference Design Research Documentation.txt for detailed content
- **Voice & Tone:** Use "Smart Casual" voice (friendly but professional)
- **Examples:** Ground all examples in the recurring "Freelance Invoice App" scenario for consistency
- **AI Co-Pilot:** Always include the 2-column comparison table + 3 subsections (Key Considerations, AI in the Loop, Watch-Outs)

---

## ✨ Key Features Implemented

✅ Persistent sidebar with collapsible sections  
✅ Pattern Page template with LEARN/BUILD split  
✅ AI Co-Pilot component with comparison tables  
✅ Responsive design (mobile-friendly)  
✅ Complete design system token implementation  
✅ Typography hierarchy (Geist + Google Sans + JetBrains Mono)  
✅ Semantic color system with light mode  
✅ Special layouts (tables, flows, grids)  
✅ Capability tags for each method  
✅ Code block and example box styling  

---

**Built with ❤️ using your custom Agentive Design System**
