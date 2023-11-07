import './NewSkillForm.css'

export default function NewSkillForm(){
    return(
        <div className="NewSkillForm" >
            <label htmlFor="skillname">Skill:</label>
            <input type="text" name="skillname" />
            <label htmlFor="skilllevel">Level:</label>
            <select name="skilllevel">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <button>Add Skill</button>
        </div>
    )
}