import React from "react"
import classNames from "classnames";

interface TitleProps{
    title: string;
    size: 'small' | 'medium' | 'large' | 'extra-large';
    variant: 'light' | 'dark' | 'navy';
    className?: string;
    children?: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({
    title,
    size = 'small',
    variant,
    className,
    children,
    ...passProps
}) => {
    const props = {...passProps}

    const classes = classNames(
        {
            'font-semibold text-[20px]': size === 'small',
            'font-semibold text-[24px]': size === 'medium',
            'font-semibold text-[32px]': size === 'large',
            'font-bold text-[48px]': size === 'extra-large',
        },      
        {
            'text-[var(--white)]': variant === 'light',
            'text-[var(--black)]': variant === 'dark',
            'text-[var(--logo)]': variant === 'navy',
        },
        className
    )
    return (
        <h1 className={classes} {...props}>
            {title}
            {children}
        </h1>
    )
}

export default Title;