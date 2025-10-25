import { forwardRef } from "react";
// import {motion} from 'motion/react'

interface ImageProps {
    src: string;
    alt?: string;
    className?: string;
    fallback?: string;
}

const Image = forwardRef<HTMLImageElement, ImageProps>(({
    src,
    alt,
    className,
    // fallback: customeFallback = images.,
    ...props
}, ref) => {


    // const [fallback, setFallBack] = useState('');
    // const handleError = () => {
    //     setFallBack(customeFallback);
    // }
    return(
        <img
        src={src}
        alt={alt}
        className={className}
        ref={ref}
        {...props}
        // onError={handleError}
        // whileHover={{ scale: 1.05 }} 
        // whileTap={{ scale: 0.8 }}
        // initial={{ opacity: 0, y: 50 }}
        // whileInView={{ opacity: 1, y: 0 }} 
        // viewport={{ once: true }} 
        // transition={{ duration: 0.2}}
        />
    )
});

export default Image;