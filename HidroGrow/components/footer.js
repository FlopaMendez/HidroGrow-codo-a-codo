class Footer  extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `

      <footer class="footer">
      <div class="grid-item col1">
          <h3>
              Suscribite al newsletter para recibir tips y novedades.
          </h3>
          <form class="suscripcion">
              <label for="input-mail"></label>
              <input class="mail" type="mail" id="input-mail" placeholder="Ingrese su email">
              <input class="enviar" type="submit" value="ENVIAR">
          </form>

          <img class="logo-footer" src="statics/logo-white.svg" alt="logo HidroGrow">
          <!--Logo-->

      </div>
      <div class="grid-item col2">
          <!--Div Menu-->
          <ul class="botones menu">
              <!--Lista Menu-->

              <li><a href="index.html#hola">Hola</a></li>
              <li><a href="index.html#como-funciona">Cómo funciona</a></li>
              <li><a href="index.html#beneficios">Beneficios</a></li>
              <li><a href="index.html#cultivos">Cultivos</a></li>
              <li><a href="index.html#especificaciones">Especificaciones</a></li>
              <li><a href="comprar.html">Compra</a></li>
              <li><a href="sign-in.html">Iniciar Sesión</a></li>
          </ul>
          <hr>
          <ul class="botones legales">
              <li><a href="#">Términos y condiciones</a></li>
              <li><a href="#">Política de privacidad</a></li>
          </ul>
          <hr>
          <div class="iconos-social">
              <!--Redes sociales, imagenes href-->

              <a class="icon" href="#" target="_blank"><i class="fa-brands fa-square-facebook"></i></a>

              <a class="icon" href="#" target="_blank"><i class="fa-brands fa-twitter"></i></a>

              <a class="icon" href="#" target="_blank"><i class="fa-brands fa-youtube"></i></a>

              <a class="icon" href="#" target="_blank"><i class="fa-brands fa-instagram"></i></a>


          </div>
      </div>

      <aside class="grid-item col3">
          <!--aside Tel, Mail, legales-->
          <div class="tel-mail">
              <a class="icon tel" href="tel:+54 11 0000 0000"><i class="fa-sharp fa-solid fa-phone"></i></a>
              <p>+54 11 0000 0000</p>

              <a class="icon mail" href="mailto:info@hidrogrow.com"><i class="fa-solid fa-envelope"></i></a>
              <p>info@hidrogrow.com</p>
          </div>
          <div class="legales">

              <p class="leg1">The BluetoothTM word mark and logos are registered trademarks owned by the Bluetooth
                  SIG, Inc. and any.</p>

              <p class="leg2">© 2022 The Scotts Company LLC. World rights reserved</p>

          </div>
      </aside>


  </footer>
      `;
    }
  }
  
  customElements.define('footer-component', Footer);