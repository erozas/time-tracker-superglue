import React from 'react';
import { tv } from 'tailwind-variants';
import { Loader2 } from 'lucide-react';

const buttonVariants = tv({
  base: [
    'inline-flex items-center justify-center gap-2',
    'rounded-md font-medium transition-all duration-200',
    'focus:outline-none focus:ring-2 focus:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-50',
    'active:scale-95'
  ],
  variants: {
    variant: {
      primary: [
        'bg-indigo-600 text-white',
        'hover:bg-indigo-700 focus:ring-indigo-500',
        'active:bg-indigo-800'
      ],
      secondary: [
        'bg-gray-100 text-gray-900',
        'hover:bg-gray-200 focus:ring-gray-500',
        'active:bg-gray-300'
      ],
      outline: [
        'border border-gray-300 bg-white text-gray-700',
        'hover:bg-gray-50 hover:border-gray-400',
        'focus:ring-gray-500 active:bg-gray-100'
      ],
      ghost: [
        'text-gray-700 hover:bg-gray-100',
        'focus:ring-gray-500 active:bg-gray-200'
      ],
      destructive: [
        'bg-rose-500 text-white',
        'hover:bg-rose-600 focus:ring-rose-500',
        'active:bg-rose-700'
      ],
      success: [
        'bg-emerald-500 text-white',
        'hover:bg-emerald-600 focus:ring-emerald-500',
        'active:bg-emerald-700'
      ],
      warning: [
        'bg-amber-500 text-white',
        'hover:bg-amber-600 focus:ring-amber-500',
        'active:bg-amber-700'
      ]
    },
    size: {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-sm',
      lg: 'px-6 py-3 text-base',
      xl: 'px-8 py-4 text-lg'
    },
    rounded: {
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      full: "rounded-full"
    },
    fullWidth: {
      true: 'w-full',
      false: ''
    },
    loading: {
      true: 'cursor-not-allowed',
      false: ''
    }
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
    fullWidth: false,
    loading: false
  }
});

const Button = React.forwardRef(({
  className,
  variant,
  size,
  rounded,
  fullWidth,
  loading,
  disabled,
  children,
  leftIcon,
  rightIcon,
  iconOnly,
  loadingText = 'Loading...',
  ...props
}, ref) => {
  const isDisabled = disabled || loading;

  const buttonContent = () => {
    if (loading) {
      return (
        <>
          <Loader2 className="h-4 w-4 animate-spin" />
          {!iconOnly && (loadingText || children)}
        </>
      );
    }

    if (iconOnly) {
      return leftIcon || rightIcon || children;
    }

    return (
      <>
        {leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
      </>
    );
  };

  return (
    <button
      ref={ref}
      className={buttonVariants({ variant, size, fullWidth, loading, className, rounded })}
      disabled={isDisabled}
      {...props}
    >
      {buttonContent()}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
