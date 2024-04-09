import React from "react";
import Constant from "../_utils/Constant";

function Hero() {
  return (
    <div>
      <section className="bg-gray-50 dark:bg-gray-800">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl text-black dark:text-white">
              <span className="text-primary">Upload, Save</span> and{" "}
              <span className="text-primary">Share</span> your files{" "}
              <strong>Securely</strong>
            </h1>

            <p className="mt-4 sm:text-xl/relaxed text-gray-500 dark:text-gray-300">
              {Constant.desc}
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-teal-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                href="/upload"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
