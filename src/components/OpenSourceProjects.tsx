import OpenSourceProjectList from '../data/open-source'
import Title from './shared/title'

type Project = {
  name: string,
  description: string,
  tech_stack: string,
  url: string,
  stars: number,
  contributors: number,
  forks: number,
}

const projectFormatter = (project: Project) => {
  return (
    <a href={project.url} className='w-2/6 my-2 px-1'>
      <div className='hover:bg-rose-400 hover:text-white p-4'>
        <h2 className='font-staatliches text-lg'>{project.name}</h2>
        <p className='text-xs h-28'>{project.description}</p>
      </div>
    </a>
    
  )
}

const OpenSourceProjects = () => {
  return (
    <div className='w-full'>
      <Title icon_class='fas fa-terminal' title='Open Source Contributions' />
      <div className='flex flex-wrap my-2'>
        {OpenSourceProjectList.map(projectFormatter)}
      </div>
    </div>
  )
}

export default OpenSourceProjects
