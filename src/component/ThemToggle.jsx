import { useGlobalContext } from "../Context";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
const ThemToggle = () => {
  const { isDarkOpen, toggleDark } = useGlobalContext();

  return (
    <div className="toggle-container ">
      <button className="toggle-icon dark-toggle" onClick={toggleDark}>
        {isDarkOpen ? <BsFillSunFill /> : <BsFillMoonFill />}
      </button>
    </div>
  );
};
export default ThemToggle;
