import {useState, useEffect} from "react"
import { IonItem, IonInput } from "@ionic/react"
import useAuth from "../useAuth"
import SpotifyWebApi from "spotify-web-api-node"

const spotifyApi = new SpotifyWebApi({
  clientId: "2d7e16cc26b94302a104ee7039f606c8",
})

export default function Dashboard({code}){
  const accessToken = useAuth(code)
  const [search, setSearch] = useState("")
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    if (!accessToken) return
    spotifyApi.setAccessToken(accessToken)
  }, [accessToken])

  useEffect(() => {
    if (!search) return setSearchResults([])
    if (!accessToken) return
    spotifyApi.searchTracks(search).then(res => {
      console.log(res.body.tracks.items)
    })
  },[search, accessToken])

  return(
    <div>
      <IonItem>
        <IonInput 
        type="search"
        placeholder="Search Songs/Artists"
        value={search}
        onChange={e => setSearch(e.target.value)}
        >
        </IonInput>
      </IonItem>

    </div>)
}
