import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BusinessListing {
  id?: number;
  businessName: string;
  businessType: string;
  address: string;
  phone: string;
  email: string;
  website: string;
  description: string;
  googlePlaceId?: string;
  latitude?: number;
  longitude?: number;
  status?: string;
  isPremium?: boolean;
}

interface BusinessState {
  currentListing: BusinessListing | null;
  listings: BusinessListing[];
  loading: boolean;
  error: string | null;
}

const initialState: BusinessState = {
  currentListing: null,
  listings: [],
  loading: false,
  error: null,
};

const businessSlice = createSlice({
  name: 'business',
  initialState,
  reducers: {
    setCurrentListing: (state, action: PayloadAction<BusinessListing>) => {
      state.currentListing = action.payload;
    },
    setListings: (state, action: PayloadAction<BusinessListing[]>) => {
      state.listings = action.payload;
    },
    addListing: (state, action: PayloadAction<BusinessListing>) => {
      state.listings.push(action.payload);
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    clearCurrentListing: (state) => {
      state.currentListing = null;
    },
  },
});

export const {
  setCurrentListing,
  setListings,
  addListing,
  setLoading,
  setError,
  clearCurrentListing,
} = businessSlice.actions;

export default businessSlice.reducer;