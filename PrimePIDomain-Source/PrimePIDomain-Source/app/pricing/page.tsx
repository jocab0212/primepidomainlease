'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Globe, Check, ChevronRight, Zap, Shield, Users } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: 0,
    period: 'Free',
    description: 'Perfect for getting started',
    features: [
      { name: 'Browse domains', included: true },
      { name: 'Up to 1 active lease', included: true },
      { name: 'Basic messaging', included: true },
      { name: 'Standard support', included: true },
      { name: 'Domain analytics', included: false },
      { name: 'Priority support', included: false },
      { name: 'Custom branding', included: false },
    ],
    cta: 'Get Started',
    highlighted: false
  },
  {
    name: 'Pro',
    price: 29,
    period: '/month',
    description: 'For active marketplace users',
    features: [
      { name: 'Browse domains', included: true },
      { name: 'Unlimited active leases', included: true },
      { name: 'Advanced messaging', included: true },
      { name: 'Priority support', included: true },
      { name: 'Domain analytics', included: true },
      { name: 'API access', included: false },
      { name: 'Custom branding', included: false },
    ],
    cta: 'Subscribe Now',
    highlighted: true
  },
  {
    name: 'Enterprise',
    price: 99,
    period: '/month',
    description: 'For businesses at scale',
    features: [
      { name: 'Browse domains', included: true },
      { name: 'Unlimited active leases', included: true },
      { name: 'Advanced messaging', included: true },
      { name: '24/7 priority support', included: true },
      { name: 'Domain analytics', included: true },
      { name: 'API access', included: true },
      { name: 'Custom branding', included: true },
    ],
    cta: 'Contact Sales',
    highlighted: false
  }
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80">
            <Globe className="w-6 h-6 text-primary" />
            <h1 className="text-xl font-bold text-primary">PrimePi Domain</h1>
          </Link>
          <div className="flex gap-2">
            <Link href="/login">
              <Button variant="outline" size="sm">Sign In</Button>
            </Link>
            <Link href="/signup">
              <Button size="sm">Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Simple, Transparent Pricing
          </h1>
          <p className="text-lg text-muted-foreground text-balance">
            Choose the perfect plan for your domain leasing needs
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {plans.map((plan, idx) => (
              <Card
                key={idx}
                className={`relative p-8 flex flex-col transition-all ${
                  plan.highlighted
                    ? 'ring-2 ring-primary scale-105 shadow-xl'
                    : 'hover:shadow-lg'
                }`}
              >
                {plan.highlighted && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary">
                    Most Popular
                  </Badge>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-4xl font-bold text-primary">${plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </div>

                <Button
                  className="w-full mb-8"
                  variant={plan.highlighted ? 'default' : 'outline'}
                >
                  {plan.cta}
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>

                <div className="space-y-4 flex-1">
                  <p className="text-sm font-semibold text-foreground">Includes:</p>
                  {plan.features.map((feature, fidx) => (
                    <div key={fidx} className="flex items-center gap-3">
                      <Check
                        className={`w-5 h-5 flex-shrink-0 ${
                          feature.included
                            ? 'text-green-500'
                            : 'text-muted-foreground opacity-30'
                        }`}
                      />
                      <span
                        className={
                          feature.included
                            ? 'text-sm text-foreground'
                            : 'text-sm text-muted-foreground line-through opacity-50'
                        }
                      >
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* FAQ */}
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              {[
                {
                  q: 'Can I change my plan anytime?',
                  a: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect at your next billing cycle.'
                },
                {
                  q: 'What payment methods do you accept?',
                  a: 'We accept Pi Network, credit cards, debit cards, and other major payment methods for maximum flexibility.'
                },
                {
                  q: 'Do you offer refunds?',
                  a: 'We offer a 30-day money-back guarantee for annual subscriptions. Monthly plans can be canceled anytime.'
                },
                {
                  q: 'Is there a free trial?',
                  a: 'Yes! The Starter plan is completely free with limited features. Upgrade anytime to access more capabilities.'
                }
              ].map((faq, idx) => (
                <Card key={idx} className="p-6">
                  <h4 className="font-semibold mb-2">{faq.q}</h4>
                  <p className="text-sm text-muted-foreground">{faq.a}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg opacity-90 mb-6">Join thousands of users already leasing premium domains on PrimePi</p>
          <Link href="/signup">
            <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              Sign Up Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-muted-foreground mb-6">
          <div>
            <h4 className="font-semibold mb-2 text-foreground">Product</h4>
            <ul className="space-y-1">
              <li><Link href="#" className="hover:text-primary">Marketplace</Link></li>
              <li><Link href="#" className="hover:text-primary">Pricing</Link></li>
              <li><Link href="#" className="hover:text-primary">Features</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-foreground">Resources</h4>
            <ul className="space-y-1">
              <li><Link href="#" className="hover:text-primary">Blog</Link></li>
              <li><Link href="#" className="hover:text-primary">Help</Link></li>
              <li><Link href="#" className="hover:text-primary">Guides</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-foreground">Company</h4>
            <ul className="space-y-1">
              <li><Link href="#" className="hover:text-primary">About</Link></li>
              <li><Link href="#" className="hover:text-primary">Contact</Link></li>
              <li><Link href="#" className="hover:text-primary">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-foreground">Legal</h4>
            <ul className="space-y-1">
              <li><Link href="#" className="hover:text-primary">Privacy</Link></li>
              <li><Link href="#" className="hover:text-primary">Terms</Link></li>
              <li><Link href="#" className="hover:text-primary">Cookies</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-6 text-center text-muted-foreground">
          <p>&copy; 2026 PrimePiDomain. All rights reserved. Made with App Studio.</p>
        </div>
      </footer>
    </div>
  );
}
