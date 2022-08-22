import React from "react";
import { IonButton } from '@ionic/react';

const AUTH_URL="https://accounts.spotify.com/authorize?client_id=2d7e16cc26b94302a104ee7039f606c8&response_type=code&redirect_uri=http://localhost:8100/tab1&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

export default function Login(){
    return(
        <div>
            <IonButton href={AUTH_URL}>Login</IonButton>
        </div>
    )
}