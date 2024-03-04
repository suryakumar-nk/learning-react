import { UserCard } from "./UserCard"

const emps = [
    {
        id: 123,
        name: 'Rajesh',
        role: 'Full Stack Developer',
        skills: ['java', 'python', 'docker'],
        imageurl: 'logo192.png'
    },
    {
        id: 123,
        name: 'Rajesh',
        role: 'Full Stack Developer',
        skills: ['java', 'python', 'docker'],
        imageurl: 'logo192.png'
    },
    {
        id: 123,
        name: 'Rajesh',
        role: 'Full Stack Developer',
        skills: ['java', 'python', 'docker'],
        imageurl: 'logo192.png'
    }
]
export const Card = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
        {
            emps.map((key, index) => (
                <UserCard id={key.id} name={key.name} role={key.role} imageurl={key.imageurl} skills={key.skills}/>
            ))
        }
    </div>
  )
}
