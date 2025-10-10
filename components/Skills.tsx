import React from 'react'
import { InfiniteMovingCards } from '../components/ui/InfiniteMovingCards'

interface skillType{
  path: string,
  skill: string,
}

const Framework_Library: skillType[] = [
    {
      path: '/next.svg',
      skill: 'Next JS',
    },
    {
      path: '/React.svg',
      skill: 'React JS',
    },
    {
      path: '/tail.svg',
      skill: 'Tailwind',
    },
    {
      path: '/bootstrap.svg',
      skill: 'Bootstrap',
    },
    {
      path: '/expressjs.svg',
      skill: 'Express Js',
    },
    {
      path: '/nodejs.svg',
      skill: 'Node Js',
    },
  ];

  const languages: skillType[] =[
    {
      path: '/ts.svg',
      skill: 'TypeScript',
    },
    {
      path: '/Js.svg',
      skill: 'JavaScript',
    },
    {
      path: '/css.svg',
      skill: 'CSS',
    },
    {
      path: '/html.svg',
      skill: 'HTML',
    },
    {
      path:'/c.svg',
      skill: "C"
    },
    {
      path:'/c++.svg',
      skill: "C++"
    },
    {
      path:'/java.svg',
      skill: "JAVA"
    },
    {
      path:'/python.svg',
      skill: "PYTHON"
    },
    {
      path:'/sql.svg',
      skill: "SQL"
    },
  ]

  const toolsAndDatabases: skillType[]=[
    {
      path:'/git.svg',
      skill: "Git"
    },
    {
      path:'/github.svg',
      skill: "GitHub"
    },
    {
      path:'/postman.svg',
      skill: "Postman"
    },
    {
      path:'/mongo.svg',
      skill: "Mongo DB"
    },
    {
      path:'/sql.svg',
      skill: "My SQL"
    },
  ]

const Skills = () => {
  return (
    <div className='py-20' id='skills'>
        <h1 className='heading flex justify-center items-center lg:text-5xl thick'>
            My 
            <span className='text-purple-300'>&nbsp;Tech Skills</span>
        </h1>
        <div className='flex flex-col items-center  '>
            <div className='w-full mt-10' >
                <InfiniteMovingCards
                    items={Framework_Library}
                    direction="right"
                    speed="fast"
                />
            </div>
        </div>
        <div className='flex flex-col items-center '>
            <div className='w-full'>
                <InfiniteMovingCards
                    items={languages}
                    direction="left"
                    speed="fast"
                />
            </div>
        </div>
        <div className='flex flex-col items-center '>
            <div className='w-full'>
                <InfiniteMovingCards
                    items={toolsAndDatabases}
                    direction="right"
                    speed="fast"
                />
            </div>
        </div>
    </div>
  )
}

export default Skills