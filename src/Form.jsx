import Select from "./Select"
export default function Form(){
    return(
        <>
            <label htmlFor="skillname">Skill:</label>
            <input type="text" name="skillname" />
            <label htmlFor="skilllevel">Level:</label>
            <Select />
            <button>Add Skill</button>
        </>
    )
}