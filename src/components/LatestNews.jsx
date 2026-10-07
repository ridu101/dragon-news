
import { use } from "react";
import * as MarqueeModule from "react-fast-marquee";

const Marquee = MarqueeModule.default.default;

const newsPromise = fetch("/news.json").then((res) => res.json());

const LatestNews = () => {
    const news = use(newsPromise);

    return (
        <div className="flex items-center gap-5 bg-base-200 p-3 overflow-hidden">
            {/* Breaking News */}
            <p className="shrink-0 bg-secondary px-3 py-2 text-white font-semibold">
                Latest
            </p>

            {/* Headlines */}
            <Marquee
                pauseOnHover={true}
                speed={70}
            >
                {news.map((item) => (
                    <p
                        key={item.id}
                        className="font-bold text-base-content mx-5 whitespace-nowrap"
                    >
                        {item.title}
                    </p>
                ))}
            </Marquee>
        </div>
    );
};

export default LatestNews;

