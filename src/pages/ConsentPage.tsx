// src/pages/ConsentPage.tsx

import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import ConsentForm from '../components/ConsentForm';

const ConsentPage: React.FC = () => {
  // Handle consent logic here

  return (
    <IonPage>
      <IonContent>
        <ConsentForm onConsent={() => console.log('Consent Given')} />
      </IonContent>
    </IonPage>
  );
};

export default ConsentPage;
