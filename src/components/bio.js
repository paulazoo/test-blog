import React from "react"
import { envVars } from "../../env.js"

import "./bio.css"

const Bio = () => {
  return (
    <div className="bio">
      <p className="bio-text">
        I'm <strong>{envVars.AUTHOR_NAME}</strong> - and this is my blog.
        {` `}
      </p>
    </div>
  )
}

export default Bio
