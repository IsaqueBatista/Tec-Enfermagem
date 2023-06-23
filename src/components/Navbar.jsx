import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { useRouter } from "next/router";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const router = useRouter();

  useEffect(() => {
    setNavBg("linear-gradient(to right, #4815AB, #4B8FDA)");
    setLinkColor("#1f2937");
  }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ background: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-10 2xl:px-16">
        <Link href="/">
          <h3 className="text-xl text-white font-bold ml-5">Josy Freitas</h3>
        </Link>

        <div className="mr-5 flex items-center justify-center">
          <ul
            style={{ color: `${linkColor}` }}
            className="hidden md:flex gap-2 items-center justify-center"
          >
            <Link href="/">
              <li className="ml-4 mr-4 text-sm text-white uppercase hover:border-b">
                Home
              </li>
            </Link>
            <Link href="/About">
              <li className="ml-4 mr-4 text-sm text-white uppercase hover:border-b">
                Sobre
              </li>
            </Link>
            <Link href="/Servicos">
              <li className="ml-4 mr-4 text-sm text-white uppercase hover:border-b">
                Serviços
              </li>
            </Link>
            <Link href="/Contact">
              <li className="ml-4 mr-4 text-sm text-white uppercase hover:border-b">
                Contato
              </li>
            </Link>
            <a
                href="https://wa.me/557192236779?text=Oi%20Josy,%20eu%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20Procedimentos."
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className="bg-[#f72585] rounded-lg shadow-md shadow-gray-600 px-3 py-1 gap-1 text-white cursor-pointer 
                hover:scale-105 ease-in duration-300 flex items-center justify-center"
                >
                  <FaWhatsapp/> Marque uma consulta 
                </div>
              </a>
          </ul>

          <div onClick={handleNav} className="md:hidden text-white cursor-pointer">
            <AiOutlineMenu size={20} />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-gradient-to-br from-[#4815AB] via-[#4A5DC7] to-[#4B8FDA] p-10 ease-in duration-500"
              : "fixed left-[-400%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <h2 className="text-xl font-bold text-white">Josy Freitas</h2>
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full text-black bg-slate-300 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4 text-gray-300 text-center">
                Vamos juntos
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm text-gray-300">
                  Home
                </li>
              </Link>
              <Link href="/About">
                <li onClick={() => setNav(false)} className="py-4 text-sm text-gray-300">
                  Sobre
                </li>
              </Link>
              <Link href="/Servicos">
                <li onClick={() => setNav(false)} className="py-4 text-sm text-gray-300">
                  Serviços
                </li>
              </Link>
              <Link href="/Contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm text-gray-300">
                  Contato
                </li>
              </Link>
            </ul>
            <div className="pt-40 flex items-center ">
              <p className="uppercase w-full text-white">
                Entre em contato:
              </p>
              <div className="flex items-center justify-center gap-4 my-4 w-full sm:w-[80%]">
                <a
                  href="https://wa.me/557192236779?text=Oi%20Josy,%20eu%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20Procedimentos."
                  target="_blank"
                  rel="noreferrer"                  
                >
                  <div
                    title="WhatsApp"
                    className="bg-slate-300 rounded-full shadow-lg p-4 cursor-pointer 
                    hover:scale-110 ease-in duration-300 text-black "
                  >
                    <FaWhatsapp />
                  </div>
                </a>

                <Link href="/Contact">
                  <div
                    onClick={() => setNav(false)}
                    title="Email"
                    className="rounded-full bg-slate-300 text-black shadow-lg p-4 cursor-pointer 
                hover:scale-105 ease-in duration-300"
                  >
                    <AiOutlineMail />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
