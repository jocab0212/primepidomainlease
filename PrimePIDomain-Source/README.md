# PrimePiDomain Lease - Premium .pi Domain Marketplace

A premium mobile-first marketplace platform for leasing .pi domains, built with Next.js, React, TypeScript, and Tailwind CSS.

## Features

### User Features
- **Authentication**: Secure login and registration system with password management
- **Domain Marketplace**: Browse and filter premium .pi domains by category, price, and trending status
- **Lease Request Flow**: Multi-step lease request process with payment integration
- **Messaging System**: Direct communication between domain owners and lessees
- **User Dashboard**: Manage domains, track active leases, and monitor pending requests
- **Wallet Management**: Track earnings, transactions, and manage payment methods
- **Subscription Plans**: Tiered pricing (Starter Free, Pro $29/mo, Enterprise $99/mo)

### Admin Features
- **Admin Dashboard**: Platform analytics and management console
- **User Management**: Monitor user accounts and activity
- **Lease Management**: Review and approve lease requests
- **Dispute Resolution**: Handle payment disputes and lease conflicts
- **Platform Configuration**: Set commission rates and system parameters
- **Revenue Analytics**: Track platform revenue and growth metrics

### Domain Management
- **Premium Domain Listing**: Add and manage .pi domains for lease
- **Verification System**: Mark domains as verified for trust
- **Analytics**: Track views, lease history, and owner ratings
- **Flexible Terms**: Support multiple lease durations (1-24 months)

## Project Structure

```
app/
├── page.tsx                      # Home page with hero and features
├── login/page.tsx                # User login page
├── signup/page.tsx               # User registration page
├── marketplace/page.tsx          # Domain browsing with filters
├── domain/[id]/page.tsx          # Individual domain detail
├── request-lease/page.tsx        # Multi-step lease request
├── dashboard/page.tsx            # User dashboard
├── messages/page.tsx             # Messaging system
├── wallet/page.tsx               # Wallet & transaction history
├── pricing/page.tsx              # Subscription pricing page
├── admin/dashboard/page.tsx       # Admin console
├── layout.tsx                    # Root layout
├── globals.css                   # Theme & styling
└── ...

components/
├── ui/                           # shadcn/ui components
├── app-wrapper.tsx               # App wrapper with providers
└── ...

lib/
├── utils.ts                      # Utility functions
└── ...
```

## Color System

The app uses a premium purple/violet color scheme with careful contrast:

- **Primary**: `oklch(0.35 0.15 265)` - Deep purple for primary actions
- **Accent**: `oklch(0.55 0.2 280)` - Vibrant purple accent
- **Background**: `oklch(0.98 0.001 218)` - Clean light blue-tinted white
- **Foreground**: `oklch(0.12 0.008 215)` - Dark blue-tinted text

The color scheme adapts for dark mode with adjusted lightness and saturation values.

## Typography

- **Font Family**: Geist Sans (primary), Geist Mono (code)
- **Line Height**: 1.4-1.6 for optimal readability
- **Mobile First**: All responsive breakpoints optimized for mobile

## Key Pages

| Route | Purpose |
|-------|---------|
| `/` | Homepage with features and featured domains |
| `/login` | User authentication |
| `/signup` | User registration |
| `/marketplace` | Domain browsing with advanced filtering |
| `/domain/[id]` | Domain details and lease information |
| `/request-lease` | Multi-step lease request process |
| `/dashboard` | User domain & lease management |
| `/messages` | Direct messaging between users |
| `/wallet` | Financial management and transactions |
| `/pricing` | Subscription plans and pricing |
| `/admin/dashboard` | Admin analytics and platform management |

## Responsive Design

- Mobile-first approach with mobile viewport optimization
- Responsive grid layouts using Tailwind CSS
- Touch-friendly buttons and interactive elements
- Optimized navigation for small screens
- Sticky navigation for easy access on mobile

## Database Requirements

For a production deployment, the following database tables would be needed:

### Users
- id, email, password_hash, name, bio, avatar_url, created_at

### Domains
- id, name, owner_id, monthly_price, category, description, is_verified, created_at

### Leases
- id, domain_id, requester_id, owner_id, start_date, end_date, monthly_rate, status, created_at

### Messages
- id, sender_id, receiver_id, domain_id, content, read, created_at

### Transactions
- id, user_id, type (earn/spend), amount, description, status, created_at

### Subscriptions
- id, user_id, plan_type, status, billing_cycle, created_at

## Getting Started

### Installation

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Development

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

## Environment Variables

For production deployment, configure these environment variables:

```
NEXT_PUBLIC_API_URL=
DATABASE_URL=
PI_NETWORK_API_KEY=
PAYMENT_PROVIDER_KEY=
```

## Mobile Optimization

- HTML title set to "Made with App Studio"
- Responsive viewport meta tags configured
- Mobile-optimized layout with proper spacing
- Touch-friendly interface elements
- Performance optimized for mobile networks

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Technologies Used

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS v4, shadcn/ui components
- **Charts**: Recharts for analytics visualization
- **Icons**: Lucide React
- **Form Handling**: React Hook Form with Zod validation
- **State Management**: React Context & Hooks

## Security Considerations

- Password validation and hashing (bcrypt)
- Secure session management with HTTP-only cookies
- Input validation and sanitization
- CSRF protection
- SQL injection prevention with parameterized queries
- Rate limiting for API endpoints

## Deployment

### Vercel Deployment (Recommended)

```bash
vercel deploy
```

The app is optimized for Vercel's serverless platform with:
- Edge functions for API routes
- ISR (Incremental Static Regeneration) for homepage
- Image optimization
- Automatic deployments from Git

## License

Made with App Studio - 2026

## Support

For questions or issues, refer to the in-app help section or contact support@primepidomains.io
