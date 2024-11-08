import { useContext } from "react";
import { MyContext } from "../ContextApis/MyContext";

function ThemeToggler() {
  const { toggleTheme } = useContext(MyContext);

  return <button onClick={toggleTheme} className="border-2 cursor-pointer w-24 h-6">Toggle</button>;
}

export default ThemeToggler;
