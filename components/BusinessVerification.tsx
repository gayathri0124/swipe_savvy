'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ProgressBar from './ProgressBar';
import { MapPin, Phone, Building2, ArrowLeft } from 'lucide-react';
import Image from 'next/image';

interface BusinessData {
  placeId: string;
  name: string;
  address: string;
  phone?: string;
  latitude: number;
  longitude: number;
  photoUrl?: string;
}

export default function BusinessVerification() {
  const router = useRouter();
  const [businessData, setBusinessData] = useState<BusinessData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const searchQuery = localStorage.getItem('businessSearch');
    if (!searchQuery) {
      router.push('/');
      return;
    }

    searchBusiness(searchQuery);
  }, [router]);

  const searchBusiness = async (query: string) => {
    try {
      setIsLoading(true);
      const response = await fetch(`/api/places/search?query=${encodeURIComponent(query)}`);
      
      if (!response.ok) {
        throw new Error('Failed to search business');
      }

      const data = await response.json();
      
      if (data.places && data.places.length > 0) {
        const business = data.places[0];
        setBusinessData({
          placeId: business.placeId,
          name: business.name,
          address: business.address,
          phone: business.phone,
          latitude: business.latitude,
          longitude: business.longitude,
          photoUrl: business.photoUrl
        });
      } else {
        setError('No business found matching your search. Please try again.');
      }
    } catch (error) {
      console.error('Search error:', error);
      setError('Failed to search for business. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleConfirm = () => {
    if (businessData) {
      localStorage.setItem('verifiedBusiness', JSON.stringify(businessData));
      router.push('/create-account');
    }
  };

  const handleTryAgain = () => {
    router.push('/');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <ProgressBar currentStep={1} totalSteps={4} />
        <div className="flex items-center justify-center py-20">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Searching for your business...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50">
        <ProgressBar currentStep={1} totalSteps={4} />
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <Card className="border-red-200">
            <CardContent className="text-center py-12">
              <div className="text-red-500 text-6xl mb-4">⚠️</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Business Not Found</h2>
              <p className="text-gray-600 mb-6">{error}</p>
              <Button onClick={handleTryAgain} className="bg-blue-600 hover:bg-blue-700">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Try Again
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <ProgressBar currentStep={1} totalSteps={4} />
      
      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Is This Your Business?</h1>
          <p className="text-sm sm:text-base text-gray-600">We found the following match for your entry. Please confirm before proceeding.</p>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-center">Business Verification</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {businessData?.photoUrl && (
              <div className="text-center">
                <Image
                  src={businessData.photoUrl}
                  alt={businessData.name}
                  width={400}
                  height={250}
                  className="rounded-lg mx-auto object-cover w-full max-w-sm"
                />
              </div>
            )}

            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <Building2 className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="font-semibold text-gray-900">{businessData?.name}</p>
                  <p className="text-sm text-gray-600">Business Name</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <MapPin className="w-5 h-5 text-green-600" />
                <div>
                  <p className="font-semibold text-gray-900">{businessData?.address}</p>
                  <p className="text-sm text-gray-600">Address</p>
                </div>
              </div>

              {businessData?.phone && (
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <Phone className="w-5 h-5 text-purple-600" />
                  <div>
                    <p className="font-semibold text-gray-900">{businessData.phone}</p>
                    <p className="text-sm text-gray-600">Phone Number</p>
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6 w-full">
              <Button
                onClick={handleConfirm}
                className="w-full sm:w-auto flex-1 bg-green-600 hover:bg-green-700 text-base sm:text-lg py-4 sm:py-6"
              >
                ➡️ Yes, This Is Me
              </Button>
              
              <Button
                onClick={handleTryAgain}
                variant="outline"
                className="w-full sm:w-auto flex-1 text-base sm:text-lg py-4 sm:py-6 border-2"
              >
                ↩️ No, Try Again
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}