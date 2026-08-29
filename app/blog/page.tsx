import React from 'react'
import Container from "@/components/container";

const Blog = () => {
  return (
    <div className="flex justify-center">
      <Container>
        <div className="flex">
          <div>
            <p className="text-5xl font-bold pb-10">
              Things I <span className="text-primary3">Write</span>
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Blog
