///////////////////////////////////////////////////////////////////////////////
//===========================================================================//
//                  F I L E     D O C U M E N T A T I O N                    //
//===========================================================================//
//                                                                           //
// Author:              Ibeawuchi Anokam                                     //
//---                                                                        //
// Title:               Back-End Program                                     //
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
//        =========================================================          //
//        |    Internal Dependecies / Components / Key methods    |          //
//        =========================================================          //
//------------------------------------                                       //
// Babel Library                     :                                       //
//------------------------------------                                       //
// [ babel ] - It allows for ES6 in the back-end                             //
//            (since node.js naturally doesn't)                              //
//------------------------------------                                       //
// Basic HTTP Network Request Types  :                                       //
//------------------------------------                                       //
// Get  == get information from the server                                   //
//        (e.g. article content or user information)                         //
//                                                                           //
// Post == modify information on the server                                  //
//                                                                           //
//---------------------------------------------------------------------------//


//===========================================================================//
//                      G L O B A L    S E C T I O N                         //
//===========================================================================//
//---------------------------------------
// System Libraries                     :
//---------------------------------------
import express     from 'express';      // Allows for a dummy server
import bodyParser from 'body-parser';   // Allows for JSON parsing 


//===========================================================================//
//       S E R V E R  and  M Y S Q L    I N I T I A L I Z A T I O N          //
//===========================================================================//
const http = require("http");
//---------------------------------------
// Initialize The Server                :
//---------------------------------------
// Server object instance :
const dummy_server = express();    

//---------------------------------------
// Initialize The Database              :
//---------------------------------------
// Database object instance :
var   mysql_db     = require('mysql2');

// Database Configuration :
var db_connection = mysql_db.createConnection({
  host:     'localhost',   // Server info
  port:     3306,          // Default MySQL port
  user:     'dummy_db',    // DB login info
  password: 'mypassword',  // DB login info
  database: 'DUMMY_PEOPLE'
});
                       
//---------------------------------------
// Initialize The JSON Parser           :
//---------------------------------------
dummy_server.use( bodyParser.json() );                            // to support JSON-encoded bodies
dummy_server.use( bodyParser.urlencoded( { extended: true } )  ); // to support URL-encoded bodies


//===========================================================================//
//               S E R V E R  and  M Y S Q L    R U N N I N G                //
//===========================================================================//
//---------------------------------------
// Start The Server                     :
//---------------------------------------
// OPEN a connection to the Database on the Server :          
db_connection.connect( function(err) {
                          if (err) throw err
                          console.log('You are now connected with mysql database...')
                     });

    //---------------------------------------
    // QUERY The Database                   :
    //--------------------------------------- 
    // Fetch Data from Server in the Database -                     
    // Route for insert data
    console.time("MySQL_SELECTION");
    dummy_server.get(`http://localhost:3000`, function (req, res) { // listens for requests to localhost:3000    //***

      db_connection.query(  "SELECT * FROM PERSONAL_INFO;" , 

                            function (error, results, fields) {

                                if (error) throw error;
                                console.log(results);
                                res.end(JSON.stringify(results));                            //***
                            }
                          );
    });                                                                                      //*** 
    console.timeEnd("MySQL_SELECTION");
    
//---------------------------------------
// Close The Server                         :
//---------------------------------------
// CLOSE a connection to the Database on the Server :  
db_connection.end();