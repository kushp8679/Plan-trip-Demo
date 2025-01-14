import React, { Component } from 'react';
import "./App.css"
class App extends Component {
  state = {};
  render() {
    return (
      <div 
        className="container-fluid" 
        style={{ 
          padding: 0, 
          margin: 0, 
          width: "100vw", 
          height: "100vh" 
        }}
      >
        <div
          className="row background-zoom-effect"
          style={{
            backgroundImage: "url('./Media/Background (1).png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100%", 
            color: "white",
          }}
        >
          <div className="col-4">
            
                       <img  className="logo_lefttop" src="\Media\Frame (1).png"   alt='logo'/>
         </div>
          <div className="col-4 ">
                      


                        
                       <div className="container">
                        <div className="row">
                          <div className="col">
                             <img  className="logo_big" src="\Media\Group 591.png"   alt='logo'/>
                          
                         
                             <img  className="logo_person" src="\Media\Cutout.png"   alt='logo'/>
                          </div>
                        </div>
                      </div>

          
          </div>
          <div className="col-4 d-flex justify-content-center align-items-center">
         
           <div className="container">
            <div className="row">
              <div className="row-6">
                              <img  className="logo_not" src="\Media\notification-svgrepo-com 1 (1).png"   alt='logo'/>
                              <img  className="logo_acc" src="\Media\Group.png"   alt='logo'/>     
              </div>
              <div className="col-6">
                              <img  className="logo_com" src="/Media/Component 1.png"   alt='logo'/>
              </div>
            </div>
          </div>

          
          </div>
        </div>
      </div>
    );
  }
}

export default App;
