import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div className="mb-0 w-full h-screen text-center ">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div className="mt-10">
          <p className="uppercase text-sm tracking-widest text-gray-600 mt-10">
            Vamos juntos
          </p>
          <h1 className="py-4 text-gray-700">
            Olá, sou <span className="text-[#5651e5]">Josy Freitas</span>.
          </h1>
          <h1 className="py-4 text-gray-700">Desenvolvedor Front-End</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            mollitia, totam voluptatibus architecto, quaerat officia rem tempore
            sint sapiente voluptatem magnam amet nisi quis harum commodi saepe
            quasi maxime iste.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">

            <Link href="/Contact">
              <div
                title="Entre em contato"
                className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer 
                hover:scale-110 ease-in duration-300"
              >
                <AiOutlineMail />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
