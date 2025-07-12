import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UIState {
  showConfetti: boolean;
  currentStep: number;
  isSubmitting: boolean;
}

const initialState: UIState = {
  showConfetti: false,
  currentStep: 1,
  isSubmitting: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setShowConfetti: (state, action: PayloadAction<boolean>) => {
      state.showConfetti = action.payload;
    },
    setCurrentStep: (state, action: PayloadAction<number>) => {
      state.currentStep = action.payload;
    },
    setIsSubmitting: (state, action: PayloadAction<boolean>) => {
      state.isSubmitting = action.payload;
    },
  },
});

export const { setShowConfetti, setCurrentStep, setIsSubmitting } = uiSlice.actions;
export default uiSlice.reducer;