import React from 'react'
import {Helmet} from 'react-helmet'

const Head = (props) => {
    return (
        <Helmet title={props.title}/>
    )
}

export default Head