// import { useState } from 'react'; // Import React
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames'; 

interface Step {
  label: string;
  description: string;
}

interface ProgressBarProps{
    step: 1 | 2 | 3 | 4 | 5;
    isComplete?: boolean; 
}


export default function ProgressBar({
    step,
    isComplete = false,
} : ProgressBarProps){ // Dùng React.FC

  const steps: Step[] = [ 
      { label: 'STEP 1', description: 'Thông tin dự án'},
      { label: 'STEP 2', description: 'Bối cảnh (PESTEL)'},
      { label: 'STEP 3', description: 'Quản lý mục tiêu dự án'},
      { label: 'STEP 4', description: 'Nhận diện rủi ro dự án'},
      { label: 'STEP 5', description: 'Đánh giá rủi ro'},
  ];
//   const [currentStep, setCurrentStep] = useState(1); 
//   const [isComplete, setIsComplete] = useState(false);

  const currentStep = step;

  return (
    <div>
      <div className="flex items-start justify-around p-8 relative"> 
        
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isCompletedStep = stepNumber < currentStep || isComplete;
          const isActiveStep = stepNumber === currentStep && !isComplete;
          return (
            <div key={index}>
                {index > 0 && (
                    <div
                        className={`absolute top-12 left-0 h-[3px] w-full transform -translate-y-1/2 
                                    ${index < currentStep && 'bg-[var(--solution)]'}
                                    ${!isCompletedStep && 'bg-[var(--border)]'}
                                `}
                        style={{
                            left: `${(100 / (steps.length * 2)) * (index * 2 - 1)}%`,
                            width: `${100 / steps.length}%`,
                        }}
                    />
                )}

                <div 
                    className={classNames(
                        'relative z-10 flex flex-col items-center', 
                        `w-1/${steps.length}` 
                    )}
                >
                {/* Vòng tròn */}
                <div
                    className={`w-8 h-8 rounded-full flex justify-center items-center mb-2 transition-colors duration-300
                                ${isActiveStep && 'bg-[var(--primary-btn)] text-[var(--white)]'}
                                ${isCompletedStep && 'bg-[var(--solution)] text-[var(--white)]'}
                                ${ !isCompletedStep && !isActiveStep && 'bg-[var(--border)] text-[var(--black)]'}`}
                >
                    {isCompletedStep ? <FontAwesomeIcon icon={faCheck} /> : stepNumber}
                </div>
                <div
                    className={
                        `text-center text-sm transition-colors duration-300 whitespace-nowrap
                        ${isActiveStep && 'text-[var(--primary-btn)] font-semibold'}
                        ${isCompletedStep && 'text-[var(--solution)]'}
                        ${!isCompletedStep && !isActiveStep && 'text-gray-500'}
                    `}
                >
                  {step.description}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* {!isComplete && (
        <button 
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded" 
          onClick={() => {
            if (currentStep < steps.length) {
                setCurrentStep((prev) => prev + 1);
            } else {
                setIsComplete(true);
            }
          }}
        >
          {currentStep === steps.length ? 'Hoàn thành' : 'Tiếp theo'}
        </button>
      )} */}
    </div>
  );
}