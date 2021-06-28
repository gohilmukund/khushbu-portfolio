import React from "react"
import ProjectCard from "../components/project-card"
import SocialCard from "../components/social-card"

const components = {
  // eslint-disable-next-line react/display-name
  SocialCard: ({ link, title, bg, children }) => (
    <SocialCard link={link} title={title} bg={bg}>
      {children}
    </SocialCard>
  ),
  // eslint-disable-next-line react/display-name
  ProjectCard: ({ link, title, bg, children }) => (
    <ProjectCard link={link} title={title} bg={bg}>
      {children}
    </ProjectCard>
  ),  
}

export default components
