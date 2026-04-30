import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import Care from "@/Components/Care";
import Image from "next/image";
import Banner from "@/Components/Banner";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Care></Care>
      <Footer></Footer>
    </div>
  );
}
