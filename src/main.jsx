import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard.jsx'
import CertificatesPage from './components/CertificatesPage.jsx'

import Aos from 'aos';
import 'aos/dist/aos.css';

Aos.init();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<App/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path='/certificates' element={<CertificatesPage/>}/>
      </Routes>
    </BrowserRouter>
    {/* <App /> */}
  </React.StrictMode>,
)
