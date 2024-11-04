import Menu from "./Menu";

const NavCenter = () => {
  return (
    <div
      id="hs-header-base"
      className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow lg:block lg:w-auto lg:basis-auto lg:order-2 lg:col-span-6"
      aria-labelledby="hs-header-base-collapse"
    >
      <div className="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300">
        <div className="py-2 lg:py-0  flex flex-col lg:flex-row lg:items-center gap-0.5 lg:gap-1 lg:justify-center">
          {/* menu for both device */}
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default NavCenter;
