import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";

const Main = () => {
  return (
    <div className="mb-0 w-full h-screen text-center ">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div className="mt-10">
          <h1 className="py-4 text-gray-700">
            Olá, sou <span className="text-[#5651e5]">Josy Freitas</span>.
          </h1>
          <h1 className="py-4 text-gray-700">Técnica Enfermagem</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            mollitia, totam voluptatibus architecto, quaerat officia rem tempore
            sint sapiente voluptatem magnam amet nisi quis harum commodi saepe
            quasi maxime iste.
          </p>
          <div className="flex items-center gap-4 justify-center max-w-[330px] m-auto py-4">
            <Link href="/Contact">
              <div
                title="Entre em contato"
                className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer 
                hover:scale-110 ease-in duration-300"
              >
                <AiOutlineMail />
              </div>
            </Link>
            <a
              href="https://wa.me/557192236779?text=Oi%20Josy,%20eu%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20Procedimentos."
              target="_blank"
              rel="noreferrer"
            >
              <div
                title="WhatsApp"
                className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer 
                      hover:scale-110 ease-in duration-300"
              >
                <FaWhatsapp />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
