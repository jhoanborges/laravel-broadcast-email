@extends('welcome')
@section('content')

<section id="hero" class="layer-0 wf">
    <div class="skew-gradient">
     <div id="particles-js" class="wrapper"></div>

    </div>
    {{--<div class="skew-overlay pattern"></div>--}}
    <div class="container aligner">
        <div class="row aligner-item">
            <div class="col-md-12">
                <h1 class="text-white">Reinventamos la <strong>logística</strong><br>para <strong>e-commerce</strong></h1>
                <!-- <a class="play-video" href="https://www.youtube.com/embed/mrC6y9y4LzU">
                    <div class="circle aligner">
                        <i class="fa fa-fw fa-play aligner-item"></i>
                    </div>
                    <span>Conocé lo que hacemos</span>
                </a> -->
                <p class="lead">
                    Llevá tu negocio online al próximo nivel delegándonos todas las complicaciones de la logística.
                </p>
                <div class="ctas">
                    <a href="#contact" class="btn btn-primary">Solicitá una demo</a>
                </div>
            </div>
        </div>
    </div>
      <a href="#aboutus" data-scroll="smooth" class="mouse-icon hidden-sm"><span class="wheel"></span></a>

</section>


{{--
<div class="hero-wrap js-fullheight mt-5">
  <div class="overlay"></div>
  <div class="container-fluid px-0">
    <div class="row d-md-flex no-gutters slider-text align-items-center js-fullheight justify-content-end">
        <img class="one-third js-fullheight align-self-end order-md-last img-fluid" src="{{ asset('landing/images/undraw_pair_programming_njlp.svg') }}" alt="">
        <div class="one-forth d-flex align-items-center ftco-animate js-fullheight">
                <h1 class="mb-3"><span>El software que soluciona toda tu logística</span></h1>
                <p>Sincroniza todos tus productos y guías desde cualquier lugar, maneja tu inventario en línea, almacénalo, envíalo y rastréalo, ofreciendo una incomparable experiencia de compra a tus clientes.</p>
                <p><a href="#" class="btn  pmd-btn-raised pmd-ripple-effect btn-primary px-4 py-3">¡Cotíza ya!</a></p>
            </div>
        </div>
    </div>
</div>
</div>

--}}
{{--}}
<section class="ftco-domain">
    <div class="container">
        <div class="row d-flex align-items-center">
            <div class="col-lg-5 heading-white mb-4 mb-sm-4 mb-lg-0 ftco-animate">
                <h2>Search Your Domain Name</h2>
                <p>A small river named Duden flows by their place</p>
            </div>
            <div class="col-lg-7 p-5 ftco-wrap ftco-animate">
                <form action="#" class="domain-form d-flex mb-3">
                  <div class="form-group domain-name">
                    <input type="text" class="form-control name px-4" placeholder="Enter your domain name...">
                </div>
                <div class="form-group domain-select d-flex">
                  <div class="select-wrap">
                      <div class="icon"><span class="ion-ios-arrow-down"></span></div>
                      <select name="" id="" class="form-control">
                        <option value="">.com</option>
                        <option value="">.net</option>
                        <option value="">.biz</option>
                        <option value="">.co</option>
                        <option value="">.me</option>
                    </select>
                </div>
                <input type="submit" class="search-domain btn btn-primary text-center" value="Search">
            </div>
        </form>
        <p class="domain-price mt-2">
            <span><small>.com</small> $9.75</span>
            <span><small>.net</small> $9.50</span>
            <span><small>.biz</small> $8.95</span>
            <span><small>.co</small> $7.80</span>
            <span><small>.me</small> $7.95</span>
        </p>
    </div>
