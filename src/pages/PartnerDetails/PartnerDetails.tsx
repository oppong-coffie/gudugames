import { PartnerContext } from '@/stores/gudu-partner-context'
import { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const PartnerDetails = () => {
  const {partners} = useContext(PartnerContext)
    const routerPath = useParams()
    const [memberPos,setmemberPos]=useState(0)
    useEffect(()=>{
        const selectedInd = partners.findIndex(item=>item.name==routerPath.partner)
        setmemberPos(selectedInd)
    },[routerPath.partner,partners])
  return (
    <main className='min-h-screen relative'>
      <section
        className="h-[80vh] w-full bg-cover bg-no-repeat bg-fixed bg-center flex"
        style={{
            backgroundImage: `linear-gradient(to bottom right, #000000a6, #000000b3), url('${partners[memberPos]?.profile_cover}')`,
            backgroundPositionX:"50%",
            backgroundPositionY:"10%"
        }}
        >
          <div className="flex gap-5 mt-auto mb-10 ml-11">
            <img src={partners[memberPos]?.['logo']} className='h-16 w-16 rounded-full object-contain bg-white' alt="" />
            <div className="">
                <h3 className='text-[#F8E930] font-[500]'>{partners[memberPos]?.['name']}</h3>
                <p className='text-white font-[500]'><span>{partners[memberPos]?.['location']}</span></p>
            </div>
          </div>
        </section>

        <section className="px-[3vw] md:px-[6vw]">
          <div className="p-9 flex items-center justify-between">
            <h1 className="text-2xl md:text-4xl font-[500] w-fit">About {partners[memberPos]?.['name']} </h1>
            <div className="flex items-center gap-3">
                {
                    partners[memberPos]?.['socials']?.map(socials=>{
                        return (
                            <Link key={socials.name} to={socials.url}>{socials.icon}</Link>
                        )
                    })
                }
            </div>
            </div>

            <div className="p-9">
                <p className='text-muted-foreground'>{partners[memberPos]?.['desc']}</p>
            </div>
        </section>


        <section className="px-[3vw] md:px-[4vw] py-[4vh]">
                   <div className="p-9">                
                     <div className="flex flex-wrap gap-5 mt-[5vh]">
                      <div className="w-full md:w-[48%] mx-auto shadow-md my-4 p-3 rounded-lg">
                                <Link to={`/partners-details/${partners[memberPos==0?partners.length-1:memberPos-1]?.name}`}>
                               <div className="logo h-[40vh] flex items-center justify-center">
                                    <img src={partners[memberPos==0?partners.length-1:memberPos-1]?.logo} alt="" />
                                </div>
                                <h2 className='font-bold text-[1.4rem] mb-2'>{partners[memberPos==0?partners.length-1:memberPos-1]?.name}</h2>
                                <p className='text-muted-foreground text-sm'>{partners[memberPos==0?partners.length-1:memberPos-1]?.location}</p>
                                </Link>
                            </div>
                             <div className="w-full md:w-[48%] mx-auto shadow-md my-4 p-3 rounded-lg">
                                <Link to={`/partners-details/${partners[memberPos>=partners.length-1?0:memberPos+1]?.name}`}>
                                <div className="logo h-[40vh] flex items-center justify-center">
                                    <img src={partners[memberPos>=partners.length-1?0:memberPos+1]?.logo} alt="" />
                                </div>
                                <h2 className='font-bold text-[1.4rem] mb-2'>{partners[memberPos>=partners.length-1?0:memberPos+1]?.name}</h2>
                                <p className='text-muted-foreground text-sm'>{partners[memberPos>=partners.length-1?0:memberPos+1]?.location}</p>
                                </Link>
                            </div>
                    </div>
                   </div>
                </section>
    </main>
  )
}

export default PartnerDetails