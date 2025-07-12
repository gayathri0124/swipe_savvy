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
  Sparkles,
  Quote
} from 'lucide-react';

const merchantTestimonials = [
  {
    name: "Jennifer Walsh",
    business: "Walsh Family Bakery",
    text: "Shop Savvy increased our repeat customers by 60% in just 2 months. The analytics are incredible!",
    rating: 5
  },
  {
    name: "Carlos Martinez",
    business: "Martinez Auto Care",
    text: "The featured placement brought us so many new customers. Best investment we've made.",
    rating: 5
  },
  {
    name: "Amy Chen",
    business: "Zen Wellness Spa",
    text: "2x rewards promotions during slow periods completely turned our business around.",
    rating: 5
  }
];

export default function SuccessPageNew() {
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

    const data = await response.json();
    console.log('Stripe session response:', data);

    if (response.ok && data.sessionUrl) {
      window.location.href = data.sessionUrl;
    } else {
      console.error('Failed to get session URL', data);
      alert('Failed to redirect to Stripe. Please try again.');
    }
  } catch (error) {
    console.error('Upgrade error:', error);
    alert('An error occurred.');
  } finally {
    setIsUpgrading(false);
  }
};


  const handleStayFree = () => {
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 relative overflow-hidden">
      <ConfettiAnimation 
        trigger={showConfetti} 
        onComplete={() => dispatch(setShowConfetti(false))} 
      />
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-200 rounded-full opacity-10 animate-pulse"></div>
      </div>

      <div className="relative z-10 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Success Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full mb-6">
              <CheckCircle className="w-16 h-16 text-green-600" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              🎉 Your Business Is Now Live on Swipe Savvy!
            </h1>
            <p className="text-2xl text-gray-600 mb-6">
              Make the most of it with a limited-time upgrade — first month free + 50% off for life.
            </p>
            <Badge variant="secondary" className="text-lg px-6 py-2 bg-green-100 text-green-800">
              ✅ FREE PLAN ACTIVE
            </Badge>
          </div>

          {/* Two-Card Comparison */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Free Plan Card */}
            <Card className="border-2 border-green-200 bg-green-50">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-green-800">Free Plan Active</CardTitle>
                <p className="text-green-600">What you get right now:</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-800">Business listing in our app</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-800">Customer discovery</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-800">Basic rewards program</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-800">Free window sticker & signage</span>
                </div>
              </CardContent>
            </Card>

            {/* Upgrade Offer Card */}
            <Card className="border-4 border-gradient-to-r from-yellow-400 to-orange-500 relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-orange-50"></div>
              <div className="absolute top-4 right-4">
                <Crown className="w-8 h-8 text-yellow-600" />
              </div>
              
              <CardHeader className="relative z-10 text-center">
                <div className="inline-flex items-center justify-center gap-2 mb-4">
                  <Sparkles className="w-6 h-6 text-yellow-600" />
                  <Badge className="bg-yellow-500 text-yellow-900 text-lg px-4 py-1">
                    LIMITED TIME
                  </Badge>
                  <Sparkles className="w-6 h-6 text-yellow-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  ✅ Upgrade to Shop Savvy and unlock:
                </CardTitle>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-yellow-600" />
                    <span className="text-lg text-gray-800">Featured placement in our app</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                    <span className="text-lg text-gray-800">Run 2x rewards promotions</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Share2 className="w-5 h-5 text-blue-600" />
                    <span className="text-lg text-gray-800">Sync your listing across Google, Yelp, Facebook & more</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <BarChart3 className="w-5 h-5 text-purple-600" />
                    <span className="text-lg text-gray-800">Access analytics and performance reports</span>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 border-2 border-yellow-300 mb-6">
                  <p className="text-xl font-bold text-gray-900 text-center">
                    💸 Try it FREE for 30 days — then just $34.50/mo (50% off forever)
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <Button
                    onClick={handleUpgrade}
                    disabled={isUpgrading}
                    className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white text-xl py-6 shadow-lg transform hover:scale-105 transition-all duration-200"
                  >
                    {isUpgrading ? 'Processing...' : '🔥 Yes, Upgrade Me — Risk-Free'}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  
                  <Button
                    variant="outline"
                    onClick={handleStayFree}
                    className="w-full text-lg py-4 border-2 border-gray-300 hover:border-gray-400"
                  >
                    ➡️ No Thanks, I'll Stay on the Free Plan
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Merchant Testimonials */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              What Other Merchants Say About Shop Savvy
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {merchantTestimonials.map((testimonial, index) => (
                <Card key={index} className="bg-white shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Quote className="w-8 h-8 text-blue-600 mr-2" />
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                    <div className="border-t pt-4">
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.business}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Next Steps */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What Happens Next?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📧</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Check Your Email</h3>
                <p className="text-gray-600 text-sm">Welcome email with login details and next steps</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📦</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Materials Shipping</h3>
                <p className="text-gray-600 text-sm">Window sticker and POS signage arrive in 5-7 days</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Start Growing</h3>
                <p className="text-gray-600 text-sm">Customers can now discover and reward your business</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}