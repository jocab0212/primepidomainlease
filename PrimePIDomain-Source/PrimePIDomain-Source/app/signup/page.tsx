'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Globe, Eye, EyeOff, CheckCircle2 } from 'lucide-react';

export default function SignupPage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState<'form' | 'success'>('form');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    setIsLoading(true);
    // Simulate signup
    await new Promise(r => setTimeout(r, 1000));
    setIsLoading(false);
    setStep('success');
  };

  if (step === 'success') {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <div className="border-b border-border py-4 px-4">
          <div className="max-w-md mx-auto flex items-center gap-2">
            <Globe className="w-6 h-6 text-primary" />
            <h1 className="text-xl font-bold text-primary">PrimePi Domain</h1>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center px-4 py-8">
          <Card className="w-full max-w-md p-6 text-center">
            <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Account Created!</h2>
            <p className="text-muted-foreground mb-6">
              Welcome to PrimePi Domain. Your account has been successfully created.
            </p>
            <Link href="/dashboard" className="w-full inline-block">
              <Button className="w-full mb-3">Go to Dashboard</Button>
            </Link>
            <Link href="/marketplace" className="w-full inline-block">
              <Button variant="outline" className="w-full">
                Browse Domains
              </Button>
            </Link>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="border-b border-border py-4 px-4">
        <div className="max-w-md mx-auto flex items-center gap-2">
          <Globe className="w-6 h-6 text-primary" />
          <h1 className="text-xl font-bold text-primary">PrimePi Domain</h1>
        </div>
      </div>

      {/* Signup Form */}
      <div className="flex-1 flex items-center justify-center px-4 py-8">
        <Card className="w-full max-w-md p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">Create Account</h2>
            <p className="text-sm text-muted-foreground">Join PrimePi Domain and start leasing premium domains</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                type="text"
                placeholder="John Doe"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="mt-1"
                required
              />
            </div>

            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1"
                required
              />
            </div>

            <div>
              <Label htmlFor="password">Password</Label>
              <div className="relative mt-1">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Create a strong password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div>
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="mt-1"
                required
              />
            </div>

            <div className="flex items-start gap-2">
              <Checkbox
                id="terms"
                checked={agreedToTerms}
                onCheckedChange={(checked) => setAgreedToTerms(!!checked)}
              />
              <label htmlFor="terms" className="text-sm text-muted-foreground cursor-pointer">
                I agree to the Terms of Service and Privacy Policy
              </label>
            </div>

            <Button 
              type="submit" 
              className="w-full" 
              disabled={isLoading || !agreedToTerms}
            >
              {isLoading ? 'Creating Account...' : 'Create Account'}
            </Button>
          </form>

          <div className="mt-6 pt-6 border-t border-border text-center">
            <p className="text-sm text-muted-foreground mb-3">Already have an account?</p>
            <Link href="/login" className="w-full inline-block">
              <Button variant="outline" className="w-full">
                Sign In
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}