</div>
</div>
</section>
--}}
<section class="ftco-section ftco-no-pt ftc-no-pb" id="aboutus">
    {{--<div class="skew-white"></div>--}}
    <div class="container">
        <div class="row">
            <div class="col-lg-6 py-5">
                <img src="{{ asset('img/store.svg') }}" class="img-fluid" alt="">
                <div class="heading-section ftco-animate mt-5">
                    <h2 class="mb-4">Nuestros servicios</h2>
                    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.</p>
                </div>
            </div>
            <div class="col-lg-6 py-5">
                <div class="row">
                    <div class="col-md-6 ftco-animate">
                        <div class="media block-6 services border text-center">
                            <div class="icon d-flex align-items-center justify-content-center">
                                <span class="flaticon-cloud-computing"></span>
                            </div>
                            <div class="mt-3 media-body media-body-2">
                                <h3 class="heading">CONSOLIDAMOS TUS PUNTOS DE VENTA</h3>
                                <p>Controlá todas tus operaciones online desde un único lugar. No vas a tener que entrar a todas tus tiendas todos los días.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 ftco-animate">
                        <div class="media block-6 services border text-center">
                            <div class="icon d-flex align-items-center justify-content-center">
                                <span class="flaticon-cloud"></span>
                            </div>
                            <div class="mt-3 media-body media-body-2">
                                <h3 class="heading">EMBALAMOS TUS PRODUCTOS</h3>
                                <p>Armamos cada orden personalmente, cuidando embalar y empaquetar tus productos según su naturaleza y el destino al que se dirijan.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 ftco-animate">
                        <div class="media block-6 services border text-center">
                            <div class="icon d-flex align-items-center justify-content-center">
                                <span class="flaticon-server"></span>
                            </div>
                            <div class="mt-3 media-body media-body-2">
                                <h3 class="heading">ENTREGAMOS TUS VENTAS</h3>
                                <p>En {{env('APP_NAME')}} trabajamos con muchos correos para que siempre haya más de una opción a cada lugar y en cada momento.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 ftco-animate">
                        <div class="media block-6 services border text-center">
                            <div class="icon d-flex align-items-center justify-content-center">
                                <span class="flaticon-database"></span>
                            </div>
                            <div class="mt-3 media-body media-body-2">
                                <h3 class="heading">ACOMPAÑAMOS A TUS CLIENTES</h3>
                                <p>Olvidate de contestar preguntas, dudas, y preocuparte por si le llegó o no le llegó.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="ftco-section services-section bg-light">
  <div class="container">
    <div class="row justify-content-center mb-5 pb-3">
      <div class="col-md-10 text-center heading-section ftco-animate">
        <h2 class="mb-4">Descubre las soluciones logísticas que necesita tu negocio</h2>
        <p>Controla toda tu logística desde un mismo sitio. Encuentra las soluciones que necesita tu negocio, reduce tiempo de operación y costos.</p>
    </div>
</div>
<div class="row">
  <div class="col-md-3 d-flex align-self-stretch ftco-animate">
    <div class="media block-6 services d-flex align-items-center">
        <div class="row align-items-center h-100">
            <div class="col-12 mx-auto">


                <div class="card-title text-center">
                    <i class="fas fa-hand-holding-usd fa-2x"></i>
                    <h3 class="heading mb-3">Ahorra Dinero</h3>
                    <p class="mb-0">Más de 250 opciones de envío con descuentos hasta de un 40%.</p>
                </div>
            </div>
        </div>
    </div>
</div>


<div class="col-md-3 d-flex align-self-stretch ftco-animate">
    <div class="media block-6 services d-flex align-items-center">
        <div class="row align-items-center h-100">
            <div class="col-12 mx-auto">
                <div class="card-title text-center">
                    <i class="fas fa-dollar-sign fa-2x"></i>
                    <h3 class="heading mb-3">Mejores ingresos</h3>
                    <p class="mb-0">Convierte a tus visitantes en clientes mostrando en tiempo real opciones de envíos y flexibilidad de costos.</p>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="col-md-3 d-flex align-self-stretch ftco-animate">
    <div class="media block-6 services d-flex align-items-center">
        <div class="row align-items-center h-100">
            <div class="col-12 mx-auto">
                <div class="card-title text-center">
                    <i class="far fa-hourglass fa-2x"></i>
                    <h3 class="heading mb-3"> Ahorra tiempo</h3>
                    <p class="mb-0">Reduce tiempo al auto - sincronizar los datos de tus clientes, evitando errores.</p>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="col-md-3 d-flex align-self-stretch ftco-animate">
    <div class="media block-6 services d-flex align-items-center">
        <div class="row align-items-center h-100">
            <div class="col-12 mx-auto">
                <div class="card-title text-center">
                    <i class="far fa-thumbs-up fa-2x"></i>
                    <h3 class="heading mb-3"> Satisfacción</h3>
                    <p class="mb-0">Reduce el soporte logístico hasta un 43% </p>
                </div>
            </div>
        </div>
    </div>
</div>



