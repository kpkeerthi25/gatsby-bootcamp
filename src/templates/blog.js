import React from 'react'
import {graphql} from 'gatsby'

import Layout from '../components/Layout'
import Head from '../components/Head'

export const query = graphql`query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
  `

const Blog = (props) =>{
    return (
        <Layout>
            <Head title={props.data.markdownRemark.frontmatter.title}/>
            <h1>{props.data.markdownRemark.frontmatter.title}</h1>
            <p>{props.data.markdownRemark.frontmatter.date}</p>
            <div dangerouslySetInnerHTML={{__html:props.data.markdownRemark.html}}/>
        </Layout>
    )
}

export default Blog