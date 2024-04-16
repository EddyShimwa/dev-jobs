import React from "react";
import Header from "../../components/Header";
import Main from "../../components/Main";
import { useData } from "../../context/DataContext";
function index() {
  const { isDarkMode } = useData();
  return (
    <div className={`${isDarkMode ? "dark" : ""}`}>
      <Header />
      <Main />
    </div>
  );
}

export default index;
