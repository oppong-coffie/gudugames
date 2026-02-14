import Images from '@/constants/images.constants'
import { GuduContext } from '@/stores/gudu-team-context'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

const TeamMember = () => {
    const {teams} = useContext(GuduContext)
  return (
    <main className='min-h-screen relative'>
        <section className="h-[70vh] w-full object-cover" style={{backgroundImage:`url(${Images.heroSection})`,backgroundAttachment:'fixed',backgroundSize:'cover',backgroundRepeat:'no-repeat'}}>
          
        </section>

        <section className="px-[3vw] md:px-[4vw] py-[4vh]">
           <div className="p-9">
             <h3 className='text-3xl'>Meet the Gudu Team</h3>

             <h3 className='mt-[18vh] text-2xl mb-3'>Meet the Gudu's</h3>
             <p className='text-muted-foreground text-sm'>Get to know the heart and soul of Gudu - the people behind our games.</p>

             <div className="flex flex-wrap gap-5 mt-[5vh]">
              {
                teams.map(items=>{
                  return(
                    <div className="w-[29.33%] min-w-[14rem] mx-auto">
                        <Link to={`/teams-details/${items.name}`}>
                          <div className="w-full h-[30vh] bg-center bg-no-repeat" style={{background:`url(${items.profile})`,backgroundPosition:'50% 20%',backgroundSize:'80%',backgroundRepeat:'no-repeat'}}></div>
                          <h4 className="text-sm text-[#DECD00] my-1">{items.cardTitle}</h4>
                          <h1 className="text-2xl font-500 my-1">{items.name}</h1>
                          <h3 className="text-muted-foreground my-3">{items.role}</h3>
                        </Link>
                    </div>
                  )
                })
              }
            </div>
           </div>
        </section>
    </main>
  )
}

export default TeamMember