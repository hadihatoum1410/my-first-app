// src/pages/DataCollectionPage.tsx

import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import DataCollectionForm from '../components/DataCollectionForm';

const DataCollectionPage: React.FC = () => {
  // Handle data collection logic here

  return (
    <IonPage>
      <IonContent>
        <DataCollectionForm onDataSubmit={(data) => console.log('Data Submitted:', data)} />
      </IonContent>
    </IonPage>
  );
};

export default DataCollectionPage;
