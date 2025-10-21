import React from "react";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {type IconProp } from '@fortawesome/fontawesome-svg-core';

interface ItemProps{
    title: string; 
    des: string;   
    icon: IconProp; 
    color: 'blue' | 'green' | 'orange' | 'purple'; 
    className?: string;
}

const Card: React.FC<ItemProps> = ({   
    icon, 
    color,
    title,
    des,
    className,
    ...passProps
}) => {

    const props = {...passProps};

    const boxClasses = classNames(
        'rounded-lg p-8', 
        {
            'bg-[var(--bg-search)]': color === 'blue',
            'bg-[var(--bg-solution)]': color === 'green',
            'bg-[var(--bg-report)]': color === 'orange',
            'bg-[var(--bg-analyst)]': color === 'purple',
        },
        className
    );

    const iconClasses = classNames(
        'p-4 rounded-lg text-white font-bold text-2xl mb-4 inline-block',
        {
            'bg-[var(--progress)]': color === 'blue',   
            'bg-[var(--solution)]': color === 'green',
            'bg-[var(--warning)]': color === 'orange', 
            'bg-[var(--report)]': color === 'purple',   
        }
    );

    const textClasses = classNames(
        'text-[20px] font-semibold',
        {
            'text-[var(--progress)]': color === 'blue',
            'text-[var(--solution)]': color === 'green',
            'text-[var(--warning)]': color === 'orange', 
            'text-[var(--report)]': color === 'purple', 
        }
    )

    return(
        <div className={boxClasses} {...props}>
            <FontAwesomeIcon icon={icon} className={iconClasses} />
            <h1 className={textClasses}>
                {title}
            </h1>
            <p className="text-[var(--description)] text-sm mt-2">
                {des}
            </p>
        </div>
    )
}

export default Card;