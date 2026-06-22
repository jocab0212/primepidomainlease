'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { usePiAuth } from '@/contexts/pi-auth-context';
import { PRODUCT_CONFIG } from '@/lib/product-config';
import { Loader2 } from 'lucide-react';

interface SubscribeButtonProps {
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'sm' | 'default' | 'lg';
  className?: string;
}

export function SubscribeButton({ 
  variant = 'default', 
  size = 'default',
  className = ''
}: SubscribeButtonProps) {
  const { products, sdk, restoredPurchases } = usePiAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const product = products?.find(
    p => p.id === PRODUCT_CONFIG.PRODUCT_6a393702efaad386ea1a2f1c
  );

  // Check if subscription is already purchased
  const quantity = restoredPurchases?.find(
    p => p.productId === product?.slug
  )?.quantity ?? 0;

  const isAlreadySubscribed = quantity > 0;

  const handleSubscribe = async () => {
    if (!product || !sdk) {
      setError('Subscription not available');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const result = await sdk.makePurchase(product.slug);
      
      if (result.ok) {
        console.log('Purchase successful:', {
          productId: result.productId,
          paymentId: result.paymentId,
          txid: result.txid,
        });
        
        // Show success message
        alert(`Successfully subscribed! Payment ID: ${result.paymentId}`);
        
        // Refresh the page to update purchase state
        window.location.reload();
      } else {
        setError('Purchase failed. Please try again.');
      }
    } catch (err: any) {
      const errorCode = err?.code || 'unknown_error';
      
      if (errorCode === 'purchase_cancelled') {
        setError('Purchase cancelled');
      } else if (errorCode === 'product_not_found') {
        setError('Subscription product not found');
      } else if (errorCode === 'purchase_error') {
        setError('An error occurred during purchase');
      } else {
        setError(err?.message || 'An error occurred');
      }
      
      console.error('Purchase error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  // If product not found, disable button
  if (!product) {
    return (
      <Button 
        disabled 
        variant={variant} 
        size={size}
        className={className}
      >
        Subscription Unavailable
      </Button>
    );
  }

  // If already subscribed
  if (isAlreadySubscribed) {
    return (
      <Button 
        disabled 
        variant="outline" 
        size={size}
        className={className}
      >
        ✓ Subscribed
      </Button>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      <Button
        onClick={handleSubscribe}
        disabled={isLoading}
        variant={variant}
        size={size}
        className={className}
      >
        {isLoading ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Processing...
          </>
        ) : (
          <>
            Subscribe • {product.price_in_pi} Pi
          </>
        )}
      </Button>
      {error && (
        <p className="text-sm text-destructive">{error}</p>
      )}
    </div>
  );
}
