import React from 'react';
// imoprt main css file
import './index.css'
// custom components
import Header from '../src/Component/Home/Header/Header'
import Home from '../src/Component/Home/Home'
import White from '../src/Component/Home/Body/White/White'
import Tech from '../src/Component/Home/Body/Tech/Tech'
import Vintage from '../src/Component/Home/Body/Vintage/Vintage'
import Color from '../src/Component/Home/Body/Color/Color'
// extra components
import Drawer from '../src/Component/Home/Header/Drawer/Drawer'
import SignIn from '../src/Component/Home/Header/SignIn/SignIn'
import Dashboard from '../src/Component/Home/Header/Dashboard/Dashboard'
import Footer from '../src/Component/Home/Footer/Footer'
import FDetails from '../src/Component/Home/Body/CDetails/FDetails/FDetails'

// indivdual cards
import Card1FD from '../src/Component/Home/Body/CDetails/FDetails/Card1FD'
import Card2FD from '../src/Component/Home/Body/CDetails/FDetails/Card2FD'
import Card3FD from '../src/Component/Home/Body/CDetails/FDetails/Card3FD'
import Card4FD from '../src/Component/Home/Body/CDetails/FDetails/Card4FD'
import Card5FD from '../src/Component/Home/Body/CDetails/FDetails/Card5FD'
import Card6FD from '../src/Component/Home/Body/CDetails/FDetails/Card6FD'
import Card7FD from '../src/Component/Home/Body/CDetails/FDetails/Card7FD'
import Card8FD from '../src/Component/Home/Body/CDetails/FDetails/Card8FD'
import Card9FD from '../src/Component/Home/Body/CDetails/FDetails/Card9FD'
import Card10FD from '../src/Component/Home/Body/CDetails/FDetails/Card10FD'
import Card11FD from '../src/Component/Home/Body/CDetails/FDetails/Card11FD'
import Card12FD from '../src/Component/Home/Body/CDetails/FDetails/Card12FD'
import Card13FD from '../src/Component/Home/Body/CDetails/FDetails/Card13FD'
import Card14FD from '../src/Component/Home/Body/CDetails/FDetails/Card14FD'
import Card15FD from '../src/Component/Home/Body/CDetails/FDetails/Card15FD'
import Card16FD from '../src/Component/Home/Body/CDetails/FDetails/Card16FD'

import { BrowserRouter, Route, Link } from "react-router-dom";


function App () {
    return(
        <BrowserRouter>
<Header />

           <Route exact path="/" component={Home} />
           <Route path="/white" component={White} />
           <Route path="/tech" component={Tech} />
           <Route path="/vintage" component={Vintage} />
           <Route path="/color" component={Color} />
           <Route path="/menu" component={Drawer} />
           <Route path="/signIn" component={SignIn} />
           <Route path="/dashboard" component={Dashboard} />
           <Route path="/footer" component={Footer} />
           <Route path="/cDetails" component={FDetails} />
           <Route path="/card1" component={Card1FD} />
           <Route path="/card2" component={Card2FD} />
           <Route path="/card3" component={Card3FD} />
           <Route path="/card4" component={Card4FD} />
           <Route path="/card5" component={Card5FD} />
           <Route path="/card6" component={Card6FD} />
           <Route path="/card7" component={Card7FD} />
           <Route path="/card8" component={Card8FD} />
           <Route path="/card9" component={Card9FD} />
           <Route path="/card10" component={Card10FD} />
           <Route path="/card11" component={Card11FD} />
           <Route path="/card12" component={Card12FD} />
           <Route path="/card13" component={Card13FD} />
           <Route path="/card14" component={Card14FD} />
           <Route path="/card15" component={Card15FD} />
           <Route path="/card16" component={Card16FD} />

          <Footer />

        </BrowserRouter>  
    )
  }
export default App;
