import Header from "./Header";
import Footer from "./Footer";
import Reveal from "./Reveal";

const Layout = ({ children, global }) => {
  return (
    <>
      <Header cv={global.cv} />
      <main>{children}</main>
      <Reveal>
        <Footer
          email={global.email}
          phone={global.phone}
          linkedin={global.linkedin}
          github={global.github}
          sourcecode={global.sourcecode}
        />
      </Reveal>
    </>
  );
};

export default Layout;
