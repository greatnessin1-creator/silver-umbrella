{
  "brand_attributes": {
    "adjectives": ["elegant", "spa-like", "luxurious", "trustworthy", "sensory", "minimal-but-premium"],
    "voice": {
      "headline": "confident, ritual-driven, empowering",
      "body": "calm, informative, benefit-led",
      "microcopy": "warm, reassuring, never salesy"
    },
    "north_star": "Empowering confidence through self-care — premium body rituals with tasteful gold accents and editorial typography."
  },

  "information_architecture": {
    "single_page_sections_order": [
      "PromoBar (sticky)",
      "Hero",
      "Mission / About",
      "Featured Products",
      "Benefits (3-up)",
      "Designed to Support (combo CTA)",
      "Testimonials",
      "Blog Highlights",
      "Contact Form",
      "Footer"
    ],
    "conversion_path": {
      "primary": "Hero CTA → Featured Products → Support CTA → Testimonials → Contact",
      "secondary": "Promo code visibility persistent via PromoBar"
    }
  },

  "design_tokens": {
    "color_system": {
      "notes": [
        "Use warm creams + sand neutrals as the base; gold is an accent only (10–15% of composition).",
        "Avoid heavy gradients; if used, keep to hero/section background overlays only (<=20% viewport).",
        "All text must meet WCAG AA contrast; prefer deep espresso text on light backgrounds."
      ],
      "css_custom_properties": {
        ":root": {
          "--background": "36 33% 98%",
          "--foreground": "24 18% 12%",

          "--card": "36 33% 99%",
          "--card-foreground": "24 18% 12%",

          "--popover": "36 33% 99%",
          "--popover-foreground": "24 18% 12%",

          "--primary": "24 22% 14%",
          "--primary-foreground": "36 33% 98%",

          "--secondary": "32 28% 93%",
          "--secondary-foreground": "24 22% 14%",

          "--muted": "32 22% 92%",
          "--muted-foreground": "24 10% 38%",

          "--accent": "38 45% 88%",
          "--accent-foreground": "24 22% 14%",

          "--destructive": "0 72% 52%",
          "--destructive-foreground": "36 33% 98%",

          "--border": "30 18% 86%",
          "--input": "30 18% 86%",
          "--ring": "38 55% 52%",

          "--radius": "0.75rem",

          "--gold": "38 55% 52%",
          "--gold-soft": "38 55% 88%",
          "--espresso": "24 22% 14%",
          "--sand": "32 28% 93%",
          "--cream": "36 33% 98%",
          "--rose": "14 45% 86%"
        }
      },
      "tailwind_usage": {
        "backgrounds": [
          "bg-[hsl(var(--background))]",
          "bg-[hsl(var(--cream))]",
          "bg-[hsl(var(--sand))]"
        ],
        "text": [
          "text-[hsl(var(--foreground))]",
          "text-[hsl(var(--muted-foreground))]"
        ],
        "gold_accent_examples": [
          "border-[hsl(var(--gold)/0.35)]",
          "text-[hsl(var(--gold))]",
          "ring-[hsl(var(--gold)/0.35)]"
        ]
      },
      "allowed_gradients": {
        "hero_overlay_only": [
          "bg-[radial-gradient(1200px_circle_at_20%_10%,hsl(var(--gold-soft)/0.35),transparent_55%),radial-gradient(900px_circle_at_80%_30%,hsl(var(--rose)/0.25),transparent_60%)]"
        ],
        "rule": "Gradients are decorative overlays only; never on cards or text-heavy areas; never exceed 20% viewport."
      }
    },

    "typography": {
      "font_pairing": {
        "display_serif": {
          "name": "Cormorant Garamond",
          "usage": "H1/H2, section titles, product names",
          "google_fonts": "https://fonts.google.com/specimen/Cormorant+Garamond"
        },
        "body_sans": {
          "name": "Manrope",
          "usage": "Body copy, UI labels, forms",
          "google_fonts": "https://fonts.google.com/specimen/Manrope"
        }
      },
      "implementation_notes": [
        "Add Google Fonts <link> in public/index.html (React) or import in index.css.",
        "Set body font to Manrope; set headings via utility class font-[var(--font-display)] or Tailwind arbitrary font family.",
        "Keep headings left-aligned; luxury reading flow prefers left alignment."
      ],
      "type_scale_tailwind": {
        "h1": "text-4xl sm:text-5xl lg:text-6xl font-medium tracking-[-0.02em]",
        "h2": "text-base md:text-lg text-[hsl(var(--muted-foreground))]",
        "section_title": "text-2xl sm:text-3xl font-medium tracking-[-0.01em]",
        "body": "text-sm sm:text-base leading-relaxed",
        "small": "text-xs sm:text-sm"
      }
    },

    "spacing_grid": {
      "layout": {
        "container": "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8",
        "section_padding": "py-14 sm:py-18 lg:py-24",
        "stack_gaps": "gap-6 sm:gap-8 lg:gap-12"
      },
      "grid_patterns": {
        "featured_products": "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6",
        "benefits": "grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6",
        "blog": "grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6",
        "footer": "grid grid-cols-1 md:grid-cols-4 gap-8"
      }
    },

    "elevation_radius": {
      "radius": {
        "card": "rounded-2xl",
        "button": "rounded-xl",
        "pill": "rounded-full"
      },
      "shadows": {
        "card": "shadow-[0_10px_30px_-18px_rgba(20,16,12,0.35)]",
        "hover": "hover:shadow-[0_18px_50px_-26px_rgba(20,16,12,0.45)]"
      },
      "borders": {
        "hairline": "border border-[hsl(var(--border))]",
        "gold_hairline": "border border-[hsl(var(--gold)/0.25)]"
      }
    }
  },

  "components": {
    "component_path": {
      "promo_bar": "/app/frontend/src/components/ui/badge.jsx + /app/frontend/src/components/ui/separator.jsx",
      "primary_cta": "/app/frontend/src/components/ui/button.jsx",
      "cards": "/app/frontend/src/components/ui/card.jsx",
      "carousel_testimonials": "/app/frontend/src/components/ui/carousel.jsx",
      "form": "/app/frontend/src/components/ui/form.jsx",
      "inputs": "/app/frontend/src/components/ui/input.jsx",
      "textarea": "/app/frontend/src/components/ui/textarea.jsx",
      "toast": "/app/frontend/src/components/ui/sonner.jsx",
      "accordion_faq_optional": "/app/frontend/src/components/ui/accordion.jsx"
    },
    "button_variants": {
      "primary": {
        "style": "Luxury / Elegant",
        "tailwind": "bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:bg-[hsl(var(--primary)/0.92)] focus-visible:ring-2 focus-visible:ring-[hsl(var(--gold)/0.45)]",
        "microinteraction": "hover: translateY(-1px) + subtle shadow; active: scale(0.98)",
        "notes": "Add a 1px gold hairline via pseudo-element on hover only (not always)."
      },
      "secondary": {
        "tailwind": "bg-transparent border border-[hsl(var(--gold)/0.35)] text-[hsl(var(--foreground))] hover:bg-[hsl(var(--gold-soft)/0.35)]",
        "microinteraction": "hover: background warms; active: scale(0.98)"
      },
      "ghost": {
        "tailwind": "bg-transparent text-[hsl(var(--foreground))] hover:bg-[hsl(var(--secondary))]",
        "microinteraction": "underline reveal on hover using background-size animation"
      }
    },
    "card_recipe": {
      "base": "rounded-2xl bg-[hsl(var(--card))] border border-[hsl(var(--border))] shadow-[0_10px_30px_-18px_rgba(20,16,12,0.35)]",
      "hover": "transition-colors duration-200 hover:border-[hsl(var(--gold)/0.35)]",
      "do_not": ["Do not apply gradients on cards", "Do not use heavy drop shadows"]
    }
  },

  "section_blueprints": {
    "promo_bar": {
      "layout": "Sticky top bar with two lanes: left = free shipping, right = promo code. On mobile, stack into a single marquee-like row.",
      "tailwind": "sticky top-0 z-50 bg-[hsl(var(--background))]/90 backdrop-blur border-b border-[hsl(var(--border))]",
      "content": [
        "Free shipping banner",
        "Promo: Save 10% with code FIRSTORDER10 (copy button)"
      ],
      "microinteraction": "Copy promo code button shows sonner toast: 'Code copied'.",
      "data_testids": [
        "promo-bar",
        "promo-code-text",
        "promo-code-copy-button",
        "free-shipping-text"
      ]
    },

    "hero": {
      "layout": "Split-screen on desktop (left copy, right product image). On mobile: image first, then copy. Add a subtle radial gold/rose overlay behind content (decorative only).",
      "key_elements": [
        "H1: Empowering confidence through self-care",
        "Subcopy: ritual + anti-cellulite massage oil positioning",
        "Primary CTA: Shop Bestsellers",
        "Secondary CTA: Learn the Ritual",
        "Trust row: 'Free shipping' + '30-day satisfaction' + 'Secure checkout'"
      ],
      "tailwind": {
        "section": "relative overflow-hidden",
        "overlay": "pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_circle_at_20%_10%,hsl(var(--gold-soft)/0.35),transparent_55%),radial-gradient(900px_circle_at_80%_30%,hsl(var(--rose)/0.25),transparent_60%)]",
        "grid": "grid grid-cols-1 lg:grid-cols-12 gap-10 items-center",
        "copy": "lg:col-span-6",
        "media": "lg:col-span-6"
      },
      "motion": "Use Framer Motion for a gentle entrance: fade-up (y: 12→0) staggered 80ms; respect prefers-reduced-motion.",
      "data_testids": [
        "hero-section",
        "hero-primary-cta",
        "hero-secondary-cta"
      ]
    },

    "mission": {
      "layout": "Editorial two-column: left = serif title + mission paragraph; right = 2 stacked cards: 'Our Promise' + 'Ingredients & Ritual'.",
      "accent": "Use a thin gold vertical rule (1px) between columns on desktop.",
      "data_testids": ["mission-section"]
    },

    "featured_products": {
      "layout": "4-up product grid with consistent image aspect ratio, price, and Shopify 'View product' link button.",
      "product_card": {
        "image": "Use AspectRatio component for consistent crop (e.g., 4/5).",
        "cta": "Primary button: 'Shop now' opens Shopify link in new tab with rel='noreferrer'.",
        "badges": "Optional: 'Bestseller' badge in gold-soft background."
      },
      "data_testids": [
        "featured-products-section",
        "product-card",
        "product-card-shop-link"
      ]
    },

    "benefits": {
      "layout": "3 benefit cards with icon + title + 2-line description. Icons should be line icons (lucide-react).",
      "icons": ["Sparkles", "Hand", "Droplets"],
      "data_testids": ["benefits-section"]
    },

    "support_section": {
      "layout": "A premium combo block: left = lifestyle image; right = copy + CTA. Background solid sand with gold hairline border.",
      "cta": "Button: 'Build your ritual' scrolls to Featured Products.",
      "data_testids": ["support-section", "support-section-cta"]
    },

    "testimonials": {
      "layout": "Carousel on mobile, 3 cards on desktop. Each card: quote, name, 5-star row (lucide Star).",
      "names": ["Jessica K.", "Maria G.", "Melissa R."],
      "data_testids": ["testimonials-section", "testimonial-card"]
    },

    "blog_highlights": {
      "layout": "2 editorial blog cards with category pill, title, excerpt, and 'Read' link.",
      "data_testids": ["blog-section", "blog-card", "blog-read-link"]
    },

    "contact_form": {
      "layout": "Two-column on desktop: left = reassurance copy + support hours; right = form card.",
      "fields": ["name", "email", "phone", "message"],
      "validation": "Use shadcn Form + zod (if present) or simple client validation; show inline errors.",
      "submit": "On submit: POST to FastAPI; show sonner toast success/error.",
      "data_testids": [
        "contact-section",
        "contact-form",
        "contact-name-input",
        "contact-email-input",
        "contact-phone-input",
        "contact-message-textarea",
        "contact-submit-button",
        "contact-form-status"
      ]
    },

    "footer": {
      "layout": "4-column: brand blurb, shop links, company links, social. Bottom row: copyright + policies.",
      "accent": "Use Separator and tiny gold dot bullets.",
      "data_testids": ["footer"]
    }
  },

  "motion_microinteractions": {
    "principles": [
      "Motion should feel like a spa ritual: slow, soft, intentional.",
      "Use 180–240ms for hover transitions; 320–480ms for section entrances.",
      "Never use transition: all. Only transition colors/shadows/opacity." 
    ],
    "recommended_library": {
      "name": "framer-motion",
      "install": "npm i framer-motion",
      "usage": "Use motion.div for hero/section entrances and testimonial carousel fade. Wrap with prefers-reduced-motion checks."
    },
    "hover_recipes": {
      "product_card": "On hover: image scale 1.02 (transform), border warms to gold (color transition), reveal 'Quick view' ghost button.",
      "links": "Underline reveal using background-size animation (no layout shift)."
    },
    "scroll_effect": {
      "hero_media": "Subtle parallax translateY (max 18px) using requestAnimationFrame or framer useScroll; disable on reduced motion."
    }
  },

  "accessibility": {
    "requirements": [
      "WCAG AA contrast for text and interactive elements.",
      "Visible focus rings: focus-visible:ring-2 focus-visible:ring-[hsl(var(--gold)/0.45)] focus-visible:ring-offset-2.",
      "Respect prefers-reduced-motion: disable parallax and entrance animations.",
      "Use semantic headings: one H1 only; section titles H2; card titles H3."
    ]
  },

  "seo_basics": {
    "notes": [
      "Set document title + meta description.",
      "Use descriptive alt text for product images.",
      "Use proper link labels (avoid 'click here')."
    ]
  },

  "performance": {
    "notes": [
      "Lazy-load below-the-fold images (loading='lazy').",
      "Use AspectRatio to prevent layout shift.",
      "Prefer modern formats when possible; Shopify CDN usually optimizes automatically.",
      "Avoid heavy video; if used, provide poster + muted autoplay only on desktop."
    ]
  },

  "image_urls": {
    "hero_inspiration_only": [
      {
        "category": "hero",
        "description": "Luxury bottle on soft fabric (placeholder/inspiration; replace with Shopify CDN product image)",
        "url": "https://images.unsplash.com/photo-1594913615593-e4b8c44625be?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85"
      }
    ],
    "support_section_lifestyle": [
      {
        "category": "support-section",
        "description": "Warm spa massage oil lifestyle image (placeholder/inspiration)",
        "url": "https://images.pexels.com/photos/6629614/pexels-photo-6629614.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      }
    ],
    "blog_placeholders": [
      {
        "category": "blog",
        "description": "Minimal skincare flat lay on beige background (placeholder)",
        "url": "https://images.pexels.com/photos/7670764/pexels-photo-7670764.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      }
    ]
  },

  "instructions_to_main_agent": {
    "global_css_updates": [
      "Replace default CRA App.css demo styles; do NOT center the app container.",
      "Update /app/frontend/src/index.css : set body font to Manrope; add heading utility class for Cormorant Garamond.",
      "Update :root HSL tokens in index.css to match the warm cream + gold system above.",
      "Add a subtle noise overlay utility (CSS) for sections only (e.g., pseudo-element with low opacity)."
    ],
    "react_structure": [
      "Create section components in /app/frontend/src/components/landing/*.jsx (PromoBar, Hero, Mission, FeaturedProducts, Benefits, SupportSection, Testimonials, BlogHighlights, ContactForm, Footer).",
      "Use shadcn/ui components from /app/frontend/src/components/ui (Button, Card, Carousel, Form, Input, Textarea, Badge, Separator).",
      "All interactive elements MUST include data-testid attributes (kebab-case)."
    ],
    "icons": {
      "library": "lucide-react",
      "usage": "Use line icons only; keep stroke width consistent (1.5–1.75)."
    },
    "shopify_links": [
      "Use real Shopify product URLs provided by user; open in new tab.",
      "Add rel='noreferrer' and aria-label like 'Shop Anti Cellulite Massage Oil on Shopify'."
    ],
    "contact_form_backend": [
      "POST /api/contact (or existing endpoint) with name/email/phone/message.",
      "Show sonner toast on success and error; disable submit while loading."
    ],
    "testing": [
      "Add data-testid to: promo copy button, hero CTAs, each product card CTA, carousel controls, blog read links, contact inputs, submit button, and form status message."
    ]
  },

  "general_ui_ux_design_guidelines": "\n    - You must **not** apply universal transition. Eg: `transition: all`. This results in breaking transforms. Always add transitions for specific interactive elements like button, input excluding transforms\n    - You must **not** center align the app container, ie do not add `.App { text-align: center; }` in the css file. This disrupts the human natural reading flow of text\n   - NEVER: use AI assistant Emoji characters like`🤖🧠💭💡🔮🎯📚🎭🎬🎪🎉🎊🎁🎀🎂🍰🎈🎨🎰💰💵💳🏦💎🪙💸🤑📊📈📉💹🔢🏆🥇 etc for icons. Always use **FontAwesome cdn** or **lucid-react** library already installed in the package.json\n\n **GRADIENT RESTRICTION RULE**\nNEVER use dark/saturated gradient combos (e.g., purple/pink) on any UI element.  Prohibited gradients: blue-500 to purple 600, purple 500 to pink-500, green-500 to blue-500, red to pink etc\nNEVER use dark gradients for logo, testimonial, footer etc\nNEVER let gradients cover more than 20% of the viewport.\nNEVER apply gradients to text-heavy content or reading areas.\nNEVER use gradients on small UI elements (<100px width).\nNEVER stack multiple gradient layers in the same viewport.\n\n**ENFORCEMENT RULE:**\n    • Id gradient area exceeds 20% of viewport OR affects readability, **THEN** use solid colors\n\n**How and where to use:**\n   • Section backgrounds (not content backgrounds)\n   • Hero section header content. Eg: dark to light to dark color\n   • Decorative overlays and accent elements only\n   • Hero section with 2-3 mild color\n   • Gradients creation can be done for any angle say horizontal, vertical or diagonal\n\n- For AI chat, voice application, **do not use purple color. Use color like light green, ocean blue, peach orange etc**\n\n</Font Guidelines>\n\n- Every interaction needs micro-animations - hover states, transitions, parallax effects, and entrance animations. Static = dead. \n   \n- Use 2-3x more spacing than feels comfortable. Cramped designs look cheap.\n\n- Subtle grain textures, noise overlays, custom cursors, selection states, and loading animations: separates good from extraordinary.\n   \n- Before generating UI, infer the visual style from the problem statement (palette, contrast, mood, motion) and immediately instantiate it by setting global design tokens (primary, secondary/accent, background, foreground, ring, state colors), rather than relying on any library defaults. Don't make the background dark as a default step, always understand problem first and define colors accordingly\n    Eg: - if it implies playful/energetic, choose a colorful scheme\n           - if it implies monochrome/minimal, choose a black–white/neutral scheme\n\n**Component Reuse:**\n\t- Prioritize using pre-existing components from src/components/ui when applicable\n\t- Create new components that match the style and conventions of existing components when needed\n\t- Examine existing components to understand the project's component patterns before creating new ones\n\n**IMPORTANT**: Do not use HTML based component like dropdown, calendar, toast etc. You **MUST** always use `/app/frontend/src/components/ui/ ` only as a primary components as these are modern and stylish component\n\n**Best Practices:**\n\t- Use Shadcn/UI as the primary component library for consistency and accessibility\n\t- Import path: ./components/[component-name]\n\n**Export Conventions:**\n\t- Components MUST use named exports (export const ComponentName = ...)\n\t- Pages MUST use default exports (export default function PageName() {...})\n\n**Toasts:**\n  - Use `sonner` for toasts\"\n  - Sonner component are located in `/app/src/components/ui/sonner.tsx`\n\nUse 2–4 color gradients, subtle textures/noise overlays, or CSS-based noise to avoid flat visuals.\n"
}
