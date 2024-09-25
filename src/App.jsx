import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { callBirds } from './store/appSlice';
import { createTheme, Paper, ThemeProvider } from '@mui/material';
import Home from './components/Home';
import Nav from './components/Nav';


function App() {

  const { data, status, theme } = useSelector(state => state.app)
  const dispatch = useDispatch();

  // console.log(data," ",theme)

  const appTheme = createTheme({
    palette: {
      mode: theme,
      background: {
        paper: theme === "light" ? "#FDF8ED" : "#1E1E24"
      }
    }
  })

  useEffect(() => {
    try {
      dispatch(callBirds())
    }
    catch (e) {
      console.log("something wrong")
    }
  }, [])

  return (
    <>
      <ThemeProvider theme={appTheme}>
        <Nav/>
        <Home />
      </ThemeProvider>

    </>



  )




}

export default App;


