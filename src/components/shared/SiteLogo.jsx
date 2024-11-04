import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const SiteLogo = () => {
  return (
    <div className="max-w-36">
      <Link to={"/"}>
        <img src={logo} alt="Sufiza Logo" />
      </Link>
    </div>
  );
};

export default SiteLogo;
