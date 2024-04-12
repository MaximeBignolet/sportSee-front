import Navbar from "./NavBar";
import SideBar from "./SideBar";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Layout = ({ children }: any) => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <SideBar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
