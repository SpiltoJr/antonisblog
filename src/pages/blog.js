import React from "react";
import { graphql, Link } from "gatsby";
import {
  Typography, AppBar, Card, CardActions, CardContent,
  CardMedia, CssBaseline, Grid, Toolbar, Container,Box,Button
} from '@material-ui/core';
    import AppBarComp from '../Components/AppBar';


export default function Blog({ data }) {
  const { posts } = data.blog
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
      <AppBarComp/>
      <Typography variant='h2' style={{color:'white'}}>Αρθρα</Typography>

      {posts.map(post => (
          <Card style={CardStyle}>
        <article key={post.id}>
          <Link to={post.fields.slug} style={{ textDecoration: 'none' , color: "white"  }}>
            <Typography variant='h4'>{post.frontmatter.title}</Typography>
          </Link>
          <Typography variant='h7'>
            {post.frontmatter.author}, {post.frontmatter.date}
          </Typography>
          <p></p>
          <Typography variant='h6'>{post.excerpt}</Typography>
        </article>
        </Card>
      ))}
    </Box>
  )
}

export const pageQuery = graphql`
  query MyQuery {
    blog: allMarkdownRemark {
      posts: nodes {
        fields {
          slug
        }
        frontmatter {
          date(fromNow: true)
          title
          author
        }
        excerpt
        id
      }
    }
  }
`