import React from "react";
import logoVirtuosa from '../assets/img/logo 1.svg';

function Home() {
    return (
        <nav>
            <input type="checkbox" name="check" id="chk-menu" />
            <label for="chk-menu" class=" btn-menu"><i class="fas fa-bars"></i></label>

            <ul class="nav-menu">
                <li>
                    <a href="" class="active item">INICIO</a>
                </li>
                <li>
                    <a href="./src/views/maquillaje/indexmakeup.html" class="item">MAQUILLAJE <i class="fa-solid fa-angle-down"></i></a>
                    <ul class="submenu">
                        <li><a href="./src/views/maquillaje/subPages/rubor.html">Rubor</a></li>
                        <li><a href="./src/views/maquillaje/subPages/ojos.html">Ojos</a></li>
                        <li><a href="./src/views/maquillaje/subPages/piel.html">Piel</a></li>
                        <li><a href="./src/views/maquillaje/subPages/labios.html">Labios</a></li>
                    </ul>
                </li>
                <li>
                    <a href="./src/views/ropa/index/ropaIndex1.html" class="item">MODA <i class="fa-solid fa-angle-down"></i></a>
                    <ul class="submenu">
                        <li><a href="./src/views/ropa/secondaryPages/productosRS.html">Vestidos</a></li>
                        <li><a href="./src/views/ropa/secondaryPages/diseñaRS.html">Diseña tu look</a></li>
                        <li><a href="./src/views/ropa/secondaryPages/tendenciasRS.HTML">Novedades</a></li>
                        <li><a href="./src/views/ropa/secondaryPages/descuentosRS.html">Promociones</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#" class="item">TIPS <i class="fa-solid fa-angle-down"></i></a>
                    <ul class="submenu">
                        <li><a href="/src/views/tips/maquillaje.html">Tips Maquillaje</a></li>
                        <li><a href="/src/views/tips/ropa.html">Tips Ropa</a></li>
                    </ul>
                </li>

            </ul>
            <div class="logo"><img src={logoVirtuosa} alt="logo" /></div>
            <ul class="nav-menu">

                <li><a href="#" class="item">EXPERIENCIAS</a></li>
                <li><a href="./src/views/nosotros/nosotros.html" class="item">NOSOTROS</a></li>
                <li><a href="./src/views/contacto/contacto.html" class="item">CONTACTO</a></li>

            </ul>
        </nav>
    );
}

export default Home;