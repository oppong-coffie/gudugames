import Images from '@/constants/images.constants'

const Partners = () => {
    // const {partners} = useContext(PartnerContext)
  return (
     <main className='min-h-screen relative'>
        <section className="h-[70vh] w-full object-cover" style={{backgroundImage:`url(${Images.heroSection})`,backgroundAttachment:'fixed',backgroundSize:'cover',backgroundRepeat:'no-repeat'}}>
          
        </section>

        <section className="px-[3vw] md:px-[4vw] py-[2vh] mb-[1vh]">
          <div className="p-9">
            <h1 className="text-2xl text-muted-foreground  pb-3 w-fit mx-auto">At <span className='text-[#9A4290] text-2xl'> Gudu Studios</span>, our partnerships are integral to delivering an exceptional gaming experience and ensuring that our players enjoy meaningful, real-world rewards. By collaborating with a diverse network of partners, we bridge the gap between the digital and physical worlds, enriching the lives of our players and amplifying the reach of our partner organizations.</h1>
             <h1 className="text-3xl md:text-4xl font-[500] mt-[22vh] border-b-8 border-b-[#3C49C0] pb-3 mb-3">Reward Redemption Partner</h1>
              <p className="pt-5 text-muted-foreground "><span className='text-neutral-800 font-[600]'>At Gudu Studios,</span> we are always seeking new partnerships to amplify our mission of creating fun, rewarding, and impactful gaming experiences. Together, with our partners, we are redefining what gaming can achieve, both in the virtual world and beyond.</p>
          </div>
        </section>


        <section className="px-[3vw] md:px-[4vw] py-[2vh] mb-[12vh]">
            <div className="p-3 flex flex-col gap-5">
                {/* {
                    partners.map(item=>{
                        return(
                            <div className="w-full md:w-[48%] mx-auto shadow-md my-4 p-3 rounded-lg">
                                <Link to={`/partner-details/${item.name}`}>
                                <div className="logo h-[40vh] flex items-center justify-center">
                                    <img src={item.logo} alt="" />
                                </div>
                                <h2 className='font-bold text-[1.4rem] mb-2'>{item.name}</h2>
                                <p className='text-muted-foreground text-sm'>{item.location}</p>
                                </Link>
                            </div>
                        )
                    })
                } */}
                <div className="w-full md:w-[48%] mx-auto shadow-md my-4 p-2 rounded-lg">
                    <div className="logo flex items-center justify-center">
                        <img src={Images.melcom} className='h-[40vh]' alt="" />
                    </div>
                    {/* <h2 className='font-bold text-[1.4rem] mb-2'>Melcom</h2> */}
                    {/* <p className='text-muted-foreground text-sm'>{item.location}</p> */}
                </div>
                <div className="w-full md:w-[48%] h-fit my-auto mx-auto p-3 rounded-lg">
                    <p className='text-center'>Gudu has partnered with Melcom, Ghana’s largest retail chain, as the official reward partner for the Gudu platform. Through this exciting partnership, Gudu users can redeem items using their tokens—earned through gameplay—at any Melcom store nationwide.

With a shared focus on customer satisfaction and everyday value, Gudu and Melcom are bridging the gap between digital entertainment and real-world rewards, making every Gudu play more meaningful.</p>
                    {/* <p className='text-muted-foreground text-sm'>{item.location}</p> */}
                </div>
            </div>
        </section>
    </main>
  )
}

export default Partners