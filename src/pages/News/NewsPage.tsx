import { NewsContext } from '@/stores/gudu-new-context'
import { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const NewsPage = () => {
    const {news} = useContext(NewsContext)
    const routerPath = useParams()
    const [memberPos,setmemberPos]=useState(0)
    useEffect(()=>{
        const selectedInd = news.findIndex(item=>item.newsId==routerPath.id)
        setmemberPos(selectedInd)
    },[routerPath.id,news])
  return (
    <main className='min-h-screen relative'>
      <section
        className="h-[80vh] w-full bg-cover bg-no-repeat bg-fixed bg-center flex"
        style={{
            backgroundImage: `linear-gradient(to bottom right, #000000a6, #000000b3), url('${news[memberPos]?.profile_cover}')`,
            backgroundPositionX:"50%",
            backgroundPositionY:"10%"
        }}
        >
          <div className="flex gap-5 mt-auto mb-10 ml-11">
            <img src={news[memberPos]?.['logo']} className='h-16 w-16 rounded-full object-cover' alt="" />
            <div className="">
                <p className='text-[#F8E930] font-[500]'><span>{news[memberPos]?.['name']}</span> <span>{news[memberPos]?.['role']}</span></p>
                <h3 className='text-white font-[500]'>{news[memberPos]?.['brief_desc']}</h3>
            </div>
          </div>
        </section>

        <section className="px-[3vw] md:px-[6vw]">
          {/* <div className="p-9 flex items-center justify-between">
            <h1 className="text-2xl md:text-4xl font-[500] w-fit">News </h1>
            </div> */}

            <div className="p-9 mt-9">
                <h1 className='text-3xl text-center'>{news[memberPos]?.brief_desc}</h1>
                <h3 className='text-2xl text-center my-4'>{news[memberPos]?.dateLocation}</h3>
                <p className='text-muted-foreground mx-auto whitespace-pre-wrap text-[20px] text-center max-w-[70%]'>{news[memberPos]?.news}</p>
            </div>
        </section>


        <section className="px-[3vw] md:px-[4vw] py-[4vh]">
                   <div className="p-9">        
                     <h3 className='mt-[8vh] text-2xl mb-3'>Other Related News</h3>
                     {/* <p className='text-muted-foreground text-sm'>Get to know the heart and soul of Gudu - the people behind our games.</p> */}
        
                     <div className="flex flex-wrap gap-5 mt-[5vh]">
                      <div className="w-[29.33%] min-w-[14rem] mx-auto">
                                <Link to={`/gudu-news/${news[memberPos==0?news.length-1:memberPos-1]?.newsId}`}>
                                <div className="w-full h-[30vh] bg-center bg-no-repeat" style={{backgroundImage:`url(${news[memberPos==0?news.length-1:memberPos-1]?.logo})`,backgroundPosition:'center',backgroundSize:'cover',backgroundRepeat:'no-repeat'}}></div>
                                <h4 className="text-sm text-[#DECD00] my-1">{news[memberPos==0?news.length-1:memberPos-1]?.name}</h4>
                                <h1 className="text-2xl font-500 my-1">{news[memberPos==0?news.length-1:memberPos-1]?.brief_desc}</h1>
                                <h3 className="text-muted-foreground my-3">{news[memberPos==0?news.length-1:memberPos-1]?.role}</h3>
                                </Link>
                            </div>
                             <div className="w-[29.33%] min-w-[14rem] mx-auto">
                                <Link to={`/gudu-news/${news[memberPos>=news.length-1?0:memberPos+1]?.newsId}`}>
                                <div className="w-full h-[30vh] bg-center bg-no-repeat" style={{backgroundImage:`url(${news[memberPos>=news.length-1?0:memberPos+1]?.logo})`,backgroundPosition:'center',backgroundSize:'cover',backgroundRepeat:'no-repeat'}}></div>
                                <h4 className="text-sm text-[#DECD00] my-1">{news[memberPos>=news.length-1?0:memberPos+1]?.name}</h4>
                                <h1 className="text-2xl font-500 my-1">{news[memberPos>=news.length-1?0:memberPos+1]?.brief_desc}</h1>
                                </Link>
                            </div>
                             <div className="w-[29.33%] min-w-[14rem] mx-auto">
                                <Link to={`/gudu-news/${news[memberPos]?.newsId}`}>
                                <div className="w-full h-[30vh] bg-center bg-no-repeat" style={{backgroundImage:`url(${news[memberPos]?.logo})`,backgroundPosition:'center',backgroundSize:'cover',backgroundRepeat:'no-repeat'}}></div>
                                <h4 className="text-sm text-[#DECD00] my-1">{news[memberPos]?.name}</h4>
                                <h1 className="text-2xl font-500 my-1">{news[memberPos]?.brief_desc}</h1>
                                </Link>
                            </div>
                    </div>
                   </div>
                </section>
    </main>
  )
}

export default NewsPage