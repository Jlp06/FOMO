import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-ktit8jwbmx4t2sl4.us.auth0.com "
    clientId="ZQ5p8GFSfEPKeqTc6h7oo97rH7VV0DsM"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  > 
    <App />
  
  </Auth0Provider>
)
