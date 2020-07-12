import React from "react"
import {Link} from 'gatsby'
import Layout from '../components/Layout'
import Head from '../components/Head'

const IndexPage=()=>{
  return(
   
      <Layout>
      <Head title="Home"/>
      <h1>keerthi vasan</h1>
      <p>contact me at <Link to='/contact'>contact me </Link></p>
      </Layout>
  )
}

export default IndexPage;