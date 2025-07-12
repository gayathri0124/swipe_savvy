'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import ProgressBar from './ProgressBar';
import { FileText, Gift, Star, BarChart3, Truck } from 'lucide-react';

interface AccountData {
  email: string;
  password: string;
  fullName: string;
  mobileNumber?: string;
  website?: string;
}

interface BusinessData {
  name: string;
  address: string;
  phone?: string;
  placeId: string;
  latitude: number;
  longitude: number;
}

export default function TermsAndConditions() {
  const router = useRouter();
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [businessData, setBusinessData] = useState<BusinessData | null>(null);
  const [accountData, setAccountData] = useState<AccountData | null>(null);


  useEffect(() => {
    const verifiedBusiness = localStorage.getItem('verifiedBusiness');
    const accountInfo = localStorage.getItem('accountData');
    
    if (!verifiedBusiness || !accountInfo) {
      router.push('/');
      return;
    }
    
    setBusinessData(JSON.parse(verifiedBusiness) as BusinessData);
setAccountData(JSON.parse(accountInfo) as AccountData);
  }, [router]);

  const handleActivate = async () => {
  if (!agreedToTerms) {
    alert('Please agree to the terms and conditions to continue.');
    return;
  }

  if (!accountData || !businessData) {
    console.error("Missing account or business data");
    return;
  }

  setIsSubmitting(true);
  try {
    // First register the user
    const registerResponse = await fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: accountData.email,
        password: accountData.password,
        name: accountData.fullName,
      }),
    });

    if (!registerResponse.ok) {
      throw new Error('Failed to create account');
    }

    // Login
    const loginResponse = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: accountData.email,
        password: accountData.password,
      }),
    });

    if (!loginResponse.ok) {
      throw new Error('Failed to login');
    }

    // Submit business
    const businessResponse = await fetch('/api/business/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        businessName: businessData.name,
        businessType: 'General Business',
        address: businessData.address,
        phone: businessData.phone || accountData.mobileNumber,
        email: accountData.email,
        website: accountData.website,
        description: `${businessData.name} - Now part of the Swipe Savvy Rewards Network`,
        googlePlaceId: businessData.placeId,
        latitude: businessData.latitude,
        longitude: businessData.longitude,
      }),
    });

    if (!businessResponse.ok) {
      throw new Error('Failed to create business listing');
    }

    localStorage.removeItem('businessSearch');
    localStorage.removeItem('verifiedBusiness');
    localStorage.removeItem('accountData');

    router.push('/success');
  } catch (error) {
    console.error('Activation error:', error);
    alert('Failed to activate your listing. Please try again.');
  } finally {
    setIsSubmitting(false);
  }
};


  if (!businessData || !accountData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <ProgressBar currentStep={3} totalSteps={4} />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-122">
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">📜</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Just One More Step</h1>
          <p className="text-gray-600">Please review and agree to our terms before activating your account.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Terms & Conditions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="merchant-agreement">
                    <AccordionTrigger className="text-left">
                      Swipe Savvy Merchant Agreement
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-gray-600 space-y-4">
                      <p>
                        By joining Swipe Savvy, you agree to participate in our rewards network and provide 
                        customers with loyalty benefits as outlined in our program guidelines.
                      </p>
                      <p>
                        Your business listing will be displayed in our mobile app and website, helping 
                        customers discover and engage with your business.
                      </p>
                      <p>
                        You maintain full control over your business information and can update or remove 
                        your listing at any time through your dashboard.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="privacy-policy">
                    <AccordionTrigger className="text-left">
                      Privacy Policy
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-gray-600 space-y-4">
                      <p>
                        We protect your business information and customer data in accordance with industry 
                        best practices and applicable privacy laws.
                      </p>
                      <p>
                        Your contact information will only be used to communicate about your Swipe Savvy 
                        account and may be displayed to customers seeking to contact your business.
                      </p>
                      <p>
                        We do not sell or share your personal information with third parties for 
                        marketing purposes without your explicit consent.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="program-benefits">
                    <AccordionTrigger className="text-left">
                      Program Benefits & Responsibilities
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-gray-600 space-y-4">
                      <p>
                        Free benefits include: business listing, promotional materials, and access to 
                        our customer rewards network.
                      </p>
                      <p>
                        Premium features are available through our paid subscription plans with 
                        additional marketing tools and analytics.
                      </p>
                      <p>
                        You agree to honor any rewards or promotions offered through the Swipe Savvy 
                        platform to maintain good standing in our network.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="terms"
                      checked={agreedToTerms}
                      onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
                    />
                    <Label htmlFor="terms" className="text-sm leading-relaxed">
                      I have read and agree to the Swipe Savvy Merchant Agreement and Privacy Policy.
                    </Label>
                  </div>
                </div>

                <Button
                  onClick={handleActivate}
                  disabled={!agreedToTerms || isSubmitting}
                  className="w-full mt-6 text-lg py-6 bg-green-600 hover:bg-green-700"
                >
                  {isSubmitting ? 'Activating...' : 'Activate My Free Listing'}
                </Button>

                <p className="text-center text-sm text-gray-500 mt-4">
                  We'll ship your Swipe Savvy window sticker and POS signage within 5–7 business days.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar - Free Benefits */}
          <div className="space-y-6">
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-800 text-center">
                  🎉 Your Free Benefits
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-green-800">Free business listing</span>
                </div>
                <div className="flex items-center gap-3">
                  <Gift className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-green-800">Window sticker & signage</span>
                </div>
                <div className="flex items-center gap-3">
                  <BarChart3 className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-green-800">Reward-enabled checkout</span>
                </div>
                <div className="flex items-center gap-3">
                  <Truck className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-green-800">Free shipping on materials</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-center">Business Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="font-semibold text-gray-900">{businessData.name}</p>
                  <p className="text-sm text-gray-600">Business Name</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{accountData.fullName}</p>
                  <p className="text-sm text-gray-600">Account Owner</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{accountData.email}</p>
                  <p className="text-sm text-gray-600">Contact Email</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}