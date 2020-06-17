import React from "react"
import { Link } from "gatsby"
import styles from "./css-modules/layout.module.css"

export default function Layout(props) {



    return (
    <div>
        <div className={styles.topBar}>
            <Link className={styles.link} to="/">
                Home
            </Link>
            <Link className={styles.link} to="/posts/">
                Blog Posts
            </Link>
        </div>
        {props.children}
   </div>
   )
  }
  