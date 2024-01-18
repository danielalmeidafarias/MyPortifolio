import React from "react";
import ProjectImage from "./ProjectImage";

import ToDoList from "../assets/img/projects/js_to_do_list.png";
import ThemeSwitcher from "../assets/img/projects/theme_switcher.png";
import CutOptimizer from "../assets/img/projects/cutoptimizer.png";
import Rocketflix from "../assets/img/projects/rocketflix.png";
import NetflixClone from "../assets/img/projects/netflixclone.png";
import CasaVerde from "../assets/img/projects/CasaVerde.png";

const projects = () => {
  return (
    <div id="projects" className="flex flex-col items-center w-screen pb-12">
      <h1 className="font-extrabold text-4xl mb-3 w-full text-center">
        Principais Projetos
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 items-around gap-4">
        <ProjectImage
          title="Casa Verde e-commerce"
          content="E-commerce de plantas criado com React utilizando e Express. Possui função de login com Google Oauth2, assinatura de Newsletter com nodemailer e processamento de pedidos e pagamento com Stripe."
          src={CasaVerde}
          github="https://github.com/danielalmeidafarias/api-casa-verde"
          href="https://github.com/danielalmeidafarias/casa-verde"
        />
        <ProjectImage
          title="CutOptimizer"
          content="Aplicação fullstack desenvolvida para otimização de cortes em marcenaria. Possui versão mobile (confira o repositório)"
          src={CutOptimizer}
          github="https://github.com/danielalmeidafarias/cutOptimizer/tree/main"
          href="https://cutoptimizer.netlify.app/"
        />
        <ProjectImage
          title="Api Rocketflix"
          content="Api que mapea os id's de filmes do banco de dados TMDB e devolver um filme aleatório!"
          src={Rocketflix}
          github="https://github.com/danielalmeidafarias/Rocketflix"
          href="https://github.com/danielalmeidafarias/Rocketflix"
        />

        <ProjectImage
          title="Netflix Clone"
          content="Clone fullstack do netflix utilizando Next.js, MongoDb e NextAuth 2.0"
          src={NetflixClone}
          github="https://github.com/danielalmeidafarias/Netflix-clone"
          href="https://github.com/danielalmeidafarias/Netflix-clone"
        />
      </div>
    </div>
  );
};

export default projects;
