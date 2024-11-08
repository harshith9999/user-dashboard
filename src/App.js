import { useEffect, useState } from "react";
import "./App.css";
import UserTable from "./components/UserTable";
import { MyContext } from "./ContextApis/MyContext";
import ThemeToggler from "./components/ThemeToggler";

function App() {
  const [apiData, setApiData] = useState([]);
  const [theme, setTheme] = useState("white");

  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setApiData(data);
  };

  const toggleTheme = () => {
    if (theme === "white") setTheme("dark");
    else setTheme("white");
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <MyContext.Provider value={{ data: apiData, toggleTheme }}>
      <div
        className={`flex justify-center items-center ${theme} `}
      >
        <UserTable />
        <ThemeToggler />
      </div>
    </MyContext.Provider>
  );
}

export default App;
