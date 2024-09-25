import React from 'react'
import { Box, Paper, Typography } from '@mui/material'
import { useSelector,useDispatch } from 'react-redux'
import { changeTheme } from '../store/appSlice'
import light from "../assets/lightLogo.svg";
import dark from "../assets/darkLogo.svg";

const Nav = () => {

    const { theme } = useSelector(state => state.app);
    const dispatch=useDispatch()

    const toggleTheme = () => {
        if(theme==="dark")
        {
            dispatch(changeTheme("light"))
        }
        else{
            dispatch(changeTheme("dark"))
        }
    }


    return (
        <Paper
            sx={
                {
                    width: "100%",
                    height: "60px",
                   
                    borderRadius: 0,
                    position: "fixed",
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    top: 0,
                    left: 0,
                    zIndex:4,
                    backdropFilter:"blur(10px)",
                    backgroundColor:theme==="light"?"#f8f5f28d":"#1e1e24b8"
                }
            }
            elevation={0}
            
        >
            <Box
                sx={
                    {

                        px: 4
                    }
                }>
                <Typography sx={{ fontSize: 25, textTransform: "capitalize", fontWeight: 700 }}>
                    avain biology
                </Typography>
            </Box>
            <div className='logo-box' onClick={toggleTheme} title={theme==="light"?"light-mode":"dark-mode"}>
                <img src={theme==="light"?light:dark} alt="" />
            </div>
        </Paper>
    )
}

export default Nav;