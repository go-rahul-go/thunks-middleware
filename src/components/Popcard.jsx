import React from 'react'
import { motion } from "framer-motion";
import { useSelector } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';
import { Card, Typography,Button } from '@mui/material';


const PopCard = ({ index, changeID }) => {
  const { data, theme } = useSelector(state => state.app)
  console.log(data[index])
  return (
    <motion.div className='pop-card' >
      <div className="close-pop" >
        
        <Button
        sx={
          {
            backgroundColor:"red",
            color:"ghostwhite",
            fontWeight:800,
          
            px:2,
            ":hover":{backgroundColor:"#5465FF",color:"ghostwhite"}
          }
        }
        endIcon={<CloseIcon/>}
        onClick={() => changeID(null)}
        >close</Button>
      </div>

      <Card
        sx={
          {
            width: { xs: "90%", md: "80%", lg: "85%" },
           
            backgroundColor: theme === "light" ? "#FDF8ED" : "#131515",

            borderRadius: "25px",
            display: "flex",
            flexDirection: { xs: "column", md: "column", lg: "row" },
            mt:5
          }
        }>
        <Card
          sx={
            {

              width: { xs: "100%", md: "100%", lg: "40%" },
              height: { xs: "40vh", md: "60vh", lg: "66vh" },
              position: 'relative',
              borderRadius:0

            }
          }
          elevation={0}
        >

          <img src={data[index].imageUrl} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
        </Card>

        <Card elevation={0} sx={{ px: 2,py:{xs:3,md:2}}}>
          <Typography
            sx={
              {
                textWrap: "break-word",
                fontSize: {xs:20,md:25,lg:25},
                fontWeight: 800
              }
            }
            varaint="h3"
          >
            {data[index].name}
          </Typography>

          <Typography
            sx={
              {
                py: 1,
                fontSize: {xs:15,lg:18},

              }
            }>
            {data[index].description}
          </Typography>
          <div className={theme === "light" ? "divider divider-light" : "divider divider-dark"}></div>

          <Card
            sx={{
              width: "100%",

              mt:{xs:2,lg:2},
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              textTransform: "capitalize",

            }}
            elevation={0}>
            <Typography sx={{ fontSize:{xs:15,lg:18}, fontWeight: 600 }}>place: </Typography>
            <Typography sx={{ fontSize:{xs:15,lg:18}, fontWeight: 600 }}>{data[index].place_of_found}</Typography>
          </Card>


          <Card
            sx={{
              width: "100%",

             
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              textTransform: "capitalize",

            }}
            elevation={0}>
            <Typography sx={{ fontSize:{xs:15,lg:18}, fontWeight: 600 }}>species: </Typography>
            <Typography sx={{ fontSize:{xs:15,lg:18}, fontWeight: 600 }}>{data[index].species}</Typography>
          </Card>

          <Card
            sx={{
              width: "100%",

              mt:{xs:0,lg:1},
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              textTransform: "capitalize",

            }}
            elevation={0}>
            <Typography sx={{ fontSize:{xs:15,lg:18}, fontWeight: 600 }}>habitat: </Typography>
            <Typography sx={{ fontSize:{xs:15,lg:18}, fontWeight: 600 }}>{data[index].habitat}</Typography>
          </Card>

          <Card
            sx={{
              width:"100%",
            
              mt:{xs:0,lg:1},
              display:"flex",
              alignItems:"center",
              gap:0.5,
              textTransform:"capitalize",
              
            }}
            elevation={0}>
              <Typography sx={{fontSize:{xs:15,lg:18},fontWeight:600}}>diet: </Typography>
              <Typography sx={{fontSize:{xs:15,lg:18},fontWeight:600}}>{data[index].diet}</Typography>
            </Card>

            <Card
            sx={{
              width:"100%",
            
              mt:{xs:0,lg:1},
              display:"flex",
              alignItems:"center",
              gap:0.5,
              textTransform:"capitalize",
              
            }}
            elevation={0}>
              <Typography sx={{fontSize:{xs:15,lg:18},fontWeight:600}}>family: </Typography>
              <Typography sx={{fontSize:{xs:15,lg:18},fontWeight:600}}>{data[index].family}</Typography>
            </Card>

            <Card
            sx={{
              width:"100%",
            
              mt:{xs:0,lg:1},
              display:"flex",
              alignItems:"center",
              gap:0.5,
              textTransform:"capitalize",
              
            }}
            elevation={0}>
              <Typography sx={{fontSize:{xs:15,lg:18},fontWeight:600}}>weight: </Typography>
              <Typography sx={{fontSize:{xs:15,lg:18},fontWeight:600}}>{data[index].weight_kg + "kg"}</Typography>
            </Card>

            <Card
            sx={{
              width:"100%",
            
              mt:{xs:0,lg:1},
              display:"flex",
              alignItems:"center",
              gap:0.5,
              textTransform:"capitalize",
              
            }}
            elevation={0}>
              <Typography sx={{fontSize:{xs:15,lg:18},fontWeight:600}}>wingspan: </Typography>
              <Typography sx={{fontSize:{xs:15,lg:18},fontWeight:600}}>{data[index].wingspan_cm +"cm"}</Typography>
            </Card>
        </Card>




      </Card>

    </motion.div>
  )
}

export default PopCard