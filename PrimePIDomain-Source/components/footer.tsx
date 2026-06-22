import Link from 'next/link';
import { Globe } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border py-8 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-muted-foreground mb-6">
        <div>
          <h4 className="font-semibold mb-2 text-foreground">Product</h4>
          <ul className="space-y-1">
            <li><Link href="/marketplace" className="hover:text-primary">Marketplace</Link></li>
            <li><Link href="/pricing" className="hover:text-primary">Pricing</Link></li>
            <li><Link href="/" className="hover:text-primary">Features</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2 text-foreground">Resources</h4>
          <ul className="space-y-1">
            <li><Link href="#" className="hover:text-primary">Blog</Link></li>
            <li><Link href="#" className="hover:text-primary">Help Center</Link></li>
            <li><Link href="#" className="hover:text-primary">Guides</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2 text-foreground">Company</h4>
          <ul className="space-y-1">
            <li><Link href="#" className="hover:text-primary">About</Link></li>
            <li><Link href="#" className="hover:text-primary">Contact</Link></li>
            <li><Link href="#" className="hover:text-primary">Careers</Link></li>
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
        <div className="flex items-center justify-center gap-2 mb-2">
          <Globe className="w-4 h-4" />
          <p>&copy; 2026 PrimePiDomain. All rights reserved.</p>
        </div>
        <p className="text-xs">Made with App Studio</p>
      </div>
    </footer>
  );
}
