import getRepositories from "@/utils/getRepos"
import Repo from "@/utils/getRepos"
import Container from "@/components/container";
import ProjectSlide from "@/components/projectSlide"
import NoImg from "@/public/no_img.jpg"
import ArfSite from "@/public/projects/arfsite.jpg"

async function ProjectGrid() {
  const username = "Triplearf"

  try {
    const repos = await getRepositories(username)

    return (
      <div className='w-[65vw] grid grid-cols-3 gap-y-5 gap-x-5'>
        {repos.map((repo) => (
          <ProjectSlide key={repo.id} link={repo.html_url} img={NoImg} title={repo.name} desc={repo.description} tags={['python', 'nextjs']}></ProjectSlide>
        ))}
      </div>
    )
  } catch (error) {
    return <div style={{ padding: '2rem', color: 'red' }}>Error loading repositories.</div>;
  }
}

const Projects = () => {
  return (
    <div className='flex flex-col justify-center gap-y-5'>
    <div className="flex flex-col justify-center items-center">
      <Container>
        <div className="flex flex-col">
          <p className="text-5xl text-center font-bold">
            Stuff I <span className="text-primary2">Work</span> On
          </p>
        </div>
      </Container>
    </div>
    <div className='w-[65vw] grid grid-cols-3 gap-y-5 gap-x-5'>
      <ProjectGrid></ProjectGrid>
    </div>
    </div>
  )
}

export default Projects