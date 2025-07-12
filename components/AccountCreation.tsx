'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ProgressBar from './ProgressBar';
import { User, Mail, Phone, Globe, Lock } from 'lucide-react';

export default function AccountCreation() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobileNumber: '',
    password: '',
    website: '',
    isOwner: false,
    smsOptIn: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [businessData, setBusinessData] = useState(null);

  useEffect(() => {
    const verifiedBusiness = localStorage.getItem('verifiedBusiness');
    if (!verifiedBusiness) {
      router.push('/');
      return;
    }
    setBusinessData(JSON.parse(verifiedBusiness));
  }, [router]);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.isOwner) {
      alert('Please confirm that you are the owner or authorized representative of this business.');
      return;
    }

    setIsSubmitting(true);
    try {
      // Store account data and proceed to terms
      localStorage.setItem('accountData', JSON.stringify(formData));
      router.push('/terms');
    } catch (error) {
      console.error('Account creation error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!businessData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <ProgressBar currentStep={2} totalSteps={4} />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="text-center mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 text-center">Create Your Swipe Savvy Account</h1>
          <p className="text-sm sm:text-base text-gray-600 text-center">Set up your account to manage your business listing</p>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-center">Account Information</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Full Name *
                  </Label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    placeholder="Enter your full name"
                    required
                    className="text-base sm:text-lg py-3"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="text-lg py-3"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mobileNumber" className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Mobile Number
                  </Label>
                  <Input
                    id="mobileNumber"
                    type="tel"
                    value={formData.mobileNumber}
                    onChange={(e) => handleInputChange('mobileNumber', e.target.value)}
                    placeholder="(555) 123-4567"
                    className="text-lg py-3"
                  />
                  <div className="flex items-center space-x-2 mt-2">
                    <Checkbox
                      id="smsOptIn"
                      checked={formData.smsOptIn}
                      onCheckedChange={(checked) => handleInputChange('smsOptIn', checked as boolean)}
                    />
                    <Label htmlFor="smsOptIn" className="text-sm text-gray-600">
                      Opt in to receive SMS notifications
                    </Label>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="flex items-center gap-2">
                    <Lock className="w-4 h-4" />
                    Password *
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    placeholder="Create a secure password"
                    required
                    className="text-lg py-3"
                  />
                </div>

                <div className="md:col-span-2 space-y-2">
                  <Label htmlFor="website" className="flex items-center gap-2">
                    <Globe className="w-4 h-4" />
                    Website or Social Link (Optional)
                  </Label>
                  <Input
                    id="website"
                    value={formData.website}
                    onChange={(e) => handleInputChange('website', e.target.value)}
                    placeholder="https://www.yourbusiness.com or @yourbusiness"
                    className="text-lg py-3"
                  />
                </div>
              </div>

              <div className="border-t pt-6">
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="isOwner"
                    checked={formData.isOwner}
                    onCheckedChange={(checked) => handleInputChange('isOwner', checked as boolean)}
                    required
                  />
                  <Label htmlFor="isOwner" className="text-sm leading-relaxed pr-2">
                    I am the owner or authorized representative of this business and have the authority to create this listing.
                  </Label>
                </div>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting || !formData.isOwner}
                className="w-full text-base sm:text-lg py-5 sm:py-6 bg-blue-600 hover:bg-blue-700"
              >
                {isSubmitting ? 'Creating Account...' : '➡️ Continue'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}