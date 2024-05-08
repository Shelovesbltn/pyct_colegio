export const Content = () => {
    let Content = document.createElement('Content');

    Content.innerHTML = `
    <div id="root" style="text-align: center; color: black;"> </div>

    <div class="content1" style="text-align: center;"> <img src="./app/multimedia/cropped-Favicon-01.png" alt=""> </div>

    <ul>
    <li><a href="#home">Inicio</a></li>
    <li><a href="#news">Contactenos</a></li>
    <li><a href="#contact">Matriculas</a></li>
    <li><a href="#about">Inciar Sesión</a></li>
  </ul>


    <div class="container">

    
        <div class="producto">
        <h3 class="produto__title">Nuestro plantel educativo</h3>
            <img src="./app/multimedia/cornare22.jpg" alt="" class="J4MTRS">
          <div class="productDescription">
          </div>
        </div><!--Fin producto 2-->

        <div class="producto">
        <h3 class="produto__title">Agradable ambiente educativo</h3>
            <img src="./app/multimedia/cornare33.jpg" alt="" class="J4MTRS">
          <div class="productDescription">
          </div>
        </div><!--Fin producto 2-->

    </div>
 
    `
    return Content;
}