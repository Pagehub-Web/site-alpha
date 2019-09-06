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
    <div className="sections">
      {data.allMarkdownRemark.edges.map(edge => 
        edge.node.frontmatter.sections.map(section => {
          if (section.type === "about")
            return (
              <div className="about-section">
                <h2>{section.title}</h2>
                <div className="description" dangerouslySetInnerHTML={{ __html: section.description}}></div>
                <div className="paragraph">{section.paragraph}</div>
              </div>
            )

          if (section.type === "paragraph")
            return (
              <div className="paragrpah-section">
                <h2>{section.title}</h2>
                <div className="paragraph">{section.paragraph}</div>
              </div>
            )
          else return <>?</>
        })
      )}
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export const query = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            sections {
              description
              image
              title
              type
              paragraph
            }
          }
        }
      }
    }
  }
`

export default IndexPage
