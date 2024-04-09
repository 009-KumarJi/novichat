import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import {createTheme, CssBaseline, responsiveFontSizes} from '@mui/material';
import {HelmetProvider} from "react-helmet-async";
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev/index.js";
import {ThemeProvider} from "@mui/material";

let theme = responsiveFontSizes(createTheme());

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider> {/* HelmetProvider is used to manage the document head */}
      <CssBaseline/>
      <DevSupport ComponentPreviews={ComponentPreviews}
                  useInitialHook={useInitial}
      >
        <div onContextMenu={(e) => e.preventDefault()}>
          <ThemeProvider theme={theme}>
            <App/>
          </ThemeProvider>
        </div>
      </DevSupport>
    </HelmetProvider>
  </React.StrictMode>,
);
