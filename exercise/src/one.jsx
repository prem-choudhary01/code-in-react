const Appuse = () => { 
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

  return (
    <div>
        <li>
      {items.map((items, index) => (
      
          key={index} 
        >
          {items}
       
      ))}
      </li>
    </div>
  );
};

export default Appuse;

