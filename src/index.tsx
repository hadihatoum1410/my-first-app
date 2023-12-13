import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { IonReactRouter } from '@ionic/react-router';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
 <React.StrictMode>
    <IonReactRouter>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </IonReactRouter>
 </React.StrictMode>,
 document.getElementById('root')
);

// Call the element loader after the app has been rendered the first time
defineCustomElements(window);

// If you want your app to work offline and load faster, you can change unregister() to register() below.
serviceWorker.unregister();