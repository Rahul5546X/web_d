import { Inter } from "next/font/google";
// import "./globals.css";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer"

// this layout is only for the admin it does not overwrite the root layout 
// root layout will also be applied to this admin section and it's own layout will also be applied


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "admin layout",
  description: "this is inside the admin layout",
};

export default function AdminLayout({ children }) {
  return (
    <>
        {/* <Navbar/> */}
        <div className="m-2 bg-blue-200 text-xl">Admin navbar</div>
        {children}
        <div className="m-2 bg-blue-200 text-xl">Admin Footer</div>
        {/* <Footer/> */}
    </>
     
  );
}
