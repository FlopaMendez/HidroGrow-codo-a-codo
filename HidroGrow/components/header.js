class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `

        <header class="encabezado" id="encabezado">
            <!--Logo-->
            <img class="logo" src="statics/logo.svg" alt="">

            <input type="checkbox" id="menu-check">
            <label for="menu-check" id="menu">
                <span id="menu-abrir">&#9776;</span>
                <span id="menu-cerrar">x</span>
            </label>

            <nav class="navBar">
                <!--NavBar-->
                <ul class="botones">
                    <!--Links secciones-->
                    <li><a class="link" href="index.html#hola">HOLA</a></li>
                    <li><a class="link" href="index.html#como-funciona">CÓMO FUNCIONA</a></li>
                    <li><a class="link" href="index.html#inicio-beneficios">BENEFICIOS</a></li>
                    <li><a class="link" href="index.html#cultivos">CULTIVOS</a></li>
                    <li><a class="link" href="index.html#especificaciones">ESPECIFICACIONES</a></li>
                    <li><a class="comprar" href="comprar.html">COMPRAR</a></li>
                    <li>
                        <p class="linea">|</p>
                    </li>
                    <!--Links Iniciar Sesion/registrarse-->
                    <li><a class="link sign-in" href="sign-in.html">INICIAR SESIÓN</a></li>

                </ul>

            </nav>
        </header>
      `;
    }
  }
  
  customElements.define('header-component', Header);