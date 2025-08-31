import React from 'react';
import HeroSection from '../../subComponents/HeroSection'
import TopVillas from '../../subComponents/TopVillas'
import Regions from '../../subComponents/Regions'
import OurSpecialities from '../../subComponents/ourSpecialities'
import Host from '../../subComponents/Host'
import About from '../../subComponents/About'
import SubContact from '../../subComponents/Contact'
import Feedback from "../../subComponents/Feedbackk"
import { Toaster } from 'react-hot-toast';

const Home = () => {
    return(
        <>
         <article className="page">
         <HeroSection/>
         <TopVillas/>
         <Regions/>
           {/* <Host/> */}
         <OurSpecialities/>
       
         {/* <About/> */}
         <Feedback/>
         <Toaster />
         </article>
        </>
    )
}

export default Home