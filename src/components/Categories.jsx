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
    <div>
      <h2 className="font-bold text-xl text-base-content">
        All Categories ({categories.length})
      </h2>

      <div className="grid grid-cols-1 gap-3 mt-5">
        {categories.map((category) => {
          return (
            <NavLink
              key={category.id}
              to={`/category/${category.id}`}
              className={({ isActive }) =>
                `px-5 py-3 rounded-lg font-semibold text-center transition-all duration-300 ${
                  isActive
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