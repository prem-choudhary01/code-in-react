// import React from 'react';

// const MyComponent = () => {
//   const items = [
//     { id: 1, name: 'Item 1' },
//     { id: 2, name: 'Item 2' },
//     { id: 3, name: 'Item 3' },
//     { id: 4, name: 'Item 4' }
//   ];

//   return (
//     <div>
//       {items.map(item => (
//         <div key={item.id}>{item.name}</div>
//       ))}
//     </div>
//   );
// };

// export default MyComponent;


// App.js
import React from 'react';
import ReusableDiv from './ReusableDiv';

const Appuse = () => {
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

  return (
    <div>
      {items.map((items, index) => (
        <ReusableDiv 
          key={index} 
        >
          {items}
        </ReusableDiv>
      ))}
    </div>
  );
};

export default Appuse;
