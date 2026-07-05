import { team } from "./Data/Team"                       
import Section from "./Components/Section/Section"        
import Card from "./Components/Card/Card"                 
import TeamMember from "./Components/TeamMember/TeamMember"
import './App.css'

function App() {
  const handleFollow = (name) => {
    console.log(`You followed ${name}`)
  }

  return (
    <Section title="Our Team">
      {team.map((member) => (
        // App.jsx
        <Card title={member.role} onFollow={handleFollow} key={member.id}>
          <TeamMember
            name={member.name}
            role={member.role}
            age={member.age}
            isAdmin={member.isAdmin}
            skills={member.skills}
            address={member.address}
            onFollow={handleFollow}
          />
        </Card>
      ))}

    </Section>
  )
}

export default App
