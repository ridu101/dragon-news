import { use } from "react";
import { NavLink } from "react-router";

const categoryPromise = fetch("/categories.json").then((res) => {
  if (!res.ok) {
    throw new Error("Failed to load categories.json");
  }

  return res.json();
});

const Categories = () => {
  const categories = use(categoryPromise);

  return (
    <div className="w-full min-w-0 overflow-hidden">

      <h2 className="font-bold text-lg sm:text-xl text-base-content">
        All Categories ({categories.length})
      </h2>

      <div className="grid grid-cols-1 gap-2 sm:gap-3 mt-4 sm:mt-5 w-full">

        {categories.map((category) => {
          return (
            <NavLink
              key={category.id}
              to={`/category/${category.id}`}
              className={({ isActive }) =>
                `block w-full min-w-0 px-4 sm:px-5 py-3 rounded-lg font-semibold text-center text-sm sm:text-base leading-5 wrap-break-word whitespace-normal transition-all duration-300 ${isActive
                  ? "bg-secondary text-white shadow-md"
                  : "bg-base-200 text-accent hover:bg-secondary/10 hover:text-secondary"
                }`
              }
            >
              {category.name}
            </NavLink>
          );
        })}

      </div>
    </div>
  );
};

export default Categories;