import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import Care from "@/Components/Care";
import Image from "next/image";
import Banner from "@/Components/Banner";
import Products from "@/Components/Products";

export default function Home() {
  return (
    <div>
      {/* <Navbar></Navbar>  */}
      <Banner></Banner>
      <Products></Products>
      <Care></Care>
      {/* <Footer></Footer>  */}
    </div>
  );
}