import Navbar from "./NavBar";
import SideBar from "./SideBar";

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
