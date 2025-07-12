'use client';

import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ConfettiAnimation from './ConfettiAnimation';
import { RootState } from '@/store/store';
import { setShowConfetti } from '@/store/slices/uiSlice';
import { 
  CheckCircle, 
  Star, 
  TrendingUp, 
  BarChart3, 
  Share2, 
  Crown,
  ArrowRight,
  Sparkles
} from 'lucide-react';

export default function SuccessPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { currentListing } = useSelector((state: RootState) => state.business);
  const { showConfetti } = useSelector((state: RootState) => state.ui);
  const [isUpgrading, setIsUpgrading] = useState(false);

  useEffect(() => {
    // Trigger confetti animation on page load
    dispatch(setShowConfetti(true));
  }, [dispatch]);

  const handleUpgrade = async () => {
    setIsUpgrading(true);
    try {
      const response = await fetch('/api/stripe/create-subscription', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const { subscriptionId, clientSecret } = await response.json();
        // Redirect to Stripe checkout or handle payment
        router.push(`/checkout?subscription_id=${subscriptionId}&client_secret=${clientSecret}`);
      } else {
        console.error('Failed to create subscription');
      }
    } catch (error) {
      console.error('Upgrade error:', error);
    } finally {
      setIsUpgrading(false);
    }
  };

  if (!currentListing) {
    router.push('/');
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 relative overflow-hidden">
      <ConfettiAnimation 
        trigger={showConfetti} 
        onComplete={() => dispatch(setShowConfetti(false))} 
      />
      
     
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-200 rounded-full opacity-20 animate-pulse"></div>
      </div>

      <div className="relative z-10 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Success Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              🎉 Congratulations!
            </h1>
            <p className="text-2xl text-gray-600 mb-2">
              Your business listing is now live!
            </p>
            <Badge variant="secondary" className="text-lg px-4 py-2 bg-green-100 text-green-800">
              ✅ Status: CONFIRMED
            </Badge>
          </div>

          {/* Business Info Card */}
          <Card className="mb-8 shadow-lg border-2 border-green-200">
            <CardHeader className="bg-green-50">
              <CardTitle className="text-2xl text-center text-green-800">
                {currentListing.businessName} is now discoverable!
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center">
                  <TrendingUp className="w-8 h-8 text-blue-600 mb-2" />
                  <h3 className="font-semibold text-gray-900">Increased Visibility</h3>
                  <p className="text-gray-600 text-sm">Your business appears in local searches</p>
                </div>
                <div className="flex flex-col items-center">
                  <Share2 className="w-8 h-8 text-purple-600 mb-2" />
                  <h3 className="font-semibold text-gray-900">Easy Discovery</h3>
                  <p className="text-gray-600 text-sm">Customers can find your contact info</p>
                </div>
                <div className="flex flex-col items-center">
                  <BarChart3 className="w-8 h-8 text-green-600 mb-2" />
                  <h3 className="font-semibold text-gray-900">Growing Reach</h3>
                  <p className="text-gray-600 text-sm">Connect with more local customers</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Upgrade Offer Card */}
          <Card className="shadow-2xl border-4 border-gradient-to-r from-yellow-400 to-orange-500 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-orange-50"></div>
            <div className="absolute top-4 right-4">
              <Crown className="w-8 h-8 text-yellow-600" />
            </div>
            
            <CardHeader className="relative z-10 text-center pb-4">
              <div className="inline-flex items-center justify-center gap-2 mb-4">
                <Sparkles className="w-6 h-6 text-yellow-600" />
                <Badge className="bg-yellow-500 text-yellow-900 text-lg px-4 py-1">
                  LIMITED TIME OFFER
                </Badge>
                <Sparkles className="w-6 h-6 text-yellow-600" />
              </div>
              <CardTitle className="text-3xl font-bold text-gray-900 mb-2">
                ✅ Upgrade to Shop Savvy and unlock:
              </CardTitle>
            </CardHeader>
            
            <CardContent className="relative z-10 pt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-yellow-600 flex-shrink-0" />
                    <span className="text-lg text-gray-800">Featured placement in our app</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <TrendingUp className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-lg text-gray-800">Run 2x rewards promotions</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Share2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-lg text-gray-800">Sync your listing across Google, Yelp, Facebook & more</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <BarChart3 className="w-5 h-5 text-purple-600 flex-shrink-0" />
                    <span className="text-lg text-gray-800">Access analytics and performance reports</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 border-2 border-yellow-300 mb-6">
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900 mb-2">
                    💸 Try it FREE for 30 days — then just $34.50/mo (50% off forever)
                  </p>
                  <p className="text-gray-600">
                    No commitment • Cancel anytime • Full access during trial
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleUpgrade}
                  disabled={isUpgrading}
                  size="lg"
                  className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white text-xl py-6 px-8 shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  {isUpgrading ? 'Processing...' : 'Start FREE Trial'}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => router.push('/dashboard')}
                  className="text-xl py-6 px-8 border-2 border-gray-300 hover:border-gray-400"
                >
                  Continue with Basic
                </Button>
              </div>

              <p className="text-center text-sm text-gray-500 mt-4">
                You can upgrade anytime from your dashboard
              </p>
            </CardContent>
          </Card>

          {/* Next Steps */}
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What's Next?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📧</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Check Your Email</h3>
                <p className="text-gray-600 text-sm">We've sent you a welcome email with all the details</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Monitor Performance</h3>
                <p className="text-gray-600 text-sm">Track how customers discover your business</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Grow Your Business</h3>
                <p className="text-gray-600 text-sm">Connect with more local customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}