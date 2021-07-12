import {
    Typography, AppBar, Card, CardActions, CardContent,
    CardMedia, CssBaseline, Grid, Toolbar, Container,Box,Button
  } from '@material-ui/core';
import * as React from "react"
import AppBarComp from "../Components/AppBar"

export default function Component () {
    const flexContainer = {
        display: 'flex',
        flexDirection: 'column',
        padding: 0,
        background:'#303030',
        marginTop: 100
      };
    
    const CardStyle = {
      maxWidth:400,
       margin:15,
        padding:15,
        backgroundColor:'#5c6ac4',
        textDecoration: 'none'
    };

  return (
    <Box style={flexContainer}>
    <style>{'body { background-color: #303030; }'}</style>

<Typography variant='h2' style={{color:'white'}}>Κατι λαθος εγινε...</Typography>


    </Box>
  )
}