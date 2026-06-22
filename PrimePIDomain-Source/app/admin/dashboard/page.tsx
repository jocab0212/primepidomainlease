'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Globe, BarChart3, Users, Package, TrendingUp, AlertCircle, CheckCircle, Clock } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const chartData = [
  { month: 'Jan', leases: 12, revenue: 1200, users: 45 },
  { month: 'Feb', leases: 19, revenue: 2100, users: 62 },
  { month: 'Mar', leases: 25, revenue: 3200, users: 78 },
  { month: 'Apr', leases: 32, revenue: 4100, users: 95 },
  { month: 'May', leases: 38, revenue: 5200, users: 124 },
  { month: 'Jun', leases: 45, revenue: 6800, users: 156 },
];

const platformStats = [
  { name: 'Active Leases', value: 45, color: '#8b5cf6' },
  { name: 'Pending Requests', value: 12, color: '#06b6d4' },
  { name: 'Completed Leases', value: 89, color: '#10b981' },
  { name: 'Disputed', value: 3, color: '#ef4444' },
];

const recentUsers = [
  { id: 1, name: 'Alex Johnson', email: 'alex@tech.com', joined: '2 days ago', domains: 2, status: 'active' },
  { id: 2, name: 'Sarah Williams', email: 'sarah@biz.com', joined: '5 days ago', domains: 1, status: 'active' },
  { id: 3, name: 'Mike Brown', email: 'mike@startup.io', joined: '1 week ago', domains: 3, status: 'active' },
  { id: 4, name: 'Emma Davis', email: 'emma@corp.net', joined: '2 weeks ago', domains: 0, status: 'inactive' },
];

const pendingLeases = [
  { id: 1, domain: 'enterprise.pi', requester: 'Big Corp Ltd', owner: 'Jane Dev', status: 'pending', amount: 1200 },
  { id: 2, domain: 'innovative.pi', requester: 'StartUp XYZ', owner: 'John Smith', status: 'pending', amount: 800 },
  { id: 3, domain: 'global.pi', requester: 'International Inc', owner: 'Alice Wonder', status: 'reviewing', amount: 2000 },
];

