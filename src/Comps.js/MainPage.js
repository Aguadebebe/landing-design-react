 

import "../Comps.css/MainPage.css";


function MainPage() {
     
    return (
        <div className="body-container"> 
           <h1>Squares, Triangles, and now circles!</h1>
           <p style={{ color: "rgb(188, 181, 181)", marginTop: "-15px"}}>Our work is designing your vision.</p>
           <input className="input" 
                 type="text"
                 placeholder="Ask anything"
          />
    
        </div>
    );

};

export default MainPage;