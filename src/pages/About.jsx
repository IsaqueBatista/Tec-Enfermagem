import Image from "next/image";
import React from "react";
import myImage from "../../public/assets/Photo-Contact.jpeg";
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
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut
              adipisci earum in ex. Nisi neque inventore ipsa sequi,
              reprehenderit, totam perspiciatis quis similique fuga libero harum
              cumque quaerat facilis labore?Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Excepturi mollitia distinctio
              dolorum dolor voluptatibus unde aperiam, iure beatae animi
              incidunt? Commodi, possimus provident! Vitae commodi molestias
              dignissimos consequuntur, iure voluptatibus?Lorem, ipsum dolor sit
              amet consectetur adipisicing elit. Cumque eos maiores quam omnis
              qui possimus fugiat dicta magni voluptas porro ab, pariatur
              distinctio error neque! Dignissimos nam commodi officia
              aspernatur.
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
