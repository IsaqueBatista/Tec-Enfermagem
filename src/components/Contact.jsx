import Image from "next/image";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";

import { FaWhatsapp } from "react-icons/fa";
import photoContact from "../../public/assets/Photo-Contact.jpeg";

export default function Contact() {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <h2 className="py-4">Entre em contato</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-3">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={photoContact}
                  alt="/"
                />
              </div>
              <div>
                <h2 className="pt-2">Josy Freitas</h2>
                <p className="pb-2 pt-2">Técnica de Enfermagem</p>
              </div>
              <div>

                <div className="flex items-center gap-10 py-3 pt-1">
                <p className="uppercase">Fale Comigo:</p>

                  <a
                    href="https://wa.me/557192236779?text=Oi%20Josy,%20eu%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20Procedimentos."
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div title="WhatsApp"
                      className="bg-white rounded-full shadow-lg shadow-gray-500 p-5 cursor-pointer 
                    hover:scale-110 ease-in duration-300"
                    >
                      <FaWhatsapp />
                    </div>
                  </a>

                  <a
                    href="mailto:josyfreitas247 @gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div title="E-mail"
                      className="bg-white rounded-full shadow-lg shadow-gray-500 p-5 cursor-pointer 
                hover:scale-110 ease-in duration-300"
                    >
                      <AiOutlineMail />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-3">
              <form
                action="https://formsubmit.co/josyfreitas247@gmail.com"
                method="POST"
              >
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <input type="hidden" name="_captcha" value="false" />
                  <input
                    type="hidden"
                    name="_next"
                    value="https://tela-obrigado-portfolio.netlify.app/"
                  />

                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-1">Nome</label>
                    <input
                      className="border-2 rounded-lg p-1 flex border-gray-300"
                      type="text"
                      name="name"
                      placeholder="Nome"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-1">Telefone</label>
                    <input
                      className="border-2 rounded-lg p-1 flex border-gray-300"
                      type="number"
                      name="phone"
                      placeholder="Digite seu telefone"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-1">Email</label>
                  <input
                    className="border-2 rounded-lg p-1 flex border-gray-300"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-1">Assunto</label>
                  <input
                    className="border-2 rounded-lg p-1 flex border-gray-300"
                    type="text"
                    name="subject"
                    placeholder="Assunto"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-1">Mensagem</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows={6}
                    type="text"
                    name="message"
                    placeholder="Digite sua mensagem..."
                  ></textarea>
                </div>
                <button className=" w-full p-2 text-gray-100 mt-4">
                  Enviar mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
