import Images from '@/constants/images.constants'

const Vision = () => {
  return (
    <main className='min-h-screen relative'>
        <section className="h-[70vh] w-full object-cover" style={{backgroundImage:`url(${Images.heroSection})`,backgroundAttachment:'fixed',backgroundSize:'cover',backgroundRepeat:'no-repeat'}}>
          
        </section>

         <section className="px-[3vw] md:px-[4vw] py-[4vh]">
          <div className="p-9 text-center">
            <h1 className="text-3xl px-9 md:text-5xl font-[500] border-b-8 border-b-[#3C49C0] pb-3 w-fit mx-auto">We Craft Games</h1>
            <p className="pt-5 my-6 text-muted-foreground">At Gudu Studios, our vision is to become the leading platform for reward-based gaming worldwide. We aspire to create a global gaming community where every player is inspired to dream big, connect meaningfully, and be rewarded for their time and skill. By fostering creativity, collaboration, and accessibility, we aim to put Africa at the forefront of the global gaming revolution.</p>
          </div>
        </section>


        <section className="px-[3vw] md:px-[6vw] ">
            <div className="my-[17vh] min-h-[80vh]">
                <div className="w-full md:float-end md:w-[48%]">
                  <img src={Images.ladyPlayingGame} className="h-[79vh] min-w-[23rem] mx-auto max-h-[48rem]" alt="" />
                </div>
                <div className="w-full p-3 my-10 md:w-[48%] md:my-0">
                <h1 className="text-3xl px-2 md:text-5xl font-[500] border-b-8 border-b-[#3C49C0] pb-3">Stage 1 - Games Everyone Loves</h1>
                  <p className="leading-[2.3rem] my-6 text-muted-foreground">Create reward-based games that are collaborative, competitive, adventurous and entertaining that everyone can easily play from anywhere.</p>
                </div>
              </div>


            <div className="flex flex-wrap gap-4 my-[17vh] min-h-[80vh]">
                <div className="w-full md:w-[48%]">
                    <img src={Images.guyPlayingGame} className="h-[79vh] min-w-[23rem] mx-auto max-h-[48rem]" alt="" />
                </div>
                <div className="w-full p-3 my-10 md:w-[48%] md:my-0">
                  <h1 className="text-3xl px-2 md:text-5xl font-[500] border-b-8 border-b-[#3C49C0] pb-2">Stage 2 - Digital Personification</h1>
                  <p className="leading-[2rem] my-5 text-muted-foreground">Scale from reward-based games to creating a digital personification platform where player immense themselves in our games to get a real game experience.
                  </p>
                </div>
              </div>
            
            
            <div className="my-[17vh] min-h-[80vh]">
                <div className="w-full md:float-end md:w-[48%]">
                    <img src={Images.ladyPlayingGame} className="h-[79vh] min-w-[23rem] mx-auto max-h-[48rem]" alt="" />
                </div>
                <div className="w-full p-3 my-10 md:w-[48%] md:my-0">
                  <h1 className="text-3xl px-2 md:text-5xl font-[500] border-b-8 border-b-[#3C49C0] pb-2">Stage 3 - Alternate  Universe</h1>
                  <p className="leading-[2rem] my-5 text-muted-foreground">Leverage on our digital personification platform to creating a digital universal platform where players live, work, trade, socialize, engage with their digital personalities.
                  </p>
                </div>
              </div>
        </section>

        <section className="px-[3vw] md:px-[4vw] py-[4vh]">
            <div className="p-9">
                <h1 className="text-3xl md:text-5xl font-[500] border-b-8 border-b-[#3C49C0] pb-3 w-fit">Why Gudu Studios?</h1>
                <p className="pt-5">At the heart of Gudu is a deep commitment to innovation, community, and growth. Whether you're a player, a partner, or a supporter, you’re part of a movement that is reshaping the gaming industry and creating endless possibilities for everyone involved.</p>
            </div>
        </section>

    </main>
  )
}

export default Vision