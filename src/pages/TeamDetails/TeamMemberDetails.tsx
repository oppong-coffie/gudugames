import { GuduContext } from '@/stores/gudu-team-context'
import { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const TeamMemberDetails = () => {
    const {teams} = useContext(GuduContext)
    const routerPath = useParams()
    const [memberPos,setmemberPos]=useState(0)
    useEffect(()=>{
        const selectedInd = teams.findIndex(item=>item.name==routerPath.teamName)
        setmemberPos(selectedInd)
    },[routerPath.teamName,teams])
  return (
    <main className='min-h-screen relative'>
      <section
        className="h-[80vh] w-full bg-cover bg-no-repeat bg-fixed bg-center flex"
        style={{
            backgroundImage: `linear-gradient(to bottom right, #000000a6, #000000b3), url('${teams[memberPos]?.profile_cover}')`,
            backgroundPositionX:"50%",
            backgroundPositionY:"10%"
        }}
        >
          <div className="flex gap-5 mt-auto mb-10 ml-11">
            <img src={teams[memberPos]?.['profile']} className='h-16 w-16 rounded-full object-cover' alt="" />
            <div className="">
                <h3 className='text-[#F8E930] font-[500]'>{teams[memberPos]?.['cardTitle']}</h3>
                <p className='text-white font-[500]'><span>{teams[memberPos]?.['name']}</span> <span>{teams[memberPos]?.['role']}</span></p>
            </div>
          </div>
        </section>

        <section className="px-[3vw] md:px-[6vw]">
          <div className="p-9 flex items-center justify-between">
            <h1 className="text-2xl md:text-4xl font-[500] w-fit">About {teams[memberPos]?.['name']} </h1>
            <div className="flex items-center gap-3">
                {
                    teams[memberPos]?.['socials']?.map(socials=>{
                        return (
                            <Link key={socials.name} to={socials.url}>{socials.icon}</Link>
                        )
                    })
                }
            </div>
            </div>

            <div className="p-9">
                <p className='text-muted-foreground'>{teams[memberPos]?.about}</p>
            </div>
        </section>


        <section className="px-[3vw] md:px-[4vw] py-[4vh]">
                   <div className="p-9">        
                     <h3 className='mt-[18vh] text-2xl mb-3'>Meet the Gudu's</h3>
                     <p className='text-muted-foreground text-sm'>Get to know the heart and soul of Gudu - the people behind our games.</p>
        
                     <div className="flex flex-wrap gap-5 mt-[5vh]">
                      <div className="w-[29.33%] min-w-[14rem] mx-auto">
                                <Link to={`/teams-details/${teams[memberPos==0?teams.length-1:memberPos-1]?.name}`}>
                                <div className="w-full h-[30vh] bg-center bg-no-repeat" style={{backgroundImage:`url(${teams[memberPos==0?teams.length-1:memberPos-1]?.profile})`,backgroundPosition:'50% 20%',backgroundSize:'80%',backgroundRepeat:'no-repeat'}}></div>
                                <h4 className="text-sm text-[#DECD00] my-1">{teams[memberPos==0?teams.length-1:memberPos-1]?.cardTitle}</h4>
                                <h1 className="text-2xl font-500 my-1">{teams[memberPos==0?teams.length-1:memberPos-1]?.name}</h1>
                                <h3 className="text-muted-foreground my-3">{teams[memberPos==0?teams.length-1:memberPos-1]?.role}</h3>
                                </Link>
                            </div>
                             <div className="w-[29.33%] min-w-[14rem] mx-auto">
                                <Link to={`/teams-details/${teams[memberPos>=teams.length-1?0:memberPos+1]?.name}`}>
                                <div className="w-full h-[30vh] bg-center bg-no-repeat" style={{backgroundImage:`url(${teams[memberPos>=teams.length-1?0:memberPos+1]?.profile})`,backgroundPosition:'50% 20%',backgroundSize:'80%',backgroundRepeat:'no-repeat'}}></div>
                                <h4 className="text-sm text-[#DECD00] my-1">{teams[memberPos>=teams.length-1?0:memberPos+1]?.cardTitle}</h4>
                                <h1 className="text-2xl font-500 my-1">{teams[memberPos>=teams.length-1?0:memberPos+1]?.name}</h1>
                                <h3 className="text-muted-foreground my-3">{teams[memberPos>=teams.length-1?0:memberPos+1]?.role}</h3>
                                </Link>
                            </div>
                             <div className="w-[29.33%] min-w-[14rem] mx-auto">
                                <Link to={`/teams-details/${teams[memberPos]?.name}`}>
                                <div className="w-full h-[30vh] bg-center bg-no-repeat" style={{backgroundImage:`url(${teams[memberPos]?.profile})`,backgroundPosition:'50% 20%',backgroundSize:'80%',backgroundRepeat:'no-repeat'}}></div>
                                <h4 className="text-sm text-[#DECD00] my-1">{teams[memberPos]?.cardTitle}</h4>
                                <h1 className="text-2xl font-500 my-1">{teams[memberPos]?.name}</h1>
                                <h3 className="text-muted-foreground my-3">{teams[memberPos]?.role}</h3>
                                </Link>
                            </div>
                    </div>
                   </div>
                </section>
    </main>
  )
}

export default TeamMemberDetails