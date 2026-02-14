import Images from "@/constants/images.constants";
import { createContext, useEffect, useState } from "react";
import { FaFacebookSquare, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

interface GuduContextType {
  partners: any[]; // or teams: Team[] if you have a proper type
}


export const PartnerContext = createContext<GuduContextType>({
  partners: []
});


export default function PartnerProvider({children}){
    const [partnerList,setpartnerList] = useState<any[]>([])

    useEffect(()=>{
        setpartnerList([
      {
        logo:Images.pizzahut,
        profile_cover:Images.kfcCover,
        desc:"We are always seeking new partnerships to amplify our mission of creating fun, rewarding, and impactful gaming experiences. Together, with our partners, we are redefining what gaming can achieve, both in the virtual world and beyond. We are always seeking new partnerships to amplify our mission of creating fun, rewarding, and impactful gaming experiences. Together, with our partners, we are redefining what gaming can achieve, both in the virtual world and beyond. We are always seeking new partnerships to amplify our mission of creating fun, rewarding, and impactful gaming experiences. Together, with our partners, we are redefining what gaming can achieve, both in the virtual world and beyond. We are always seeking new partnerships to amplify our mission of creating fun, rewarding, and impactful gaming experiences. Together, with our partners, we are redefining what gaming can achieve, both in the virtual world and beyond. We are always seeking new partnerships to amplify our mission of creating fun, rewarding, and impactful gaming experiences. Together, with our partners, we are redefining what gaming can achieve, both in the virtual world and beyond.",
        name:'Pizza Hut',
        location:'Accra, Achimota',
        socials:[
            {
                icon: <FaFacebookSquare size={30} className="text-blue-600" />,
                name:'Facebook',
                url:'www.facebook.com'
            },
            {
                icon: <FaXTwitter size={30} />,
                name:'Twitter',
                url:'www.twitter.com'
            },
            {
                icon: <FaYoutube size={30} className="text-red-600" />,
                name:'Youtube',
                url:'www.youtube.com'
            },
        ]
      },
      {
        logo:Images.pizzahut,
        profile_cover:Images.kfcCover,
        desc:"We are always seeking new partnerships to amplify our mission of creating fun, rewarding, and impactful gaming experiences. Together, with our partners, we are redefining what gaming can achieve, both in the virtual world and beyond. We are always seeking new partnerships to amplify our mission of creating fun, rewarding, and impactful gaming experiences. Together, with our partners, we are redefining what gaming can achieve, both in the virtual world and beyond. We are always seeking new partnerships to amplify our mission of creating fun, rewarding, and impactful gaming experiences. Together, with our partners, we are redefining what gaming can achieve, both in the virtual world and beyond. We are always seeking new partnerships to amplify our mission of creating fun, rewarding, and impactful gaming experiences. Together, with our partners, we are redefining what gaming can achieve, both in the virtual world and beyond. We are always seeking new partnerships to amplify our mission of creating fun, rewarding, and impactful gaming experiences. Together, with our partners, we are redefining what gaming can achieve, both in the virtual world and beyond.",
        name:'Melcom Ghana',
        location:'Accra, Achimota',
        socials:[
            {
                icon: <FaFacebookSquare size={30} className="text-blue-600" />,
                name:'Facebook',
                url:'www.facebook.com'
            },
            {
                icon: <FaXTwitter size={30} />,
                name:'Twitter',
                url:'www.twitter.com'
            },
            {
                icon: <FaYoutube size={30} className="text-red-600" />,
                name:'Youtube',
                url:'www.youtube.com'
            },
        ]
      },
      {
        logo:Images.samsung,
        profile_cover:Images.kfcCover,
        desc:"We are always seeking new partnerships to amplify our mission of creating fun, rewarding, and impactful gaming experiences. Together, with our partners, we are redefining what gaming can achieve, both in the virtual world and beyond. We are always seeking new partnerships to amplify our mission of creating fun, rewarding, and impactful gaming experiences. Together, with our partners, we are redefining what gaming can achieve, both in the virtual world and beyond. We are always seeking new partnerships to amplify our mission of creating fun, rewarding, and impactful gaming experiences. Together, with our partners, we are redefining what gaming can achieve, both in the virtual world and beyond. We are always seeking new partnerships to amplify our mission of creating fun, rewarding, and impactful gaming experiences. Together, with our partners, we are redefining what gaming can achieve, both in the virtual world and beyond. We are always seeking new partnerships to amplify our mission of creating fun, rewarding, and impactful gaming experiences. Together, with our partners, we are redefining what gaming can achieve, both in the virtual world and beyond.",
        name:'Samsung Ghana',
        location:'Accra, Achimota',
        socials:[
            {
                icon: <FaFacebookSquare size={30} className="text-blue-600" />,
                name:'Facebook',
                url:'www.facebook.com'
            },
            {
                icon: <FaXTwitter size={30} />,
                name:'Twitter',
                url:'www.twitter.com'
            },
            {
                icon: <FaYoutube size={30} className="text-red-600" />,
                name:'Youtube',
                url:'www.youtube.com'
            },
        ]
      },
      {
        logo:Images.kfc,
        profile_cover:Images.kfcCover,
        desc:"We are always seeking new partnerships to amplify our mission of creating fun, rewarding, and impactful gaming experiences. Together, with our partners, we are redefining what gaming can achieve, both in the virtual world and beyond. We are always seeking new partnerships to amplify our mission of creating fun, rewarding, and impactful gaming experiences. Together, with our partners, we are redefining what gaming can achieve, both in the virtual world and beyond. We are always seeking new partnerships to amplify our mission of creating fun, rewarding, and impactful gaming experiences. Together, with our partners, we are redefining what gaming can achieve, both in the virtual world and beyond. We are always seeking new partnerships to amplify our mission of creating fun, rewarding, and impactful gaming experiences. Together, with our partners, we are redefining what gaming can achieve, both in the virtual world and beyond. We are always seeking new partnerships to amplify our mission of creating fun, rewarding, and impactful gaming experiences. Together, with our partners, we are redefining what gaming can achieve, both in the virtual world and beyond.",
        name:'KFC',
        location:'Accra, Achimota',
        socials:[
            {
                icon: <FaFacebookSquare size={30} className="text-blue-600" />,
                name:'Facebook',
                url:'www.facebook.com'
            },
            {
                icon: <FaXTwitter size={30} />,
                name:'Twitter',
                url:'www.twitter.com'
            },
            {
                icon: <FaYoutube size={30} className="text-red-600" />,
                name:'Youtube',
                url:'www.youtube.com'
            },
        ]
      },
    ])
    },[])

     const partnerCtx = {
            partners:partnerList
        }
        return (
            <PartnerContext.Provider value={partnerCtx}>
                {children}
            </PartnerContext.Provider>
        )
}