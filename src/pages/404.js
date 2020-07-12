import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/Layout'
import Head from '../components/Head'

const NotFound = () =>{
    return (
        <Layout>
            <Head title="Page Not Found"/>
            <h1>Page Not Found</h1>
            <p><Link to='/home'>Home Page</Link></p>
        </Layout>
    )
}

export default NotFound