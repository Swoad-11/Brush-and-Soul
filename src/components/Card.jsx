const Card = () => {
  return (
    <a
      href="#"
      className="group relative block rounded-md rounded-tr-3xl overflow-hidden"
    >
      <span className="absolute z-5 -top-px -right-px rounded-tr-3xl rounded-bl-3xl bg-rose-600 px-6 py-4 font-medium tracking-widest text-white uppercase">
        Save 10%
      </span>

      <img
        src="https://images.unsplash.com/photo-1628202926206-c63a34b1618f?q=80&w=2574&auto=format&fit=crop"
        alt=""
        className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
      />

      <div className="relative border border-gray-100 bg-white p-6">
        <span className="rounded-md bg-teal-400 px-3 py-1.5 text-xs font-medium whitespace-nowrap">
          {" "}
          New{" "}
        </span>
        <p className="text-gray-700 mt-4">
          $49.99
          <span className="text-gray-400 line-through">$80</span>
        </p>

        <h3 className="mt-1.5 text-lg font-medium text-gray-900">
          Wireless Headphones
        </h3>

        <p className="mt-1.5 line-clamp-3 text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nobis
          iure obcaecati pariatur. Officiis qui, enim cupiditate aliquam
          corporis iste.
        </p>

        <form className="mt-4 flex gap-4">
          <button className="block w-full rounded-sm bg-gray-100 px-4 py-3 text-sm font-medium text-gray-900 transition hover:scale-105">
            Add to Cart
          </button>

          <button
            type="button"
            className="block w-full rounded-sm bg-gray-900 px-4 py-3 text-sm font-medium text-white transition hover:scale-105"
          >
            Buy Now
          </button>
        </form>
      </div>
    </a>
  );
};

export default Card;
