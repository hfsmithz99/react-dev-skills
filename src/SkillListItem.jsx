import './SkillListItem.css'

export default function SkillListItem({skill, index}){
    console.log(skill)
    return (
        <>
        <li className="SkillListItem">{skill.name}</li>
        </>
        
    )
}