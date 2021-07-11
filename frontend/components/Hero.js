import React from "react";

const Hero = () => {
  return (
    <div className="py-40">
      <div className="flex flex-wrap">
        <div className="w-2/3">
          {/* <span className="inline-block text-sm bg-green-500 py-1 px-4 mb-8 rounded-sm">
            Fullstack Developer
          </span> */}
          <p className="text-lg uppercase mb-2 leading-none text-gray-200">
            Jeremy David
          </p>
          <h1 className="text-4xl py-2 leading-tight">
            A solution oriented and flexible who thrives in challenging problems
            and enjoys working on projects. I am passionate about the digital
            world and constantly learning from new technologies to improve my
            skills.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
