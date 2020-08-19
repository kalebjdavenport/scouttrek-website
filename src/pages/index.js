import React from "react"
import { Link } from "gatsby"
import Screenshots from "../components/Screenshots"
import Colors from "../colors"

import AppLinks from "../components/appLinks"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./index.css"

const IndexPage = () => (
  <Layout>
    <SEO title="ScoutTrek Home" />
    <div
      style={{
        maxWidth: "110vw",
        position: "absolute",
        top: "-31vw",
        left: "-31vw",
        zIndex: -1,
      }}
      class="shadow-light"
    >
      <img
        style={{
          clipPath: "ellipse(45% 37% at 50% 50%)",
        }}
        src="https://res.cloudinary.com/wow-your-client/image/upload/e_brightness:12/v1597787330/ScoutTrek/Campout_ScoutTrek_Graphic.png"
        id="primary-image"
        alt="Camp site primary."
      />
    </div>

    <h1
      style={{
        marginTop: "12vw",
        fontWeight: "800",
        fontSize: "3.7rem",
      }}
    >
      Plan a{" "}
      <span style={{ color: Colors.darkGreen, fontWeight: "900" }}>
        Campout
      </span>
      <br />
      in <span style={{ color: Colors.darkGreen, fontWeight: "900" }}>
        3
      </span>{" "}
      minutes.
    </h1>
    <div id="screenshot-container">
      <div class="screenshot-width">
        <Screenshots />
      </div>
    </div>
    <div
      style={{
        fontSize: "0.8rem",
        marginTop: "10vw",
        marginRight: "10vw",
        maxWidth: "500px",
      }}
    >
      <p>
        If you are in a Scout Troop that has volunteered to give us feedback on
        our initial product, Thank you. Please use the download links below.
      </p>
    </div>
    <AppLinks />
  </Layout>
)

export default IndexPage
