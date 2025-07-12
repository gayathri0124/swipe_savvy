'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Star } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    name: "Sarah Johnson",
    business: "Bloom Café",
    text: "Swipe Savvy brought us 40% more repeat customers in just 3 months!",
    rating: 5
  },
  {
    name: "Mike Chen",
    business: "Chen's Auto Repair",
    text: "The loyalty program is so easy to use. Our customers love earning rewards.",
    rating: 5
  },
  {
    name: "Lisa Rodriguez",
    business: "Bella Beauty Salon",
    text: "Free listing, free stickers, and amazing results. What's not to love?",
    rating: 5
  },
  {
    name: "David Thompson",
    business: "Thompson Hardware",
    text: "Finally, a rewards program that actually works for small businesses.",
    rating: 5
  }
];

export default function HeroSection() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;
    
    setIsSearching(true);
    try {
      // Store search query and navigate to verification step
      localStorage.setItem('businessSearch', searchQuery);
      router.push('/verify-business');
    } catch (error) {
      console.error('Search error:', error);
    } finally {
      setIsSearching(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image with Blur */}
      <div className="absolute inset-0">
        <div 
          className="w-full h-full bg-cover bg-center filter blur-sm"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Logo */}
     

      <div className="absolute top-8 left-8 z-20">
  <div className="flex items-center gap-2">
    <Image
      src="/sipe savvy.png"
      alt="Swipe Savvy Logo"
      width={200}
      height={100}
      priority
      className="object-contain"
    />
    
  </div>
</div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
       <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 md:p-12 w-full max-w-3xl mx-auto">
          {/* Exclusive Invite Badge */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Star className="w-4 h-4" />
              EXCLUSIVE INVITE
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight text-center">
              You've Been Selected for a Free Loyalty Listing
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed text-center">
              Your business has been recognized for its outstanding reputation. Join the Swipe Savvy Rewards Network — completely free.
            </p>
          </div>

          {/* Search Section */}
          <div className="space-y-4">
            <div className="relative">
              <Input
                type="text"
                placeholder="Enter your business name or phone number"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                className="text-base sm:text-lg py-4 sm:py-5 pl-4 pr-16 rounded-xl border-2 border-gray-200 focus:border-blue-500 transition-colors w-full"
              />
              <Button
                onClick={handleSearch}
                disabled={isSearching || !searchQuery.trim()}
                className="absolute right-0 top-1/2 -translate-y-1/2 px-3 sm:px-4 bg-blue-600 hover:bg-blue-700 rounded-lg"
              >
                <Search className="w-5 h-5" />
              </Button>
            </div>
            
            <Button
              onClick={handleSearch}
              disabled={isSearching || !searchQuery.trim()}
              className="w-full text-sm sm:text-base py-4 sm:py-5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200 text-center leading-snug"
            >
              {isSearching ? 'Searching...' : '🔍 Locate Your Business to Claim Your Free Listing'}
            </Button>
            
            <p className="text-center text-gray-500 text-sm">
              We'll find your business and you can confirm the correct one in the next step.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials Carousel */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm py-6 z-10">
        <div className="overflow-x-auto">
          <div className="flex animate-scroll space-x-4 sm:space-x-8">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div key={index} className="flex-shrink-0 bg-white rounded-lg p-3 sm:p-4 shadow-md min-w-[240px] sm:min-w-[300px] mx-2">
                <div className="flex items-center mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm mb-2">"{testimonial.text}"</p>
                <div className="text-xs text-gray-500">
                  <span className="font-semibold">{testimonial.name}</span> - {testimonial.business}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  );
}