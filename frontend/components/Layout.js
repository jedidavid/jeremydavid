import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, global }) => {
  return (
    <>
      <Header cv={global.cv} />
      <main>{children}</main>
      <Footer
        email={global.email}
        phone={global.phone}
        linkedin={global.linkedin}
        github={global.github}
        sourcecode={global.sourcecode}
      />
    </>
  );
};

export default Layout;
