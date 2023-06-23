import React from "react";
import ServiceItem from "@/components/ServiceItem";

export default function Servicos() {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto px-2 py-16 pt-10">
        <h2 className="py-4 flex items-center justify-center text-3xl font-bold text-[#4E4C5E]">
          Nossos serviços
        </h2>
        <p className="mb-4 flex items-center justify-center font-semibold text-[#4E4C5E]">
        Soluções completas para cuidados e bem-estar.
        </p>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 mt-10 cursor-default">
          <ServiceItem
            tittle="Home Care"
            paragrafo="Atendimento em domicílio"
          />
          <ServiceItem
            tittle="Curativos"
            paragrafo="Curativo especializado para feridas.
            "
          />
          <ServiceItem
            tittle="Higiene"
            paragrafo="Higiene personalizada e cuidados diários.
            "
          />
            <ServiceItem
              tittle="Lavagem intestinal"
              paragrafo="Lavagem intestinal para o conforto digestivo."
            />
            <ServiceItem
              tittle="Administração de medicamentos"
              paragrafo="Administração segura e precisa de medicamentos."
            />
          <ServiceItem
            tittle="glicemia capilar"
            paragrafo="Monitoramento regular da glicemia capilar."
          />
          <ServiceItem
            tittle="Treinamentos"
            paragrafo="Treinamento para família/cuidador na manipulação de sonda gástrica e nasoenteral"
          />
          <ServiceItem
            tittle="Outros procedimentos"
            mostrarBotao={true}
          />
        </div>
      </div>
    </div>
  );
}
