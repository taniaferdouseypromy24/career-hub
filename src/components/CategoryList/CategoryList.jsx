import React, { useEffect, useState } from "react";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="lg:ps-[150px] lg:pe-[150px]  text-center mt-28">
      <h1 className=" text-4xl font-semibold mb-8"> Job Category List</h1>
      <p className="font-thin text-[#757575] mb-16">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>

      <div className="flex flex-wrap gap-3.5 justify-center ">
        {categories.map((category) => (
          <div
            className="bg-blue-100 rounded p-8 w-64 cursor-pointer"
            key={category.id}
          >
            <div className="bg-blue-200 p-4 mb-6 rounded-md flex justify-center w-1/3 ">
              <img src={category.logo} alt="" />
            </div>
            <p className="font-semibold text-start text-lg">
              {category.category_name}
            </p>
            <p className="text-gray-500 text-start">{category.availability}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
