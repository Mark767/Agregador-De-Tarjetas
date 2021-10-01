
const formulario = document.querySelector( "form" );

const getRandomNumber = () => {
    return Math.floor( Math.random() * 1000 );
};

export const addNewCard = ( event ) => {
    event.preventDefault();
    const imagenTarjeta = document.createElement( "img" );
    const tituloTarjeta = document.createElement( "h3" );
    const parrafoTarjeta = document.createElement( "p" );
    const envaseTarjeta = document.createElement( "section" );
    const seleccionImagenTarjeta = document.createElement( "section" );
    const articuloTarjeta = document.createElement( "article" );

    const lorem = document.createTextNode( "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias perferendis ex, repudiandae dolorum illo illum itaque autem eveniet corporis et obcaecati est provident assumenda fuga aut debitis ab vel voluptas." );
    const titulo = document.createTextNode( "Card titulo" );

    articuloTarjeta.classList.add( "card" );
    seleccionImagenTarjeta.classList.add( "contenedor-imagen" );
    envaseTarjeta.classList.add( "contenedor-tarjeta" );

    parrafoTarjeta.appendChild( lorem );
    tituloTarjeta.appendChild( titulo );
    imagenTarjeta.src = `https://source.unsplash.com/random/${ getRandomNumber() }`;

    seleccionImagenTarjeta.appendChild( imagenTarjeta );

    envaseTarjeta.appendChild( tituloTarjeta );
    envaseTarjeta.appendChild( parrafoTarjeta );

    articuloTarjeta.appendChild( seleccionImagenTarjeta );
    articuloTarjeta.appendChild( envaseTarjeta );

    document.querySelector( "main" ).appendChild( articuloTarjeta );
};


formulario.addEventListener( "submit", addNewCard, false );
