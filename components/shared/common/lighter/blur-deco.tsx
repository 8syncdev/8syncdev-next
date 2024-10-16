import React from 'react'

interface BlurDecoProps {
    brightness?: number;
    color?: string;
    size?: 'small' | 'medium' | 'large';
    variant?: 'default' | 'vibrant' | 'pastel' | 'gradient';
    zIndex?: number;
}

const BlurDeco: React.FC<BlurDecoProps> = ({ brightness = 20, color = 'violet', size = 'medium', variant = 'default', zIndex = -100 }) => {
    const getSizeStyles = () => {
        switch (size) {
            case 'large':
                return {
                    width: '20rem',
                    height: '20rem',
                    top: '-10rem',
                };
            case 'small':
                return {
                    width: '10rem',
                    height: '10rem',
                    top: '-5rem',
                };
            default:
                return {
                    width: '15rem',
                    height: '15rem',
                    top: '-7.5rem',
                };
        }
    };

    const getVariantColor = () => {
        switch (variant) {
            case 'vibrant':
                return color === 'violet' ? 'bg-purple-200' : 
                       color === 'blue' ? 'bg-indigo-200' : 'bg-pink-200';
            case 'pastel':
                return color === 'violet' ? 'bg-fuchsia-200' : 
                       color === 'blue' ? 'bg-sky-200' : 'bg-rose-200';
            case 'gradient':
                return 'bg-gradient-to-r from-pink-200 to-violet-200';
            default:
                return `bg-${color}-200`;
        }
    };

    const getVariantBorder = () => {
        switch (variant) {
            case 'vibrant':
                return color === 'violet' ? 'via-purple-200' : 
                       color === 'blue' ? 'via-indigo-200' : 'via-pink-200';
            case 'pastel':
                return color === 'violet' ? 'via-fuchsia-200' : 
                       color === 'blue' ? 'via-sky-200' : 'via-rose-200';
            case 'gradient':
                return 'from-transparent via-pink-500 to-violet-600';
            default:
                return `via-${color}-200`;
        }
    };

    const sizeStyles = getSizeStyles();
    const variantColor = getVariantColor();
    const variantBorder = getVariantBorder();

    return (
        <div className='relative' style={{ zIndex }}>
            <div className="flex flex-row justify-center">
                {variant === 'gradient' ? (
                    <div className="flex flex-row w-1/2">
                        <div className={`h-[1px] bg-gradient-to-r ${variantBorder} w-full`}></div>
                        <div className="h-[1px] bg-gradient-to-r from-violet-600 to-transparent w-full"></div>
                    </div>
                ) : (
                    <div className={`absolute top-0 h-[1px] w-1/2 bg-gradient-to-r from-transparent ${variantBorder} to-transparent`}></div>
                )}
                <div
                    className={`${variantColor} rounded-full absolute filter blur-3xl`}
                    style={{
                        opacity: brightness / 100,
                        width: sizeStyles.width,
                        height: sizeStyles.height,
                        top: sizeStyles.top
                    }}
                >
                </div>
            </div>
        </div>
    )
}

export default BlurDeco;
