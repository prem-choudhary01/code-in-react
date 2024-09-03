    import React from "react";
   import ReactDOM from "react-dom"


  export  function ProtalDem (){

        return ReactDOM.createPortal(
            
                <h1>Protal Demo</h1>,
                document.getElementById("portal-root")
                
                
        
        )
    }