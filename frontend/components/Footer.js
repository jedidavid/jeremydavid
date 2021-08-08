const Footer = (props) => {
  return (
    <>
      <div>
        <div className="container mx-auto lg:py-48 md:py-36 py-16 border-t border-gray-200">
          <div className="flex flex-col items-start" id="contact">
            <div>
              <p className="text-xl pb-2">Send me an email 💌</p>
              <h1 className="3xl:text-9xl 2xl:text-8/2xl lg:text-7xl md:text-6xl sm:text-5xl xs:text-3xl text-2xl font-bold base-transition text-transition relative">
                <a href={`mailto:${props.email}`}>{props.email}</a>
              </h1>
            </div>
          </div>
          <div className="flex md:pt-24 pt-12">
            <div className="flex flex-col space-y-2">
              {props.linkedin ? (
                <a
                  href={props.linkedin}
                  className="md:text-4xl sm:text-3xl text-xl font-bold base-transition text-transition"
                >
                  Linkedin
                </a>
              ) : (
                ""
              )}
              {props.github ? (
                <a
                  href={props.github}
                  className="md:text-4xl sm:text-3xl text-xl font-bold base-transition text-transition"
                >
                  Github
                </a>
              ) : (
                ""
              )}
              {props.phone ? (
                <a
                  href={`tel:${props.phone}`}
                  className="md:text-4xl sm:text-3xl text-xl font-bold base-transition text-transition"
                >
                  Mobile
                </a>
              ) : (
                ""
              )}
            </div>
            <div className="ml-auto mt-auto">
              <p className="text-sm sm:order-1 order-2">
                Jeremy David 🧑🏻‍💻 - <a href={props.sourcecode}>Source Code</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
