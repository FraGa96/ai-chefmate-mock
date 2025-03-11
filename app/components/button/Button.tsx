import { useMemo } from 'react';
import arrow from './arrow.svg';

type ButtonProps = {
  variant?: 'default' | 'light' | 'green' | 'simpleGreen',
  label?: string;
  withIcon?: boolean;
  iconClassName?: string;
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

const Button = ({
  iconClassName='',
  label = '',
  variant = 'default',
  withIcon = false,
  className = '',
  ...buttonProps
}: ButtonProps) => {
  const variantProps = useMemo(() => {
    switch (variant) {
      case 'light':
        return {
          bg: 'bg-custom-light',
          border: 'border-custom-green',
          text: 'text-custom-green',
        };
      case 'simpleGreen':
        return {
          bg: 'bg-custom-light-green',
          border: 'border-custom-light-green',
          text: 'text-custom-green',
        };
      case 'green':
        return {
          bg: 'bg-custom-light-green',
          border: 'border-custom-green',
          text: 'text-custom-green',
        };
      case 'default':
      default:
        return {
          bg: 'bg-custom-green',
          border: 'border-custom-green',
          text: 'text-white',
        };
    }
  }, []);

  return (
    <button
      type="button"
      className={`${variantProps.bg} ${variantProps.border} ${variantProps.text}`
        + ' px-9 py-3.5 rounded-full border-2 text-[18px] capitalize font-medium'
        + ' flex items-center gap-2 cursor-pointer [&:disabled]:bg-custom-light'
        + ' lg:text-[22px] lg:py-4.5 lg:px-10 ' + className}
      {...buttonProps}
    >
      {label}

      {withIcon && (
        <img alt="arrow" className={`w-5 h-7 ${iconClassName}`} src={arrow} />
      )}
    </button>
  );
};

export default Button;
