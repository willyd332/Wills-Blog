import React from "react"
import { Link } from "gatsby"

import styles from "./css-modules/index.module.css"
import Layout from "../components/layout"

export default function Home() {

  return (
  <Layout>

    <h1 className={styles.title}>
      Hello World!
    </h1>

  </Layout>
  )
}
