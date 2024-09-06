import React from 'react'
import ReactDOM from 'react-dom/client'
import {App as Appp , Merc , Bmw} from './App.jsx'
import './index.css'
import Xyz from './Components/xyz.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Appp />
    <Bmw /> 
    <Merc />
    <Xyz />
  </React.StrictMode>,
)
