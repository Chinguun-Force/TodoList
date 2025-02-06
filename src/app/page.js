'use client'
import { useState } from "react";
import Title from "@/components/Title";
import Input from "@/components/Input";
import Descr from "@/components/Descr";
import Footer from "@/components/Footer";
export default function Home() {
  const [tasks, setTasks] = useState([]);
  return (
    <div className="flex h-screen items-center justify-center flex-col bg-slate-100">
      <div className="min-w-[377px] min-h-[290px] shadow-xl rounded-lg px-[16px] py-[24px] flex flex-col gap-[20px] bg-white">
        <Title/>
        <Input setTasks = {setTasks}/>
        <Descr tasks = {tasks} setTasks = {setTasks}/>
        <Footer/>
      </div>
    </div>
  );
}
