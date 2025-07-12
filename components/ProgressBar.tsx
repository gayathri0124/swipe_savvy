'use client';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export default function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between">
        {Array.from({ length: totalSteps }, (_, index) => {
          const stepNumber = index + 1;
          const isActive = stepNumber === currentStep;
          const isCompleted = stepNumber < currentStep;
          
          return (
            <div key={stepNumber} className="flex items-center">
              <div className={`
                w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold
                ${isCompleted ? 'bg-green-500 text-white' : 
                  isActive ? 'bg-blue-600 text-white' : 
                  'bg-gray-200 text-gray-600'}
              `}>
                {isCompleted ? '✓' : stepNumber}
              </div>
              
              {stepNumber < totalSteps && (
                <div className={`
                  h-1 w-16 md:w-24 mx-2
                  ${stepNumber < currentStep ? 'bg-green-500' : 'bg-gray-200'}
                `} />
              )}
            </div>
          );
        })}
      </div>
      
      <div className="text-center mt-4">
        <span className="text-gray-600">Step {currentStep} of {totalSteps}</span>
      </div>
    </div>
  );
}