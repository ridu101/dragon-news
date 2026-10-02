import * as MarqueeModule from "react-fast-marquee";

const Marquee = MarqueeModule.default.default;

const LatestNews = () => {
  return (
    <div className="flex items-center gap-5 bg-base-200 p-3">
      <p className="shrink-0 bg-secondary px-3 py-2 text-white">Latest</p>

      <Marquee className=" flex gap-5" pauseOnHover={true} speed={70}>
        <p className="font-bold">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt,
          officia magni incidunt iste ex exercitationem repellendus in
          perspiciatis illo ducimus.
        </p>
        <p className="font-bold">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt,
          officia magni incidunt iste ex exercitationem repellendus in
          perspiciatis illo ducimus.
        </p>
        <p className="font-bold">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt,
          officia magni incidunt iste ex exercitationem repellendus in
          perspiciatis illo ducimus.
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
