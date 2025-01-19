import RenderCustomField from "./RenderCustomField";

const DynamicForms = ({data}) =>{

    return (
        <>
        {data.map((form)=>{
            return (
                <div id={form.sectionTitle}>
                <h2>{form.sectionTitle}</h2>
                <form>
                    <RenderCustomField fields={form.fields} />
                </form>
                </div>
            )
        })}
        </>
    )
}

export default DynamicForms