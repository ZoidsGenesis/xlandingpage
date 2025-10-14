# Discord Bot Service Landing Page - Design Guidelines

## Design Approach

**Selected Approach: Reference-Based (Gaming/Tech Aesthetic)**

Drawing inspiration from modern gaming platforms (Discord, Steam, Epic Games) combined with tech landing pages (Vercel, Linear). The design embraces a cyber/gaming aesthetic with pixel-art influences while maintaining professional credibility.

**Core Design Principles:**
- Gaming-inspired visual language with professional execution
- High contrast for readability and impact
- Playful interactions that don't compromise usability
- Clear hierarchy that guides users to conversion points

---

## Color Palette

### Dark Mode Primary (Default)
- **Background Gradient**: 
  - Start: 250 80% 15% (deep purple)
  - End: 240 70% 25% (rich blue)
- **Surface Colors**:
  - Cards/Panels: 250 50% 12% with 20% opacity
  - Elevated surfaces: 250 40% 18%
- **Text Colors**:
  - Primary: 0 0% 98%
  - Secondary: 250 20% 75%
  - Muted: 250 15% 60%
- **Accent Colors**:
  - Primary CTA: 280 90% 65% (vibrant purple)
  - Secondary CTA: 200 90% 60% (cyan)
  - Success: 150 70% 55%
  - Warning: 30 90% 60%

### Light Mode (Optional variant)
- Background: 250 30% 97%
- Surfaces: 250 20% 100%
- Text inverted from dark mode

---

## Typography

**Font Stack:**
- **Headings**: 'Press Start 2P' (pixel-style via Google Fonts) for H1 hero only
- **Body/UI**: 'Inter' or 'Space Grotesk' for all other text (modern, readable)
- **Accent**: 'JetBrains Mono' for code snippets or technical callouts

**Type Scale:**
- Hero H1: text-4xl md:text-5xl lg:text-6xl (pixel font, tracking-wide)
- Section H2: text-3xl md:text-4xl font-bold
- Card H3: text-xl md:text-2xl font-semibold
- Body: text-base md:text-lg
- Small/Meta: text-sm

**Typography Treatment:**
- Hero text: Subtle text-shadow for depth (0 0 20px rgba(168, 85, 247, 0.4))
- Gradient text for key phrases: bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text

---

## Layout System

**Spacing Primitives:** Consistently use Tailwind units of 4, 8, 12, 16, 20, 24, 32 (e.g., p-4, m-8, gap-12, py-20)

**Container Strategy:**
- Max-width: max-w-7xl for all sections
- Section padding: py-20 md:py-32 (generous vertical rhythm)
- Horizontal padding: px-4 md:px-8 lg:px-12

**Grid System:**
- Hero: Single column, centered (max-w-4xl)
- What You Get: grid-cols-1 md:grid-cols-2 lg:grid-cols-4
- Why Choose Us: grid-cols-1 md:grid-cols-3
- Pricing: Single column, centered (max-w-2xl)

**Responsive Breakpoints:**
- Mobile-first approach
- Key breakpoints: md (768px), lg (1024px), xl (1280px)

---

## Component Library

### Buttons
**Primary CTA** ("Get my fixed quote", "Book a demo"):
- Background: gradient from purple to cyan
- Padding: px-8 py-4
- Border-radius: rounded-full
- Shadow: lg shadow with purple/cyan glow
- Hover: scale-105 transform + increased glow
- Font: font-semibold text-lg

**Secondary/Outline**:
- Border: 2px solid with gradient border
- Background: semi-transparent backdrop-blur-sm
- Same sizing as primary

### Cards (Feature Cards, Value Props)
- Background: Dark surface with subtle gradient overlay
- Border: 1px border with gradient (purple to cyan at 20% opacity)
- Border-radius: rounded-2xl
- Padding: p-8
- Hover state: Subtle lift (translate-y-[-4px]) + enhanced border glow

### Icons
**Floating 3D Icons** (Hero section):
- Use CSS-animated floating elements (shopping cart, gavel, mail, coin, infinity)
- Position: Absolute positioning around hero content
- Animation: Gentle floating (translateY) with 3-4s duration, staggered delays
- Opacity: 0.6 base, 0.8 on hover
- Size: w-12 h-12 md:w-16 md:h-16

**Feature Icons**:
- Use Heroicons or Lucide React (gaming-appropriate icons)
- Size: w-12 h-12
- Color: Gradient fill or single accent color
- Container: rounded-xl bg-purple-500/20 p-3

### Section Headers
- Centered alignment
- Gradient text effect on main heading
- Subtitle: text-lg md:text-xl text-gray-400 max-w-3xl mx-auto

---

## Animations & Interactions

**Scroll Behavior:**
- Smooth scroll: `scroll-behavior: smooth` for anchor links
- Scroll-triggered fade-ins: Elements fade up (opacity + translateY) on scroll into view

**Micro-interactions:**
- Button hovers: Scale + glow enhancement (transition-all duration-300)
- Card hovers: Lift effect + border glow intensification
- Icon floats: Continuous subtle animation (keyframe @keyframes float)

**Performance:**
- Use `transform` and `opacity` only for animations
- Limit concurrent animations to 5-6 elements max
- Disable animations on `prefers-reduced-motion`

---

## Images

**Hero Section:**
- **No large hero image** - The design relies on gradient background with floating 3D icons for visual impact
- Floating icons serve as the primary visual elements (decorative SVG or icon fonts)

**Feature Icons:**
- Iconography throughout (Heroicons/Lucide React)
- Potential: Small Discord bot preview screenshots in "What You Get" cards (optional, 16:9 ratio, rounded corners)

**Additional Visual Elements:**
- Subtle grid pattern overlay on gradient background (via CSS)
- Glowing orbs/particles effect behind hero text (CSS gradients with blur)

---

## Section-Specific Guidelines

### Hero Section
- Height: min-h-screen with content vertically centered
- Floating icons: 5-6 icons positioned at random coordinates, animated floating
- Two CTA buttons: Primary (solid gradient) + Secondary (outline with blur)
- Text hierarchy: Pixel-font H1 → Sans-serif subheading → CTAs

### What You Get (Features)
- 4-column grid on desktop, 2 on tablet, 1 on mobile
- Each column: Icon + Category title + Bulleted feature list
- Card background: Subtle dark surface with gradient border
- Footer text: Centered, italic, muted color below all columns

### Why Choose Us
- 3-column grid with equal-height cards
- Icon at top (large, gradient-filled)
- Bold title + descriptive paragraph
- Consistent card treatment across all three

### Pricing
- Large, bold price text with gradient effect
- Timeline text below in muted color
- Single prominent CTA button
- Clean, minimal layout with max-w-2xl constraint

### Footer
- Minimal: Single row with Discord tag/contact
- Dark background (darker than main gradient end)
- Small text, centered
- Padding: py-12

---

## Accessibility

- Maintain WCAG AA contrast ratios (light text on dark gradients)
- All interactive elements: Focus rings with purple accent
- Keyboard navigation: Visible focus states on all CTAs
- Smooth scroll respects `prefers-reduced-motion`
- Semantic HTML: proper heading hierarchy, ARIA labels where needed

---

This design creates a striking, gaming-inspired landing page that balances playful aesthetics with professional credibility, optimized for conversion while maintaining brand personality.