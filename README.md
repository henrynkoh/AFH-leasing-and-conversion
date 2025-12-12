# AFH Property Advisor - Comprehensive Guide

A comprehensive Next.js application designed to help property owners find optimal Adult Family Home (AFH) providers and plan property conversions for AFH operations. This tool provides detailed analysis, planning, and marketing resources for property owners looking to lease their properties to AFH providers in Washington State.

## Property Information

- **Address:** 1713 Winterwood Dr, Centralia, WA
- **Target Capacity:** 5-6 AFH beds
- **Purpose:** Find proper AFH providers for long-term lease agreement
- **Property Type:** Single-family home, ideal for AFH conversion
- **Square Footage:** Approximately 3,000+ sq ft
- **Market Area:** Centralia/Chehalis, Washington State

## Overview

The AFH Property Advisor application is a comprehensive tool designed to assist property owners in navigating the complex process of leasing properties to Adult Family Home providers. The application provides detailed scenario analysis, floor plan visualization, timeline and budget planning, marketing materials, and provider search resources to help property owners make informed decisions and successfully lease their properties.

## Features

### 1. **Top 3 Scenarios** (`/scenarios`)
   - Compare three different approaches to finding AFH providers
   - **Scenario 1:** Direct provider lease (no conversion) - Fastest path with no upfront costs
   - **Scenario 2:** Minimal WABO conversion + provider lease (recommended) - Balanced approach
   - **Scenario 3:** Full conversion + long-term lease (optimal) - Maximum return on investment
   - Each scenario includes:
     - Detailed pros and cons analysis
     - Complete timeline estimates
     - Budget breakdowns with cost-sharing arrangements
     - Step-by-step implementation guides
     - Marketing approach recommendations
     - Risk assessment and mitigation strategies

### 2. **Floor Plan Analysis** (`/floor-plan`)
   - Interactive floor plan visualization with clickable rooms
   - Room-by-room AFH compliance analysis
   - Detailed modification requirements for each space
   - Cost estimates for individual room conversions
   - Capacity analysis showing 5-6 bed potential
   - Compliance scoring and recommendations
   - Visual representation of property layout
   - Identification of optimal resident room locations
   - Common area utilization analysis
   - Bathroom accessibility assessment

### 3. **Timeline & Budget** (`/timeline`)
   - Detailed daily activity breakdown for each phase
   - Phase-by-phase project timeline with dependencies
   - Comprehensive cost tracking with landlord/tenant cost-sharing
   - Two conversion modes: Minimal WABO conversion vs. Full conversion
   - Total cost calculations with percentage breakdowns
   - Daily activity schedules with specific tasks
   - Cost allocation by activity and phase
   - Timeline visualization and Gantt-style planning
   - Budget variance tracking capabilities
   - Payment schedule recommendations

### 4. **Marketing Materials** (`/marketing`)
   - Ready-to-use marketing scripts and templates:
     - Facebook community post templates (multiple variations)
     - AFH locator website listings (detailed and concise versions)
     - Email outreach templates (initial contact, follow-up, closing)
     - Phone call scripts (cold call, follow-up, negotiation)
   - Marketing channel recommendations with effectiveness ratings
   - Scenario-specific marketing strategies
   - Best practices for provider outreach
   - Content calendar suggestions
   - A/B testing recommendations for messaging

