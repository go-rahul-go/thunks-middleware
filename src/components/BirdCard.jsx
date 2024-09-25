import React from 'react'
import { Card, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { animate, motion } from 'framer-motion'













const BirdCard = ({ bird, index,changeID }) => {
    const {theme}=useSelector(state=>state.app)
    return (
       
            <div className='bird-image' onClick={()=>changeID(index)} style={{height:index%2===0?"400px":"450px"}}>
                <div className='inner-bird-image'>
                    <img src={bird.imageUrl} alt="" />
                </div>

                <div className='bird-title'>
                    <Typography
                    sx={{
                        fontSize:{xs:22,md:25,lg:28},
                        fontWeight:600
                    }}>
                        {bird.name}
                    </Typography>
                </div>
            </div>
            
       
    )
}

export default BirdCard