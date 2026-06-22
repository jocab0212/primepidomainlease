'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Globe, Search, MessageSquare, Zap, Lock, TrendingUp } from 'lucide-react';

export default function HomePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Globe className="w-6 h-6 text-primary" />
            <h1 className="text-xl font-bold text-primary">PrimePi Domain</h1>
          </div>
          <div className="flex gap-2">
            {!isLoggedIn ? (
              <>
                <Link href="/login">
                  <Button variant="outline" size="sm">Sign In</Button>
                </Link>
                <Link href="/signup">
                  <Button size="sm">Get Started</Button>
                </Link>
              </>
            ) : (
              <>
                <Link href="/dashboard">
                  <Button variant="outline" size="sm">Dashboard</Button>
                </Link>
                <Button size="sm" variant="destructive" onClick={() => setIsLoggedIn(false)}>Sign Out</Button>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-12 px-4 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Lease Premium .pi Domains
          </h2>
          <p className="text-lg text-muted-foreground mb-6 text-balance">
            Discover premium .pi domain names for your business. Secure, professional, and ready for the Web3 era.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/marketplace">
              <Button size="lg">Browse Marketplace</Button>
            </Link>
            <Link href="/signup">
              <Button size="lg" variant="outline">List Your Domains</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose PrimePi Domain?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Search,
                title: 'Find Premium Domains',
                desc: 'Browse thousands of premium .pi domains curated for business success'
              },
              {
                icon: Lock,
                title: 'Secure Leasing',
                desc: 'Smart contracts ensure secure and transparent lease agreements'
              },
              {
                icon: MessageSquare,
                title: 'Direct Messaging',
                desc: 'Connect directly with domain owners through our secure platform'
              },
              {
                icon: Zap,
                title: 'Quick Processing',
                desc: 'Fast lease activation and domain transfer within 24 hours'
              },
              {
                icon: TrendingUp,
                title: 'Market Analytics',
                desc: 'Track domain trends and market insights for smart decisions'
              },
              {
                icon: Globe,
                title: 'Global Access',
                desc: 'Lease domains from sellers worldwide on the Pi Network'
              }
            ].map((feature, idx) => (
              <Card key={idx} className="p-6 border-border hover:border-primary/50 transition-colors">
                <feature.icon className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Domains */}
      <section className="py-12 md:py-20 px-4 bg-secondary/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Domains</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'techventure.pi', lease: '$99/month', views: 1243 },
              { name: 'innovate.pi', lease: '$149/month', views: 892 },
              { name: 'business.pi', lease: '$199/month', views: 2156 },
              { name: 'startup.pi', lease: '$89/month', views: 654 },
              { name: 'digital.pi', lease: '$129/month', views: 1087 },
              { name: 'future.pi', lease: '$159/month', views: 1923 }
            ].map((domain, idx) => (
              <Link key={idx} href="/marketplace">
                <Card className="p-6 hover:shadow-lg hover:border-primary transition-all cursor-pointer">
                  <h3 className="text-xl font-bold text-primary mb-2">{domain.name}</h3>
                  <div className="flex justify-between items-center text-sm text-muted-foreground">
                    <span className="text-lg font-semibold text-foreground">{domain.lease}</span>
                    <span>{domain.views} views</span>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Find Your Perfect Domain?</h2>
          <p className="text-lg opacity-90 mb-6">Join thousands of businesses leasing premium .pi domains today</p>
          <Link href="/signup">
            <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              Start Leasing Now
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
              <li><Link href="#" className="hover:text-primary">List Domains</Link></li>
              <li><Link href="#" className="hover:text-primary">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-foreground">Resources</h4>
            <ul className="space-y-1">
              <li><Link href="#" className="hover:text-primary">Blog</Link></li>
              <li><Link href="#" className="hover:text-primary">Help</Link></li>
              <li><Link href="#" className="hover:text-primary">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-foreground">Company</h4>
            <ul className="space-y-1">
              <li><Link href="#" className="hover:text-primary">About</Link></li>
              <li><Link href="#" className="hover:text-primary">Careers</Link></li>
              <li><Link href="#" className="hover:text-primary">Contact</Link></li>
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
