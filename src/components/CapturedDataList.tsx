// src/components/CapturedDataList.tsx

import React from 'react';
import { IonList, IonItem, IonLabel } from '@ionic/react';

interface CapturedDataListProps {
  data: Array<{ name: string; email: string; phone: string }>;
}

const CapturedDataList: React.FC<CapturedDataListProps> = ({ data }) => {
  return (
    <IonList>
      {data.map((item, index) => (
        <IonItem key={index}>
          <IonLabel>
            <h2>{item.name}</h2>
            <p>{item.email}</p>
            <p>{item.phone}</p>
          </IonLabel>
        </IonItem>
      ))}
    </IonList>
  );
};

export default CapturedDataList;
