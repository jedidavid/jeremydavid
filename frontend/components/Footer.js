import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
const Footer = (props) => {
  return (
    <>
      <div className="bg-black">
        <div className="container mx-auto lg:py-48 md:py-36 py-16">
          <div className="flex flex-col items-center" id="contact">
            <div>
              <p className="text-sm pb-2 text-white">
                Don't be shy. Say hi! &#128075;
              </p>
              <h1 className="text-white lg:text-7xl md:text-5xl sm:text-5xl text-2xl base-transition text-transition link-transition relative">
                <a href={`mailto:${props.email}`}>jeremydb.david@gmail.com</a>
              </h1>
            </div>
          </div>
        </div>
        <div className="container mx-auto py-4">
          <div className="flex flex-wrap justify-center">
            <p className="text-white text-sm sm:order-1 order-2">
              &copy; 2021 Jeremy David | All Rights Reserved
            </p>
            <div className="flex flex-wrap ml-auto space-x-8 sm:order-2 order-1 sm:w-auto w-full justify-center sm:pb-0 pb-4">
              {props.linkedin ? (
                <a
                  href={props.linkedin}
                  className="text-2xl base-transition text-transition"
                >
                  <FaLinkedinIn />
                </a>
              ) : (
                ""
              )}
              {props.phone ? (
                <a
                  href={`tel:${props.phone}`}
                  className="text-2xl base-transition text-transition"
                >
                  <FaWhatsapp />
                </a>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
