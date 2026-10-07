import {
    FaArrowLeft,
    FaEye,
    FaStar,
} from "react-icons/fa";

import { Link } from "react-router";
import { format } from "date-fns";

const NewsDetailsCard = ({ news }) => {
    const {
        title,
        author,
        image_url,
        details,
        rating,
        total_view,
        category_id,
        tags,
    } = news;

    return (
        <div className="border border-base-300 rounded-lg bg-base-100 overflow-hidden">

            {/* Header */}
            <div className="p-5 md:p-6">

                {/* Title */}
                <h1 className="text-2xl md:text-3xl font-bold leading-relaxed text-base-content">
                    {title}
                </h1>

                {/* Author */}
                <div className="flex items-center gap-3 mt-5 pb-5 border-b border-base-300">

                    <img
                        src={author?.img}
                        alt={author?.name}
                        className="w-11 h-11 rounded-full object-cover"
                    />

                    <div>
                        <h3 className="font-semibold text-base-content">
                            {author?.name}
                        </h3>

                        <p className="text-sm text-gray-500">
                            {author?.published_date
                                ? format(
                                    new Date(author.published_date),
                                    "EEEE, MMMM dd, yyyy"
                                )
                                : "Unknown date"}
                        </p>
                    </div>

                </div>

                {/* Main Image */}
                <div className="mt-5">

                    <img
                        src={image_url}
                        alt={title}
                        className="w-full max-h-[500px] object-cover rounded-lg"
                    />

                </div>

                {/* Details */}
                <div className="mt-6">

                    <p className="text-gray-500 leading-7 text-base">
                        {details}
                    </p>

                </div>

                {/* Tags */}
                {tags?.length > 0 && (
                    <div className="mt-5 text-sm text-gray-500">

                        <span className="font-semibold text-base-content">
                            Tags:
                        </span>{" "}

                        {tags.join(", ")}

                    </div>
                )}

                {/* Rating + Views */}
                <div className="border-t border-base-300 mt-6 pt-5 flex items-center justify-between">

                    {/* Rating */}
                    <div className="flex items-center gap-2">

                        <div className="flex gap-1 text-orange-400">

                            {[...Array(5)].map((_, index) => (
                                <FaStar key={index} />
                            ))}

                        </div>

                        <span className="text-gray-500">
                            {rating?.number || 0}
                        </span>

                    </div>

                    {/* Views */}
                    <div className="flex items-center gap-2 text-gray-500">

                        <FaEye />

                        <span>
                            {total_view || 0}
                        </span>

                    </div>

                </div>

                {/* Back Button */}
                <div className="mt-6">

                    <Link
                        to={`/category/${category_id}`}
                        className="btn btn-secondary text-white rounded-none"
                    >
                        <FaArrowLeft />
                        All news in this category
                    </Link>

                </div>

            </div>
        </div>
    );
};

export default NewsDetailsCard;