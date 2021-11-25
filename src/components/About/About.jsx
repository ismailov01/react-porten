import React from "react";
import "./About.css";
import oMagazine from '../../images/О магазине.svg'
import Categories from '../../images/Категории.svg'
import rassylka from '../../images/РАссылка.svg'

const About = () => {
  return (
    <div>
      <div className='mainAbout'>
          
        <div className="block">
          <img src={oMagazine} alt="" />
          <p className='text1'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi semper
            viverra nunc cursus tortor lectus nunc nulla nibh. Egestas amet
            consectetur vel vitae aliquam dictum suspendisse. Lobortis eget
            consequat, tellus et et sed turpis. Pretium quisque vitae, amet,
            porttitor odio ultricies massa pharetra leo. Et ipsum urna fames in
            sit mi ultrices nisi, nunc.
          </p>
        </div>
        <div className="block">
          <img src={Categories} alt="" /> <br />
          <button>Часы</button>
          <button>Браслеты</button>
          <button>Ремни</button>
          <button>Ювелирные изделия</button>
          <button>Запонки</button>
        </div>
        <div className="block">
          <img src={rassylka} alt="" />
          <p className='text1'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi semper
            viverra nunc cursus tortor lectus nunc nulla nibh.
          </p>
          <input style={{padding:'8px 15px'}} type="email" placeholder='Ваша почта'/> <button>Подписаться</button>
        </div>
      </div>
    </div>
  );
};

export default About;