</div>
</div>
</section>
{{--
<section class="ftco-section ftco-counter img" id="section-counter">
    <div class="container">
        <div class="row justify-content-center mb-5">
          <div class="col-md-7 text-center heading-section heading-section-white ftco-animate">
            <span class="subheading">More than 12,000 websites trusted hosted</span>
        </div>
    </div>
    <div class="row justify-content-center">
        <div class="col-md-10">
            <div class="row">
              <div class="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                <div class="block-18 text-center">
                  <div class="text">
                    <strong class="number" data-number="12000">0</strong>
                    <span>CMS Installation</span>
                </div>
            </div>
        </div>
        <div class="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
            <div class="block-18 text-center">
              <div class="text">
                <strong class="number" data-number="100">0</strong>
                <span>Awards Won</span>
            </div>
        </div>
    </div>
    <div class="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
        <div class="block-18 text-center">
          <div class="text">
            <strong class="number" data-number="10000">0</strong>
            <span>Registered Domains</span>
        </div>
    </div>
</div>
<div class="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
    <div class="block-18 text-center">
      <div class="text">
        <strong class="number" data-number="9000">0</strong>
        <span>Satisfied Customers</span>
    </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>



<section class="ftco-section bg-light">
    <div class="container">
        <div class="row justify-content-center mb-5 pb-3">
          <div class="col-md-7 text-center heading-section ftco-animate">
            <h2 class="mb-4">Our Best Pricing</h2>
        </div>
    </div>
    <div class="row d-flex">
        <div class="col-lg-3 col-md-6 ftco-animate">
          <div class="block-7">
            <div class="text-center">
                <h2 class="heading">Free</h2>
                <span class="price"><sup>$</sup> <span class="number">0<small class="per">/mo</small></span>
                <span class="excerpt d-block">100% free. Forever</span>
                <h3 class="heading-2 mb-3">Enjoy All The Features</h3>

                <ul class="pricing-text mb-4">
                  <li><strong>150 GB</strong> Bandwidth</li>
                  <li><strong>100 GB</strong> Storage</li>
                  <li><strong>$1.00 / GB</strong> Overages</li>
                  <li>All features</li>
              </ul>
              <a href="#" class="btn btn-primary d-block px-3 py-3 mb-4">Choose Plan</a>
          </div>
      </div>
  </div>
  <div class="col-lg-3 col-md-6 ftco-animate">
      <div class="block-7">
        <div class="text-center">
            <h2 class="heading">Startup</h2>
            <span class="price"><sup>$</sup> <span class="number">19<small class="per">/mo</small></span></span>
            <span class="excerpt d-block">All features are included</span>
            <h3 class="heading-2 mb-3">Enjoy All The Features</h3>

            <ul class="pricing-text mb-4">
              <li><strong>450 GB</strong> Bandwidth</li>
              <li><strong>400 GB</strong> Storage</li>
              <li><strong>$2.00 / GB</strong> Overages</li>
              <li>All features</li>
          </ul>
          <a href="#" class="btn btn-primary d-block px-3 py-3 mb-4">Choose Plan</a>
      </div>
  </div>
</div>
<div class="col-lg-3 col-md-6 ftco-animate">
  <div class="block-7">
    <div class="text-center">
        <h2 class="heading">Premium</h2>
        <span class="price"><sup>$</sup> <span class="number">49<small class="per">/mo</small></span></span>
        <span class="excerpt d-block">All features are included</span>
        <h3 class="heading-2 mb-3">Enjoy All The Features</h3>

        <ul class="pricing-text mb-4">
          <li><strong>250 GB</strong> Bandwidth</li>
          <li><strong>200 GB</strong> Storage</li>
          <li><strong>$5.00 / GB</strong> Overages</li>
          <li>All features</li>
      </ul>
      <a href="#" class="btn btn-primary d-block px-3 py-3 mb-4">Choose Plan</a>
  </div>
</div>
</div>
<div class="col-lg-3 col-md-6 ftco-animate">
  <div class="block-7">
    <div class="text-center">
        <h2 class="heading">Pro</h2>
        <span class="price"><sup>$</sup> <span class="number">99<small class="per">/mo</small></span></span>
        <span class="excerpt d-block">All features are included</span>
        <h3 class="heading-2 mb-3">Enjoy All The Features</h3>

        <ul class="pricing-text mb-4">
          <li><strong>450 GB</strong> Bandwidth</li>
          <li><strong>400 GB</strong> Storage</li>
          <li><strong>$20.00 / GB</strong> Overages</li>
          <li>All features</li>
      </ul>
      <a href="#" class="btn btn-primary d-block px-3 py-3 mb-4">Choose Plan</a>
  </div>
</div>
</div>
</div>
</div>
</section>
--}}

