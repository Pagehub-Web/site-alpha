import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div
      className="content"
      dangerouslySetInnerHTML={{
        __html:
          data.allMarkdownRemark.edges[0].node.html ||
          data.allMarkdownRemark.edges[0].node.excerpt,
      }}
    ></div>

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export const query = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          html
        }
      }
    }
  }
`

export default IndexPage
