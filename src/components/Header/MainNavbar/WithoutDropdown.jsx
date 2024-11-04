import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const WithoutDropdown = ({ data }) => {
  const { label, link } = data || {};

  return (
    <NavLink
      className={({ isActive }) =>
        isActive
          ? "p-2 flex items-center bg-gray-100 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100"
          : "p-2 flex items-center hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100"
      }
      to={link}
      aria-current={label}
    >
      {label}
    </NavLink>
  );
};

WithoutDropdown.propTypes = {
  data: PropTypes.object,
};

export default WithoutDropdown;
