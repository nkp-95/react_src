import React from "react";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

const Page = ({ isDark, setIsDark }) => {
  return (
    <div className="page">
      {/* prop 전달방식  */}
      {/* <Header isDark={isDark}/>
      <Content isDark={isDark}/>     
      <Footer isDark={isDark} setIsDark={setIsDark}/> */}
      {/* prop 필요없는 방식 */}
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

export default Page;