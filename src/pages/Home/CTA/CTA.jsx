const CTA = () => {
  return (
    <section className="overflow-hidden bg-[url(https://images.unsplash.com/photo-1596124592366-8d78fdfd2aa8?q=80&w=1470&auto=format&fit=crop)] bg-cover bg-top bg-no-repeat">
      <div className="bg-black/50 p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="text-center ltr:sm:text-left rtl:sm:text-right">
          <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
            Latest Paintings
          </h2>

          <p className="hidden max-w-lg text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
            Discover the newest additions to our collection. Each brushstroke
            tells a story. Curated with passion, crafted by the artist, and
            delivered with care to your doorstep.
          </p>

          <div className="mt-4 sm:mt-8">
            <a
              href="#"
              className="inline-block rounded-full bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:ring-3 focus:ring-yellow-400 focus:outline-hidden"
            >
              Get Yours Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
