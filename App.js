import React from 'react'
import './App.css'

import Header from './Header'
import BecomeACCA from './BecomeACCA';
import WhyYouChoose from './WhyYouChoose';
import WhatWillYouLearn from './WhatWillYouLearn'
import PlacementAssistance from './PlacementAssistance'
import Footer from './Footer'

const App = ()=>{
  return(
    <div>
        <Header/>
        <BecomeACCA/>
        <WhyYouChoose/>
        <WhatWillYouLearn/>
        <PlacementAssistance/>
        <Footer/>
    </div>
    
  )

}

export default App