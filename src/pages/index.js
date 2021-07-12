import React from "react";
import Blog from "./blog"
import '../index.css';
import { graphql ,Link, BrowserRouter as Router, Route, Switch} from "gatsby";
import {
  Typography, AppBar, Card, CardActions, CardContent,
  CardMedia, CssBaseline, Grid, Toolbar, Container,Box,Button
} from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
 import AppBarComp from '../Components/AppBar';


export default function Home({ data }) {
  const { title, description } = data.site.siteMetadata
 
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


  return (
  
    <Box style={darkTheme} >
       <style>{'body { background-color: #303030; }'}</style>
      {/* style={{background:'#303030'}}*/}
      <CssBaseline  />
   <AppBarComp/>
      <Typography variant='h2' style={{color:'#fff'}}>{title}</Typography>

    </Box>
  )
}

export const pageQuery = graphql`
  query MetadataQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    image: file(base: { eq: "logoap.png" }) {
      publicURL
    }
  }
  `