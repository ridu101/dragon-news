
import { useEffect } from "react";
import { useLoaderData, useParams } from "react-router";

import Header from "../components/Header";
import RightAside from "../components/HomeLayout/RightAside";
import NewsDetailsCard from "../components/NewsDetailsCard";

const NewsDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();

    const news = data.find(
        (item) => String(item.id) === String(id)
    );

  
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }, [id]);

    return (
        <div>
            <header>
                <Header />
            </header>

            <main className="w-11/12 md:w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-5 py-6 md:py-10">
                
                {/* News Details */}
                <section className="lg:col-span-9 min-w-0">
                    {news ? (
                        <NewsDetailsCard news={news} />
                    ) : (
                        <div className="border border-base-300 p-10 text-center">
                            <h2 className="text-2xl font-bold">
                                News Not Found!
                            </h2>
                        </div>
                    )}
                </section>

                {/* Right Aside */}
                <aside className="lg:col-span-3">
                    <RightAside />
                </aside>

            </main>
        </div>
    );
};

export default NewsDetails;
