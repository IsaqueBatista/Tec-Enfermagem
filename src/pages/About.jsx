import Image from "next/image";
import React from "react";
import myImage from "../../public/assets/Photo-About.jpeg";
import Link from "next/link";

export default function About() {
  return (
    <>
      <div className="w-full md:h-screen p-2 flex items-center py-16">
        <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 px-2 py-16">
          <div className="col-span-2">
            <h2 className="py-4">Quem sou eu</h2>
            <p className="py-2 text-gray-600">Meu nome é Josy Freitas</p>
            <p className="py-2 text-gray-600">
              <span>
                <i>
                  Sou técnica de enfermagem, nascida em Barreiras de Jacuruna,
                  município de Jaguaripe. Atuei na profissão por 3 anos em um
                  posto de saúde da família. Decidi mudar para a
                  cidade de Salvador e fazer uma especialização em Home Care
                  para trabalhar com pacientes acamados em cuidados paliativos,
                  pois sempre foi meu desejo cuidar de pessoas de forma mais
                  próxima. Meu objetivo é ajudar pessoas nos momentos mais
                  delicados de suas vidas. Há 4 anos, trabalho por uma
                  cooperativa de Home Care, prestando serviços em atendimentos
                  com plantões de 24 horas ou 12 horas. Também trabalho de forma
                  particular nos tempos livres, realizando procedimentos de
                  enfermagem no domicílio sempre que solicitada. Alguns exemplos
                  de procedimentos que realizo são: banho no leito,
                  administração de medicação e, principalmente, curativos. É
                  prazeroso para mim ver a evolução de cada lesão e proporcionar
                  o alívio e conforto a cada paciente.
                </i>
              </span>
            </p>
            <Link href="/Servicos">
              <p className="py-2 text-gray-600 underline cursor-pointer">
                Confira meus serviços.
              </p>
            </Link>
          </div>
          <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-1 hover:scale-105 ease-in duration-300">
            <Image className="rounded-xl" src={myImage} alt="Minha foto" />
          </div>
        </div>
      </div>
    </>
  );
}
