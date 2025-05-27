import Card from "../../../components/Card";
import SectionTitle from "../../../components/SectionTitle";

const Trending = () => {
  return (
    <>
      <SectionTitle heading={"Trending"} />
      <div className="mx-auto max-w-screen-xl px-4 mb-8 ">
        <section>
          <div className="">
            <header>
              <p className="mt-4 max-w-md text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
                praesentium cumque iure dicta incidunt est ipsam, officia dolor
                fugit natus?
              </p>
            </header>

            <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Card />
              <Card />
              <Card />
              <Card />
            </ul>
          </div>
        </section>
        <a
          className="group relative inline-flex items-center overflow-hidden rounded-sm bg-gray-900 px-8 py-3 mt-8 text-white focus:ring-3 focus:outline-hidden"
          href="#"
        >
          <span className="absolute -start-full transition-all group-hover:start-4">
            <svg
              className="size-5 shadow-sm rtl:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </span>

          <span className="text-sm font-medium transition-all group-hover:ms-4">
            {" "}
            Explore More{" "}
          </span>
        </a>
      </div>
    </>
  );
};

export default Trending;
