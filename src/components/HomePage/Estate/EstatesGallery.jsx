import { Link } from "react-router-dom";

const EstatesGallery = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-4">
        <Link
          to={""}
          className="lg:row-span-2 group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
        >
          <img
            src="https://www.apexproperty.com.bd/themes/basis/assets/images/property-sections/Gulshan.jpg"
            alt=""
            className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
          <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
            Mohammedpur
          </h3>
        </Link>

        <Link
          to={""}
          className="lg:col-span-2 lg:row-span-1 group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
        >
          <img
            src="https://www.apexproperty.com.bd/themes/basis/assets/images/property-sections/Banani.jpg"
            alt=""
            className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
          <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
            Gulshan
          </h3>
        </Link>

        <Link
          to={""}
          className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
        >
          <img
            src="https://www.apexproperty.com.bd/themes/basis/assets/images/property-sections/Uttara.png"
            alt=""
            className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
          <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
            Mirpur
          </h3>
        </Link>

        <Link
          to={""}
          className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
        >
          <img
            src="https://www.apexproperty.com.bd/themes/basis/assets/images/property-sections/Bashundhara.jpg"
            alt=""
            className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
          <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
            Badda
          </h3>
        </Link>

        <Link
          to={""}
          className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
        >
          <img
            src="https://www.apexproperty.com.bd/themes/basis/assets/images/property-sections/Badda.jpg"
            alt=""
            className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
          <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
            Kola Bangan
          </h3>
        </Link>

        <Link
          to={""}
          className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
        >
          <img
            src="https://www.apexproperty.com.bd/themes/basis/assets/images/property-sections/Dhanmondi_1.png"
            alt=""
            className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
          <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
            Dhanmondi
          </h3>
        </Link>
      </div>

      <div className="mt-7 text-center">
        <button className="bg-[#7e6e2a] text-white py-1 px-2 rounded-md uppercase font-semibold text-sm">
          more
        </button>
      </div>
    </>
  );
};

export default EstatesGallery;
