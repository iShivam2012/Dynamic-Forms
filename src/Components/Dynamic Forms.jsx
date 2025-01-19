
const DynamicForms = ({data}) =>{

    return (
        <>
        {data.map((form)=>{
            return (
                <div id={form.sectionTitle}>
                <h2>{form.sectionTitle}</h2>
                <form>
                </form>
                </div>
            )
        })}
        </>
    )
}

export default DynamicForms