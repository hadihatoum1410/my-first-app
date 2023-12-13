// src/pages/Scanner.tsx

import React, { useState } from 'react';
import { IonContent, IonPage } from '@ionic/react';
import ConsentForm from '../components/ConsentForm';

const Scanner: React.FC = () => {
  const [consentGiven, setConsentGiven] = useState(false);

  const handleConsent = () => {
    setConsentGiven(true);
  };

  return (
    <IonPage>
      <IonContent>
        {!consentGiven && <ConsentForm onConsent={handleConsent} />}
        {consentGiven && <p>Consent Given - Implement QR Code Scanning here</p>}
      </IonContent>
    </IonPage>
  );
};

export default Scanner;
