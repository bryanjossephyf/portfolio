import React, { useState } from "preact/compat";
import "../portfolio/portafolio.css"
import Menu from "./Menu";


export default function Portfolio() {
  const [items, setItems] = useState(Menu);
  //
  const filtroMenu = (cateogriaItem) => {
    const updateItem = Menu.filter((curlElem)=>{
      return curlElem.category === cateogriaItem
    })


    setItems(updateItem)
  }

  return (
    <section class="work container section" id="work">
      <h2 class="section__title">Poryectos</h2>

      <div class="work__filters">
        <span class="work__item" onClick={() => setItems(Menu)}>Todos</span>
        <span class="work__item" onClick={()=> filtroMenu("Marketing")}>Marketing</span>
        <span class="work__item" onClick={()=> filtroMenu("Code")}>Code</span>
      </div>

      <div class="work__container grid">
        {items.map((elem) => {
          const { id, image, title, category } = elem;
          return (
            <div className="work__card" key={id}>
              <div className="work__thumbnail">
                <img src={image} alt="proyects-hero" className="work__img" />
                <div className="work__mask"></div>
              </div>

              <span className="work__category">{category}</span>
              <h3 className="work__title">{title}</h3>
              <a href="#" className="work__button">
                <i className="icon-link work__button-icon"></i>
              </a>
            </div>
          );
        })}
      </div>

    </section>
  );
}
