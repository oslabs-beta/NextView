// interface to declare all our prop types
interface Props {
  children?: React.ReactNode;
  onClick?: () => void;
  variant?: string; // default, primary, info
  size?: string; // sm, md, lg
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

// button component, consuming props
const Button: React.FC<Props> = ({
  className,
  children,
  onClick,
  variant = 'default',
  size = 'md',
  disabled,
  type,
  ...rest
}) => {
  return (
    <button
      type={type || 'button'}
      className={
        `btn ${variant} ${size} whitespace-nowrap` +
        (disabled ? ' disabled' : '') +
        (className ? ` ${className}` : '')
      }
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
