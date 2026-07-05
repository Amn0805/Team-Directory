import SkillBadge from "../SkillBadge/SkillBadge";
import './TeamMember.css'



function TeamMember({ name, role, age, isAdmin = false, skills = [], address, onFollow = () => {} }) {
    return(
        <div className="team-member">
            <h4>{name}</h4>
            <p>{role}</p>
            <p>Age : {age}</p>
            <p>{address.city},{address.country}</p>
            {isAdmin && <span className="admin-badge">Admin</span>}
            <div className="skills"> 
                {skills.map((skill)=>(
                    <SkillBadge key ={skill} skill={skill}/>
                ))}
            </div>
   <button onClick={()=> onFollow(name)}>Follow</button>
        </div>
    )
}
export default TeamMember