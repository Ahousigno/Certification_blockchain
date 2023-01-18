const Navbar = () => {
  return (
    <div>
      {/* <!-- ======= Header ======= --> */}
      <header id="header" class="fixed-top">
        <div class="container d-flex align-items-center">
          <h1 class="logo me-auto">
            <a href="index.html">
              <img src="assets/img/logo.png" class="img-fluid" alt="" />
              UVCI
            </a>
          </h1>
          {/* <!-- Uncomment below if you prefer to use an image logo --> */}
          {/* <!-- <a href="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>--> */}

          <nav id="navbar" class="navbar order-last order-lg-0">
            <ul>
              <li>
                <a class="active" href="index.html">
                  Accueil
                </a>
              </li>
              <li>
                <a href="about.html">Certification</a>
              </li>

              <li class="dropdown">
                <a href="https://reactjs.org">
                  <span>Drop Down</span> <i class="bi bi-chevron-down"></i>
                </a>
                <ul>
                  <li>
                    <a href="https://reactjs.org">Drop Down 1</a>
                  </li>
                  <li class="dropdown">
                    <a href="https://reactjs.org">
                      <span>Deep Drop Down</span>{" "}
                      <i class="bi bi-chevron-right"></i>
                    </a>

                    <ul>
                      <li>
                        <a href="https://reactjs.org">Deep Drop Down 1</a>
                      </li>
                      <li>
                        <a href="https://reactjs.org">Deep Drop Down 2</a>
                      </li>
                      <li>
                        <a href="https://reactjs.org">Deep Drop Down 3</a>
                      </li>
                      <li>
                        <a href="https://reactjs.org">Deep Drop Down 4</a>
                      </li>
                      <li>
                        <a href="https://reactjs.org">Deep Drop Down 5</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          {/* <!-- .navbar --> */}

          <a href="courses.html" class="get-started-btn">
            Get Started
          </a>
        </div>
      </header>
      {/* <!-- End Header -->

  <!-- ======= Hero Section ======= --> */}
      <section
        id="hero"
        class="d-flex justify-content-center align-items-center"
      >
        <div
          class="container position-relative"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <h1>
            plateforme,
            <br />
            certification
          </h1>
          <h2>Donnez de la crédibilité à vos diplomes</h2>
          <a href="courses.html" class="btn-get-started">
            Commencer
          </a>
        </div>
      </section>
      {/* <!-- End Hero --> */}
    </div>
  );
};

export default Navbar;
