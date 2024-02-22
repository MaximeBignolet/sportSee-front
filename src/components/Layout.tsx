import Navbar from "./NavBar";

const Layout = ({ children }: any) => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <main>{children}</main>
    </>
  );
};

export default Layout;
