'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Globe, Send, Search, Clock } from 'lucide-react';

const conversations = [
  {
    id: 1,
    participant: 'Jane Developer',
    domain: 'techventure.pi',
    lastMessage: 'Can you provide more details about the lease terms?',
    timestamp: '2 min ago',
    unread: true,
    avatar: '🧑‍💻'
  },
  {
    id: 2,
    participant: 'Mike Chen',
    domain: 'startup.pi',
    lastMessage: 'Great! I\&apos;ll proceed with the lease',
    timestamp: '1 hour ago',
    unread: false,
    avatar: '👨‍💼'
  },
  {
    id: 3,
    participant: 'Sarah Johnson',
    domain: 'innovate.pi',
    lastMessage: 'Can we negotiate the monthly price?',
    timestamp: '5 hours ago',
    unread: false,
    avatar: '👩‍🚀'
  },
];

const messages = [
  { id: 1, sender: 'Jane Developer', text: 'Hi, I\&apos;m interested in leasing techventure.pi', timestamp: '10:15 AM', isMine: false },
  { id: 2, sender: 'You', text: 'Great! It\&apos;s a premium domain. What are you looking for?', timestamp: '10:20 AM', isMine: true },
  { id: 3, sender: 'Jane Developer', text: 'Can you provide more details about the lease terms?', timestamp: '10:22 AM', isMine: false },
  { id: 4, sender: 'Jane Developer', text: 'I\&apos;m specifically interested in the transfer process', timestamp: '10:22 AM', isMine: false },
];

export default function MessagesPage() {
  const [selectedId, setSelectedId] = useState(1);
  const [messageText, setMessageText] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const selectedConversation = conversations.find(c => c.id === selectedId);
  const filteredConversations = conversations.filter(c =>
    c.participant.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.domain.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
              <Button variant="outline" size="sm">Dashboard</Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-8 h-[calc(100vh-80px)]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
          {/* Conversations List */}
          <div className="md:col-span-1 flex flex-col">
            <div className="mb-4 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search messages..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex-1 space-y-2 overflow-y-auto">
              {filteredConversations.map(conv => (
                <button
                  key={conv.id}
                  onClick={() => setSelectedId(conv.id)}
                  className={`w-full text-left p-4 rounded-lg transition-colors border ${
                    selectedId === conv.id
                      ? 'bg-primary text-primary-foreground border-primary'
                      : 'hover:bg-muted border-border'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">{conv.avatar}</div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold truncate">{conv.participant}</p>
                      <p className="text-xs opacity-70 mb-1">{conv.domain}</p>
                      <p className="text-xs truncate opacity-80">{conv.lastMessage}</p>
                    </div>
                    {conv.unread && (
                      <div className="w-2 h-2 bg-accent rounded-full mt-1" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Chat Area */}
          <div className="md:col-span-2 flex flex-col border border-border rounded-lg overflow-hidden">
            {selectedConversation ? (
              <>
                {/* Chat Header */}
                <div className="p-4 border-b border-border bg-muted/30">
                  <h3 className="font-semibold">{selectedConversation.participant}</h3>
                  <p className="text-sm text-muted-foreground">{selectedConversation.domain}</p>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map(msg => (
                    <div
                      key={msg.id}
                      className={`flex ${msg.isMine ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-xs px-4 py-2 rounded-lg ${
                          msg.isMine
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted text-foreground'
                        }`}
                      >
                        <p className="text-sm">{msg.text}</p>
                        <p className="text-xs opacity-70 mt-1">{msg.timestamp}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Message Input */}
                <div className="p-4 border-t border-border bg-muted/30">
                  <div className="flex gap-2">
                    <Textarea
                      placeholder="Type your message..."
                      value={messageText}
                      onChange={(e) => setMessageText(e.target.value)}
                      className="min-h-10 max-h-20 resize-none"
                    />
                    <Button size="icon" onClick={() => setMessageText('')}>
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex items-center justify-center h-full text-muted-foreground">
                <p>Select a conversation to start messaging</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
