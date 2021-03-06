import React from 'react'

const NavBar = ({filterItem , menuList }) => {
  return (
    <>
      <nav className='navbar'>
        <div className='btn-group'>
            {
                menuList.map((curelem)=>
                {
                    return (
                        <button className='btn-group__item'
                        onClick={() =>filterItem (curelem)}>{curelem}</button>
                    )
                })
            }
          
        

        </div>

      </nav>
    </>
  )
}

export default NavBar
