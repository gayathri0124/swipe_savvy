'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Building2, MapPin, Phone, Mail, Globe, Crown } from 'lucide-react';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [listings, setListings] = useState([]);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Business Dashboard</h1>
          <p className="text-gray-600">Manage your business listings and track performance</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="w-5 h-5" />
                  Your Business Listings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <p className="text-gray-500">Your business listings will appear here</p>
                  <Button className="mt-4">Add New Listing</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="border-yellow-200 bg-yellow-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-yellow-800">
                  <Crown className="w-5 h-5" />
                  Upgrade to Premium
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-yellow-700 text-sm mb-4">
                  Get featured placement and advanced analytics
                </p>
                <Button className="w-full bg-yellow-600 hover:bg-yellow-700">
                  Upgrade Now
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Listings</span>
                    <Badge>0</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Active Listings</span>
                    <Badge variant="secondary">0</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}