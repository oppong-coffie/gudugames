import Images from "@/constants/images.constants";
// import { FaFacebookF, FaLinkedin, FaYoutube } from "react-icons/fa";
import { NavLink } from "react-router";
import { FooterMENUITEMS } from "./menuBar";

const Footer = () => {
  return (
    <div className='bg-[#190217] relative px-[2vw] pt-[9vh] mt-[13vh]'>
        {/* <img src="/footerOutline.png" className='absolute left-0 top-[-2.5rem] w-full h-[3rem]' alt="" /> */}
        {/* <div className="flex flex-wrap items-center mb-[25vh] justify-between gap-4">
            <div className="w-full my-6 md:w-[35%] text-white">
                <h1 className="text-2xl font-bold">Newsletter</h1>
                <p className="text-sm text-muted-foreground">Subscribe here for all the news that's fit to fly - delivered
                straight to your inbox! You can opt out anytime.</p>
                <p className="text-sm text-muted-foreground">By subscribing, you agree to receive emails from us. Please
                review our privacy policy for more information. You can unsubscribe at any time</p>
            </div>

            <div className="w-full my-6 md:w-[60%]">
                 <div className="w-[90%] mx-auto my-3 flex-col flex">
                        <input required type='email' name='phone' placeholder='Email address' className='outline-none p-2 border border-[#94A3B8] w-full]'/>
                        <button className="w-full text-white mt-5 py-2 rounded-full outline-none border border-[#423341]">Submit</button>
                </div>
            </div>
        </div> */}
        <div className="flex flex-wrap text-white w-full items-center justify-center gap-10 pb-[7vh]">
            <ul className='md:mr-auto text-sm space-y-1 mobileFooterResponsive'>
                <img src={Images.gudulogo} className='mb-[3vh] h-16' alt="" />
                <li>Gudu Studios Ltd</li>
                <li>20 1st Ringway Estate.</li>
                <li>Osu, Accra.</li>
                <li>Ghana, West Africa.</li>
            </ul>


            <ul className='md:ml-auto min-w-fit w-[45%] justify-around flex gap-10 flex-wrap Footersocials'>
                <ul className="space-y-2">
                    {FooterMENUITEMS.map((item, id) => (
                        <NavLink key={id} to={item.route}>
                        {() =>
                            (  
                            <li className="my-2 hover:text-[#F8E930]">
                                <span>{item.item}</span>
                            </li>
                            ) 
                        }
                        </NavLink>
                    ))}
                </ul>
{/* Social media links */}
                <ul>
                    {/* <h2 className="text-[#F8E930]">Follow us on:</h2> */}
                    {/* <div className="flex">
                        <li className="border rounded-md border-white p-2 mx-2 my-2">
                            <a href="http://" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                            </a>
                        </li>
                        <li className="border rounded-md border-white p-2 mx-2 my-2">
                            <a href="http://" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF />
                            </a>
                        </li>
                        <li className="border rounded-md border-white p-2 mx-2 my-2">
                            <a href="http://" target="_blank" rel="noopener noreferrer">
                            <FaYoutube />
                            </a>
                        </li>
                    </div> */}
                </ul>
                
            </ul>
        </div>
        <div className="text-center px-3 py-6 text-white">
            <p>© 2025 All Rights Reserved | Gudu Studios Ltd.</p>
        </div>
    </div>
  )
}

export default Footer