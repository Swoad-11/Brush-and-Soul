import svg1 from "../../../assets/svg-icon/brush.svg";
import svg2 from "../../../assets/svg-icon/secure.svg";
import svg3 from "../../../assets/svg-icon/service.svg";
import svg4 from "../../../assets/svg-icon/truck.svg";
import svg5 from "../../../assets/svg-icon/quality.svg";
import svg6 from "../../../assets/svg-icon/price.svg";

const MidSection = () => {
  const items = [
    { icon: svg1, text: "Professional Painter" },
    { icon: svg6, text: "Affordable Price" },
    { icon: svg4, text: "Fastest Delivery" },
    { icon: svg3, text: "24/7 Live Support" },
    { icon: svg2, text: "Secure Payment" },
    { icon: svg5, text: "Top-Notch Quality" },
  ];

  return (
    <div className="bg-white shadow-lg rounded-lg max-[1300px]:mx-4 p-4 mb-12 max-w-7xl mx-auto">
      <div className="grid min-[320px]:grid-cols-2 min-[500px]:grid-cols-3 lg:grid-cols-6 justify-center gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 w-full sm:w-auto sm:flex-1 justify-center"
          >
            <img src={item.icon} className="h-8 w-8 object-contain" alt="" />
            <p className="text-gray-600 text-sm sm:text-base font-medium">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MidSection;
