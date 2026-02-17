import Images from "@/constants/images.constants";
import { createContext, useEffect, useState } from "react";
import { FaFacebookSquare, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

interface GuduContextType {
  teams: any[]; // or teams: Team[] if you have a proper type
}


export const GuduContext = createContext<GuduContextType>({
  teams: []
});

export default function GuduTeamContext({children}){
    const [teamMates,setTeamMates] = useState<any[]>([])

    useEffect(()=>{
        setTeamMates([
            {
                cardTitle:"Meet The Gudu",
                profile_cover:Images.profile,
                profile:Images.profile,
                name:'Kane Mani',
                role:'CEO',
                about:'Kane Mani is the visionary leader behind Gudu Studios, driving the company’s mission and overseeing both business strategy and technology innovation. As the CEO and CTO, Kane combines entrepreneurial expertise with technical leadership to ensure Gudu remains at the forefront of the gaming industry.',
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
                cardTitle:"Meet The Gudu",
                profile_cover:Images.andyProfile,
                profile:Images.andyProfile,
                name:'Andraos Rahaman Jimoh',
                role:'Senior Game Developer',
                about:'Kane Mani is the visionary leader behind Gudu Studios, driving the company’s mission and overseeing both business strategy and technology innovation. As the CEO and CTO, Kane combines entrepreneurial expertise with technical leadership to ensure Gudu remains at the forefront of the gaming industry.',
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
                cardTitle:"Meet The Gudu",
                profile_cover:Images.JamesProfile,
                profile:Images.JamesProfile,
                name:'James Ewoenam Adogo',
                role:'Software Engineer',
                about:'Kane Mani is the visionary leader behind Gudu Studios, driving the company’s mission and overseeing both business strategy and technology innovation. As the CEO and CTO, Kane combines entrepreneurial expertise with technical leadership to ensure Gudu remains at the forefront of the gaming industry.',
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
                cardTitle:"Meet The Gudu",
                profile_cover:Images.dan,
                profile:Images.dan,
                name:'Dan Wenpanga Sidsaya',
                role:'Software Developer',
                about:'I am a detail-oriented and organized software developer with strong professional skills that brings enormous talents for software design, development and integration to life as a front end engineer on this project I sought to bring to reality creative designs and api integrations with ease.',
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
            // {
            //     cardTitle:"Meet The Gudu",
            //     profile_cover:Images.andyProfile,
            //     profile:Images.andyProfile,
            //     name:'Andraos Rahaman Jimoh',
            //     role:'Mobile Developer',
            //     about:'Kane Mani is the visionary leader behind Gudu Studios, driving the company’s mission and overseeing both business strategy and technology innovation. As the CEO and CTO, Kane combines entrepreneurial expertise with technical leadership to ensure Gudu remains at the forefront of the gaming industry.',
            //     socials:[
            //         {
            //             icon: <FaFacebookSquare size={30} className="text-blue-600" />,
            //             name:'Facebook',
            //             url:'www.facebook.com'
            //         },
            //         {
            //             icon: <FaXTwitter size={30} />,
            //             name:'Twitter',
            //             url:'www.twitter.com'
            //         },
            //         {
            //             icon: <FaYoutube size={30} className="text-red-600" />,
            //             name:'Youtube',
            //             url:'www.youtube.com'
            //         },
            //     ]
            // },
            // {
            //     cardTitle:"Meet The Gudu",
            //     profile_cover:Images.profile,
            //     profile:Images.profile,
            //     name:'James Ewoenam',
            //     role:'QA Engineer',
            //     about:'Kane Mani is the visionary leader behind Gudu Studios, driving the company’s mission and overseeing both business strategy and technology innovation. As the CEO and CTO, Kane combines entrepreneurial expertise with technical leadership to ensure Gudu remains at the forefront of the gaming industry.',
            //     socials:[
            //         {
            //             icon: <FaFacebookSquare size={30} className="text-blue-600" />,
            //             name:'Facebook',
            //             url:'www.facebook.com'
            //         },
            //         {
            //             icon: <FaXTwitter size={30} />,
            //             name:'Twitter',
            //             url:'www.twitter.com'
            //         },
            //         {
            //             icon: <FaYoutube size={30} className="text-red-600" />,
            //             name:'Youtube',
            //             url:'www.youtube.com'
            //         },
            //     ]
            // },
            // {
            //     cardTitle:"Meet The Gudu",
            //     profile_cover:Images.profile,
            //     profile:Images.profile,
            //     name:'James Ewoenam',
            //     role:'Accountant',
            //     about:'Kane Mani is the visionary leader behind Gudu Studios, driving the company’s mission and overseeing both business strategy and technology innovation. As the CEO and CTO, Kane combines entrepreneurial expertise with technical leadership to ensure Gudu remains at the forefront of the gaming industry.',
            //     socials:[
            //         {
            //             icon: <FaFacebookSquare size={30} className="text-blue-600" />,
            //             name:'Facebook',
            //             url:'www.facebook.com'
            //         },
            //         {
            //             icon: <FaXTwitter size={30} />,
            //             name:'Twitter',
            //             url:'www.twitter.com'
            //         },
            //         {
            //             icon: <FaYoutube size={30} className="text-red-600" />,
            //             name:'Youtube',
            //             url:'www.youtube.com'
            //         },
            //     ]
            // },
            // {
            //     cardTitle:"Meet The Gudu",
            //     profile_cover:Images.profile,
            //     profile:Images.profile,
            //     name:'Kane Mani',
            //     role:'Business Development Manager',
            //     about:'Kane Mani is the visionary leader behind Gudu Studios, driving the company’s mission and overseeing both business strategy and technology innovation. As the CEO and CTO, Kane combines entrepreneurial expertise with technical leadership to ensure Gudu remains at the forefront of the gaming industry.',
            //     socials:[
            //         {
            //             icon: <FaFacebookSquare size={30} className="text-blue-600" />,
            //             name:'Facebook',
            //             url:'www.facebook.com'
            //         },
            //         {
            //             icon: <FaXTwitter size={30} />,
            //             name:'Twitter',
            //             url:'www.twitter.com'
            //         },
            //         {
            //             icon: <FaYoutube size={30} className="text-red-600" />,
            //             name:'Youtube',
            //             url:'www.youtube.com'
            //         },
            //     ]
            // },
            // {
            //     cardTitle:"Meet The Gudu",
            //     profile_cover:Images.profile,
            //     profile:Images.profile,
            //     name:'Kane Mani',
            //     role:'Product Designer',
            //     about:'Kane Mani is the visionary leader behind Gudu Studios, driving the company’s mission and overseeing both business strategy and technology innovation. As the CEO and CTO, Kane combines entrepreneurial expertise with technical leadership to ensure Gudu remains at the forefront of the gaming industry.',
            //     socials:[
            //         {
            //             icon: <FaFacebookSquare size={30} className="text-blue-600" />,
            //             name:'Facebook',
            //             url:'www.facebook.com'
            //         },
            //         {
            //             icon: <FaXTwitter size={30} />,
            //             name:'Twitter',
            //             url:'www.twitter.com'
            //         },
            //         {
            //             icon: <FaYoutube size={30} className="text-red-600" />,
            //             name:'Youtube',
            //             url:'www.youtube.com'
            //         },
            //     ]
            // },
            // {
            //     cardTitle:"Meet The Gudu",
            //     profile_cover:Images.profile,
            //     profile:Images.profile,
            //     name:'Kane Mani',
            //     role:'CEO & CTO of Gudu',
            //     about:'Kane Mani is the visionary leader behind Gudu Studios, driving the company’s mission and overseeing both business strategy and technology innovation. As the CEO and CTO, Kane combines entrepreneurial expertise with technical leadership to ensure Gudu remains at the forefront of the gaming industry.',
            //     socials:[
            //         {
            //             icon: <FaFacebookSquare size={30} className="text-blue-600" />,
            //             name:'Facebook',
            //             url:'www.facebook.com'
            //         },
            //         {
            //             icon: <FaXTwitter size={30} />,
            //             name:'Twitter',
            //             url:'www.twitter.com'
            //         },
            //         {
            //             icon: <FaYoutube size={30} className="text-red-600" />,
            //             name:'Youtube',
            //             url:'www.youtube.com'
            //         },
            //     ]
            // },
            // {
            //     cardTitle:"Meet The Gudu",
            //     profile_cover:Images.profile,
            //     profile:Images.profile,
            //     name:'Kane Mani',
            //     role:'CEO & CTO of Gudu',
            //     about:'Kane Mani is the visionary leader behind Gudu Studios, driving the company’s mission and overseeing both business strategy and technology innovation. As the CEO and CTO, Kane combines entrepreneurial expertise with technical leadership to ensure Gudu remains at the forefront of the gaming industry.',
            //     socials:[
            //         {
            //             icon: <FaFacebookSquare size={30} className="text-blue-600" />,
            //             name:'Facebook',
            //             url:'www.facebook.com'
            //         },
            //         {
            //             icon: <FaXTwitter size={30} />,
            //             name:'Twitter',
            //             url:'www.twitter.com'
            //         },
            //         {
            //             icon: <FaYoutube size={30} className="text-red-600" />,
            //             name:'Youtube',
            //             url:'www.youtube.com'
            //         },
            //     ]
            // },
            // {
            //     cardTitle:"Meet The Gudu",
            //     profile_cover:Images.profile,
            //     profile:Images.profile,
            //     name:'Kane Mani',
            //     role:'CEO & CTO of Gudu',
            //     about:'Kane Mani is the visionary leader behind Gudu Studios, driving the company’s mission and overseeing both business strategy and technology innovation. As the CEO and CTO, Kane combines entrepreneurial expertise with technical leadership to ensure Gudu remains at the forefront of the gaming industry.',
            //     socials:[
            //         {
            //             icon: <FaFacebookSquare size={30} className="text-blue-600" />,
            //             name:'Facebook',
            //             url:'www.facebook.com'
            //         },
            //         {
            //             icon: <FaXTwitter size={30} />,
            //             name:'Twitter',
            //             url:'www.twitter.com'
            //         },
            //         {
            //             icon: <FaYoutube size={30} className="text-red-600" />,
            //             name:'Youtube',
            //             url:'www.youtube.com'
            //         },
            //     ]
            // },
            // {
            //     cardTitle:"Meet The Gudu",
            //     profile_cover:Images.profile,
            //     profile:Images.profile,
            //     name:'Kane Mani',
            //     role:'CEO & CTO of Gudu',
            //     about:'Kane Mani is the visionary leader behind Gudu Studios, driving the company’s mission and overseeing both business strategy and technology innovation. As the CEO and CTO, Kane combines entrepreneurial expertise with technical leadership to ensure Gudu remains at the forefront of the gaming industry.',
            //     socials:[
            //         {
            //             icon: <FaFacebookSquare size={30} className="text-blue-600" />,
            //             name:'Facebook',
            //             url:'www.facebook.com'
            //         },
            //         {
            //             icon: <FaXTwitter size={30} />,
            //             name:'Twitter',
            //             url:'www.twitter.com'
            //         },
            //         {
            //             icon: <FaYoutube size={30} className="text-red-600" />,
            //             name:'Youtube',
            //             url:'www.youtube.com'
            //         },
            //     ]
            // },
        ])
    },[])

    const guduCtx = {
        teams:teamMates
    }
    return (
        <GuduContext.Provider value={guduCtx}>
            {children}
        </GuduContext.Provider>
    )
}