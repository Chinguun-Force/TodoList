import Image from "next/image";
import Title from "@/components/Title";
import Input from "@/components/Input";
import Status from "@/components/Status";
import Descr from "@/components/Descr";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center flex-col">
      <div className="w-[377px] h-[290px] shadow-lg rounded-lg px-[16px] py-[24px] flex flex-col gap-[20px]">
        <Title />
        <Input />
        <Status />
        <Descr />
        <Footer />
      </div>
    </div>
  );
}
