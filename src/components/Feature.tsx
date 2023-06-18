// interface to declare all our prop types
interface Props {
  children: React.ReactNode;
  className?: string;
}

// button component, consuming props
const Feature: React.FC<Props> = ({ className, children, ...rest }) => {
  return (
    <div
      className={
        `col-[_span_6] rounded-md border border-[rgb(237,237,237)] bg-white p-6 md:col-[_span_3]` +
        (className ? ` ${className}` : '')
      }
      {...rest}
    >
      {children}
    </div>
  );
};

export default Feature;