### 5. **Provider Search** (`/providers`)
   - Comprehensive resources for finding AFH providers:
     - Washington State AFH Locator usage guide
     - Facebook AFH communities directory
     - Local association meeting schedules
     - Direct provider outreach strategies
   - Provider screening questions (12+ questions)
   - Ideal provider criteria with scoring system
   - Recommended lease terms and conditions
   - Red flag identification guide
   - Provider evaluation checklist
   - Reference checking procedures

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js 18+** - Required for running Next.js applications
  - Download from [nodejs.org](https://nodejs.org/)
  - Verify installation: `node --version`
- **npm or yarn** - Package manager for dependencies
  - npm comes with Node.js
  - Verify installation: `npm --version`
- **Git** (optional) - For version control
- **Code Editor** - Recommended: VS Code, WebStorm, or similar

### Installation

Follow these steps to set up the application:

```bash
# Navigate to the project directory
cd afh-property-advisor

# Install all dependencies
npm install

# This will install:
# - Next.js 16 framework
# - React 19
# - TypeScript
# - Tailwind CSS
# - All other required dependencies
```

### Development Server

To run the application in development mode:

```bash
# Start the development server
npm run dev

# The application will be available at:
# http://localhost:3000
```

The development server includes:
- Hot module replacement (HMR) for instant updates
- Error overlay for debugging
- Fast refresh for React components
- TypeScript type checking

### Build for Production

To create an optimized production build:

```bash
# Create production build
npm run build

# Start production server
npm start

# Or deploy to a hosting service like Vercel, Netlify, etc.
```

### Additional Commands

```bash
# Run linter to check code quality
npm run lint

# Type check TypeScript files
npx tsc --noEmit
```

## Project Structure

```
afh-property-advisor/
├── app/
│   ├── page.tsx              # Dashboard/home page with overview
│   ├── layout.tsx             # Root layout with navigation
│   ├── globals.css            # Global styles and Tailwind configuration
│   ├── scenarios/             # Top 3 scenarios comparison page
│   │   └── page.tsx
│   ├── floor-plan/            # Interactive floor plan analysis
│   │   └── page.tsx
│   ├── timeline/              # Timeline and budget planning
│   │   └── page.tsx
│   ├── marketing/             # Marketing materials and scripts
│   │   └── page.tsx
│   └── providers/             # Provider search resources
│       └── page.tsx
├── public/                    # Static assets (images, icons, etc.)
├── package.json               # Project dependencies and scripts
├── tsconfig.json             # TypeScript configuration
├── next.config.ts            # Next.js configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── README.md                 # This file
├── MANUAL.md                 # Comprehensive user manual
├── TUTORIAL.md               # Step-by-step tutorial guide
└── QUICKSTART.md             # Quick start guide
```

## Key Functionality

### Scenario Comparison

The application presents three comprehensive scenarios with detailed analysis:

- **Scenario 1: Direct Provider Lease**
  - Fastest path to revenue (30-60 days)
  - No upfront costs for landlord
  - Lower rent potential ($2,500-$3,500/month)
  - Provider handles all conversion work
  - Best for: Quick revenue, minimal risk, limited capital

- **Scenario 2: Minimal WABO Conversion** (RECOMMENDED)
  - Balanced approach with moderate investment
  - Higher rent potential ($3,500-$5,000/month)
  - 60-90 day conversion timeline
  - Attracts more qualified providers
  - Best for: Optimal balance of cost, time, and return

- **Scenario 3: Full Conversion**
  - Maximum return on investment
  - Highest upfront investment ($50K-$75K)
  - Premium rent potential ($5,000-$7,000/month)
  - Longest timeline (120-180 days)
  - Best for: Long-term investment, premium providers

### Cost-Sharing Model

The application uses a sophisticated cost-sharing model:

- **Landlord pays 100%:**
  - Permits and inspections (adds permanent value to property)
  - Initial design and architectural drawings
  - Property value assessments
  - Legal and consulting fees

- **Landlord pays 70-80%:**
  - Construction and structural modifications
  - Major improvements (bathrooms, common areas)
  - Safety systems installation
  - These improvements add permanent value to the property

- **Tenant pays 20-30%:**
  - Operational improvements
  - Tenant-specific customizations
  - Furniture and equipment (if not included)
  - Operational systems setup

- **Shared 50/50:**
  - Contract negotiations
  - Lease finalization
  - Marketing materials (mutual benefit)
  - Property tours and presentations

### Timeline Estimates

Detailed timeline estimates for each scenario:

- **Scenario 1:** 30-90 days
  - Week 1-2: Provider search initiation
  - Week 3-6: Property listings and outreach
  - Week 7-10: Provider screening and negotiations
  - Week 11-12: Lease execution

- **Scenario 2:** 90-120 days
  - Days 1-15: Planning and permits
  - Days 16-25: Contractor selection
  - Days 26-70: Construction phases
  - Days 71-85: Inspections and certification
  - Days 86-120: Marketing and provider search

- **Scenario 3:** 120-180 days
  - Days 1-30: Planning and design
  - Days 31-80: Major construction
  - Days 81-120: Room finishes and ADA compliance
  - Days 121-150: Final systems and inspections
  - Days 151-180: Premium provider search

## Technology Stack

### Core Technologies

- **Next.js 16** - React framework with App Router
  - Server-side rendering capabilities
  - Static site generation
  - API routes support
  - Optimized performance

- **TypeScript** - Type-safe JavaScript
  - Compile-time error checking
  - Better IDE support
  - Improved code maintainability
  - Enhanced developer experience

- **Tailwind CSS** - Utility-first CSS framework
  - Rapid UI development
  - Responsive design utilities
  - Customizable design system
  - Production-optimized CSS

- **React 19** - UI library
  - Component-based architecture
  - Virtual DOM for performance
  - Hooks for state management
  - Server components support

### Development Tools

- **ESLint** - Code linting and quality
- **PostCSS** - CSS processing
- **Turbopack** - Fast bundler (Next.js 16)

## Usage Guide

### For Property Owners

1. **Start with Scenarios Page**
   - Review all three scenarios
   - Understand pros, cons, and costs
   - Select the approach that fits your situation

2. **Analyze Your Property**
   - Use Floor Plan page to understand conversion needs
   - Review room-by-room requirements
   - Estimate total conversion costs

3. **Plan Your Timeline**
   - Use Timeline page to create detailed schedule
   - Understand daily activities and costs
   - Plan for contingencies

4. **Market Your Property**
   - Use Marketing page templates
   - Post on multiple channels
   - Follow up with interested providers

5. **Find Providers**
   - Use Provider Search resources
   - Screen potential tenants carefully
   - Negotiate favorable lease terms

### For Developers

1. **Clone or Download** the project
2. **Install Dependencies** with `npm install`
3. **Run Development Server** with `npm run dev`
4. **Customize** content for your specific property
5. **Deploy** to your preferred hosting platform

## Customization

### Property-Specific Customization

To customize the application for a different property:

1. **Update Property Information**
   - Edit property address in all pages
   - Update square footage and room counts
   - Modify floor plan visualization

2. **Adjust Cost Estimates**
   - Update conversion costs based on local rates
   - Modify timeline estimates
   - Adjust cost-sharing percentages

3. **Customize Marketing Materials**
   - Update property-specific details
   - Modify contact information
   - Adjust messaging for your market

### Styling Customization

- Edit `app/globals.css` for global styles
- Modify Tailwind configuration in `tailwind.config.js`
- Update component styles in individual page files

## Best Practices

### Property Management

- **Document Everything:** Keep records of all communications, costs, and decisions
- **Screen Thoroughly:** Use provided screening questions and check references
- **Plan for Contingencies:** Add 10-15% buffer to timelines and budgets
- **Legal Review:** Have all lease agreements reviewed by attorney
- **Insurance:** Ensure adequate property and liability insurance

### Marketing

- **Multi-Channel Approach:** Use multiple platforms simultaneously
- **Consistent Messaging:** Maintain consistent property description across channels
- **Quick Response:** Respond to inquiries within 24 hours
- **Professional Presentation:** Use high-quality photos and floor plans
- **Follow Up:** Don't let leads go cold - follow up regularly

### Provider Relations

- **Clear Communication:** Set expectations early and clearly
- **Flexible Terms:** Be willing to negotiate within reason
- **Long-Term Focus:** Prioritize stable, long-term tenants
- **Support Provider:** Help provider succeed for mutual benefit
- **Regular Check-Ins:** Maintain relationship after lease execution

## Troubleshooting

### Common Issues

**Build Errors:**
- Ensure Node.js version is 18 or higher
- Delete `node_modules` and `package-lock.json`, then run `npm install` again
- Check for TypeScript errors with `npx tsc --noEmit`

**Development Server Issues:**
- Check if port 3000 is already in use
- Clear Next.js cache: `.next` folder
- Restart development server

**Styling Issues:**
- Ensure Tailwind CSS is properly configured
- Check `globals.css` for proper imports
- Verify Tailwind classes are being used correctly

## Support and Resources

### Additional Resources

- **Washington State DSHS:** [AFH Information](https://www.dshs.wa.gov/altsa/home-and-community-services/adult-family-home)
- **WABO Requirements:** Washington State Building Code
- **AFH Locator:** [Official State Database](https://www.dshs.wa.gov/altsa/home-and-community-services/adult-family-home-locator)

### Getting Help

- Review the MANUAL.md for detailed documentation
- Check TUTORIAL.md for step-by-step guides
- Refer to QUICKSTART.md for rapid setup
- Check Next.js documentation for framework-specific issues

## License

Private project for property management purposes. All rights reserved.

## Version History

- **v1.0.0** - Initial release with comprehensive features
  - Scenario comparison tool
  - Interactive floor plan analysis
  - Timeline and budget planning
  - Marketing materials library
  - Provider search resources

## Contributing

This is a private project. For suggestions or improvements, please contact the project owner.

## Acknowledgments

- Built with Next.js and React
- Styled with Tailwind CSS
- Designed for Washington State AFH market

---

**Last Updated:** 2024
**Maintained By:** Property Owner
**Contact:** [Your Contact Information]
