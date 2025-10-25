import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { motion } from "motion/react"
// import React from "react";
// import { icon } from "@fortawesome/fontawesome-svg-core";

interface StatCardProps {
  title: string;
  value: string | number;
  description: string;
  icon: IconProp;
  color?: 'green' | 'blue' | 'orange';
  className?: string;
};

function StatCard({
    title,
    value,
    description,
    icon,
    color,
    className,
    ...passProps
} : StatCardProps) {

    const props = {...passProps}
    const colorClass = classNames(
        {
            'text-[var(--progress)]': color == 'blue',
            'text-[var(--solution)]': color == 'green',
            'text-[var(--warning)]': color == 'orange',
        },
        className
    )
    const bgClasses = classNames(
        {
            'bg-[var(--bg-search)]': color == 'blue',
            'bg-[var(--bg-solution)]': color == 'green',
            'bg-[var(--bg-report)]': color == 'orange',
        },
        className
    )


    return (
        <motion.div className={`p-6 rounded-lg shadow-md flex justify-between items-start ${bgClasses}`} {...props} whileHover={{ scale: 1.05 }} whileTap={{ scale: 1 }}>
            <div className="text-start">
                <p className={`text-lg font-semibold ${colorClass}`}>{title}</p>
                <p className={`text-4xl font-semibold my-1 ${colorClass}`}>{value}</p>
                <p className="text-sm text-[var(--black)]">{description}</p>
            </div>
            <FontAwesomeIcon className={`text-[24px] p-2 ${colorClass}`} icon={icon} />

        </motion.div>
    )
}

export default StatCard