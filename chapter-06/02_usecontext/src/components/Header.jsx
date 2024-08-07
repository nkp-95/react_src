import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext"
import { UserContext } from "../context/UserContext";

const Header = () => {
  const { isDark } = useContext(ThemeContext);    //prop이 아닌
                                                  //ThemeContext에서 isDark로 바로 전달
  const  name  = useContext(UserContext);
  return (
    <header
      className = "header"
      style={{
        backgroundColor: isDark ? 'black' : 'lightgray',
        color: isDark ? 'white' : 'black',
      }}
      
    >
      <h1 >Welcome {name}!</h1>
    </header>
  );
}

export default Header;