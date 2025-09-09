import React, { createContext, useState } from 'react'
export const NavbarContext =  createContext()
const NavContext = ({children}) => {

   const [navopen, setNavopen] = useState(false)

  return (
    <div>
        <NavbarContext.Provider value={[navopen, setNavopen]} >
            {children}
        </NavbarContext.Provider>
    </div>
  )
}

export default NavContext