import {useState} from "react"
import { IonItem, IonInput } from "@ionic/react"
import useAuth from "../useAuth"

export default function Dashboard({code}){
  const accessToken = useAuth(code)
  const [search, setSearch] = useState("")
    return(
    <div>
      <IonItem>
        <IonInput 
        type="search"
        placeholder="Search Songs/Artists"
        value={search}
        onChange={e => setSearch(e.target.value)}
        />
      </IonItem>

    </div>)
}
