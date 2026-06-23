'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Globe, Wallet, Plus, Send, History, CreditCard, ArrowUp, ArrowDown } from 'lucide-react';

const transactions = [
  { id: 1, type: 'earn', amount: 149, description: 'Lease payment from StartupXYZ', date: '2026-05-20', status: 'completed' },
  { id: 2, type: 'spend', amount: 99, description: 'Lease payment for techventure.pi', date: '2026-05-18', status: 'completed' },
  { id: 3, type: 'earn', amount: 199, description: 'Lease payment from GlobalCorp', date: '2026-05-15', status: 'completed' },
  { id: 4, type: 'fee', amount: 14.93, description: 'Platform commission (15%)', date: '2026-05-15', status: 'completed' },
  { id: 5, type: 'spend', amount: 29, description: 'Pro subscription fee', date: '2026-05-01', status: 'completed' },
  { id: 6, type: 'earn', amount: 89, description: 'Lease payment from NewStartup', date: '2026-04-28', status: 'completed' },
];

export default function WalletPage() {
  const [tab, setTab] = useState('overview');
  const [piAddress, setPiAddress] = useState('');

  const balance = 847.43;
  const earnings = 1247.15;
  const spent = 399.72;

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
              <Button variant="outline" size="sm">Marketplace</Button>
            </Link>
            <Link href="/dashboard">
              <Button size="sm">Dashboard</Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Wallet</h1>
          <p className="text-muted-foreground">Manage your funds and payment methods</p>
        </div>

        {/* Balance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 bg-gradient-to-br from-primary to-accent text-primary-foreground">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm opacity-90">Available Balance</p>
              <Wallet className="w-6 h-6 opacity-50" />
            </div>
            <p className="text-4xl font-bold mb-2">${balance.toFixed(2)}</p>
            <p className="text-sm opacity-75">Instantly available to withdraw</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-muted-foreground">Total Earnings</p>
              <ArrowUp className="w-6 h-6 text-green-500 opacity-50" />
            </div>
            <p className="text-3xl font-bold mb-2">${earnings.toFixed(2)}</p>
            <p className="text-sm text-green-600">+12% this month</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-muted-foreground">Total Spent</p>
              <ArrowDown className="w-6 h-6 text-amber-500 opacity-50" />
            </div>
            <p className="text-3xl font-bold mb-2">${spent.toFixed(2)}</p>
            <p className="text-sm text-muted-foreground">Lease payments & fees</p>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs value={tab} onValueChange={setTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="methods">Payment Methods</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Quick Actions */}
              <Card className="p-6">
                <h3 className="font-bold text-lg mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Button className="w-full gap-2 justify-start" variant="outline">
                    <Plus className="w-4 h-4" />
                    Add Funds
                  </Button>
                  <Button className="w-full gap-2 justify-start" variant="outline">
                    <Send className="w-4 h-4" />
                    Withdraw Funds
                  </Button>
                  <Button className="w-full gap-2 justify-start" variant="outline">
                    <CreditCard className="w-4 h-4" />
                    Manage Cards
                  </Button>
                </div>
              </Card>

              {/* Recent Activity */}
              <Card className="p-6">
                <h3 className="font-bold text-lg mb-4">Recent Activity</h3>
                <div className="space-y-3">
                  {transactions.slice(0, 3).map(tx => (
                    <div key={tx.id} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                      <div className="flex items-center gap-3 flex-1 min-w-0">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          tx.type === 'earn' ? 'bg-green-100' : 
                          tx.type === 'fee' ? 'bg-amber-100' :
                          'bg-red-100'
                        }`}>
                          {tx.type === 'earn' ? (
                            <ArrowDown className="w-5 h-5 text-green-600" />
                          ) : (
                            <ArrowUp className="w-5 h-5 text-red-600" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold truncate">{tx.description}</p>
                          <p className="text-xs text-muted-foreground">{tx.date}</p>
                        </div>
                      </div>
                      <span className={`text-sm font-bold ${
                        tx.type === 'earn' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {tx.type === 'earn' ? '+' : '-'}${tx.amount.toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </TabsContent>

          {/* Payment Methods Tab */}
          <TabsContent value="methods" className="space-y-6">
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-6">Connected Payment Methods</h3>

              <div className="space-y-4 mb-6">
                <Card className="p-4 border-2 border-primary bg-primary/5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <CreditCard className="w-6 h-6 text-primary" />
                      <div>
                        <p className="font-semibold">Pi Network Wallet</p>
                        <p className="text-sm text-muted-foreground">Primary payment method</p>
                      </div>
                    </div>
                    <Badge className="bg-green-500">Connected</Badge>
                  </div>
                </Card>

                <Card className="p-4 border border-border">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <CreditCard className="w-6 h-6 text-muted-foreground" />
                      <div>
                        <p className="font-semibold">Visa Card ending in 4242</p>
                        <p className="text-sm text-muted-foreground">Expires 12/2026</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Remove</Button>
                  </div>
                </Card>
              </div>

              <div className="border-t border-border pt-6">
                <h4 className="font-semibold mb-4">Add Pi Network Address</h4>
                <div className="flex gap-2">
                  <Input
                    placeholder="Enter your Pi address"
                    value={piAddress}
                    onChange={(e) => setPiAddress(e.target.value)}
                  />
                  <Button>Add</Button>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* History Tab */}
          <TabsContent value="history">
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-6">Transaction History</h3>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 font-semibold">Description</th>
                      <th className="text-left py-3 px-4 font-semibold">Type</th>
                      <th className="text-left py-3 px-4 font-semibold">Amount</th>
                      <th className="text-left py-3 px-4 font-semibold">Date</th>
                      <th className="text-left py-3 px-4 font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactions.map(tx => (
                      <tr key={tx.id} className="border-b border-border hover:bg-muted transition-colors">
                        <td className="py-3 px-4 truncate">{tx.description}</td>
                        <td className="py-3 px-4">
                          <Badge variant="outline" className="capitalize">
                            {tx.type}
                          </Badge>
                        </td>
                        <td className="py-3 px-4 font-semibold">
                          <span className={tx.type === 'earn' ? 'text-green-600' : 'text-red-600'}>
                            {tx.type === 'earn' ? '+' : '-'}${tx.amount.toFixed(2)}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-muted-foreground">{tx.date}</td>
                        <td className="py-3 px-4">
                          <Badge className="bg-green-500">Completed</Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
