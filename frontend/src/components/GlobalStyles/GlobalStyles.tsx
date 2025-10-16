import type React from 'react';
import './GlobalStyles.module.scss';

// Define DataType for props by interfaces
interface GlobalStylesProps {
    children: React.ReactNode;
}

const GlobalStyles = ({children}: GlobalStylesProps) => {
    return <>
        {children};
    </>
};
export default GlobalStyles