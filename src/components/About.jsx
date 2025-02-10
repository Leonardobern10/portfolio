import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT_CONTENT, ABOUT_TEXT_TITLE } from "../constants";
import { motion } from "framer-motion";

const About = function () {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        Sobre
        <span className="text-neutral-500"> Mim</span>
      </h1>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img className="rounded-3xl" src={aboutImg} alt="about" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex-row justify-center items-center">
            <div className="mx-0 max-w-fit py-2 px-0 font-light text-2xl flex flex-row flex-wrap justify-center items-center">
              <p className="font-light w-fit">
                <motion.span
                  className="text-neutral-500 text-9xl font-mono"
                  initial={{ opacity: 0.4 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  {ABOUT_TEXT_TITLE.D[0]}
                </motion.span>
                {ABOUT_TEXT_TITLE.D[1]}
              </p>
              <p className="font-light w-fit">
                <motion.span
                  className="text-neutral-500 text-9xl font-mono"
                  initial={{ opacity: 0.4 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  {ABOUT_TEXT_TITLE.E[0]}
                </motion.span>
                {ABOUT_TEXT_TITLE.E[1]}
              </p>
              <p className="font-light w-fit">
                <motion.span
                  className="text-neutral-500  text-9xl font-mono"
                  initial={{ opacity: 0.4 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  {ABOUT_TEXT_TITLE.V[0]}
                </motion.span>
                {ABOUT_TEXT_TITLE.V[1]}
              </p>
            </div>
            <p className="text-lg font-light text-justify">
              {ABOUT_TEXT_CONTENT}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default About;
