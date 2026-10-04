import { useState } from "react";
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from "react-icons/fa";
import { format } from "date-fns";

const NewsCard = ({ news }) => {
  const [showFullText, setShowFullText] = useState(false);

  const { title, author, image_url, details, tags, rating, total_view } = news;

  const shortDetails =
    details?.length > 300 ? `${details.slice(0, 300)}...` : details;

  return (
    <div className="border border-base-300 rounded-lg overflow-hidden bg-base-100">
      {/* Author Section */}
      <div className="flex items-center justify-between px-5 py-4 bg-base-200">
        <div className="flex items-center gap-3">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-11 h-11 rounded-full object-cover"
          />

          <div>
            <h3 className="font-semibold text-base-content">{author?.name}</h3>

            <p className="text-sm text-gray-500">
              {author?.published_date
                ? format(new Date(author.published_date), "yyyy-MM-dd")
                : "Unknown date"}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-5 text-gray-500">
          <button className="text-xl hover:text-secondary transition">
            <FaRegBookmark />
          </button>

          <button className="text-xl hover:text-secondary transition">
            <FaShareAlt />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-5">
        {/* Title */}
        <h2 className="text-2xl font-bold leading-relaxed text-base-content mb-5">
          {title}
        </h2>

        {/* Image */}
        <img
          src={image_url}
          alt={title}
          className="w-full h-64 object-cover rounded-lg"
        />

        {/* Details */}
        <div className="mt-7">
          <p className="text-gray-500 leading-7 text-base">
            {showFullText ? details : shortDetails}
          </p>

          {details?.length > 300 && (
            <button
              onClick={() => setShowFullText(!showFullText)}
              className="text-secondary font-semibold mt-2 hover:underline"
            >
              {showFullText ? "Read Less" : "Read More"}
            </button>
          )}
        </div>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="mt-4 text-sm text-gray-500">
            <span className="font-medium">Tags: </span>

            {tags.map((tag, index) => (
              <span key={tag}>
                {tag}
                {index !== tags.length - 1 && ", "}
              </span>
            ))}
          </div>
        )}

        {/* Bottom */}
        <div className="border-t border-base-300 mt-5 pt-5">
          <div className="flex items-center justify-between">
            {/* Rating */}
            <div className="flex items-center gap-1">
              <div className="flex gap-1 text-orange-400 text-lg">
                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} />
                ))}
              </div>

              <span className="ml-2 text-gray-500">{rating?.number || 0}</span>
            </div>

            {/* Views */}
            <div className="flex items-center gap-2 text-gray-500">
              <FaEye className="text-lg" />
              <span>{total_view || 0}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
