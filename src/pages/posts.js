import React from "react"
import { Link, graphql } from "gatsby"
import styles from "./styles/posts.module.css"

import Layout from "../components/layout"

export default function Posts(props) {

  const data = props.data.allMarkdownRemark;

  return (
  <Layout>

    <div 
    className={styles.header}
    >
        Hello Posts!
    </div>

    <div
    className={styles.articleList}
    >
      <h3>
        {data.totalCount} Posts
      </h3>
      {data.edges.map(({ node }) => (
          <div 
          className={styles.blogLink}
          key={node.id}
          >
             <h2>
               {node.frontmatter.title}
             </h2>
             <p>
             {node.frontmatter.date}
             </p>
             <p>{node.excerpt}</p>
          </div>
        ))}
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