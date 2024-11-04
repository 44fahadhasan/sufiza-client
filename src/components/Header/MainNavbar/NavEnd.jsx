import Button from "../../reusable/Button";

const NavEnd = () => {
  return (
    <div className="flex items-center ms-auto md:order-3 md:col-span-3">
      {/* login button */}
      <button type="button" className="flex">
        <Button label={"Login"} />
      </button>
    </div>
  );
};

export default NavEnd;
