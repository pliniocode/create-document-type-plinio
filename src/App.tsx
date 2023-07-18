import { ThemeProvider } from 'styled-components'
import {BrowserRouter, Routes, Route } from "react-router-dom";

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { DefaultLayout } from './layout';
import { CreateDocument } from './pages/CreateDocument';

function App() {

  return (
    <ThemeProvider theme={defaultTheme} >
        <GlobalStyle />
        <BrowserRouter>
            <Routes>
                <Route  path='/' element={<DefaultLayout />}>
                    <Route path='/' element={<CreateDocument />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