<section class="ftco-section bg-light mb-5">
    <div class="container">
        <div class="row justify-content-center pb-2">
            <div class="col-md-7 text-center heading-section ftco-animate">
                <span class="subheading">Services</span>
                <h2 class="mb-4">Integra tu Tienda en Línea</h2>
            </div>
        </div>
        <div class="row">
          <div class="col-md-12 nav-link-wrap mb-5 pb-md-5 pb-sm-1 ftco-animate">
            <div class="nav ftco-animate nav-pills justify-content-center text-center" id="v-pills-tab" role="tablist" aria-orientation="vertical">
              <a class="nav-link active pmd-btn-raised pmd-ripple-effect" id="v-pills-nextgen-tab " data-toggle="pill" href="#v-pills-nextgen" role="tab" aria-controls="v-pills-nextgen" aria-selected="true">Next gen VPS</a>

              <a class="nav-link pmd-btn-raised pmd-ripple-effect" id="v-pills-performance-tab" data-toggle="pill" href="#v-pills-performance" role="tab" aria-controls="v-pills-performance" aria-selected="false">Performance</a>

              <a class="nav-link pmd-btn-raised pmd-ripple-effect" id="v-pills-effect-tab" data-toggle="pill" href="#v-pills-effect" role="tab" aria-controls="v-pills-effect" aria-selected="false">Effectiveness</a>
          </div>
      </div>
      <div class="col-md-12 align-items-center ftco-animate">

        <div class="tab-content ftco-animate" id="v-pills-tabContent">

          <div class="tab-pane fade show active" id="v-pills-nextgen" role="tabpanel" aria-labelledby="v-pills-nextgen-tab">
            <div class="d-md-flex">
                <div class="one-forth align-self-center">
                    <img src="{{ asset('img/how-work-1.svg') }}" class="img-fluid" alt="">
                </div>
                <div class="one-half ml-md-5 align-self-center">
                    <h2 class="mb-4">Toma control de la operación</h2>
                    <p>Gestiona toda tu logística con ControlX. Recogemos, enviamos y notificamos por ti.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur</p>
                    <p><a href="#" class="btn pmd-btn-raised pmd-ripple-effect btn-primary py-3">¡Cotiza ya!</a></p>
                </div>
            </div>
        </div>

        <div class="tab-pane fade" id="v-pills-performance" role="tabpanel" aria-labelledby="v-pills-performance-tab">
            <div class="d-md-flex">
                <div class="one-forth order-last align-self-center">
                    <img src="landing/images/undraw_visual_data_b1wx.svg" class="img-fluid" alt="">
                </div>
                <div class="one-half order-first mr-md-5 align-self-center">
                    <h2 class="mb-4">Performance VPS hosting</h2>
                    <p>Automatiza tus procesos con integraciones disponibles para más de 17 ecommerce y marketplaces. Facilita la logística de tu empresa y ofrece mejor servicio a tus clientes.</p>
                    <p><a href="#" class="btn btn-primary py-3">Get in touch</a></p>
                </div>
            </div>
        </div>

        <div class="tab-pane fade" id="v-pills-effect" role="tabpanel" aria-labelledby="v-pills-effect-tab">
            <div class="d-md-flex">
                <div class="one-forth align-self-center">
                    <img src="landing/images/undraw_business_plan_5i9d.svg" class="img-fluid" alt="">
                </div>
                <div class="one-half ml-md-5 align-self-center">
                    <h2 class="mb-4">Effective VPS hosting</h2>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur</p>
                    <p><a href="#" class="btn btn-primary py-3">Get in touch</a></p>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</div>
</section>


<section class="ftco-section testimony-section">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-7 text-center heading-section ftco-animate">
        <h2 class="mb-4">¿Cómo se siente recibir un pedido de {{env('APP_NAME')}}?</h2>
        <p>LOS CLIENTES DE NUESTROS CLIENTES SON TAMBIÉN NUESTROS CLIENTES, Y ASÍ NOS LO EXPRESAN</p>
    </div>
</div>
<div class="row ftco-animate">
  <div class="col-md-12">
    <div class="carousel-testimony owl-carousel ftco-owl">
      <div class="item">
        <div class="testimony-wrap p-4 text-center">
          <div class="user-img mb-4" style="background-image: url(landing/images/person_1.jpg)">
            <span class="quote d-flex align-items-center justify-content-center">
              <i class="icon-quote-left"></i>
          </span>
      </div>
      <div class="text">
        <p class="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        <p class="name">Mark Web</p>
        <span class="position">Marketing Manager</span>
    </div>
</div>
</div>
<div class="item">
    <div class="testimony-wrap p-4 text-center">
      <div class="user-img mb-4" style="background-image: url(landing/images/person_2.jpg)">
        <span class="quote d-flex align-items-center justify-content-center">
          <i class="icon-quote-left"></i>
      </span>
  </div>
  <div class="text">
    <p class="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
    <p class="name">Mark Web</p>
    <span class="position">Interface Designer</span>
