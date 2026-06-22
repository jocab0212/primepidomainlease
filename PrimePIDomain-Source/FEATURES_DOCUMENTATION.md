# PrimePiDomain Lease - Marketplace Features & API Reference

## Core Features Documentation

### 1. Homepage (`/`)
**Features:**
- Hero section with main CTA
- 6 feature cards highlighting platform benefits
- Featured domains section showing popular listings
- Call-to-action section
- Footer with navigation links

**Key Sections:**
- Navigation with auth links
- Why Choose PrimePi Domain section
- Featured domains grid
- Email subscription (UI ready)

---

### 2. Authentication

#### Login Page (`/login`)
- Email/password form
- Show/hide password toggle
- Forgot password link
- Sign up redirect
- Form validation

#### Signup Page (`/signup`)
- Full name input
- Email input
- Password with confirmation
- Terms acceptance checkbox
- Account creation flow
- Success screen with redirect options

---

### 3. Domain Marketplace (`/marketplace`)
**Advanced Filtering:**
- Search by domain name
- Category filter (Tech, Business, Digital, Innovation, Startups)
- Price range slider (min/max)
- Sort options:
  - Trending (by views)
  - Newest
  - Price: Low to High
  - Price: High to Low

**Domain Cards Display:**
- Domain name with verified badge
- Category badge
- Monthly lease price
- View count
- Heart (favorite) toggle
- Message & Request Lease buttons

**Features:**
- Real-time filter updates
- 9 sample domains included
- Responsive grid (1-2 columns mobile, 2 columns tablet, 2 columns desktop)
- No results state with filter reset

---

### 4. Domain Details (`/domain/[id]`)
**Information:**
- Large domain name display
- Category and verified badges
- Detailed description
- 4 domain features list
- Statistics (views, completed leases, rating)

**Sidebar:**
- Monthly price display
- Lease term information
- Request Lease button
- Message Owner button
- Lease terms card (min lease, auto-renewal, transfer time)

**Owner Info:**
- Owner name and bio
- Avatar placeholder
- Response time

---

### 5. Lease Request Flow (`/request-lease`)
**Multi-Step Process:**

**Step 1: Lease Details**
- Company/Business name
- Contact person
- Email address
- Phone number
- Lease duration (1-24 months)
- Purpose for domain
- Optional message to owner

**Step 2: Payment**
- Order summary review
- Total amount calculation
- Payment method selection
- Security assurance

**Success Screen:**
- Confirmation message
- Request summary
- Dashboard & Browse links

---

### 6. User Dashboard (`/dashboard`)
**KPI Cards:**
- My Domains count
- Active Leases count
- Lease Requests pending
- Monthly Revenue

**Tabs:**

**My Domains Tab:**
- List of owned domains
- Lease status for each
- Lease recipient info
- Edit/Delete buttons
- Add Domain button

**My Leases Tab:**
- Active leases table
- Lessee information
- Lease dates
- Status badges

**Lease Requests Tab:**
- Pending requests table
- Requestor information
- Approve/Decline buttons
- Request date

---

### 7. Messaging System (`/messages`)
**Features:**
- Conversation list sidebar
- Search conversations
- Chat interface
- Message history
- Real-time message input
- Participant and domain info in chat header

**Conversation Display:**
- Avatar placeholder
- Participant name
- Associated domain
- Last message preview
- Timestamp
- Unread indicator (dot)

**Chat Features:**
- Message history
- Timestamp on messages
- Mine vs other styling
- Message input field
- Send button

---

### 8. Wallet Management (`/wallet`)
**Balance Display:**
- Available balance (large, prominent)
- Total earnings this month
- Total spent (leases + fees)

**Tabs:**

**Overview Tab:**
- Quick action buttons (Add Funds, Withdraw, Manage Cards)
- Recent activity list
- Transaction type icons
- Amount and description

**Payment Methods Tab:**
- Connected Pi wallet status
- Connected credit cards
- Add Pi address form
- Remove option for each method

**History Tab:**
- Complete transaction table
- Description, Type, Amount, Date, Status
- Sortable columns
- Filter by transaction type

**Transactions Include:**
- Lease payments received (earn)
- Domain lease payments (spend)
- Platform commissions (fee)
- Subscription charges

---

### 9. Pricing & Subscriptions (`/pricing`)
**Three-Tier Plans:**

1. **Starter (Free)**
   - Browse domains
   - 1 active lease
   - Basic messaging
   - Standard support

2. **Pro ($29/month)** ⭐ Most Popular
   - Unlimited active leases
   - Advanced messaging
   - Priority support
   - Domain analytics
   - API access

3. **Enterprise ($99/month)**
   - All Pro features
   - 24/7 priority support
   - Custom branding
   - Advanced reporting

**FAQ Section:**
- Plan changes anytime
- Payment methods accepted
- Refund policy
- Free trial availability

---

### 10. Add Domain (`/add-domain`)
**Form Fields:**
- Domain name (with .pi suffix)
- Category dropdown
- Monthly price input ($50 minimum)
- Description textarea
- Minimum lease duration
- Auto-renewal toggle

