import React from "react";
import { Search } from "lucide-react";

const BannerAtas = () => {
  const option = [
    {
      name: "select option",
    },
    {
      name: "select option2",
    },
    {
      name: "select option3",
    },
  ];

  return (
    <div>
      <div className=" gap-3 mt-10 flex-col flex justify-center  items-center mx-auto max-w-7xl ">
        <p className="text-white lg-text-4xl md:text-4xl xl:text-4xl text-2xl font-bold">
          Blog Genzet
        </p>
        <h1 className="text-white lg-text-4xl md:text-4xl xl:text-4xl text-2xl font-bold ">
          The Journal : Design Resources,
        </h1>
        <h1 className="text-white lg-text-4xl md:text-4xl xl:text-4xl text-2xl font-bold ">
          Interviews, and Industry News
        </h1>
      </div>
      <form className="lg:max-w-lg md:max-w-lg xl:max-w-lg mx-auto xl:mt-10 lg:mt-10 md:mt-10 mt-3 max-w-sm">
        <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
          Search
        </label>
        <div className="relative lg:flex-row xl:flex-row md:flex-row flex flex-col gap-2">
          <select
            id="myDropdown"
            className="cursor-pointer block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          >
            {option.map((items, index) => (
              <option
                key={index}
                className=" font-manrope font-medium leading-5 text-md "
              >
                {items.name}
              </option>
            ))}
          </select>
          <div className=" cursor-pointer absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>

          <input
            type="search"
            id="default-search"
            className="icon-search block w-full lg:p-4 xl:p-4 md:pd-4 p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Mockups, Logos..."
          />
        </div>
      </form>
    </div>
  );
};

export default BannerAtas;
