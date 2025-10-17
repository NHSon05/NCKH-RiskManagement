import type React from 'react';
import './GlobalStyles.module.css';

// Define DataType for props by interfaces
interface GlobalStylesProps {
    children: React.ReactNode;
}

const GlobalStyles = ({children}: GlobalStylesProps) => {
    return <div className='bg-[var(--background)]'>
        {children};
    </div>
};
export default GlobalStyles