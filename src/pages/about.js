import React from "react"
import { envVars } from "../../env.js"
import Layout from "../components/layout"
import SEO from "../components/seo"

const About = ({ location }) => {

  return (
    <Layout location={location} title={"About"}>
      <SEO title="About" />
      <p>Hi!</p>
      <br/>
      <p>I'm {envVars.AUTHOR_NAME}. I'm currently a student studying {envVars.MAJOR_NAME} at {envVars.SCHOOL_NAME} in {envVars.CITY_NAME}. And this is my blog. I will write about whatever the fuck I want.</p>
      <br/>
    </Layout>
  )
}

export default About
