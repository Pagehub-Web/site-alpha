import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import ContactForm from "../components/ContactForm"

import { slugify } from "../utils/text-helpers"

const titleWrapperStyle = {
  textAlign: "center",
}

const titleStyle = {
  padding: "0 10px",
  borderBottom: "1px solid black",
}

const AboutSection = props => (
  <div className="about-section" id={`${slugify(props.section.title)}`}>
    <h2 style={titleWrapperStyle}>
      <span stlye={{ titleStyle }}>{props.section.title}</span>
    </h2>
    <div
      className="image-container"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <img
        src={`${props.section.image}`}
        alt=""
        style={{ alignSelf: "center" }}
      />
    </div>
    <div
      className="description"
      dangerouslySetInnerHTML={{ __html: props.section.description }}
    ></div>
    <div className="paragraph">{props.section.paragraph}</div>
  </div>
)

const ParagraphSection = props => (
  <div
    className="paragrpah-section"
    id={`${slugify(props.section.title)}`}
  >
    <h2 style={titleWrapperStyle}>
      <span stlye={{ titleStyle }}>{props.section.title}</span>
    </h2>
    <div className="paragraph">{props.section.paragraph}</div>
  </div>
)

const Sections = ({ data }) => (
  <div className="sections">
    {data.allMarkdownRemark.edges.map(edge =>
      edge.node.frontmatter.sections.map((section, i) => {
        if (section.type === "about")
          return (
            <React.Fragment key={i}>
              <AboutSection section={section} />
            </React.Fragment>
          )

        if (section.type === "paragraph")
          return (
            <React.Fragment key={i}>
              <ParagraphSection section={section} />
            </React.Fragment>
          )
        else return <React.Fragment key={i}>?</React.Fragment>
      })
    )}
  </div>
)

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Sections data={data} />
    <ContactForm />
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
