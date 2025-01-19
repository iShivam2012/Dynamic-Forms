const RenderCustomField = ({fields}) =>{
    const customField = ({type, name, placeholder, options}) =>{
        if(type === 'select'){
            return <select name={name} id={name} >
                {options.map(option =>{
                    return <option value={option.value}>{option.label}</option>
                })}
            </select>;
        }
        if(type === 'textarea'){
            return <textarea row={5} cols={20} name={name} id={name} placeholder={placeholder} ></textarea>
        }
        if(type === 'radio'){
            return <>
            {options.map(option =>{
                return <>
                <input type={type} id={option.name} name={option.name} value={option.value} />
                <label htmlFor={option.name} >{option.label}</label>
                </>
            })}
            </>
        }
        else{
            return <input type={type} name={name} id={name} placeholder={placeholder} /> 
        }
    }

    return (
    <>
        {fields.map((field)=>{
            return(
                <>
                    <label htmlFor={field.name} >{field.label}</label>
                    {customField(field)}   
                </>
            )
        })}
    </>
    )
}

export default RenderCustomField