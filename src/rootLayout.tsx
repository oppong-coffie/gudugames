import Drag from './components/Animationfiles/BlobCursor'
import Footer from './components/navigation/Footer'
import MenuBar from './components/navigation/menuBar'
import { Outlet, useLocation } from 'react-router'
import GuduTeamContext from './stores/gudu-team-context'
import PartnerProvider from './stores/gudu-partner-context'
import { useEffect } from 'react'
import NewsContextProvider from './stores/gudu-new-context'

const RootLayout = () => {
const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return (
    <GuduTeamContext>
      <NewsContextProvider>
      <PartnerProvider>
      <div className='relative'>
          <MenuBar/>
        <Drag/>
          <Outlet/>
          <Footer/>
      </div>
    </PartnerProvider>
    </NewsContextProvider>
    </GuduTeamContext>
  )
}

export default RootLayout