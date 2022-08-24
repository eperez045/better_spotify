import { IonInfiniteScrollContent } from "@ionic/react"
import React from "react"

export default function TrackSearchResult({ track, chooseTrack }) {
  function handlePlay() {
    chooseTrack(track)
  }

  return (
    <>
    <div className="cards"
      style={{ cursor: "pointer" }}
      onClick={handlePlay}
    >
      <div className="card-img-back">
        <img  src={track.albumUrl} />
      </div>
      
      <img className="card-img-art" src={track.albumUrl} style={{ height: "90px", width: "90px" }} />
      <div className="card-text">
        <div className="card-title">{track.title}</div>
        <div>{track.artist}</div>
      </div>
      </div>
      </>
  )
}
