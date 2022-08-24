import React from "react"

export default function TrackSearchResult({ track, chooseTrack }) {
  function handlePlay() {
    chooseTrack(track)
  }

  return (
    <div className="cards"
      style={{ cursor: "pointer" }}
      onClick={handlePlay}
    >
      <div className="card-img-back">
        <img  src={track.albumUrl} style={{ height: "100px", width: "100px" }} />
      </div>
      
      <img className="card-img-art" src={track.albumUrl} style={{ height: "64px", width: "64px" }} />
      <div className="ml-3">
        <div>{track.title}</div>
        <div>{track.artist}</div>
      </div>
    </div>
  )
}
