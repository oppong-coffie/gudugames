import Images from "@/constants/images.constants";
import { createContext, useEffect, useState } from "react";

interface GuduNewsContextType {
  news: any[]; // or teams: Team[] if you have a proper type
}


export const NewsContext = createContext<GuduNewsContextType>({
  news: []
});


export default function NewsContextProvider({children}){
    const [newsList,setnewsList] = useState<any[]>([])

    useEffect(()=>{
        setnewsList([
        {
            logo:Images.guduRunCover,
            newsId:1,
            profile_cover:Images.guduRunCover,
            brief_desc:"Gudu Opens Up Four Games to the World",
            name:'News',
            dateLocation:"Accra, Ghana – June 2025",
            news:`Ghana’s bold new gaming company, Gudu, has officially unveiled four exciting game titles to the global audience, signaling its ambition to disrupt the African and global gaming landscape. The launch includes Gudu Run, Gudu FX, Gudu Warfront, and Gudu Crush; each uniquely designed to cater to casual gamers, strategy enthusiasts, and action lovers alike.
            
            Gudu Run offers a fast-paced endless runner experience inspired by local culture and cityscapes. Gudu FX offers endless car driving allowing players to experience the thrill of driving in a risky environment. Gudu Warfront is an online multiplayer battle game set in a Pan-African future, combining military tactics and rich storytelling. And Gudu Crush brings a bright, puzzle-based game designed to test players’ logic and speed — with local flavors embedded throughout.
            
            “Our mission is to make Gudu games a household name, starting from Africa and reaching every continent,” said Kane Mani, Co-founder & CEO of Gudu. “These first four games are just the beginning. We’re here to show that African-made games can be world-class, competitive, and culturally authentic.”

            The games are available on Android and iOS, with plans for PC and console adaptations in future phases.`
        },
        {
            logo:Images.guduRunRace,
            newsId:2,
            profile_cover:Images.guduRunRace,
            brief_desc:"Gudu Partners with Melcom as Exclusive Reward Partner for Gudu Games",
            name:'News',
            dateLocation:"Accra, Ghana – June 2025",
            news:`n a groundbreaking move for both the retail and gaming industries in Ghana, Gudu has signed a strategic partnership with Melcom, making the retail giant the exclusive reward partner for Gudu’s growing universe of games.
            
            This partnership allows players to redeem points earned from Gudu games for real products and shopping vouchers at any Melcom outlet nationwide. Whether you're dominating the leaderboards in Gudu FX or collecting puzzle gems in Gudu Crush, your gameplay now earns you real-world value.
            
            “This partnership marks the first of its kind in Ghana,” said Melcom's Head of Partnerships. “We’re thrilled to work with a bold African gaming brand like Gudu to connect digital fun with real-life rewards. It's a win-win for players and shoppers.”
            
            Through this alliance, Gudu aims to redefine engagement in gaming — turning entertainment into opportunity and giving users tangible incentives for consistent play.`
        },
        {
            logo:Images.guduwarFront,
            newsId:3,
            profile_cover:Images.guduwarFront,
            brief_desc:"Gudu to Launch In-Store Gaming Zones with Fast Food Partner Across Ghana",
            name:'News',
            dateLocation:"Accra, Ghana – June 2025",
            news:`As part of its bold move to blend gaming with everyday life, Gudu is partnering with a popular fast food chain to launch in-store gaming zones across key locations in Ghana. This innovative collaboration will transform dining spaces into interactive gaming experiences where customers can play, compete, and win — all while enjoying their favorite meals.
            
            The Gudu Gaming Zones will feature tablets and consoles loaded with the latest titles: Gudu Run, Gudu FX, Gudu Warfront, and Gudu Crush. Customers will be able to play short matches while waiting for their orders, participate in leaderboard challenges, and unlock meal discounts or exclusive in-store prizes based on their performance.
            
            “Our goal is to integrate Gudu into the everyday lifestyle of our players — from the screen in their pocket to the restaurant they love,” said Kane Mani, founder of Gudu. “Gaming and food are universal experiences, and this partnership creates a powerful fusion of both.”
            
            The first pilot locations are set to launch in Accra, Tema, and Kumasi starting July 2025, with nationwide expansion planned before the end of the year. Customers will also be able to scan QR codes to continue gameplay on their phones and connect to the Gudu rewards system.
This collaboration aims to create a new social space where food, fun, and tech intersect — turning fast food joints into hubs for gaming culture and youth engagement.`
        },
    ])
    },[])

     const partnerCtx = {
            news:newsList
        }
        return (
            <NewsContext.Provider value={partnerCtx}>
                {children}
            </NewsContext.Provider>
        )
}