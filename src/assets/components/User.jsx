import { useContext, useState } from "react"
import UserContext from "../context/UserContext"

export default function User() {

    const [username, setUserName] = useState('');

    const {setUser} = useContext(UserContext);
    const handleSubmit = (e)=>{
        e.preventDefault();
        setUser({username, setUserName});
    }
  return (
    <div>
    <input type="text"
    placeholder="type"
        value={username}
        onChange={(e)=> setUserName(e.target.value)}
    />
    <button
    onClick={handleSubmit}
    >press</button>
    </div>
  )
}
