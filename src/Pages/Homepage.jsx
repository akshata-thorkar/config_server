import React from 'react'
import Navbar from '../HomePage-components/Navbar/Navbar'
import Whychooseus from '../HomePage-components/Whychooseus/Whychooseus';
import Aboutus from '../HomePage-components/Aboutus/Aboutus';
import Latestnews from '../HomePage-components/Latestnews-subnow/Latestnews';
import Slider from '../HomePage-components/Slider/Slider';
import Usecase from '../HomePage-components/Usecase/Usecase';
import Footer from '../HomePage-components/footer/footer';



function Index() {
  return (
    <div>
        <Navbar />
        <Slider />
        <Aboutus /> 
        <Usecase />
        <Whychooseus />
        <Latestnews />
        <Footer />
    </div>
    
  )
}

export default Index;

