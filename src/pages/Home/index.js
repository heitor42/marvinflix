import React from 'react';

import dadosIniciais from '../../data/dados_iniciais.json';
import PageDefault from '../../components/PageDefault';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';

function Home() {
    return (
      <PageDefault>
        <BannerMain 
          vidoTitle={dadosIniciais.categorias[0].videos[0].titulo}
          url={dadosIniciais.categorias[0].videos[0].url}
          videoDescription={"O que é o front End?"}
        />

        {dadosIniciais.categorias.map((categoria) => {
          console.log(categoria);
          if (categoria.titulo === "Front End"){
            return(
              <Carousel 
                ignoreFirstVideo
                key={categoria.titulo}
                category={categoria} 
              />
            )
          }

          return(
            <Carousel 
              key={categoria.titulo}
              category={categoria} 
            />
          )
        })}
      </PageDefault>
    );
  }

  export default Home;