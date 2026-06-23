'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Globe, ChevronLeft, CheckCircle } from 'lucide-react';

export default function AddDomainPage() {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [formData, setFormData] = useState({
    domain: '',
    category: '',
    monthlyPrice: '',
    description: '',
    minLease: '1',
    autoRenewal: 'yes'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
  };

  if (step === 'success') {
    return (
      <div className="min-h-screen bg-background">
        <nav className="border-b border-border py-4 px-4 mb-8">
          <div className="max-w-2xl mx-auto flex items-center gap-2">
            <Globe className="w-6 h-6 text-primary" />
            <h1 className="text-xl font-bold text-primary">PrimePi Domain</h1>
          </div>
        </nav>

        <div className="max-w-2xl mx-auto px-4">
          <Card className="p-8 text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h1 className="text-3xl font-bold mb-2">Domain Listed!</h1>
            <p className="text-muted-foreground mb-6">
              Your domain {formData.domain} has been successfully listed on the marketplace. 
              It will appear in search results within a few minutes.
            </p>
            <div className="bg-muted p-4 rounded-lg mb-6 text-left">
              <h3 className="font-semibold mb-3">Domain Summary</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Domain:</span>
                  <span className="font-semibold">{formData.domain}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Category:</span>
                  <span className="font-semibold">{formData.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monthly Price:</span>
                  <span className="font-semibold">${formData.monthlyPrice}/mo</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Minimum Lease:</span>
                  <span className="font-semibold">{formData.minLease} month(s)</span>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <Link href="/dashboard" className="flex-1">
                <Button className="w-full">View Dashboard</Button>
              </Link>
              <Link href="/add-domain" className="flex-1">
                <Button variant="outline" className="w-full">Add Another Domain</Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80">
            <Globe className="w-6 h-6 text-primary" />
            <h1 className="text-xl font-bold text-primary">PrimePi Domain</h1>
          </Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Back Link */}
        <Link href="/dashboard" className="flex items-center gap-2 text-primary hover:underline mb-6">
          <ChevronLeft className="w-4 h-4" />
          Back to Dashboard
        </Link>

        <Card className="p-8 max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">List Your Domain</h1>
          <p className="text-muted-foreground mb-8">
            Add a premium .pi domain to the marketplace and start earning passive income through leases.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Domain Information */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Domain Information</h3>
              
              <div className="mb-4">
                <Label htmlFor="domain">Domain Name</Label>
                <div className="flex mt-1">
                  <Input
                    id="domain"
                    value={formData.domain}
                    onChange={(e) => setFormData({...formData, domain: e.target.value})}
                    placeholder="myawesome"
                    className="rounded-r-none"
                    required
                  />
                  <div className="px-3 py-2 bg-muted border border-l-0 border-border rounded-r-md flex items-center text-muted-foreground">
                    .pi
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <Label htmlFor="category">Category</Label>
                <Select value={formData.category} onValueChange={(value) => setFormData({...formData, category: value})}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Tech">Technology</SelectItem>
                    <SelectItem value="Business">Business</SelectItem>
                    <SelectItem value="Digital">Digital</SelectItem>
                    <SelectItem value="Innovation">Innovation</SelectItem>
                    <SelectItem value="Startups">Startups</SelectItem>
                    <SelectItem value="Commerce">E-Commerce</SelectItem>
                    <SelectItem value="Education">Education</SelectItem>
                    <SelectItem value="Healthcare">Healthcare</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="mb-4">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  placeholder="Describe your domain. Highlight unique features, previous use case, or why it's valuable for potential lessees..."
                  className="mt-1 min-h-24"
                  required
                />
              </div>
            </div>

            {/* Pricing & Terms */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Pricing & Lease Terms</h3>
              
              <div className="mb-4">
                <Label htmlFor="monthlyPrice">Monthly Lease Price</Label>
                <div className="flex mt-1">
                  <div className="px-3 py-2 bg-muted border border-r-0 border-border rounded-l-md flex items-center text-muted-foreground">
                    $
                  </div>
                  <Input
                    id="monthlyPrice"
                    type="number"
                    min="50"
                    step="1"
                    value={formData.monthlyPrice}
                    onChange={(e) => setFormData({...formData, monthlyPrice: e.target.value})}
                    placeholder="99"
                    className="rounded-l-none"
                    required
                  />
                  <div className="px-3 py-2 bg-muted border border-l-0 border-border rounded-r-md flex items-center text-muted-foreground">
                    /mo
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-1">Minimum $50/month</p>
              </div>

              <div className="mb-4">
                <Label htmlFor="minLease">Minimum Lease Duration</Label>
                <Select value={formData.minLease} onValueChange={(value) => setFormData({...formData, minLease: value})}>
                  <SelectTrigger className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 month</SelectItem>
                    <SelectItem value="3">3 months</SelectItem>
                    <SelectItem value="6">6 months</SelectItem>
                    <SelectItem value="12">12 months</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="autoRenewal">Allow Auto-Renewal</Label>
                <Select value={formData.autoRenewal} onValueChange={(value) => setFormData({...formData, autoRenewal: value})}>
                  <SelectTrigger className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Yes - Leases auto-renew</SelectItem>
                    <SelectItem value="no">No - Manual renewal only</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Info Box */}
            <Card className="p-4 bg-blue-50 border-blue-200">
              <p className="text-sm text-blue-800">
                <strong>Commission:</strong> PrimePi takes a 15% commission on each lease payment. 
                You&apos;ll receive 85% of the monthly lease price directly to your wallet.
              </p>
            </Card>

            <div className="flex gap-3">
              <Link href="/dashboard" className="flex-1">
                <Button variant="outline" className="w-full">Cancel</Button>
              </Link>
              <Button type="submit" className="flex-1">
                List Domain
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}
