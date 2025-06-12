import Footer from "@/shared/footer/Footer";
import Navbar from "@/shared/navbar/Navbar";
import { Outlet } from "react-router-dom";

import {
  useScroll,
  useMotionValueEvent,
  useTransform,
  motion,
} from "framer-motion";

const Layout = () => {
  const { scrollY, scrollYProgress } = useScroll();

  // ✅ Log scrollYProgress
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("scrollYProgress:", latest);
  });

  return (
    <>
      <motion.div
        style={{
          scaleX: scrollYProgress,
        }}
        className="fixed top-20 origin-left left-0 w-full h-5 p-3 z-50 bg-red-500"
      ></motion.div>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
