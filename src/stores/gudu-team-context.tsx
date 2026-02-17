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
                cardTitle:"Meet The Gudu Team",
                profile_cover:Images.profile,
                profile:Images.profile,
                name:'Kane Mani',
                role:'Co-Founder & CEO',
                about:'Kane is the Co-founder and CEO of Gudu Studios, where he leads the company’s vision, strategy, and technological innovation.As CEO, Kane drives Gudu’s mission to build globally competitive gaming experiences emerging from Africa. He oversees corporate strategy, product development, partnerships, and long-term growth, ensuring the studio operates at the intersection of creativity, technology, and scalable business execution.With a strong foundation in both entrepreneurship and technical leadership, Kane bridges the gap between innovation and commercialization. He works closely with engineering, design, and creative teams to deliver high-quality interactive experiences while positioning Gudu Studios at the forefront of the evolving gaming industry.Under his leadership, Gudu Studios is focused on developing culturally authentic, technologically advanced, and globally marketable games.',
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
                about:'Andy is a Senior Game Developer at Gudu Studios, where he leads the design and engineering of immersive, high-performance gaming experiences.With deep expertise in gameplay systems, real-time rendering, and performance optimization, Andy plays a critical role in transforming creative concepts into technically robust and engaging products. He works across the full development lifecycle from prototyping and mechanics design to production deployment ensuring every title meets the highest standards of quality, scalability, and player experience.At Gudu Studios, Andy collaborates with the CEO to build interactive worlds that are both technically sophisticated and culturally resonant. His approach combines strong problem-solving ability with a passion for innovation, helping position Gudu at the forefront of Africa’s rapidly growing gaming industry.Driven by a commitment to excellence and continuous improvement, Andy is dedicated to pushing the boundaries of game development while mentoring emerging talent within the studio.',
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
                cardTitle:"Meet The Gudu Team",
                profile_cover:Images.JamesProfile,
                profile:Images.JamesProfile,
                name:'James Ewoenam Adogo',
                role:'Software Engineer',
                about:'James is the Backend Engineer at Gudu Studios, where he architects and maintains the core systems that power the studio’s gaming infrastructure.He is responsible for designing scalable server architectures, secure APIs, multiplayer systems, and data management frameworks that ensure seamless gameplay experiences. From real-time services and cloud deployment to performance optimization and system reliability, James builds the technical backbone that enables Gudu’s products to operate efficiently at scale.Working closely with game developer, he ensures backend systems integrate smoothly with gameplay mechanics, analytics, and user management platforms. His focus on security, stability, and scalability allows Gudu Studios to deliver high-performance games capable of supporting growing global audiences.With a strong foundation in distributed systems and modern cloud technologies, James is committed to building resilient infrastructure that supports innovation while maintaining operational excellence.',
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
                cardTitle:"Meet The Gudu Team",
                profile_cover:Images.dan,
                profile:Images.dan,
                name:'Dan Wenpanga Sidsaya',
                role:'Software Engineer',
                about:'Dan is the Frontend Engineer at Gudu Studios, where he leads the development of intuitive, responsive, and high-performance user interfaces across the studio’s gaming and digital platforms.He is responsible for translating design concepts into seamless interactive experiences, ensuring that gameplay interfaces, dashboards, and web platforms are visually compelling and technically optimized. From real-time UI systems to performance tuning and cross-platform responsiveness, Dan focuses on delivering smooth and engaging user experiences .Working closely with designer, backend engineers, and game developers, he ensures frontend systems integrate efficiently with backend services and gameplay logic. His attention to detail, usability, and modern web technologies helps position Gudu Studios at the forefront of delivering polished, player-centric digital experiences.With a passion for clean architecture and user-focused design, Dan is committed to building scalable frontend systems that elevate both functionality and aesthetics across Gudu’s products.',
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