import Images from '@/constants/images.constants'

const Careers = () => {
  return (
    <main className='min-h-screen relative'>
        <section className="h-[70vh] w-full object-cover" style={{backgroundImage:`url(${Images.heroSection})`,backgroundAttachment:'fixed',backgroundSize:'cover',backgroundRepeat:'no-repeat'}}>
          
        </section>

         <section className="px-[3vw] md:px-[4vw] py-[4vh]">
            <div className="p-9">
                <p className='bg-[#AB5BDC] text-white py-3 px-10 mb-[15vh] w-fit rounded-full'>See open positions</p>
                <h1 className='text-3xl mb-8'>Join our talent and passionate team.</h1>
                <p className='text-muted-foreground'>We craft joy for a living, with a team of highly skilled and passionate people who want to spread the delight of games. With tailor-made gaming experiences, and entertainment to last for a lifetime, we bring smiles to millions of our players, and the people behind our games, every day.</p>
            </div>
          </section>

        <section className="px-[3vw] md:px-[4vw] py-[4vh] mt-[3vh]">
            <div className="p-9">
                <h1 className='text-3xl'>Gudu is built on:</h1>
                <div className="my-[17vh] min-h-[50vh]">
                <div className="w-full md:float-end md:w-[48%]">
                  <img src={Images.ladyPlayingGame} className="h-[40vh] object-cover min-w-[23rem] mx-auto max-h-[48rem]" alt="" />
                </div>
                <div className="w-full p-3 my-10 md:w-[48%] md:my-0">
                <h1 className="text-3xl px-2 md:text-5xl font-[500] border-b-8 border-b-[#3C49C0] pb-3">Passion and Ambition</h1>
                  <p className="leading-[2.3rem] my-6 text-muted-foreground">Every Rovian brings a passion for their craft to everything they do. We’re comfortable with our skills and not afraid to experiment, try new things, take chances, and express ourselves. Bringing passion to life requires ambition and the fearlessness to take charge and make a statement.</p>
                </div>
              </div>


            <div className="flex flex-wrap gap-4 my-[17vh] min-h-[50vh]">
                <div className="w-full md:w-[48%]">
                    <img src={Images.guyPlayingGame} className="h-[40vh] object-cover min-w-[23rem] mx-auto max-h-[48rem]" alt="" />
                </div>
                <div className="w-full p-3 my-10 md:w-[48%] md:my-0">
                  <h1 className="text-3xl px-2 md:text-5xl font-[500] border-b-8 border-b-[#3C49C0] pb-2">Diversity & Innovation</h1>
                  <p className="leading-[2rem] my-5 text-muted-foreground">Every Rovian brings a passion for their craft to everything they do. We’re comfortable with our skills and not afraid to experiment, try new things, take chances, and express ourselves. Bringing passion to life requires ambition and the fearlessness to take charge and make a statement.</p>
                </div>
              </div>
            
            
            <div className="my-[17vh] min-h-[50vh]">
                <div className="w-full md:float-end md:w-[48%]">
                    <img src={Images.ladyPlayingGame} className="h-[40vh] object-cover min-w-[23rem] mx-auto max-h-[48rem]" alt="" />
                </div>
                <div className="w-full p-3 my-10 md:w-[48%] md:my-0">
                  <h1 className="text-3xl px-2 md:text-5xl font-[500] border-b-8 border-b-[#3C49C0] pb-2">Independence & Responsibility</h1>
                  <p className="leading-[2rem] my-5 text-muted-foreground">Every Rovian brings a passion for their craft to everything they do. We’re comfortable with our skills and not afraid to experiment, try new things, take chances, and express ourselves. Bringing passion to life requires ambition and the fearlessness to take charge and make a statement.</p>
                </div>
              </div>
            </div>
        </section>
    </main>
  )
}

export default Careers