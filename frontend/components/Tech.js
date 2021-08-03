import React from "react";

const Tech = () => {
  return (
    <div className="sm:py-32 py-20">
      <div className="flex flex-wrap">
        <div className="xl:w-1/3 w-full">
          <p className="sm:text-2xl text-xl font-medium mb-8">
            Technologies I work with:
          </p>
        </div>
        <div className="xl:w-2/3 w-full flex">
          <div className="flex flex-wrap max-w-4xl w-full xl:ml-auto">
            <span className="skill">Html5</span>
            <span className="skill">Css</span>
            <span className="skill">Tailwindcss</span>
            <span className="skill">Bootstrap</span>
            <span className="skill">Javascript</span>
            <span className="skill">React</span>
            <span className="skill">Next.JS</span>
            <span className="skill">Gatsby</span>
            <span className="skill">Angular</span>
            <span className="skill">NodeJS</span>
            <span className="skill">MySQL</span>
            <span className="skill">NoSQL</span>
            <span className="skill">PHP</span>
            <span className="skill">Headless CMS</span>
            <span className="skill">Wordpress</span>
            <span className="skill">Shopify</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tech;
