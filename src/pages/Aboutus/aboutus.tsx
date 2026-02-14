import Images from "@/constants/images.constants"
import { GuduContext } from "@/stores/gudu-team-context"
import { Handshake, Rocket, Smile } from "lucide-react"
import { useContext } from "react"
import { Link } from "react-router-dom"

const Aboutus = () => {
   const {teams} = useContext(GuduContext)
   const showsample = teams
  return (
    <main className='min-h-screen relative'>
        <section className="h-[70vh] w-full object-cover" style={{backgroundImage:`url(${Images.heroSection})`,backgroundAttachment:'fixed',backgroundSize:'cover',backgroundRepeat:'no-repeat'}}>
          
        </section>


        {/* <section className="px-[3vw] md:px-[4vw] py-[4vh]">
          <div className="p-9 text-center">
            <h1 className="text-3xl px-9 md:text-5xl font-[500] border-b-8 border-b-[#3C49C0] pb-3 w-fit mx-auto">We are Gudu</h1>
            <p className="pt-5 my-6 text-muted-foreground">Gudu studios is a video game company based in Ghana, West Africa. The company was founded to create games that reward, entertain, educate and deliver high-value experiences to everyone. At Gudu, our goal is to bring happiness to everyone with games.</p>
          </div>
        </section> */}


        <section className="px-[3vw] md:px-[6vw] ">
            <div className="my-[17vh] h-[48rem]">
                <div className="w-full md:float-end md:w-[48%]">
                  <img src={Images.ladyPlayingGame} className="h-full min-w-[23rem] mx-auto max-h-[48rem]" alt="" />
                </div>
                <div className="w-full p-3 my-10 md:w-[48%] md:my-0">
                <h1 className="text-3xl px-2 md:text-5xl font-[500] border-b-8 border-b-[#3C49C0] pb-3">We are Gudu</h1>
                  <p className="leading-[2.3rem] my-6 text-muted-foreground">Gudu Studios was founded in August 2019 with a clear vision: to create engaging, reward-based games that empower players to have fun while winning tangible rewards. From the very beginning, we were driven by the belief that gaming should be more than just entertainment—it should create value for players and bring joy to their lives. Starting with a small but passionate team, we focused on blending innovation, creativity, and accessibility to design games that cater to diverse audiences. Over time, Gudu has evolved into a platform that transforms gaming into a rewarding experience, making every moment of play meaningful.</p>
                </div>
              </div>


            <div className="flex flex-wrap gap-4 my-[17vh] h-[48rem]">
                <div className="w-full md:w-[48%]">
                    <img src={Images.ladyPlayingGame} className="min-w-[23rem] mx-auto max-h-[48rem]" alt="" />
                </div>
                <div className="w-full p-3 my-10 md:w-[48%] md:my-0">
                  <h1 className="text-3xl px-2 md:text-5xl font-[500] border-b-8 border-b-[#3C49C0] pb-2">Where We Are Now</h1>
                  <p className="leading-[2rem] my-5 text-muted-foreground">Since our inception, Gudu Studios has made remarkable strides in the gaming industry. To date, we have developed three unique games:
                    <br />
                    <br />
                    <ul className="list-decimal pl-5">
                        <li>Gudu Run – An endless runner game where players collect coins, avoid obstacles, and redeem rewards for real-world products.</li>
                        <li>Gudu FX – An endless driving game that combines fun and strategy, with coins earned during gameplay exchangeable for real-world rewards.</li>
                        <li>Gudu Warfront – A thrilling endless shooting game where players battle enemies, collect coins, and turn their victories into tangible prizes.</li>
                    </ul>
                    <br />
                    Our players use the coins collected during gameplay to earn tokens, which they can redeem for products and services at our partner centers, creating a seamless bridge between virtual gaming and real-world benefits.

                  </p>
                </div>
              </div>
            
            
            <div className="my-[17vh] h-[48rem]">
                <div className="w-full md:float-end md:w-[48%]">
                    <img src={Images.ladyPlayingGame} className="min-w-[23rem] mx-auto max-h-[48rem]" alt="" />
                </div>
                <div className="w-full p-3 my-10 md:w-[48%] md:my-0">
                  <h1 className="text-3xl px-2 md:text-5xl font-[500] border-b-8 border-b-[#3C49C0] pb-2">Where We Are Going</h1>
                  <p className="leading-[2rem] my-5 text-muted-foreground">At Gudu Studios, the journey has just begun. We envision a future where gaming becomes a universal platform for empowerment, creativity, and opportunity. Our goals include:
                    <br />
                    <br />
                    <ul className="list-disc pl-5">
                        <li>Expanding Our Games: Launching new titles that push the boundaries of innovation and storytelling while maintaining our reward-based structure.</li>
                        <li>Building a Thriving Gaming Ecosystem: Partnering with more businesses, communities, and organizations to increase the value of the rewards we offer.</li>
                        <li>Empowering African Gamers: Establishing Africa as a global hub for gaming innovation and creating opportunities for local talent to thrive in the industry.</li>
                        <li>Reaching Every Player: Making our games accessible to users across all devices and locations, ensuring everyone can play and win, no matter where they are.</li>
                    </ul>
                  </p>
                </div>
              </div>
        </section>


        <section className="px-[3vw] md:px-[6vw] my-[4vh]">
        <div className="p-9">
            <h1 className="text-3xl md:text-5xl font-[500] border-b-8 border-b-[#3C49C0] pb-3 w-fit">Our Mission</h1>
            {/* <p className="py-6 text-[#3C49C0] text-2xl">“Our mission is to democratize Games across Africa”.</p> */}
            <p className=" py-6 text-muted-foreground">Our mission is to make gaming rewarding, accessible, and empowering for everyone. We are committed to delivering reward-based games that bring fun and value directly to people’s doorsteps, transforming gaming into a tool for opportunity and enjoyment. By bridging the gap between virtual entertainment and real-world benefits, we aim to redefine what gaming can achieve.</p>
          </div>
        </section>
               
        
        <section className="px-[3vw] md:px-[6vw]">
        <div className="px-9 py-4">
            <h1 className="text-3xl md:text-5xl font-[500] border-b-8 border-b-[#3C49C0] pb-3 w-fit mb-10">Our Values</h1>
            <div className="p-6 flex flex-wrap bg-[#C2C2C224]">
                <div className="valueCard text-center w-full md:w-1/3 px-8">
                  <div className="p-4 bg-[#BFD2FE] w-fit rounded-full mx-auto">
                  <Smile size={40}/>
                  </div>
                  <h1 className="text-3xl font-[500] my-3">Happiness</h1>
                  <p className="text-muted-foreground">Bringing smiles to the faces of many by playing games they love.</p>
                </div>
                <div className="valueCard text-center w-full md:w-1/3 px-8">
                  <div className="p-4 bg-[#D2F6CF] w-fit rounded-full mx-auto">
                  <Handshake size={40} color="#4DC316"/>
                  </div>
                  <h1 className="text-3xl font-[500] my-3">Togetherness</h1>
                  <p className="text-muted-foreground">Enabling people to spend time together by playing games they love.</p>
                </div>
                <div className="valueCard text-center w-full md:w-1/3 px-8">
                  <div className="p-4 bg-[#FFD0E7] w-fit rounded-full mx-auto">
                  <Rocket size={40} color="#BE1B5A"/>
                  </div>
                  <h1 className="text-3xl font-[500] my-3">Experience</h1>
                  <p className="text-muted-foreground">Delivering exciting memories for everyone by playing games they love.</p>
                </div>
            </div>
          </div>
        </section>

        <section className="px-[3vw] md:px-[6vw]">
          <div className="p-9">
            <h1 className="text-3xl w-full text-center md:text-5xl font-[500] mb-4">Meet the Gudu Team. </h1>
            <p className="text-muted-foreground text-center text-sm">Get to know the heart and soul of Gudu - the people behind our games.</p>

            <div className="flex flex-wrap gap-5 mt-[11vh]">
              {
                showsample.map(items=>{
                  return(
                    <div className="w-[29.33%] min-w-[14rem] mx-auto">
                        <Link to={`/teams-details/${items.name}`}>
                        <div className="w-full h-[30vh] bg-center bg-no-repeat" style={{background:`url(${items.profile})`,backgroundPosition:'50% 20%',backgroundSize:'80%',backgroundRepeat:'no-repeat'}}></div>
                        {/* <h4 className="text-sm text-[#DECD00] my-1">{items.cardTitle}</h4> */}
                        <h1 className="text-center text-2xl font-500 my-1">{items.name}</h1>
                        <h3 className="text-center text-muted-foreground my-3">{items.role}</h3>
                        </Link>
                    </div>
                  )
                })
              }
            </div>
            <hr className="mt-3"/>
            {/* <Link to={'/teams'} className="py-3 px-8 rounded-full text-[#DECD00] border-[2px] border-[#66666666]">View all</Link> */}
          </div>
        </section>
    </main>
  )
}

export default Aboutus