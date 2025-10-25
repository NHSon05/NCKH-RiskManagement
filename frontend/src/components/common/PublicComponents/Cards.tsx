import React from "react";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {type IconProp } from '@fortawesome/fontawesome-svg-core';
import { motion } from "motion/react"

interface ItemProps{
    title: string; 
    des: string;   
    icon: IconProp; 
    color: 'blue' | 'green' | 'orange' | 'purple'; 
    className?: string;
    delay?: number;
}

const Card: React.FC<ItemProps> = ({   
    icon, 
    color,
    title,
    des,
    className,
    delay,
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
        <motion.div className={boxClasses} {...props} 
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.8 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.5}}>
            <FontAwesomeIcon icon={icon} className={iconClasses} />
            <h1 className={textClasses}>
                {title}
            </h1>
            <p className="text-[var(--description)] text-sm mt-2">
                {des}
            </p>
        </motion.div>
    )
}

export default Card;