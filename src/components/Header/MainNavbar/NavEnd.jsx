import Button from "../../reusable/Button";

const NavEnd = () => {
  return (
    <div className="flex items-center ms-auto lg:order-3 lg:col-span-3">
      {/* login button */}
      <button type="button" className="flex">
        <Button label={"Login"} />
      </button>
    </div>
  );
};

export default NavEnd;
