import React from "react";

import { Helmet } from "react-helmet";
import { send } from "emailjs-com";
import handleInput from "../reactHooks/handleInput";
import Header from "../components/header";
import PrimaryPinkButton from "../components/primary-pink-button";
import PrimaryBlueButton from "../components/primary-blue-button";
import FeatureCard from "../components/feature-card";
import ListItem from "../components/list-item";
import Footer from "../components/footer";
import "./home.css";
import { RiWhatsappFill } from "react-icons/ri";
import { Scrollchor } from "react-scrollchor";
import Swal from "sweetalert2";

const Home = (props) => {
  const name = handleInput();
  const mail = handleInput();
  const text = handleInput();
  const regExMail = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi;
  const onClick = (e) => {
    if(!regExMail.test(mail.value)){
      Swal.fire({
        icon: "error",
        title: "Oops",
        text: `Mail no Válido`,
      });
      return
    }
    const temp = {
      from_name: name.value,
      reply_to: mail.value,
      message: text.value,
    };

    try {
      send("service_form", "templateId_01", temp, "m_d7OrgOv2z3m-8Yr").then(
        Swal.fire({
          icon: "success",
          title: "Mensaje Enviado. Gracias!",
        })
      );
      
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops",
        text: `${error}`,
      });
    }
  };
  return (
    <div className="home-container">
      <Helmet>
        <title>Dysam Soft</title>
        <meta property="og:title" content="Dysam Soft" />
      </Helmet>
      <Header></Header>
      <div className="home-home" id="home">
        <div className="home-container01">
          <div className="home-card">
            <h1 className="home-text BigHeading">Soluciones Digitales</h1>
            <span className="home-text01 Lead">
              <span>Diseño y Soluciones a Medida</span>
            </span>
            <span className="home-text01 Lead">
              <span>
                Ayudamos a emprendedores en crecimiento creando soluciones digitales a medida que potencien su negocio
              </span>
            </span>
            <div className="home-container02">
              <div className="home-container03">
                <Scrollchor to="#contact">
                <PrimaryPinkButton button="Contactanos"></PrimaryPinkButton>
                </Scrollchor>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        alt="image"
        src="/playground_assets/curved6-1500h.jpg"
        className="home-image"
      />
      <div className="home-divider"></div>

      <section className="home-services" id="services">
        <h2 className="home-text04 HeadingOne">
          <span className="BigHeading">Qué hacemos</span>
        </h2>
      </section>

      <section className="home-services">
        <FeatureCard
          text={[
            "Diseño Full Responsive",
            "Desarrollo",
            "Publicación en Internet",
            "Registro de Dominio",
            "Mantenimiento de Dominio",
            "Hosteo",
          ]}
          subtitle="Páginas de contacto, Portfolios"
          title="Páginas Web"
        ></FeatureCard>
        <FeatureCard
          text={[
            "Diseño Full Responsive",
            "Desarrollo",
            "Interfaz de Gestión de Aplicación",
            "Implementación Front & Back",
            "Mantenimiento del Servicio",
            "Registro de Dominio",
            "Mantenimiento de Dominio",
            "Hosteo",
          ]}
          subtitle="Tiendas Online, Galerías Online, Blogs"
          title="Aplicaciones Web"
        ></FeatureCard>
        <FeatureCard
          text={[
            "Diseño y Arquitectura",
            "Desarrollo",
            "Protecciones y Seguridad",
            "Interfaz de Escritorio y Celular",
            "Implementación",
            "Mantenimiento del Sistema",
            "Hosteo",
          ]}
          subtitle="Sistemas y Aplicaciones a medida"
          title="Desarrollo de Software"
        ></FeatureCard>
      </section>

      <div className="home-divider"></div>

      <section className="home-how-pricing" id="process">
        <div className="home-how">
          <h2 className="home-text04 HeadingOne">
            <span className="BigHeading">Desarrollo desde Cero</span>
          </h2>
          <h3 className="home-text06 HeadingTwo">
            <span className="home-text07">Cómo trabajamos</span>
            <br></br>
          </h3>
          <span className="home-text08">
            <span className="home-text09">
              Decinos qué necesitas, nosotros lo volvemos digital
            </span>
          </span>
        </div>
        <div className="home-how-content">
          <div id="firstProcess">
            <div className="home-container04">
              <div className="home-container06 you">
                <img src="./img/you2.png" />
                <ListItem
                  title="1. Vos definís"
                  body="Tomamos todas tus especificaciones, requerimientos y necesidades, y te ayudamos a definir las ideas que tengas"
                ></ListItem>
              </div>
            </div>
            <div className="home-container04">
              <div className="home-container06 we">
                <img src="./img/we2.png" className="mobile" />
                <ListItem
                  title="2. Nosotros Desarrollamos"
                  body="Traducimos todo a un solución digital real"
                ></ListItem>
                <img src="./img/we2.png" className="desktop" />
              </div>
            </div>
            <div className="home-container04">
              <div className="home-container06 you">
                <img src="./img/you2.png" />
                <ListItem
                  title="3. Vos aprobás"
                  body="Te presentamos el producto terminado, contemplando todas tus indicaciones. Y al final..."
                ></ListItem>
              </div>
            </div>
            <div className="home-container04">
              <div className="home-container06 we">
                <img src="./img/we2.png" className="mobile" />
                <ListItem
                  title="4. Nosotros Implementamos"
                  body="Entregamos tu WebApp/WebPage/Software funcionando y online"
                ></ListItem>
                <img src="./img/we2.png" className="desktop" />
              </div>
            </div>
            <div className="home-container04">
              <div className="home-container06 you">
                <img src="./img/you2.png" />
                <ListItem
                  title="5. Vos usas"
                  body="Enfocate en tu negocio"
                ></ListItem>
              </div>
            </div>
            <div className="home-container04">
              <div className="home-container06 we">
                <img src="./img/we2.png" className="mobile" />
                <ListItem
                  title="6. Nosotros mantenemos"
                  body="Nos encargamos de que siempre esté funcionando"
                ></ListItem>
                <img src="./img/we2.png" className="desktop" />
              </div>
            </div>
          </div>
        </div>

        <div className="home-divider"></div>

        <div className="profile-contact" id="contact">
          <div className="profile-container09">
            <div className="profile-form">
              <span className="profile-text20 Lead">
                No dudes en contactarnos!
              </span>
              <form className="profile-form1">
                <label className="profile-text21 Label">Mi nombre es</label>
                <input
                  type="text"
                  placeholder="Nombre"
                  className="profile-textinput Small input"
                  {...name}
                />
                <label className="profile-text21 Label">Email</label>
                <input
                  type="email"
                  placeholder="email"
                  className="profile-textinput Small input"
                  {...mail}
                />
                <label className="profile-text23 Label">Contanos qué necesitas</label>
                <textarea
                  rows="4"
                  placeholder="Consulta"
                  className="profile-textarea textarea Small"
                  {...text}
                ></textarea>
              </form>
              <div className="profile-container10">
                <div className="profile-container11">
                  <PrimaryBlueButton
                    text="Enviar"
                    onClick={onClick}
                  ></PrimaryBlueButton>
                </div>
              </div>
            </div>
            <div className="profile-info">
              <div className="profile-container12">
                <h3 className="HeadingTwo">
                  <span>Información </span>
                  <span>de Contacto</span>
                </h3>
                <span className="profile-text27">
                  En menos de 48hs te respondemos
                </span>
                <div className="profile-container13">
                  <div className="profile-container15">
                    <a href="tel:+5492964528053">
                      <svg viewBox="0 0 1024 1024" className="profile-icon02">
                        <path d="M742 460l-94-94q-18-18-10-44 24-72 24-152 0-18 12-30t30-12h150q18 0 30 12t12 30q0 300-213 513t-513 213q-18 0-30-12t-12-30v-150q0-18 12-30t30-12q80 0 152-24 24-10 44 10l94 94q186-96 282-282z"></path>
                      </svg>
                    </a>
                    <a href={`https://wa.me/2964528053`}>
                      <RiWhatsappFill className="profile-icon02" />
                    </a>
                    <span className="profile-link Small">
                      (+54) 2964 528053
                    </span>
                  </div>
                  <div className="profile-container16">
                    <svg viewBox="0 0 1024 1024" className="profile-icon04">
                      <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                    </svg>
                    <a
                      href="mailto:dysam.soft@gmail.com?subject="
                      className="profile-link1 Small"
                    >
                      dysam.soft@gmail.com
                    </a>
                  </div>
                  <div className="profile-container16">
                    <svg viewBox="0 0 1024 1024" className="profile-icon06">
                      <path d="M512 490q44 0 75-31t31-75-31-75-75-31-75 31-31 75 31 75 75 31zM512 86q124 0 211 87t87 211q0 62-31 142t-75 150-87 131-73 97l-32 34q-12-14-32-37t-72-92-91-134-71-147-32-144q0-124 87-211t211-87z"></path>
                    </svg>
                    <span className="profile-text28 Small">
                      Buenos Aires, Argentina
                    </span>
                  </div>
                  <div className="profile-container16">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="profile-icon06"
                    >
                      <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                    </svg>
                    <span className="profile-text28 Small">@dysam.soft</span>
                  </div>
                </div>
              </div>
              <img
                alt="image"
                src="/playground_assets/wave-1.svg"
                className="profile-image1"
              />
              <div className="profile-container18"></div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Home;
