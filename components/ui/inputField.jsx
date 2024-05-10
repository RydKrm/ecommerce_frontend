import { useForm } from "react-hook-form"

const InputField = ({name,type,label,handler,style="default",size="deaflt",option={}})=>{

    const { register } = useForm()
    const styleList = { 
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      }
    
    const sizeList = {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      }


    
    return(    
      <div className="my-1 flex flex-col">
        <label htmlFor={name}>{label}</label>
        <input type={type} className={`${styleList[style]} ${sizeList[size]}`} {...register(name, option)} onBlur={handler} />
      </div>
    )
  }

export default InputField;
