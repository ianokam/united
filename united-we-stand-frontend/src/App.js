///////////////////////////////////////////////////////////////////////////////
//===========================================================================//
//                  F I L E     D O C U M E N T A T I O N                    //
//===========================================================================//
//                                                                           //
// Author:              Ibeawuchi Anokam                                     //
//---                                                                        //
// Title:               Front-End Program                                     //
// Filename:            main.cpp                                             //
//---                                                                        //
// Date of Creation:    07/04/20                                             //
// Last Revised By:     N/A                                                  //
// Last Revision Date:  N/A                                                  //
//---                                                                        //
// Copyright:           Copyright © 2020 Ibeawuchi Anokam.                   //
//                      All rights reserved.                                 //
//                                                                           //
//---------------------------------------------------------------------------//


//===========================================================================//
//                      G L O B A L    S E C T I O N                         //
//===========================================================================//
//---------------------------------------
// System Libraries                     :
//---------------------------------------
import React from 'react';
import './App.css';
import { BrowserRouter as Router,  Route } from 'react-router-dom'; // Allows
                                                                    // for page
                                                                    // routing
//---------------------------------------
// User-Defined Libraries (Pages)       :
//---------------------------------------
// import HomePage      from './db_tester_page/HomePage';
import SecondaryPage from './db_tester_page/SecondaryPage';
import insert        from './db_tester_page/insert';

//===========================================================================//
//            M A I N    A P P L I C A T I O N    M O D U L E                //
//===========================================================================//
//--------------------------
// Main Module             :
//--------------------------

function App() {

   // Return Value:
    return (
      // Begin Updateing & matching the routed pages:
      <Router>
        <div className="App">
          
          < div class="page-body" >
          {/* < Route path="/"       component={ HomePage }      exact /> */}
            < Route path="/"       component={ insert }      exact />
            < Route path="/second" component={ SecondaryPage }       />
          </div>

        </div>
      </Router>
    );
}


export default App;
