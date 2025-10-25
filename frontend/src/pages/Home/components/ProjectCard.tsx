import classNames from 'classnames';
import {faClock} from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {motion} from 'motion/react';

import Image from '../../../components/common/Image';
import Button from '../../../components/common/Button';
import { cardVariants } from '../../../types/CardVariants';
import { Link } from 'react-router-dom';




interface ProjectCardProps {
    title: string;
    status: 'onWorking' | 'onFinishing' | 'onDelaying';
    img: string;
    lastUpdate: string;
    className?: string
};

interface statusConfig {
    onWorking: {
        text: string;
        className: string;
    };
    onFinishing: {
        text: string;
        className: string;
    };
    onDelaying: {
        text: string;
        className: string;
    };
}

const statusConfig : statusConfig = {
    onWorking: {
        text: 'Đang hoạt động',
        className: 'text-[var(--progress)]',
    },
    onFinishing: {
        text: 'Đã hoàn thành',
        className: 'text-[var(--solution)]',
    },
    onDelaying: {
        text: 'Tạm dừng',
        className: 'text-[var(--warning)]'
    }
}

export default function ProjectCard({
    title,
    status,
    lastUpdate,
    img,
    className,
    ...passProps
} : ProjectCardProps)  {

    const props = {...passProps}
    const classes = classNames(
        "bg-white p-4 rounded-lg shadow-md space-y-4 min-h-[120px] flex flex-col justify-between",
        className
    )
    const currentStatus = statusConfig[status];

    return (
        <Link to='/projects/#'>
            <motion.div className={classes} {...props}
                        variants={cardVariants}
            >
                <div className="relative w-full pb-[66.66%] bg-gray-200">
                    <Image src={img} alt={title} className='absolute inset-0 w-full h-full object-cover rounded-lg'/>
                </div>
                <div className="items-start space-x-2">
                    <h3 className="font-semibold text-[var(--black)] text-start">{title}</h3>
                    <p
                        className={`text-sm text-start font-semi ${currentStatus.className}`}
                    >
                        {currentStatus.text}
                    </p>
                </div>
                <div className='space-y-2'>
                    <div className="flex items-center text-sm text-gray-500">
                        <FontAwesomeIcon className="mr-1" icon={faClock} />
                        <span>{lastUpdate}</span>
                    </div>
                    <Button title='Xem thêm' size='small' className='w-full'/>
                </div>
            </motion.div>
        </Link>
    );
}
