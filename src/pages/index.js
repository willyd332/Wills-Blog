import React from "react"
import { Link } from "gatsby"
import styles from "./styles/index.module.css"
import { graphql } from "gatsby"

import Layout from "../components/layout"

export default function Home(props) {

  console.log(props.data.allFile)

  return (
  <Layout>
    <div
    className={styles.headerBox}
    >
      <h1
      className={styles.header}
      >
          {props.data.site.siteMetadata.title}
      </h1>
    </div>
  </Layout>
  )
}

export const data = graphql
`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`