import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import i18next from 'i18next'
import "./index.css"
import { initReactI18next } from 'react-i18next'
import HttpApi from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { BrowserRouter } from "react-router-dom";
import LocaleContextProvider from './contexts/LocaleContext'
import App from './App'

i18next.use(HttpApi).use(LanguageDetector).use(initReactI18next).init({
  default: "en",
  supportedLngs: ['en', 'ar'],
  fallbackLng: 'en',
  debug: false,
  // Options for language detector
  detection: {
    order: ["localStorage"],
  },
  backend: {
    loadPath: '/assets/locales/{{lng}}/translation.json',
  },
})

const loadingMarkup = (
  <div className="py-4 text-center">
    <h3>Loading..</h3>
  </div>
)

ReactDOM.render(
  <Suspense fallback={loadingMarkup}>
    <BrowserRouter>
      <LocaleContextProvider>
        <App />
      </LocaleContextProvider>
    </BrowserRouter>
  </Suspense>,
  document.getElementById('root')
)
