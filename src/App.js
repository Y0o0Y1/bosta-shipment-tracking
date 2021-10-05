import React, { Suspense } from "react";
import MainContextProvider from './contexts/MainContext'
import LocaleContextProvider from './contexts/LocaleContext'

import { Grid } from "@material-ui/core";

import Navbar from "./components/Navbar";
import MainContent from './components/MainContent';

import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import HttpApi from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { BrowserRouter } from "react-router-dom";
import "./app.css"



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

function App() {
  return (
    <div className="App">
      <LocaleContextProvider>
        <MainContextProvider>
          <Suspense fallback={loadingMarkup}>
            <BrowserRouter>
              <Grid container spacing={2} wrap> 
                <Grid item sm={12} >
                  <Navbar />
                </Grid>
                <Grid item sm={12}>
                  <MainContent />
                </Grid>
              </Grid>
            </BrowserRouter>
          </Suspense>
        </MainContextProvider>
      </LocaleContextProvider>
    </div >
  );
}

export default App;
