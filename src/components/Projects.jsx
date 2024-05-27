import React from "react";
import ProjectImage from "./ProjectImage";

import CutOptimizer from "../assets/img/projects/cutoptimizer.png";
import CasaVerde from "../assets/img/projects/CasaVerde.png";
import MoviesApi from "../assets/img/projects/moviesapi.png";
import MarketPlace from "../assets/img/projects/marketplace.png";


const projects = () => {
  return (
    <div id="projects" className="flex flex-col w-screen pb-12 h-auto items-center">
      <h1 className="font-extrabold text-4xl mb-3 w-full text-center">
        Principais Projetos
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 items-around gap-4">
        <ProjectImage
          title="Casa Verde e-commerce"
          content="E-commerce de plantas criado com React utilizando e Express. Possui função de login com Google Oauth2, assinatura de Newsletter com nodemailer e processamento de pedidos e pagamento com Stripe."
          src={CasaVerde}
          github="https://github.com/danielalmeidafarias/api-casa-verde"
          href="https://casa-verde-lovat.vercel.app"
        />
        <ProjectImage
          title="CutOptimizer"
          content="Aplicação fullstack desenvolvida para otimização de cortes em marcenaria. Possui versão mobile (confira o repositório)"
          src={CutOptimizer}
          github="https://github.com/danielalmeidafarias/cutOptimizer/tree/main"
          href="https://cut-optimizer-one.vercel.app"
        />
        <ProjectImage
          title="MarketPlace API"
          content="Api de marketplace, estilo mercado livre. Criado com Nest.js e integração com Pagar.me"
          src={MarketPlace}
          github="https://github.com/danielalmeidafarias/marketplace_api"
          href="https://apimarketplace-danielalmeidafarias-projects.vercel.app/api/api"
        />

        <ProjectImage
          title="Movies API"
          content="Api para cadastro de filmes. Criada com Nest.js, Redis e Docker"
          src={MoviesApi}
          github="https://github.com/danielalmeidafarias/movies_api"
          href="https://vercelapimovies-danielalmeidafarias-projects.vercel.app/api/api"
        />
      </div>
    </div>
  );
};

export default projects;
