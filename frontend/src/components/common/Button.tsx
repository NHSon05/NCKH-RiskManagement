// import { ReactNode } from "react";
import classNames from 'classnames';
import React from 'react';
import { Link } from "react-router-dom";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    // children: ReactNode;
    title: string;
    variant?: 'primary' | 'secondary' | 'red' ;
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    to?: string;
    href?: string;
    className?: string;
}
// Kết hợp props của chúng ta với các props gốc của HTML để có thể truyền `type`, `target`...
// Build Component

function Button({ 
    title ,
    variant = 'primary',
    size = 'medium',
    disabled = false,
    to,
    href,
    className,
    ...passProps
} : ButtonProps) {

    // Logic chọn thẻ
        let Comp: React.ElementType = 'button';
        const props = { ...passProps } as React.ButtonHTMLAttributes<HTMLButtonElement> & Record<string, unknown>;

    if (to){
        props.to = to;
        Comp = Link;
    } else if (href){
        props.href = href;
        Comp = 'a';
    }

    const classes = classNames(
        // Button
        'inline-flex items-center justify-center rounded-lg font-semibold focus:ring-2 focus:ring-offset-2',
        // Size
        {
            'px-2 py-1.5 text-sm': size === 'small',
            'px-4 py-2 text-base': size === 'medium',
            'px-6 py-3 text-lg': size === 'large',
        },
        // Variant and State
        {
            'bg-[var(--primary-btn)] text-[var(--white)] hover:bg-[var(--primary-btn-hover)] focus:ring-primary-btn': variant === 'primary' && !disabled,
            'bg-[var(--error)] text-[var(--white)] hover:bg-[var(--error)] hover:opacity-90 focus:ring-primary-btn': variant === 'red' && !disabled,
            'bg-[var(--secondary-btn)] text-[var(--primary-btn)] border border-[var(--primary-btn)] hover:bg-[var(--border)] focus:ring-primary-btn': variant === 'secondary' && !disabled,
            'bg-[var(--description)] text-[var(--white)] cursor-not-allowed': disabled,
        },
        className
  );

    return (  
        <Comp className={classes} disabled={disabled} {...props}>
            <span>{title}</span>
        </Comp>
    );
}

export default Button;