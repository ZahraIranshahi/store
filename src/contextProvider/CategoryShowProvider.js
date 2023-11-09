import React,{useState , createContext} from "react";


export const showCategory = createContext();
const CategoryShowProvider = (props) => {
 
  const categoryShowState = useState([])
  
  return (
    <>
      <showCategory.Provider value={categoryShowState}>
        {props.children}
      </showCategory.Provider>
    </>
  );
};

export default CategoryShowProvider ;