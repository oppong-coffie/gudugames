import Images from "@/constants/images.constants"
import { NewsContext } from "@/stores/gudu-new-context"
import { useContext } from "react"
import { FaArrowRight } from "react-icons/fa"
import { Link, useNavigate } from "react-router-dom"

const Home = () => {
  const router = useNavigate()
   const {news} = useContext(NewsContext)
  return (
    <main className='min-h-screen relative'>
        <section className="h-[70vh] w-full object-cover" style={{backgroundImage:`url(${Images.heroSection})`,backgroundAttachment:'fixed',backgroundSize:'cover',backgroundRepeat:'no-repeat'}}>
          
        </section>

        <section className="px-[3vw] md:px-[6vw] py-[4vh]">
          <div className="p-9">
            <h1 className="text-3xl md:text-5xl font-[500] border-b-8 border-b-[#3C49C0] pb-3 w-fit">Welcome to GUDU</h1>
            <p className="pt-5">Africa's gaming market is rapidly growing, and Gudu Studios is committed to creating innovative, accessible games to position Africa as a global gaming leader.</p>
          </div>
          <div className="p-4 flex flex-wrap gap-3 justify-between">
            {
              news.map(newsItem=>(
                <Link to={`/gudu-news/${newsItem.newsId}`} className="w-[24rem] my-[5vh] min-w-[16rem] md:w-[29%] mx-[0.2rem] min-h-[60vh]">
              <div className="">
                  <div className="profile rounded-3xl h-[50vh]" style={{backgroundImage:`url(${newsItem.logo})`,backgroundPositionX:'50%',backgroundPositionY:'10%',backgroundSize:'cover',backgroundRepeat:'no-repeat'}}></div>
                  <h2 className='text my-3 text-left text-[#DECD00]'>{newsItem.name}</h2>
                  <h2 className='text-2xl my-2 text-left text-muted-foreground'>{newsItem.brief_desc}</h2>
              </div>
              </Link>
              ))
            } 
          
          {/* <div className="w-[24rem] my-[5vh] min-w-[16rem] md:w-[29%] mx-[0.2rem] min-h-[60vh]">
              <div className="profile rounded-3xl h-[50vh]" style={{backgroundImage:`url(${Images.guduRunRace})`,backgroundPositionX:'50%',backgroundPositionY:'50%',backgroundSize:'cover',backgroundRepeat:'no-repeat'}}></div>
              <h2 className='text my-3 text-left text-[#DECD00]'>Company Announcements</h2>
              <h2 className='text-2xl my-2 text-left text-muted-foreground'>Gudu Teams Up with Lerti Games for a Cross- Platform Crossover</h2>
          </div>
          <div className="w-[24rem] my-[5vh] min-w-[16rem] md:w-[29%] mx-[0.2rem] min-h-[60vh]">
              <div className="profile rounded-3xl h-[50vh]" style={{backgroundImage:`url(${Images.blogImage})`,backgroundPositionX:'50%',backgroundPositionY:'10%',backgroundSize:'cover',backgroundRepeat:'no-repeat'}}></div>
              <h2 className='text my-3 text-left text-[#DECD00]'>Gudu Blog</h2>
              <h2 className='text-2xl my-2 text-left text-muted-foreground'>Celebrating Women in Tech: An Ada Lovelace Day Interview with Gudu`s Kane Mani.</h2>
          </div> */}
          </div>
        </section>


        <section>
        <div className="">
          <div className="angular-shape px-[3vw] md:px-[6vw] pt-[13vh] pb-[30vh]">
              <div className="flex flex-wrap items-center justify-between">
                <h1 className="text-3xl md:text-5xl text-white font-[500] gradient-border-after pb-3 w-fit">Our Games</h1>
                <Link to={'/games'} className="md:text-2xl flex items-center gap-4 bg-gradient-to-r from-[#3C49C0] to-[#F8E930] bg-clip-text text-transparent">View All <FaArrowRight color="#F8E930" /></Link>
              </div>


              <div className="flex flex-wrap gap-4 my-[23vh]">
                <div className="w-full md:w-[48%]">
                  <img src={Images.guduRunCover} className="h-[70vh] object-cover min-w-[18rem] mx-auto max-h-[32rem] rounded-3xl" alt="" />
                </div>
                <div className="w-full p-3 my-10 md:w-[48%] md:my-0">
                  <h1 className="text-2xl md:text-3xl text-white font-[500] gradient-border-after pb-3">Our Games</h1>
                  <p className="leading-[3rem] my-10">Gudu Run is an endless runner game
                    available on mobile only. Players run
                    through the streets collecting coins,
                    avoiding obstacles and staying alive.
                    Players use the coins collected to
                    redeem real world products.</p>

                    <button onClick={()=>router('/games#guduRun')} className="bg-transparent border border-white rounded-2xl w-full py-2">SEE MORE</button>
                </div>
              </div>

              <div className="my-[23vh]">
                <div className="w-full md:float-end md:w-[48%]">
                  <img src={Images.guduRunRace} className="h-[70vh] object-cover min-w-[18rem] mx-auto max-h-[32rem] rounded-3xl" alt="" />
                </div>
                <div className="w-full p-3 my-10 md:w-[48%] md:my-0">
                  <h1 className="text-2xl md:text-3xl text-white font-[500] gradient-border-after pb-3">Gudu FX</h1>
                  <p className="leading-[3rem] my-10">Gudu FX is an endless driver game available on mobile only. Players run through the streets collecting coins, dodging obstacles and avoiding crush. Players use the coins collected to redeem real world products.</p>

                    <button onClick={()=>router('/games#guduRace')} className="bg-transparent border border-white rounded-2xl w-full py-2">SEE MORE</button>
                </div>
              </div>
             

              <div className="flex flex-wrap gap-4 my-[23vh]">
                <div className="w-full md:w-[48%]">
                  <img src={Images.guduwarFront} className="h-[70vh] object-cover min-w-[18rem] mx-auto max-h-[32rem] rounded-3xl" alt="" />
                </div>
                <div className="w-full p-3 my-10 md:w-[48%] md:my-0">
                  <h1 className="text-2xl md:text-3xl text-white font-[500] gradient-border-after pb-3">Gudu Warefront</h1>
                    <p className="leading-[3rem] my-10">Gudu Warfront is an endless shooting game where players battle enemies, collect coins, and avoid obstacles, with coins redeemable for real-world rewards, making the action both thrilling and rewarding.</p>
                    <button onClick={()=>router('/games#guduWar')} className="bg-transparent border border-white rounded-2xl w-full py-2">SEE MORE</button>
                </div>
              </div>
              
               <div className="my-[23vh]">
                <div className="w-full md:float-end md:w-[48%]">
                  <img src={Images.GuduCrush} className="h-[50vh] object-cover min-w-[18rem] mx-auto max-h-[32rem] rounded-3xl" alt="" />
                </div>
                <div className="w-full p-3 my-10 md:w-[48%] md:my-0">
                  <h1 className="text-2xl md:text-3xl text-white font-[500] gradient-border-after pb-3">Gudu Crush</h1>
                  <p className="leading-[3rem] my-10">Gudu Crush is an endless match-3 puzzle game where players match jewels to earn points. Points are converted into tokens, which can be redeemed for real-life prizes.</p>
                    <button onClick={()=>router('/games#guduCrush')} className="bg-transparent border border-white rounded-2xl w-full py-2">SEE MORE</button>
                </div>
              </div>

          </div>
        </div>
        </section>

        
        {/* <section className="px-[3vw] md:px-[9vw] py-[6vh] mt-[14vh] mb-[3vh]">
          <div className="flex flex-wrap justify-between">
          <div className="w-[24rem] mx-auto text-center my-[5vh] min-w-[16rem] md:w-[42%] min-h-[60vh]">
              <div className="profile rounded-3xl h-[50vh]" style={{backgroundImage:`url(${Images.carriers})`,backgroundPositionX:'50%',backgroundPositionY:'10%',backgroundSize:'cover',backgroundRepeat:'no-repeat'}}></div>
              <h2 className='text-center text-2xl my-3 font-bold text-[#190217]'>Careers at Gudu.</h2>
              <h2 className='text my-4 text-center text-muted-foreground'>Our games are defined by true craftmanship and original characters. Just like our teams. Match your talents with our teams and learn about our career opportunities.</h2>
              <button onClick={()=>router('/careers')} className="px-7 md:px-[4vw] py-2 rounded-full border border-[#66666666] text-[#D0C000] mx-auto">Explore</button>
          </div>
          <div className="w-[24rem] mx-auto text-center my-[5vh] min-w-[16rem] md:w-[42%] min-h-[60vh]">
              <div className="profile rounded-3xl h-[50vh]" style={{backgroundImage:`url(${Images.guduRunCover})`,backgroundPositionX:'50%',backgroundPositionY:'10%',backgroundSize:'cover',backgroundRepeat:'no-repeat'}}></div>
              <h2 className='text-center text-2xl my-3 font-bold text-[#190217]'>Operating Areas</h2>
              <h2 className='text my-4 text-center text-muted-foreground'>Gudu`s locations in Ghana are home to three game studios, each with their own focus and mission.</h2>
              <button onClick={()=>router('/careers')} className="px-7 md:px-[4vw] py-2 rounded-full border border-[#66666666] text-[#D0C000] mx-auto">Explore</button>
          </div>
          </div>
        </section> */}


        <section className="px-[3vw] md:px-[14vw] py-[6vh] mb-[12vh]">
          <div className="flex flex-wrap">
          <Link to={"/policy/1"} className="w-[24rem] mx-auto text-center my-[5vh] min-w-[16rem] md:w-[40%] min-h-[60vh]">
              <div className="profile rounded-3xl h-[25vh]" style={{backgroundImage:`url(${Images.termsPolicies})`,backgroundPosition:'center',backgroundSize:'contain',backgroundRepeat:'no-repeat'}}></div>
              <h2 className='text-center text-2xl my-3 font-bold text-[#190217]'>Terms and Policies</h2>
              <h2 className='text my-4 text-center text-muted-foreground'>Get familiar with the terms and policies
that apply to our products, services,
and properties.</h2>
          </Link>
          <Link to={"/policy/2"} className="w-[24rem] mx-auto text-center my-[5vh] min-w-[16rem] md:w-[40%] min-h-[60vh]">
              <div className="profile rounded-3xl h-[25vh]" style={{backgroundImage:`url(${Images.privacyNotices})`,backgroundPosition:'center',backgroundSize:'contain',backgroundRepeat:'no-repeat'}}></div>
              <h2 className='text-center text-2xl my-3 font-bold text-[#190217]'>Privacy Notices</h2>
              <h2 className='text my-4 text-center text-muted-foreground'>Read more about how Gudu processes
personal data in its business
operations.</h2>
          </Link>
          <Link to={"/policy/3"} className="w-[24rem] mx-auto text-center my-[5vh] min-w-[16rem] md:w-[40%] min-h-[60vh]">
              <div className="profile rounded-3xl h-[25vh]" style={{backgroundImage:`url(${Images.guduParents})`,backgroundPosition:'center',backgroundSize:'contain',backgroundRepeat:'no-repeat'}}></div>
              <h2 className='text-center text-2xl my-3 font-bold text-[#190217]'>Gudu for Parents</h2>
              <h2 className='text my-4 text-center text-muted-foreground'>Get instructions on how to manage in-
app purchases and data usage on
different mobile devices</h2>
          </Link>
          </div>
        </section>
    </main>
  )
}

export default Home