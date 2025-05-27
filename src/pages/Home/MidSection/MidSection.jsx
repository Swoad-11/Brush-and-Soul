import svg1 from "../../../assets/svg-icon/brush.svg";
import svg2 from "../../../assets/svg-icon/secure.svg";
import svg3 from "../../../assets/svg-icon/service.svg";
import svg4 from "../../../assets/svg-icon/truck.svg";
import svg5 from "../../../assets/svg-icon/quality.svg";

const MidSection = () => {
  return (
    <div
      className="ups shadow-blue-200 rounded-4 flex flex-row justify-center 
    mb-12 shadow-lg max-w-fit mx-auto p-4 rounded"
    >
      <div className="flex justify-content-start align-items-center mr-6 gap-2">
        <img src={svg1} className="mx-auto h-8 w-8" alt="" />
        <p className="text-rubik subtitle2 text-black-marie m-0 text-gray-600">
          Professional Painter
        </p>
      </div>
      <div className="flex justify-content-start align-items-center mr-6 gap-2">
        <img src={svg4} className="mx-auto h-8 w-8" alt="" />
        <p className="text-rubik subtitle2 text-black-marie m-0 ml-2 text-gray-600">
          Fastest Delivery
        </p>
      </div>
      <div className="flex justify-content-start align-items-center mr-6 gap-2">
        <img src={svg3} className="mx-auto h-8 w-8" alt="" />
        <p className="text-rubik subtitle2 text-black-marie m-0 text-gray-600">
          24/7 Live Support
        </p>
      </div>
      <div className="flex justify-content-start align-items-center mr-6 gap-2">
        <img src={svg2} className="mx-auto h-8 w-8" alt="" />
        <p className="text-rubik subtitle2 text-black-marie m-0 text-gray-600">
          Secure Payment
        </p>
      </div>
      <div className="flex justify-content-start gap-2">
        <img src={svg5} className="mx-auto h-8 w-8" alt="" />
        <p className="text-rubik subtitle2 text-black-marie m-0 text-gray-600">
          Top-Notch Quality
        </p>
      </div>
    </div>
  );
};

export default MidSection;
