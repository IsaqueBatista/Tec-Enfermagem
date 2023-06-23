import React from "react";
import { FaBook, FaWhatsapp } from "react-icons/fa";

const ServiceItem = ({ tittle, paragrafo, mostrarBotao }) => {
  return (
    <section>
      <div className="relative flex items-center h-auto w-full shadow-xl hover:scale-105 duration-800 ease-in transform transition-all shadow-gray-500 rounded-xl p-1 group bg-gradient-to-r from-purple-900 to-cyan-400 bg-gradient-to-br from-[#4815AB] via-[#4A5DC7] to-[#4B8FDA]">
        <article className="mx-2 flex p-2 ">
          <div className=" text-white my-2">
            <FaBook className=" w-6 h-6" />
          </div>

          <div className="ml-2 px-6">
            <h4 className="text-1xl text-white ">{tittle}</h4>
            <small className=" text-white">{paragrafo}</small>
            {mostrarBotao && (
              <a
                href="https://wa.me/557192236779?text=Oi%20Josy,%20eu%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20Procedimentos."
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className="bg-[#f72585] rounded-full shadow-md shadow-gray-600 px-3 py-1 mt-2 gap-1 text-white cursor-pointer 
                hover:scale-105 ease-in duration-300 flex items-center justify-center"
                >
                  <FaWhatsapp/> Fale comigo 
                </div>
              </a>
            )}
          </div>
        </article>
      </div>
    </section>
  );
};

export default ServiceItem;
