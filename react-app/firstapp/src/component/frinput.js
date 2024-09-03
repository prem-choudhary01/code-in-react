import React, { forwardRef } from "react";

//    export function FRInput (){
//         return(
//             <div>
//                 <input title="text"/>

//             </div>
//         )
//     }

export const FRInput = React.forwardRef((props, ref) => {
  return (
    <div>
      <input title="text" ref={ref} />
    </div>
  );
});