**Features:**
- Domain validation
- Price suggestions
- Commission explanation (15%)
- Success confirmation
- Multi-domain adding

---

### 11. Admin Dashboard (`/admin/dashboard`)
**Analytics Section:**
- KPI cards (Total Users, Total Leases, Monthly Revenue, Active Disputes)

**Tabs:**

**Overview Tab:**
- Revenue trend chart (LineChart)
- Lease status distribution pie chart
- New users list
- Earnings vs leases visualization

**Leases Tab:**
- Pending lease requests
- Approve/Review/Decline actions
- Lease details (domain, requester, owner, amount, status)

**Users Tab:**
- User management table
- User info, joined date, domains, status
- View action buttons

**Disputes Tab:**
- Dispute listings
- Alert icons for severity
- Investigation & resolution buttons

**Settings Tab:**
- Commission rate
- Minimum lease amount
- Max lease duration
- Maintenance mode toggle

---

## Mobile Optimization Checklist

✅ HTML Title: "Made with App Studio"
✅ Mobile-first responsive design
✅ Touch-friendly buttons (min 44px)
✅ Sticky navigation for easy access
✅ Mobile optimized navigation menus
✅ Responsive images and spacing
✅ Optimized typography for mobile
✅ Proper viewport meta tags
✅ Mobile-optimized forms
✅ Swipe-friendly interfaces

---

## Component Library Used

**shadcn/ui Components:**
- Button
- Card
- Input
- Label
- Textarea
- Tabs
- Badge
- Select
- Checkbox
- Dialog
- Drawer
- Separator

**Charts:**
- LineChart
- BarChart
- PieChart
- ResponsiveContainer

**Icons (Lucide React):**
- Globe
- MessageSquare
- Heart
- Filter
- Search
- Send
- TrendingUp
- And 20+ more

---

## Color Palette

**Primary Brand Color:** Deep Purple
- Light: `oklch(0.35 0.15 265)`
- Dark: `oklch(0.6 0.18 265)`

**Accent Color:** Vibrant Purple
- Light: `oklch(0.55 0.2 280)`
- Dark: `oklch(0.7 0.22 280)`

**Neutrals:** Blue-tinted grays
- Background: `oklch(0.98 0.001 218)`
- Foreground: `oklch(0.12 0.008 215)`
- Muted: `oklch(0.93 0.02 218)`

---

## Database Schema (For Production)

```sql
-- Users
CREATE TABLE users (
  id UUID PRIMARY KEY,
  email VARCHAR(255) UNIQUE,
  password_hash VARCHAR(255),
  name VARCHAR(255),
  bio TEXT,
  avatar_url TEXT,
  subscription_plan VARCHAR(50),
  created_at TIMESTAMP
);

-- Domains
CREATE TABLE domains (
  id UUID PRIMARY KEY,
  name VARCHAR(100) UNIQUE,
  owner_id UUID REFERENCES users(id),
  monthly_price DECIMAL(10, 2),
  category VARCHAR(50),
  description TEXT,
  is_verified BOOLEAN DEFAULT false,
  created_at TIMESTAMP
);

-- Leases
CREATE TABLE leases (
  id UUID PRIMARY KEY,
  domain_id UUID REFERENCES domains(id),
  requester_id UUID REFERENCES users(id),
  owner_id UUID REFERENCES users(id),
  start_date DATE,
  end_date DATE,
  monthly_rate DECIMAL(10, 2),
  status VARCHAR(50), -- pending, active, completed, disputed
  created_at TIMESTAMP
);

-- Messages
CREATE TABLE messages (
  id UUID PRIMARY KEY,
  sender_id UUID REFERENCES users(id),
  receiver_id UUID REFERENCES users(id),
  domain_id UUID REFERENCES domains(id),
  content TEXT,
  read BOOLEAN DEFAULT false,
  created_at TIMESTAMP
);

-- Transactions
CREATE TABLE transactions (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  type VARCHAR(50), -- earn, spend, fee
  amount DECIMAL(10, 2),
  description TEXT,
  status VARCHAR(50), -- pending, completed, failed
  created_at TIMESTAMP
);

-- Subscriptions
CREATE TABLE subscriptions (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  plan_type VARCHAR(50),
  status VARCHAR(50),
  billing_cycle VARCHAR(50),
  created_at TIMESTAMP
);
```

---

## API Routes (To Be Implemented)

```
/api/auth/login
/api/auth/signup
/api/domains
/api/domains/[id]
/api/domains/[id]/lease-requests
/api/leases
/api/messages
/api/messages/[conversationId]
/api/wallet
/api/wallet/transactions
/api/wallet/withdraw
/api/subscriptions
/api/admin/analytics
/api/admin/users
/api/admin/disputes
```

---

## Performance Considerations

- Image optimization with Next.js Image component
- Code splitting for faster initial load
- CSS-in-JS with Tailwind for minimal CSS
- Lazy loading for off-screen components
- Mobile viewport optimization
- Service worker for PWA capabilities
- Edge caching for static assets

Made with App Studio - 2026
