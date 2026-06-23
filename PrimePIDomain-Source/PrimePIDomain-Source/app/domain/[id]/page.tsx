'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Globe, MessageCircle, Send, Calendar, DollarSign, CheckCircle, ChevronLeft } from 'lucide-react';

export default function DomainDetailPage({ params }: { params: { id: string } }) {
  const domain = {
    id: params.id,
    name: 'techventure.pi',
    owner: 'Jane Developer',
    ownerBio: 'Tech entrepreneur and domain enthusiast',
    price: 99,
    category: 'Tech',
    description: 'Perfect domain for tech startups and innovation projects. Established online presence with this premium domain.',
    features: ['Premium positioning', 'Memorable name', 'Growth potential', 'SEO optimized'],
    verified: true,
    views: 1243,
    leases: 5,
    rating: 4.8,
    responseTime: '2 hours'
  };

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
            <Link href="/marketplace">
              <Button variant="outline" size="sm">Back to Marketplace</Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Back Link */}
        <Link href="/marketplace" className="flex items-center gap-2 text-primary hover:underline mb-6">
          <ChevronLeft className="w-4 h-4" />
          Back to Marketplace
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Domain Info */}
          <div className="lg:col-span-2">
            <Card className="p-8 mb-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h1 className="text-4xl font-bold text-primary mb-2">{domain.name}</h1>
                  <div className="flex flex-wrap gap-2 items-center">
                    <Badge variant="outline">{domain.category}</Badge>
                    {domain.verified && <Badge className="bg-green-500">Verified</Badge>}
                  </div>
                </div>
              </div>

              <p className="text-lg text-foreground mb-6">{domain.description}</p>

              {/* Features */}
              <div className="mb-8">
                <h3 className="font-semibold text-lg mb-4">Domain Features</h3>
                <div className="grid grid-cols-2 gap-4">
                  {domain.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 py-6 border-y border-border">
                <div>
                  <p className="text-sm text-muted-foreground">Views</p>
                  <p className="text-2xl font-bold">{domain.views}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Completed Leases</p>
                  <p className="text-2xl font-bold">{domain.leases}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Owner Rating</p>
                  <p className="text-2xl font-bold">{domain.rating}★</p>
                </div>
              </div>
            </Card>

            {/* Owner Info */}
            <Card className="p-6 mb-8">
              <h3 className="font-bold text-lg mb-4">About the Owner</h3>
              <div className="flex gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full" />
                <div className="flex-1">
                  <h4 className="font-semibold">{domain.owner}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{domain.ownerBio}</p>
                  <p className="text-sm text-muted-foreground">Response time: {domain.responseTime}</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Price Card */}
            <Card className="p-6 mb-6 sticky top-24">
              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-bold text-primary">${domain.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <p className="text-sm text-muted-foreground">Flexible lease terms available</p>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>Minimum 1 month lease</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <DollarSign className="w-4 h-4" />
                  <span>No setup fees</span>
                </div>
              </div>

              <Link href="/request-lease" className="w-full block">
                <Button className="w-full mb-3">Request Lease</Button>
              </Link>
              <Button variant="outline" className="w-full gap-2">
                <MessageCircle className="w-4 h-4" />
                Message Owner
              </Button>
            </Card>

            {/* Quick Info */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Lease Terms</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Minimum Lease</span>
                  <span className="font-semibold">1 month</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Auto-Renewal</span>
                  <span className="font-semibold">Available</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Transfer</span>
                  <span className="font-semibold">24 hours</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
