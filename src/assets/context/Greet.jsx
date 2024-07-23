import { useContext } from "react"
import UserContext from "./UserContext"


export default function Greet() {

    const {user} = useContext(UserContext);

    if(!user) return <div>Enter your Name</div>;

    return(
        <div>
            Hello there {user.username}
        </div>
    )
}
