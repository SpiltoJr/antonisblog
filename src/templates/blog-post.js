import React from "react"
import { graphql } from "gatsby"
import AppBarComp from '../Components/AppBar';
import {
  Typography, AppBar, Card, CardActions, CardContent,
  CardMedia, CssBaseline, Grid, Toolbar, Container,Box,Button
} from '@material-ui/core';


export default function BlogPost({ data }) {
  const post = data.markdownRemark
  const flexContainer = {
    display: 'flex',
    flexDirection: 'column',
    padding: 0,
  marginTop: 100,
color:'white'
  };


  return (

    <Box style={flexContainer}>
       <style>{'body { background-color: #303030; }'}</style>
      <AppBarComp/>
      <Typography variant='h2'>{post.frontmatter.title}</Typography>
      <Typography variant='h7'>{post.frontmatter.date}</Typography >
      <Typography variant='h4' dangerouslySetInnerHTML={{ __html: post.html }} />
    </Box>
  )
}
export const query = graphql`
  query BlogQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`