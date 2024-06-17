import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '@fontsource/inter';
import {CssVarsProvider} from "@mui/joy";
import {store} from "./store";
import {Provider} from "react-redux";


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <CssVarsProvider>
                <App/>
            </CssVarsProvider>
        </Provider>
    </React.StrictMode>,
)
