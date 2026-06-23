'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Globe, ChevronLeft, CheckCircle, AlertCircle } from 'lucide-react';

export default function RequestLeasePage() {
  const [step, setStep] = useState<'form' | 'payment' | 'success'>('form');
  const [domain] = useState('techventure.pi');
  const [monthlyPrice] = useState(99);
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    leaseTerm: '12',
    totalAmount: 1188,
    purpose: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('payment');
  };

  const handlePayment = () => {
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
            <h1 className="text-3xl font-bold mb-2">Lease Request Submitted!</h1>
            <p className="text-muted-foreground mb-6">
              Your lease request for {domain} has been submitted successfully. 
              The domain owner will review your request and respond within 24 hours.
            </p>
            <div className="bg-muted p-4 rounded-lg mb-6 text-left">
              <h3 className="font-semibold mb-3">Request Summary</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Domain:</span>
                  <span className="font-semibold">{domain}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Lease Term:</span>
                  <span className="font-semibold">{formData.leaseTerm} months</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monthly Rate:</span>
                  <span className="font-semibold">${monthlyPrice}/mo</span>
                </div>
                <div className="flex justify-between border-t border-border pt-2 mt-2">
                  <span className="text-muted-foreground">Total Amount:</span>
                  <span className="font-bold text-lg text-primary">${formData.totalAmount}</span>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <Link href="/dashboard" className="flex-1">
                <Button className="w-full">Go to Dashboard</Button>
              </Link>
              <Link href="/marketplace" className="flex-1">
                <Button variant="outline" className="w-full">Browse More Domains</Button>
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
        <Link href="/marketplace" className="flex items-center gap-2 text-primary hover:underline mb-6">
          <ChevronLeft className="w-4 h-4" />
          Back to Marketplace
        </Link>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                step !== 'form' ? 'bg-green-500 text-white' : 'bg-primary text-primary-foreground'
              }`}>
                1
              </div>
              <span className={step === 'form' || step !== 'form' ? 'font-semibold' : 'text-muted-foreground'}>
                Lease Details
              </span>
            </div>
            <div className="flex-1 h-1 bg-border mx-4" />
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                step === 'success' ? 'bg-green-500 text-white' : step === 'payment' ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
              }`}>
                2
              </div>
              <span className={step === 'payment' || step === 'success' ? 'font-semibold' : 'text-muted-foreground'}>
                Payment
              </span>
            </div>
          </div>
        </div>

        {step === 'form' ? (
          <Card className="p-8">
            <h1 className="text-3xl font-bold mb-2">Request Lease for {domain}</h1>
            <p className="text-muted-foreground mb-8">Fill in your details to request a lease for this domain</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Company Information */}
              <div>
                <h3 className="font-semibold text-lg mb-4">Your Information</h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="companyName">Company/Business Name</Label>
                    <Input
                      id="companyName"
                      value={formData.companyName}
                      onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                      placeholder="Your company name"
                      className="mt-1"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="contactPerson">Contact Person</Label>
                      <Input
                        id="contactPerson"
                        value={formData.contactPerson}
                        onChange={(e) => setFormData({...formData, contactPerson: e.target.value})}
                        placeholder="Your name"
                        className="mt-1"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="your@email.com"
                        className="mt-1"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="+1 (555) 123-4567"
                      className="mt-1"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Lease Terms */}
              <div>
                <h3 className="font-semibold text-lg mb-4">Lease Terms</h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="leaseTerm">Lease Duration (months)</Label>
                    <Select value={formData.leaseTerm} onValueChange={(value) => {
                      const months = parseInt(value);
                      setFormData({
                        ...formData,
                        leaseTerm: value,
                        totalAmount: months * monthlyPrice
                      });
                    }}>
                      <SelectTrigger className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 month</SelectItem>
                        <SelectItem value="3">3 months</SelectItem>
                        <SelectItem value="6">6 months</SelectItem>
                        <SelectItem value="12">12 months</SelectItem>
                        <SelectItem value="24">24 months</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="bg-muted p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-muted-foreground">Monthly Rate:</span>
                      <span className="font-semibold">${monthlyPrice}/mo</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Total Amount:</span>
                      <span className="text-2xl font-bold text-primary">${formData.totalAmount}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Purpose */}
              <div>
                <h3 className="font-semibold text-lg mb-4">Lease Purpose</h3>
                <div>
                  <Label htmlFor="purpose">What is the primary purpose for this domain?</Label>
                  <Input
                    id="purpose"
                    value={formData.purpose}
                    onChange={(e) => setFormData({...formData, purpose: e.target.value})}
                    placeholder="e.g., Business website, eCommerce, Portfolio"
                    className="mt-1"
                    required
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <h3 className="font-semibold text-lg mb-4">Additional Message</h3>
                <div>
                  <Label htmlFor="message">Add a message for the domain owner (optional)</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Tell the domain owner about your business and why you're interested in this domain..."
                    className="mt-1 min-h-24"
                  />
                </div>
              </div>

              {/* Warning */}
              <Card className="p-4 bg-amber-50 border-amber-200">
                <div className="flex gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
                  <div className="text-sm text-amber-800">
                    <p className="font-semibold mb-1">Important</p>
                    <p>By submitting this request, you agree to the lease terms and conditions. The domain owner will contact you to confirm the lease.</p>
                  </div>
                </div>
              </Card>

              <Button type="submit" className="w-full" size="lg">
                Continue to Payment
              </Button>
            </form>
          </Card>
        ) : (
          <Card className="p-8">
            <h1 className="text-3xl font-bold mb-2">Complete Payment</h1>
            <p className="text-muted-foreground mb-8">Secure payment processing for your domain lease</p>

            <div className="bg-muted p-6 rounded-lg mb-8">
              <h3 className="font-semibold mb-4">Order Summary</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>Domain:</span>
                  <span className="font-semibold">{domain}</span>
                </div>
                <div className="flex justify-between">
                  <span>Company:</span>
                  <span className="font-semibold">{formData.companyName}</span>
                </div>
                <div className="flex justify-between">
                  <span>Lease Term:</span>
                  <span className="font-semibold">{formData.leaseTerm} months</span>
                </div>
                <div className="flex justify-between">
                  <span>Monthly Rate:</span>
                  <span className="font-semibold">${monthlyPrice}/mo</span>
                </div>
                <div className="flex justify-between border-t border-border pt-3 mt-3 font-bold text-lg">
                  <span>Total:</span>
                  <span className="text-primary">${formData.totalAmount}</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg mb-8">
              <p className="text-sm text-blue-800">
                Payment will be processed securely. We accept Pi Network and major payment methods.
              </p>
            </div>

            <div className="space-y-3">
              <Button className="w-full" size="lg" onClick={handlePayment}>
                Complete Payment
              </Button>
              <Button variant="outline" className="w-full" onClick={() => setStep('form')}>
                Back to Details
              </Button>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
