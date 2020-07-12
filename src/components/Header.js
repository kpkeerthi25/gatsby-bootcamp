import React from 'react'
import {Link,graphql,useStaticQuery}  from 'gatsby'
import headerStyle from './header.module.scss'

const Header = (props)=>{
    const data= useStaticQuery(graphql`query{
        site{
          siteMetadata{
            title
          }
        }
      }`)
    return(
        <div className={headerStyle.container}>
            <Link className={headerStyle.listHeaderLink} to='/' >
                <h1>{data.site.siteMetadata.title}</h1>
            </Link>
            <nav>
                <ul className={headerStyle.navList}>
                    <li>
                        <Link className={headerStyle.listLink} activeClassName={headerStyle.activeListLink} to='/'>Home</Link>
                    </li>
                    <li>
                        <Link className={headerStyle.listLink} activeClassName={headerStyle.activeListLink} to='/about'>About</Link>
                    </li>
                    <li>
                        <Link className={headerStyle.listLink} activeClassName={headerStyle.activeListLink} to='/blog'>Blog</Link>
                    </li>
                    <li>
                        <Link className={headerStyle.listLink} activeClassName={headerStyle.activeListLink} to='/contact'>Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header