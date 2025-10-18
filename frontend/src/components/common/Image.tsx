import { forwardRef } from "react";

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
        />
    )
});

export default Image;