export default function AdminDashboardPage() {
  const [selectedTab, setSelectedTab] = useState('overview');

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80">
            <Globe className="w-6 h-6 text-primary" />
            <h1 className="text-xl font-bold text-primary">PrimePi Admin</h1>
          </Link>
          <div className="flex gap-2">
            <Badge className="bg-red-500">Admin Mode</Badge>
            <Button size="sm" variant="destructive">Sign Out</Button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground">Platform management and analytics</p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Total Users</p>
                <p className="text-3xl font-bold">156</p>
                <p className="text-xs text-green-600 mt-1">+12 this week</p>
              </div>
              <Users className="w-8 h-8 text-primary opacity-20" />
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Total Leases</p>
                <p className="text-3xl font-bold">134</p>
                <p className="text-xs text-green-600 mt-1">+18 this month</p>
              </div>
              <Package className="w-8 h-8 text-primary opacity-20" />
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Monthly Revenue</p>
                <p className="text-3xl font-bold">$6.8K</p>
                <p className="text-xs text-green-600 mt-1">+31% vs last month</p>
              </div>
              <TrendingUp className="w-8 h-8 text-primary opacity-20" />
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Active Disputes</p>
                <p className="text-3xl font-bold">3</p>
                <p className="text-xs text-amber-600 mt-1">Requires attention</p>
              </div>
              <AlertCircle className="w-8 h-8 text-amber-500 opacity-20" />
            </div>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="leases">Leases</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="disputes">Disputes</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-4">Revenue Trend</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                  <XAxis dataKey="month" stroke="var(--color-muted-foreground)" />
                  <YAxis stroke="var(--color-muted-foreground)" />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'var(--color-card)',
                      border: '1px solid var(--color-border)',
                      borderRadius: '8px'
                    }}
                  />
                  <Legend />
                  <Line type="monotone" dataKey="revenue" stroke="var(--color-primary)" strokeWidth={2} />
                  <Line type="monotone" dataKey="leases" stroke="var(--color-accent)" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="font-bold text-lg mb-4">Lease Status Distribution</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={platformStats}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {platformStats.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div className="mt-4 space-y-2 text-sm">
                  {platformStats.map((stat, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{backgroundColor: stat.color}} />
                      <span className="text-muted-foreground">{stat.name}:</span>
                      <span className="font-semibold">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="font-bold text-lg mb-4">New Users</h3>
                <div className="space-y-3">
                  {recentUsers.slice(0, 4).map(user => (
                    <div key={user.id} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <div className="flex-1">
                        <p className="font-semibold text-sm">{user.name}</p>
                        <p className="text-xs text-muted-foreground">{user.email}</p>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline" className="text-xs">{user.joined}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </TabsContent>

          {/* Leases Tab */}
          <TabsContent value="leases" className="space-y-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Lease Management</h2>
              <Button variant="outline" size="sm">Export Data</Button>
            </div>
            
            {pendingLeases.map(lease => (
              <Card key={lease.id} className="p-6">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-primary mb-2">{lease.domain}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div>Requester: <span className="font-semibold text-foreground">{lease.requester}</span></div>
                      <div>Owner: <span className="font-semibold text-foreground">{lease.owner}</span></div>
                      <div>Amount: <span className="font-semibold text-foreground">${lease.amount}</span></div>
                      <Badge className={lease.status === 'pending' ? 'bg-amber-500' : 'bg-blue-500'}>
                        {lease.status}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm">Approve</Button>
                    <Button variant="outline" size="sm">Review</Button>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          {/* Users Tab */}
          <TabsContent value="users" className="space-y-4">
            <h2 className="text-xl font-bold mb-4">User Management</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold">Name</th>
                    <th className="text-left py-3 px-4 font-semibold">Email</th>
                    <th className="text-left py-3 px-4 font-semibold">Joined</th>
                    <th className="text-left py-3 px-4 font-semibold">Domains</th>
                    <th className="text-left py-3 px-4 font-semibold">Status</th>
                    <th className="text-left py-3 px-4 font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {recentUsers.map(user => (
                    <tr key={user.id} className="border-b border-border hover:bg-muted transition-colors">
                      <td className="py-3 px-4 font-semibold">{user.name}</td>
                      <td className="py-3 px-4 text-muted-foreground">{user.email}</td>
                      <td className="py-3 px-4 text-muted-foreground">{user.joined}</td>
                      <td className="py-3 px-4">{user.domains}</td>
                      <td className="py-3 px-4">
                        <Badge variant={user.status === 'active' ? 'default' : 'outline'}>
                          {user.status}
                        </Badge>
                      </td>
                      <td className="py-3 px-4">
                        <Button size="sm" variant="ghost">View</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabsContent>

          {/* Disputes Tab */}
          <TabsContent value="disputes" className="space-y-4">
            <h2 className="text-xl font-bold mb-4">Dispute Management</h2>
            
            <Card className="p-6">
              <div className="flex items-start gap-4 mb-6 pb-6 border-b border-border">
                <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="font-bold mb-2">Domain techventure.pi - Payment Dispute</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    User claims unauthorized charge. Requested refund of $99.
                  </p>
                  <div className="flex gap-2">
                    <Button size="sm">Investigate</Button>
                    <Button size="sm" variant="outline">Approve Refund</Button>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="font-bold mb-2">Domain innovate.pi - Lease Termination Request</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Lessee requests early termination. Owner has not responded yet.
                  </p>
                  <div className="flex gap-2">
                    <Button size="sm">Contact Owner</Button>
                    <Button size="sm" variant="outline">Mediate</Button>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-4">Platform Configuration</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-muted rounded">
                  <span className="font-semibold">Commission Rate</span>
                  <span className="text-primary font-bold">15%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-muted rounded">
                  <span className="font-semibold">Minimum Lease Amount</span>
                  <span className="text-primary font-bold">$50/month</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-muted rounded">
                  <span className="font-semibold">Max Lease Duration</span>
                  <span className="text-primary font-bold">24 months</span>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold text-lg mb-4">Maintenance Mode</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Enable maintenance mode to temporarily disable the marketplace for updates.
              </p>
              <Button variant="outline">Enable Maintenance Mode</Button>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
