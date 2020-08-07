import React from 'react';

import PageDefault from '../../components/PageDefault';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';

function Home() {
    return (
      <div>
        <PageDefault>
          <BannerMain 
            vidoTitle={dadosIniciais.categorias[0].videos[0].titulo}
            url={dadosIniciais.categorias[0].videos[0].url}
            videoDescription={"O que é o front End?"}
          />
        </PageDefault>
      </div>
    );
  }

  export default Home;