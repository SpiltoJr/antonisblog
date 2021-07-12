import React,{useContext} from 'react';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import {
    Typography, AppBar, Card, CardActions, CardContent,
    CardMedia, CssBaseline, Grid, Toolbar, Container,Box,Button
  } from '@material-ui/core';
import { graphql ,Link, BrowserRouter as Router, Route, Switch} from "gatsby";
import logo from '../images/logoap.png'

const AppBarComp = (props)=> {

    const flexContainer = {
        display: 'flex',
        flexDirection: 'row',
        padding: 0,
        background:'#303030',
        maxHeight:150,
        color: '#303030'
      };
      const darkTheme={
        
        padding: 0,
        background:'#303030',
        marginTop:100,
      
      }



    return(
        <AppBar style={flexContainer}  >

   <Typography id='toplogo' >
          <img alt="Author" src={logo} /> 
    </Typography>
    

    <Box class='Menu' visibility="visible" style={flexContainer} >
          <Button >
           
            <Link to="/" style={{ textDecoration: 'none' , color: "white"  }}>
              {/* <ListItemIcon > <HomeIcon /> </ListItemIcon> */}
              <Typography variant="h6" >ΑΡΧΙΚΗ</Typography>
            </Link>
          
          </Button>


          <Button style={{textAlign:"center"}}  >
         
              <Link to="/blog" style={{ textDecoration: 'none' , color: "white",  }}>
             
                <Typography variant="h6" >ΑΡΘΡΑ</Typography>
              </Link>
          
          </Button>




          <Button>
            
              <Link to="/epafi" style={{ textDecoration: 'none' , color: "white",padding:5 }}>
                {/* <ListItemIcon><StorefrontIcon /></ListItemIcon> */}
                <Typography variant="h6">ΕΠΙΚΟΙΝΩΝΙΑ</Typography>
              </Link>
           
          
          </Button>

        
          

     
      </Box>
   </AppBar>
    )
}
export default AppBarComp;