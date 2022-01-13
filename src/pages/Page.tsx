import {
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToast,
    IonToolbar
} from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Page.css';
import {useState} from "react";

const Page: React.FC = () => {

    const { name } = useParams<{ name: string; }>();
    const [openToast, setOpenToast] = useState(false)

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>{name}</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">{name}</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonToast
                    isOpen={openToast}
                    onDidDismiss={() => setOpenToast(false)}
                    message="Great ! A toast !"
                    color="success"
                    duration={5000}
                />
                <IonButton onClick={() => setOpenToast(true)}>Open toast</IonButton>
                <ExploreContainer name={name} />
            </IonContent>
        </IonPage>
    );
};

export default Page;
