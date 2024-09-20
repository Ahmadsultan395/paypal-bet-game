import { useState } from 'react'
import Router from './routes'
import { StyledEngineProvider, ThemeProvider } from '@mui/material'
import { theme } from './Theme'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'
import './App.css'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from './Views/Landing/components/Header'
import Footer from './Views/Landing/components/Footer'
import TopHeader from './Views/Landing/components/Header/TopHeader'
function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        <ErrorBoundary>
          {/* <TopHeader/> */}
          {/* <Header/> */}
          <Router />
          {/* <Footer/> */}
        </ErrorBoundary>
        <ToastContainer />
      </StyledEngineProvider>
    </ThemeProvider>
  );
}

export default App
