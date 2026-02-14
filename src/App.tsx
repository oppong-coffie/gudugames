
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './rootLayout'
import Home from './pages/home/home'
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Aboutus from './pages/Aboutus/aboutus'
import Vision from './pages/Vision/vision'
import Games from './pages/Games/game'
import Partners from './pages/Patners/patners'
import Store from './pages/GameStore/Store'
import TeamMember from './pages/teams/TeamMember'
import TeamMemberDetails from './pages/TeamDetails/TeamMemberDetails'
import Careers from './pages/Careers/Careers'
import ContactUs from './pages/Contact/ContactUs'
import PartnerDetails from './pages/PartnerDetails/PartnerDetails'
import NewsPage from './pages/News/NewsPage'
import Policies from './pages/Policies/Policies'


function App() {  
  // Scroll to top when location changes
  useEffect(() => {
    window.scrollTo(0,0);
  }, [location]);


    useEffect(() => {
      AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: false
      });
    }, []);
    
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout/>,
      children:[
        {element:<Home/>, index:true},
        {element:<Aboutus/>, path:'/aboutus'},
        {element:<Vision/>, path:'/vision'},
        {element:<Games/>, path:'/games'},
        {element:<Partners/>, path:'/partners'},
        {element:<Store/>, path:'/gamestore'},
        {element:<TeamMember/>, path:'/teams'},
        {element:<Careers/>, path:'/careers'},
        {element:<ContactUs/>, path:'/contactus'},
        {element:<TeamMemberDetails/>, path:'/teams-details/:teamName'},
        {element:<PartnerDetails/>, path:'/partner-details/:partner'},
        {element:<NewsPage/>, path:'/gudu-news/:id'},
        {element:<Policies/>, path:'/policy/:id'},
      ]
    },
  ])

  return (
   <RouterProvider router={router} />
  )
}

export default App
