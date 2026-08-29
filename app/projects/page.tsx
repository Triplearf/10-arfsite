import React from 'react'
import Container from "@/components/container";

const Projects = () => {
  return (
    <div className="flex justify-center">
      <Container>
        <div className="flex flex-col">
          <p className="text-5xl text-center font-bold pb-10">
            Stuff I <span className="text-primary2">Work</span> On
          </p>
          <div className="grid grid-cols-4 gap-3">
            <ProjectSlide></ProjectSlide>
            <ProjectSlide></ProjectSlide>
            <ProjectSlide></ProjectSlide>
            <ProjectSlide></ProjectSlide>
            <ProjectSlide></ProjectSlide>
            <ProjectSlide></ProjectSlide>
          </div>
        </div>
      </Container>
    </div>
  )
}

interface ProjectSlideProps {
  name?: string,
  description?: string,
}


function ProjectSlide( {name, description} : ProjectSlideProps ) {
	return(
		<div className="w-fit rounded-md border bg-[#2C251E]">
			<h1 className="text-3xl text-center">
        Project 1
      </h1>
		</div>
	)
}

export default Projects