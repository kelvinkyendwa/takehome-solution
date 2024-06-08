import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
	typography: {
		fontFamily: "Mulish, sans-serif",
	},
	palette: {
		primary: {
			main: "#5acccc",
		},
		secondary: {
			main: "#335c6e",
		},
	},
});

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</React.StrictMode>,
);
