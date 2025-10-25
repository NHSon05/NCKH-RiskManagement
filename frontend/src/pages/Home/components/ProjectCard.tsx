import classNames from 'classnames';
import {faClock} from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from '../../../components/common/Image';
import images from '../../../assets/imgs';
import Button from '../../../components/common/Button';


// import Image from '../../../components/common/Image';
// import { faSpinner,faCheckCircle,faPauseCircle } from '@fortawesome/free-solid-svg-icons';




interface ProjectCardProps {
    title: string;
    status: string;
    lastUpdate: string;
    className?: string
};

export default function ProjectCard({
    title,
    status,
    lastUpdate,
    className,
    ...passProps
} : ProjectCardProps)  {

    const props = {...passProps}
    const classes = classNames(
        "bg-white p-5 rounded-lg shadow-md space-y-3 min-h-[120px]",
        className
    )

    return (
        <div className={classes} {...props}>
            <Image src={images.cauTuLien} alt={title} className='rounded-lg'/>
            <div className="items-start space-x-2">
                <h3 className="font-semibold text-[var(--black)] text-start">{title}</h3>
                <p
                    className='text-xs text-start text-[var(--progress)] font-semi'
                >
                    {status}
                </p>
            </div>
            <div className="flex items-center text-sm text-gray-500">
                <FontAwesomeIcon className="mr-1" icon={faClock} />
                <span>{lastUpdate}</span>
            </div>
            <Button title='Xem thêm' size='small' className='w-full'/>
        </div>
    );
}
