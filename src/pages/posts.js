import React from "react"
import { Link, graphql } from "gatsby"
import styles from "./styles/posts.module.css"

import Layout from "../components/layout"

export default function Home() {

  return (
  <Layout>

    <div 
    className={styles.header}
    >
        Hello Posts!
    </div>

  </Layout>
  )
}


export const query = graphql
`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`