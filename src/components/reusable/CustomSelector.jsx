import PropTypes from "prop-types";
import Select from "react-select";

// custom styles for react-select
const customStyles = {
  control: (provided, state) => ({
    ...provided,
    paddingTop: "0px",
    paddingBottom: "0px",
    backgroundColor: "gray-50",
    borderColor: state.isFocused ? "#7e6e2a" : "#7e6e2a",
    boxShadow: state.isFocused ? "0 0 0 1px #7e6e2a" : "none",
    "&:hover": { borderColor: "#7e6e2a" },
  }),

  option: (provided, state) => ({
    ...provided,
    paddingTop: "0px",
    paddingBottom: "0px",
    marginTop: "1px",
    marginBottom: "1px",
    backgroundColor: state.isSelected
      ? "#7e6e2a"
      : state.isFocused
      ? "#7e6e2a"
      : "gray-50",
    color: state.isSelected || state.isFocused ? "white" : "#1f2937",
    "&:hover": {
      backgroundColor: "#7e6e2a",
      color: "white",
    },
  }),

  singleValue: (provided) => ({
    ...provided,
    color: "#1f2937",
  }),
};

const CustomSelector = ({ options }) => {
  return (
    <>
      <Select
        className="z-40"
        options={options}
        styles={customStyles}
        isSearchable={false}
        defaultValue={options[0]}
      />
    </>
  );
};

CustomSelector.propTypes = {
  options: PropTypes.array,
};

export default CustomSelector;
