// src/pages/CapturedDataPage.tsx

import React, { useState } from 'react';
import { IonContent, IonPage } from '@ionic/react';
import CapturedDataList from '../components/CapturedDataList';

const CapturedDataPage: React.FC = () => {
  const [capturedData, setCapturedData] = useState<Array<{ name: string; email: string; phone: string }>>([]);

  return (
    <IonPage>
      <IonContent>
        <h1>Captured Data</h1>
        <CapturedDataList data={capturedData} />
      </IonContent>
    </IonPage>
  );
};

export default CapturedDataPage;
