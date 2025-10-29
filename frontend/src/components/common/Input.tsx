import { type InputHTMLAttributes } from 'react';
import classNames from 'classnames';

// --- Định nghĩa Props ---
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  containerClassName?: string; // Tùy chọn class cho div bao ngoài
}

export default function Input({
  label,
  containerClassName,
  className,
  ...props
} : InputProps ){
  return (
    <div className={classNames('mb-4', containerClassName)}> 
        <label className="block text-gray-700 text-sm font-bold mb-2 text-start">
            {label}
        </label>
      
        <input
            className={classNames(
                'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight',
                'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent',
                className)}
            {...props}
        />
    </div>
  );
};


