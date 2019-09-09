import React, { useEffect, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"

import { slugify } from "../utils/text-helpers"

const Navbar = props => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              sections {
                title
              }
            }
          }
        }
      }
    }
  `)

  const sections = data.allMarkdownRemark.edges[0].node.frontmatter.sections

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <a href="#home" className="navbar-brand">
        Company Name
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarContent"
        aria-controls="navbarContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarContent">
        <ul
          className="navbar-nav ml-auto"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <li className="nav-item active">
            <a href="#home" className="nav-link">
              Home
            </a>
          </li>
          {sections.map((section, i) => (
            <li key={i} className="nav-item">
              <a href={`#${slugify(section.title)}`} className="nav-link">
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
