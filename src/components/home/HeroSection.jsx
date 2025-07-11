import React from "react";
// react icons
import { CiSearch } from "react-icons/ci";
import { FaCircleCheck } from "react-icons/fa6";
import { motion } from "motion/react";
const HeroSection = () => {
  return (
    <div className="w-full h-full bg-[#FBFBFB] rounded-md">
      {/* header */}
      <header className="flex lg:flex-row flex-col gap-[50px] lg:gap-10 items-center p-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ x: [-100, 100, 70], opacity: 1 }}
          transition={{
            x: {
              duration: 1,
              times: [0, 0.5, 1],
              ease: "easeInOut",
            },
            opacity: {
              duration: 1,
              ease: "easeInOut",
            },
          }}
          className="w-full lg:w-[55%]"
        >
          <h1 className="text-[40px] dark:text-[#abc2d3] sm:text-[60px] font-[600] leading-[45px] sm:leading-[70px]">
            Let your <span className="text-[#F38160]">groceries</span> come to
            you
          </h1>
          <p className="text-[18px] text-gray-400 dark:text-slate-400 mt-2">
            Get fresh groceries online without stepping out to make delicious
            food with the freshest ingredients
          </p>
          <div className="relative my-5">
            <input
              placeholder="Search here"
              className="py-3 px-4 dark:text-[#abc2d3] dark:placeholder:text-slate-500 dark:bg-transparent dark:border-slate-700 dark:border w-full outline-none rounded-md bg-gray-100"
            />
            <button className="h-full absolute top-0 right-0 bg-[#F38160] px-3 text-white text-[1.3rem] rounded-r-md">
              <CiSearch />
            </button>
          </div>

          <div className="grid grid-cols-1 400px:grid-cols-2 gap-[15px] w-full sm:w-[80%]">
            <p className="flex items-center dark:text-slate-400 gap-[5px] text-gray-400 text-[1rem]">
              <FaCircleCheck className="text-[#F0B70D] text-[1.2rem]" />
              Fresh Vegetables
            </p>
            <p className="flex items-center dark:text-slate-400 gap-[5px] text-gray-400 text-[1rem]">
              <FaCircleCheck className="text-[#F0B70D] text-[1.2rem]" />
              100% Guarantee
            </p>
            <p className="flex items-center dark:text-slate-400 gap-[5px] text-gray-400 text-[1rem]">
              <FaCircleCheck className="text-[#F0B70D] text-[1.2rem]" />
              Cash on Delivery
            </p>
            <p className="flex items-center dark:text-slate-400 gap-[5px] text-gray-400 text-[1rem]">
              <FaCircleCheck className="text-[#F0B70D] text-[1.2rem]" />
              Fast Delivery
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            x: [100, -100, 70],
            opacity: 1,
          }}
          transition={{
            x: {
              duration: 1,
              times: [0, 0.5, 1],
              ease: "easeInOut",
            },
            opacity: {
              duration: 1,
              ease: "easeInOut",
            },
          }}
          className="w-full sm:w-[40%]"
        >
          <img
            src="https://i.ibb.co/61R7zbv/delivery-concept-handsome-african-american-deliver-AZUZTZ3-1.png"
            alt="image"
            className="w-full h-full"
          />
        </motion.div>
      </header>
      <section className="p-8 mt-16 grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-[25px] flex-wrap">
        <div>
          <img
            src="https://i.ibb.co/XCM2bhM/Baby-food.png"
            alt="icon"
            className="w-[60px]"
          />
          <h4 className="text-[18px] dark:text-[#abc2d3] font-[500]">Honey</h4>
          <p className="text-[14px] leading-[18px] dark:text-slate-400 text-gray-400 font-[300]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div>
          <img
            src="https://i.ibb.co/J5Yd3cZ/Condiments.png"
            alt="icon"
            className="w-[60px]"
          />
          <h4 className="text-[18px] dark:text-[#abc2d3] font-[500]">
            Spices & Seasonings
          </h4>
          <p className="text-[14px] leading-[18px] dark:text-slate-400 text-gray-400 font-[300]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div>
          <img
            src="https://i.ibb.co/h2R9kny/Dairy.png"
            alt="icon"
            className="w-[60px]"
          />
          <h4 className="text-[18px] dark:text-[#abc2d3] font-[500]">
            Dairy Products
          </h4>
          <p className="text-[14px] leading-[18px] dark:text-slate-400 text-gray-400 font-[300]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div>
          <img
            src="https://i.ibb.co/HYHZfHQ/Grain-and-pasta.png"
            alt="icon"
            className="w-[60px]"
          />
          <h4 className="text-[18px] dark:text-[#abc2d3] font-[500]">Flour</h4>
          <p className="text-[14px] leading-[18px] dark:text-slate-400 text-gray-400 font-[300]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div>
          <img
            src="https://i.ibb.co/y5ZTLHv/Fruits-and-vegetables.png"
            alt="icon"
            className="w-[60px]"
          />
          <h4 className="text-[18px] dark:text-[#abc2d3] font-[500]">
            Vegetables & Fruits
          </h4>
          <p className="text-[14px] leading-[18px] dark:text-slate-400 text-gray-400 font-[300]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </section>
    </div>
  );
};
export default HeroSection;
