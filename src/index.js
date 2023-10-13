import React from 'react'
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'

import { initializeApp } from 'firebase/app' // Firebase inicializálása
import { getAnalytics } from 'firebase/analytics' // Firebase Analytics inicializálása

import App from './App'
import reportWebVitals from './reportWebVitals'
import db from './utils/firebaseConfig' // Firebase konfiguráció importálása

const app = initializeApp(db, 'expensehub-8508d') // Firebase inicializálása a konfigurációval

const root = createRoot(document.getElementById('root'))

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
)

reportWebVitals()
