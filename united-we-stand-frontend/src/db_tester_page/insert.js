//---------------------------------------
// System Libraries                     :
//---------------------------------------
import React, { Component } from 'react';
import axios                from 'axios';
// import { BrowserRouter as Router,  Route } from 'react-router-dom'; // Allows
//                                                                     // for page
//                                                                     // routing

//===========================================================================//
//            M A I N    A P P L I C A T I O N    M O D U L E                //
//===========================================================================//
//--------------------------
// Main Module             :
//--------------------------
class insert extends Component {

    //-------------------------------------------------------------------------
    // Constructor:
    constructor(props) {
        super(props);
        this.state = {
            users: [ ],
        };
    }
  
    //-------------------------------------------------------------------------
    // Mount:
    componentDidMount() {
        axios.get(`http://localhost:3000`)
          .then(res => {
            const user = res.data;
            this.setState({ user });
          })
      }

    //-------------------------------------------------------------------------
    // Render Server Info:
    renderItems() {
        return (
            <div>
            <table>
                <tr>
                    <th>First Name | </th>
                    <th>Last  Name</th>
                </tr>
                
                { this.state.users.map( (person) => 
                    <tr>
                    <td>{person.f_name}</td>
                    <td>{person.l_name}</td>
                    </tr>
                )}
            </table>  
            </div>
        );
    }

    //-------------------------------------------------------------------------
    // Render Output:
    render() {
        return (
            <div>
                {this.renderItems()}
            </div>
        );
      }

}

export default insert;




// render() {
//     return (
//       <div className="row">
//         {this.renderItems()}
//       </div>
//     );
//   }
