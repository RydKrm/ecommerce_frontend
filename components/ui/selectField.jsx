const SelectField = ({handler,list=[],style='default',size='default', label='', name=''}) =>{
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

    return (
      <>
      <label htmlFor="productList">{label}</label>
    <select onChange={handler} className={`${styleList[style]} ${sizeList[size]}`} name={name}>
      {list.map((item) =>
        <option className="text-black font-normal" key={item.value} value={item.value}>{item.label}</option>
      )}
    </select>
    </>
    )
    
  }

  export default SelectField;