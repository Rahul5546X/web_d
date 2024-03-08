import { Inter } from "next/font/google";
// import "./globals.css";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer"

// this layout is only for the admin it does not overwrite the root layout 
// root layout will also be applied to this admin section and it's own layout will also be applied


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "logout navbar",
  description: "this is inside the admin logout which is inside the adminlayout",
};

export default function AdminLogout({ children }) {
  return (
    <>
        {/* <Navbar/> */}
        <div className="bg-red-200 m-3"> navbar of logout folder</div>
        {children}
        <div className="bg-red-200 m-3">Footer of  logout folder</div>
        {/* <Footer/> */}
    </>
     
  );
}
