import { useForm } from 'react-hook-form';

const InputField = ({
  name,
  type,
  label,
  handler,
  style = 'default',
  size = 'default',
  option = {},
  placeholder = '',
  className = '',
}) => {
  const { register } = useForm();
  const styleList = {
    default:
      'rounded-lg bg-white border-[.5px] border-gray-300 focus:border-[.5px] focus:border-gray-400 ps-5 text-gray-500',
    destructive:
      'bg-destructive text-destructive-foreground hover:bg-destructive/90',
    outline:
      'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    ghost: 'hover:bg-accent hover:text-accent-foreground',
    link: 'text-primary underline-offset-4 hover:underline',
  };

  const sizeList = {
    default: 'h-14 px-4 py-2',
    sm: 'h-9 rounded-md px-3',
    lg: 'h-11 rounded-md px-8',
    icon: 'h-10 w-10',
  };

  return (
    <div className="my-1 flex flex-col">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className={`${styleList[style]} ${sizeList[size]} ${className}`}
        {...register(name, option)}
        onBlur={handler}
      />
    </div>
  );
};

export default InputField;
