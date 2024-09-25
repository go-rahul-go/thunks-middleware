import { Paper, Typography, Card } from '@mui/material'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Masonry from 'react-masonry-css';
import BirdCard from './BirdCard';
import { motion, AnimatePresence } from "framer-motion"
import PopCard from './PopCard';











const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1
};


const Home = () => {
  const { data, status, theme } = useSelector(state => state.app)
  const [selectedID, changeID] = useState(null)

  return (
    <Paper sx={{ minHeight: "100vh", m: 0 }}>
      {status === "LOADING" && <Loading />}
      {status === "SUCCESS" && <div style={{ width: "95%", margin: "auto", paddingTop: "90px" }}>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column">

          {
            data.map((item, index) => {
              return (
                <BirdCard bird={item} key={index} index={index} changeID={changeID} />
              )
            })
          }

        </Masonry>
      </div>}


      <AnimatePresence>
        {
          (selectedID != null) && <PopCard layoutId={selectedID} index={selectedID} changeID={changeID} />



        }
      </AnimatePresence>
    </Paper>
  )
}

export default Home;


function Loading() {
  return (
    <Card
      sx={{ py:12}}
      elevation={0}>
        
      <Typography
        sx={
          {
            textAlign: "center",
            fontSize:30,
            fontWeight:700
          }
        }
      >loading please wait</Typography>
    </Card>
  )
}
