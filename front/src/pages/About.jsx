import React from 'react'
import './about.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div className="body">
      <Navbar />
    <div className='container'>
      <img className='left_img' src="https://i.pinimg.com/564x/98/7d/92/987d92558c0659975357382316c31a71.jpg" alt="" />
      <img className='right_img' src="https://i.pinimg.com/564x/5e/1c/bc/5e1cbcee6eb6acb2f7b8f0bf5a7bda96.jpg" alt="" />
      <h1>Haqqımızda</h1>
      <h2>Xoş Gəlmisiniz!</h2>
      <p className='textt'>AMERICAN STEAKHOUSE olaraq, Amerikanın məşhur steakhouse ənənəsini sizə təqdim etməkdən qürur duyuruq. İllərin təcrübəsi və ehtirası ilə birləşmiş menyumuz, ən yüksək keyfiyyətli ətləri və diqqətlə seçilmiş tərkibləri bir araya gətirir. Missiyamız, hər parçada unudulmaz bir dad təcrübəsi yaşatmaq və qonaqlarımıza isti, səmimi bir mühit təqdim etməkdir.</p>
      <h3>Tariximiz</h3>
      <p className='textt'>AMERICAN STEAKHOUSE, 2009 tarixindən bəri dad səfərinə davam edir. Təsisçimiz John Doe, ətə olan ehtirasını və yemək bişirmə sənətini birləşdirərək bu xüsusi məkanı yaratdı. Əvvəlcə kiçik bir ailə müəssisəsi kimi başlayan restoranımız, qısa müddətdə bölgənin ən sevilən steakhouse-larından biri oldu.</p>
      <h3>Keyfiyyət və Təzəlik</h3>
      <p className="textt">Ətlərimizi, ən yaxşı fermalardan diqqətlə seçirik və hər birini ustalıqla işlədirik. Uzun müddət dinləndirilmiş və diqqətlə marinad edilmiş ətlərimiz, ızgarada mükəmməl şəkildə bişirilərək masalarınıza gəlir. Yanında təqdim etdiyimiz təzə tərəvəzlər, ev yapımı souslar və ləzzətli yan məhsullarla yemək təcrübənizi tamamlayırıq.</p>
      <h3>Komandamız</h3>
      <p className="textt">AMERICAN STEAKHOUSE'nın arxasındakı komanda, yemək bişirmə sənətinə ehtiraslı peşəkarlardan ibarətdir. Aşpazlarımız, hər yeməyi diqqətlə hazırlayarkən, servis komandamız qonaqlarımıza qüsursuz bir təcrübə təqdim etmək üçün çalışır. Qonaq məmnuniyyəti bizim üçün hər şeydən önəmlidir və bu səbəblə hər detala diqqət yetiririk.</p>
      <h3>Missiyamız</h3>
      <p className="textt">Missiyamız, sadəcə bir yemək deyil, bir təcrübə təqdim etməkdir. Hər qonağımızın özünü evində hiss edəcəyi, keyfiyyətli və ləzzətli yeməklərimizi dadarkən unudulmaz xatirələr yaradacağı bir mühit yaratmaq üçün buradayıq. Dad, keyfiyyət və səmimiyyət; bizim əsas dəyərlərimizdir.</p>
      <h3>Sizi Gözləyirik</h3>
      <p className="textt">AMERICAN STEAKHOUSE'na gəldiyinizdə, Amerikan steakhouse ənənəsinin ən yaxşısını yaşayacaqsınız. Sizləri qarşılamaqdan böyük məmnuniyyət duyacağıq. Dad səfərimizə qoşulmaq və bənzərsiz bifteklərimizin dadını çıxarmaq üçün dərhal rezervasiya edin.</p>
    </div>
    <Footer/>
    </div>

  )
}

export default About