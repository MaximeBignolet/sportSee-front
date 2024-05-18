import Navbar from "./NavBar";
import SideBar from "./SideBar";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Layout = ({ children }: any) => {
  return (
    <div className=" 2xl:overflow-hidden">
      <div className="bg-black">
        <Navbar />
      </div>
      <div className="flex 2xl:h-screen overflow-hidden">
        <div className="bg-black">
          <SideBar />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Layout;
