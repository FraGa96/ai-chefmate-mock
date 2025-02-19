import { useMemo } from 'react';
import arrow from './arrow.svg';

type ButtonProps = {
  variant?: 'default' | 'light' | 'green',
  label?: string;
  withIcon?: boolean;
  rotateIconDg?: number;
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

const Button = ({
  variant = 'default',
  label = '',
  withIcon = false,
  rotateIconDg = 0,
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
        + ' px-10 py-4.5 rounded-full border-2 text-[22px] capitalize font-medium'
        + ' flex items-center gap-2 cursor-pointer'}
      {...buttonProps}
    >
      {label}

      {withIcon && (
        <img alt="arrow" className={`w-5 h-7 rotate-${rotateIconDg}`} src={arrow} />
      )}
    </button>
  );
};

export default Button;
