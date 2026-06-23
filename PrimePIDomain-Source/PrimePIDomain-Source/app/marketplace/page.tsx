'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Globe, Search, Filter, Heart, MessageSquare, TrendingUp, ChevronRight } from 'lucide-react';

const domains = [
  { id: 1, name: 'techventure.pi', lease: 99, category: 'Tech', views: 1243, isFavorite: false, verified: true },
  { id: 2, name: 'innovate.pi', lease: 149, category: 'Innovation', views: 892, isFavorite: false, verified: true },
  { id: 3, name: 'business.pi', lease: 199, category: 'Business', views: 2156, isFavorite: false, verified: true },
  { id: 4, name: 'startup.pi', lease: 89, category: 'Startups', views: 654, isFavorite: false, verified: false },
  { id: 5, name: 'digital.pi', lease: 129, category: 'Digital', views: 1087, isFavorite: false, verified: true },
  { id: 6, name: 'future.pi', lease: 159, category: 'Tech', views: 1923, isFavorite: false, verified: true },
  { id: 7, name: 'commerce.pi', lease: 179, category: 'Business', views: 1456, isFavorite: false, verified: true },
  { id: 8, name: 'cloud.pi', lease: 139, category: 'Tech', views: 1123, isFavorite: false, verified: false },
  { id: 9, name: 'network.pi', lease: 169, category: 'Tech', views: 2034, isFavorite: false, verified: true },
];

export default function MarketplacePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState([0, 300]);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [sortBy, setSortBy] = useState<'newest' | 'trending' | 'price-low' | 'price-high'>('trending');

  const categories = ['Tech', 'Business', 'Digital', 'Innovation', 'Startups'];

  const filteredDomains = domains.filter(d => {
    const matchesSearch = d.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || d.category === selectedCategory;
    const matchesPrice = d.lease >= priceRange[0] && d.lease <= priceRange[1];
    return matchesSearch && matchesCategory && matchesPrice;
  }).sort((a, b) => {
    if (sortBy === 'price-low') return a.lease - b.lease;
    if (sortBy === 'price-high') return b.lease - a.lease;
    if (sortBy === 'trending') return b.views - a.views;
    return 0;
  });

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
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
            <Link href="/messages">
              <Button variant="outline" size="sm">Messages</Button>
            </Link>
            <Link href="/dashboard">
              <Button size="sm">Dashboard</Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Marketplace</h1>
          <p className="text-muted-foreground">Browse {filteredDomains.length} available premium .pi domains</p>
        </div>

        {/* Search Bar */}
        <div className="mb-6 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            placeholder="Search domains... e.g., tech.pi"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-24">
              <div className="flex items-center gap-2 mb-4">
                <Filter className="w-5 h-5" />
                <h3 className="font-semibold">Filters</h3>
              </div>

              {/* Sort */}
              <div className="mb-6">
                <Label className="text-sm font-semibold mb-3 block">Sort By</Label>
                <div className="space-y-2">
                  {[
                    { value: 'trending', label: 'Trending' },
                    { value: 'newest', label: 'Newest' },
                    { value: 'price-low', label: 'Price: Low to High' },
                    { value: 'price-high', label: 'Price: High to Low' }
                  ].map(option => (
                    <button
                      key={option.value}
                      onClick={() => setSortBy(option.value as any)}
                      className={`block w-full text-left text-sm px-3 py-2 rounded hover:bg-muted transition-colors ${
                        sortBy === option.value ? 'bg-primary text-primary-foreground' : ''
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <Label className="text-sm font-semibold mb-3 block">Categories</Label>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className={`block w-full text-left text-sm px-3 py-2 rounded hover:bg-muted transition-colors ${
                      !selectedCategory ? 'bg-primary text-primary-foreground' : ''
                    }`}
                  >
                    All Categories
                  </button>
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`block w-full text-left text-sm px-3 py-2 rounded hover:bg-muted transition-colors ${
                        selectedCategory === cat ? 'bg-primary text-primary-foreground' : ''
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <Label className="text-sm font-semibold mb-3 block">Price Range</Label>
                <div className="space-y-3">
                  <div>
                    <Label htmlFor="min-price" className="text-xs">Min: ${priceRange[0]}</Label>
                    <input
                      id="min-price"
                      type="range"
                      min="0"
                      max="300"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <Label htmlFor="max-price" className="text-xs">Max: ${priceRange[1]}</Label>
                    <input
                      id="max-price"
                      type="range"
                      min="0"
                      max="300"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Domains Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredDomains.map(domain => (
                <Link key={domain.id} href={`/domain/${domain.id}`}>
                  <Card className="p-6 hover:shadow-lg hover:border-primary transition-all cursor-pointer h-full flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-2xl font-bold text-primary">{domain.name}</h3>
                          {domain.verified && (
                            <Badge className="bg-green-500">Verified</Badge>
                          )}
                        </div>
                        <Badge variant="outline">{domain.category}</Badge>
                      </div>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          toggleFavorite(domain.id);
                        }}
                        className="text-2xl hover:scale-110 transition-transform"
                      >
                        <Heart
                          className={`w-6 h-6 ${
                            favorites.includes(domain.id)
                              ? 'fill-red-500 text-red-500'
                              : 'text-muted-foreground'
                          }`}
                        />
                      </button>
                    </div>

                    <div className="flex-1">
                      <div className="flex items-baseline gap-2 mb-4">
                        <span className="text-3xl font-bold text-foreground">${domain.lease}</span>
                        <span className="text-muted-foreground">/month</span>
                      </div>

                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <TrendingUp className="w-4 h-4" />
                          <span>{domain.views} views</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2 mt-4 pt-4 border-t border-border">
                      <Button variant="outline" size="sm" className="flex-1 gap-2">
                        <MessageSquare className="w-4 h-4" />
                        Message
                      </Button>
                      <Button size="sm" className="flex-1 gap-2">
                        <ChevronRight className="w-4 h-4" />
                        Request Lease
                      </Button>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>

            {filteredDomains.length === 0 && (
              <Card className="p-12 text-center">
                <p className="text-muted-foreground mb-4">No domains found matching your filters</p>
                <Button 
                  variant="outline"
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory(null);
                    setPriceRange([0, 300]);
                  }}
                >
                  Clear Filters
                </Button>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
