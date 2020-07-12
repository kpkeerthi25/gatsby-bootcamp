import React from 'react'
import Layout from '../components/Layout'
import {graphql,useStaticQuery,Link} from 'gatsby'

import blogStyle from './blog.module.scss'
import Head from '../components/Head'


const BlogPage=()=>{
    const posts=useStaticQuery(graphql`
    query {
        allMarkdownRemark {
          edges {
            node {
              fields{
                slug
              }
              frontmatter {
                title
                date
              }
              html
              excerpt
            }
          }
        }
      }
    `)
   const renderFunc=(posts)=>{
       return posts.map((post)=>{
           return (
           <li key={post.node.fields.slug}>
             <Link to={`${post.node.fields.slug}`}>
                <h3>{post.node.frontmatter.title}</h3>
           		<p>{post.node.frontmatter.date}</p>
			</Link>
            </li>)
       })
   }
    return (
    <Layout>
        <Head title="Blog"/>
        <h1>Blogpage</h1>
        <ol className={blogStyle.post}>
            {renderFunc(posts.allMarkdownRemark.edges)}
        </ol>
    </Layout>
    )
}

export default BlogPage