import React, {useState} from 'react'
import "./style.css"
import Menu from "./menuApi";
import MenuCard  from "./MenuCard.js";
import NavBar from './NavBar';

const uniqueList=[...new Set(Menu.map ((curelem)=>{

    return curelem.category
})
),
"All"]
    
const Restaurent = () => {
 
        const [menuData, setMenuData] =useState(Menu);
        const [menuList , setMenuList]= useState(uniqueList)
        
        const filterItem=(category)=>{
          if(category==="All")
          {
            setMenuData(Menu)
            return
          }
          const updatedList=Menu.filter((curelem)=>{
          return curelem.category===category
          })
          setMenuData(updatedList)
        };
           
    return (
      <>
                <NavBar filterItem={filterItem}  menuList={menuList}/>
                   <MenuCard  menuData={menuData}/>
    </>
  );
};
export default Restaurent ;