</div>
</div>
</div>
<div class="item">
    <div class="testimony-wrap p-4 text-center">
      <div class="user-img mb-4" style="background-image: url(landing/images/person_3.jpg)">
        <span class="quote d-flex align-items-center justify-content-center">
          <i class="icon-quote-left"></i>
      </span>
  </div>
  <div class="text">
    <p class="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
    <p class="name">Mark Web</p>
    <span class="position">UI Designer</span>
</div>
</div>
</div>
<div class="item">
    <div class="testimony-wrap p-4 text-center">
      <div class="user-img mb-4" style="background-image: url(landing/images/person_1.jpg)">
        <span class="quote d-flex align-items-center justify-content-center">
          <i class="icon-quote-left"></i>
      </span>
  </div>
  <div class="text">
    <p class="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
    <p class="name">Mark Web</p>
    <span class="position">Web Developer</span>
</div>
</div>
</div>
<div class="item">
    <div class="testimony-wrap p-4 text-center">
      <div class="user-img mb-4" style="background-image: url(landing/images/person_1.jpg)">
        <span class="quote d-flex align-items-center justify-content-center">
          <i class="icon-quote-left"></i>
      </span>
  </div>
  <div class="text">
    <p class="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
    <p class="name">Mark Web</p>
    <span class="position">System Analyst</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>



{{--}}
<section class="ftco-section bg-light">
  <div class="container">
    <div class="row justify-content-center mb-5 pb-3">
      <div class="col-md-7 text-center heading-section ftco-animate">
        <h2>Recent Blog</h2>
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>
    </div>
</div>
<div class="row">
  <div class="col-md-4 ftco-animate">
    <div class="blog-entry">
      <a href="blog-single.html" class="block-20" style="background-image: url('landing/images/image_1.jpg');">
      </a>
      <div class="text d-flex py-4">
        <div class="meta mb-3">
          <div><a href="#">May 8, 2019</a></div>
          <div><a href="#">Admin</a></div>
          <div><a href="#" class="meta-chat"><span class="icon-chat"></span> 3</a></div>
      </div>
      <div class="desc pl-3">
        <h3 class="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
    </div>
</div>
</div>
</div>
<div class="col-md-4 ftco-animate">
    <div class="blog-entry" data-aos-delay="100">
      <a href="blog-single.html" class="block-20" style="background-image: url('landing/images/image_2.jpg');">
      </a>
      <div class="text d-flex py-4">
        <div class="meta mb-3">
          <div><a href="#">May 8, 2019</a></div>
          <div><a href="#">Admin</a></div>
          <div><a href="#" class="meta-chat"><span class="icon-chat"></span> 3</a></div>
      </div>
      <div class="desc pl-3">
        <h3 class="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
    </div>
</div>
</div>
</div>
<div class="col-md-4 ftco-animate">
    <div class="blog-entry" data-aos-delay="200">
      <a href="blog-single.html" class="block-20" style="background-image: url('landing/images/image_3.jpg');">
      </a>
      <div class="text d-flex py-4">
        <div class="meta mb-3">
          <div><a href="#">May 8, 2019</a></div>
          <div><a href="#">Admin</a></div>
          <div><a href="#" class="meta-chat"><span class="icon-chat"></span> 3</a></div>
      </div>
      <div class="desc pl-3">
        <h3 class="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
    </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section class="ftco-section ftco-partner">
    <div class="container">
        <div class="row">
            <div class="col-sm ftco-animate">
                <a href="#" class="partner"><img src="landing/images/partner-1.png" class="img-fluid" alt="Colorlib Template"></a>
            </div>
            <div class="col-sm ftco-animate">
                <a href="#" class="partner"><img src="landing/images/partner-2.png" class="img-fluid" alt="Colorlib Template"></a>
            </div>
            <div class="col-sm ftco-animate">
                <a href="#" class="partner"><img src="landing/images/partner-3.png" class="img-fluid" alt="Colorlib Template"></a>
            </div>
            <div class="col-sm ftco-animate">
                <a href="#" class="partner"><img src="landing/images/partner-4.png" class="img-fluid" alt="Colorlib Template"></a>
            </div>
            <div class="col-sm ftco-animate">
                <a href="#" class="partner"><img src="landing/images/partner-5.png" class="img-fluid" alt="Colorlib Template"></a>
            </div>
            <div class="col-sm ftco-animate">
                <a href="#" class="partner"><img src="landing/images/partner-6.png" class="img-fluid" alt="Colorlib Template"></a>
            </div>
        </div>
    </div>
</section>
--}}
@endsection
