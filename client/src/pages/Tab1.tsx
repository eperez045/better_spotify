import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
// import ExploreContainer from '../components/ExploreContainer';
import Login from '../components/Login';
import './Tab1.css';
import Dashboard from '../components/Dashboard';

const code = new URLSearchParams(window.location.search).get('code')
const Tab1: React.FC = () => {
  return (
    // <IonPage>
    //   <IonHeader>
    //     <IonToolbar>
    //       <IonTitle>Tab 1</IonTitle>
    //     </IonToolbar>
    //   </IonHeader>
    //   <IonContent fullscreen>
    //     <IonHeader collapse="condense">
    //       <IonToolbar>
    //         <IonTitle size="large">Tab 1</IonTitle>
    //       </IonToolbar>
    //     </IonHeader>
    //     <Login />
    //   </IonContent>
    // </IonPage>
    code ? <Dashboard code={code} /> : <Login />

  );

};

export default Tab1;
