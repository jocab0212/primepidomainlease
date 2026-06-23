'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Globe, BarChart3, Package, Users, Plus, Edit2, Trash2, Clock, CheckCircle } from 'lucide-react';
import { SubscribeButton } from '@/components/subscribe-button';

const myDomains = [
  { id: 1, name: 'mytech.pi', leasedTo: 'TechCorp Inc', status: 'active', leaseEnd: '2026-12-31', lease: 149 },
  { id: 2, name: 'mybusiness.pi', leasedTo: 'BusinessHub LLC', status: 'active', leaseEnd: '2026-11-15', lease: 199 },
  { id: 3, name: 'mydigital.pi', leasedTo: null, status: 'available', leaseEnd: null, lease: 129 },
];

const activeLeases = [
  { id: 1, domain: 'techventure.pi', owner: 'John Smith', startDate: '2026-01-15', endDate: '2027-01-15', status: 'active' },
  { id: 2, domain: 'innovate.pi', owner: 'Sarah Johnson', startDate: '2026-02-01', endDate: '2027-02-01', status: 'active' },
  { id: 3, domain: 'startup.pi', owner: 'Mike Chen', startDate: '2026-03-10', endDate: '2026-06-10', status: 'ending-soon' },
];

const leaseRequests = [
  { id: 1, domain: 'future.pi', requestor: 'Global Enterprise', status: 'pending', requestDate: '2026-05-20' },
  { id: 2, domain: 'network.pi', requestor: 'StartupVentures', status: 'pending', requestDate: '2026-05-18' },
];

export default function DashboardPage() {
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
              <Button variant="outline" size="sm">Browse</Button>
            </Link>
            <Link href="/messages">
              <Button variant="outline" size="sm">Messages</Button>
            </Link>
            <Button size="sm" variant="destructive">Sign Out</Button>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8 flex items-center justify-between flex-wrap gap-4">
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
            <p className="text-muted-foreground">Welcome back! Manage your domains and leases</p>
          </div>
          <div className="flex gap-2 flex-wrap">
            <Link href="/marketplace">
              <Button size="lg" variant="outline">
                Browse Marketplace
              </Button>
            </Link>
            <SubscribeButton size="lg" />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">My Domains</p>
                <p className="text-3xl font-bold">3</p>
              </div>
              <Package className="w-8 h-8 text-primary opacity-20" />
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Active Leases</p>
                <p className="text-3xl font-bold">2</p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-500 opacity-20" />
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Lease Requests</p>
                <p className="text-3xl font-bold">2</p>
              </div>
              <Clock className="w-8 h-8 text-amber-500 opacity-20" />
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Monthly Revenue</p>
                <p className="text-3xl font-bold">$348</p>
              </div>
              <BarChart3 className="w-8 h-8 text-primary opacity-20" />
            </div>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="domains" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="domains">My Domains</TabsTrigger>
            <TabsTrigger value="leases">My Leases</TabsTrigger>
            <TabsTrigger value="requests">Lease Requests</TabsTrigger>
          </TabsList>

          {/* My Domains Tab */}
          <TabsContent value="domains" className="space-y-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">My Domains</h2>
              <Link href="/add-domain">
                <Button size="sm" gap={2}>
                  <Plus className="w-4 h-4" />
                  Add Domain
                </Button>
              </Link>
            </div>
            
            <div className="grid gap-4">
              {myDomains.map(domain => (
                <Card key={domain.id} className="p-6">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-primary mb-2">{domain.name}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div>
                          {domain.leasedTo ? (
                            <p>Leased to: <span className="font-semibold text-foreground">{domain.leasedTo}</span></p>
                          ) : (
                            <p className="text-amber-600">Available for lease</p>
                          )}
                        </div>
                        <div>Status: <Badge className="ml-2">{domain.status}</Badge></div>
                        <div>Price: <span className="font-semibold text-foreground">${domain.lease}/mo</span></div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" gap={2}>
                        <Edit2 className="w-4 h-4" />
                        Edit
                      </Button>
                      <Button variant="outline" size="sm" gap={2}>
                        <Trash2 className="w-4 h-4" />
                        Delete
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* My Leases Tab */}
          <TabsContent value="leases" className="space-y-4">
            <h2 className="text-xl font-bold mb-4">Active Leases</h2>
            
            <div className="grid gap-4">
              {activeLeases.map(lease => (
                <Card key={lease.id} className="p-6">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-primary mb-2">{lease.domain}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div>Lessee: <span className="font-semibold text-foreground">{lease.owner}</span></div>
                        <div>Start: {new Date(lease.startDate).toLocaleDateString()}</div>
                        <div>End: {new Date(lease.endDate).toLocaleDateString()}</div>
                        {lease.status === 'ending-soon' && (
                          <Badge className="bg-amber-500">Ending Soon</Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Lease Requests Tab */}
          <TabsContent value="requests" className="space-y-4">
            <h2 className="text-xl font-bold mb-4">Pending Lease Requests</h2>
            
            <div className="grid gap-4">
              {leaseRequests.map(request => (
                <Card key={request.id} className="p-6">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-primary mb-2">{request.domain}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div>Requester: <span className="font-semibold text-foreground">{request.requestor}</span></div>
                        <div>Requested: {new Date(request.requestDate).toLocaleDateString()}</div>
                        <Badge className="bg-amber-500">Pending</Badge>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm">Approve</Button>
                      <Button variant="outline" size="sm">Decline</Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
