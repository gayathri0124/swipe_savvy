'use client';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { setCurrentListing, setLoading, setError } from '@/store/slices/businessSlice';
import { MapPin, Phone, Mail, Globe, Building2 } from 'lucide-react';

const businessTypes = [
  'Restaurant',
  'Retail Store',
  'Service Provider',
  'Healthcare',
  'Beauty & Wellness',
  'Automotive',
  'Real Estate',
  'Professional Services',
  'Entertainment',
  'Other',
];

export default function BusinessForm() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [formData, setFormData] = useState({
    businessName: '',
    businessType: '',
    address: '',
    phone: '',
    email: '',
    website: '',
    description: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    dispatch(setLoading(true));

    try {
      // Search for place using Google Places API
      let placeData = {};
      if (formData.address) {
        const response = await fetch(`/api/places/search?query=${encodeURIComponent(formData.address)}`);
        if (response.ok) {
          const data = await response.json();
          if (data.places && data.places.length > 0) {
            const place = data.places[0];
            placeData = {
              googlePlaceId: place.placeId,
              latitude: place.latitude,
              longitude: place.longitude,
            };
          }
        }
      }

      // Submit business listing
      const submitResponse = await fetch('/api/business/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          ...placeData,
        }),
      });

      if (submitResponse.ok) {
        const result = await submitResponse.json();
        dispatch(setCurrentListing({
          ...formData,
          id: result.listing.id,
          status: result.listing.status,
        }));
        router.push('/success');
      } else {
        const error = await submitResponse.json();
        dispatch(setError(error.error || 'Failed to submit listing'));
      }
    } catch (error) {
      console.error('Submission error:', error);
      dispatch(setError('An unexpected error occurred'));
    } finally {
      setIsSubmitting(false);
      dispatch(setLoading(false));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Get Your Business Discovered
          </h1>
          <p className="text-xl text-gray-600">
            Join thousands of local businesses on Swipe Savvy
          </p>
        </div>

        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Business Information</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="businessName" className="flex items-center gap-2">
                  <Building2 className="w-4 h-4" />
                  Business Name *
                </Label>
                <Input
                  id="businessName"
                  value={formData.businessName}
                  onChange={(e) => handleInputChange('businessName', e.target.value)}
                  placeholder="Enter your business name"
                  required
                  className="text-lg"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="businessType">Business Type *</Label>
                <Select
                  value={formData.businessType}
                  onValueChange={(value) => handleInputChange('businessType', value)}
                  required
                >
                  <SelectTrigger className="text-lg">
                    <SelectValue placeholder="Select your business type" />
                  </SelectTrigger>
                  <SelectContent>
                    {businessTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address" className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Business Address *
                </Label>
                <Input
                  id="address"
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  placeholder="Enter your full business address"
                  required
                  className="text-lg"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="(555) 123-4567"
                    className="text-lg"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Business Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="business@example.com"
                    className="text-lg"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="website" className="flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  Website
                </Label>
                <Input
                  id="website"
                  value={formData.website}
                  onChange={(e) => handleInputChange('website', e.target.value)}
                  placeholder="https://www.yourbusiness.com"
                  className="text-lg"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Business Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  placeholder="Tell customers about your business, services, and what makes you special..."
                  rows={4}
                  className="text-lg"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full text-lg py-6 bg-blue-600 hover:bg-blue-700"
              >
                {isSubmitting ? 'Submitting...' : 'Submit My Business Listing'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}