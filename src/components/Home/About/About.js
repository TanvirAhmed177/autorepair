import React from "react";
import mechanic from "../../../images/pexels-cottonbro-4488655.jpg";
const FeaturedService = () => {
  return (
    <section className="ftco-section ftco-no-pt ftco-no-pb bg-light">
      <div className="container">
        <div className="row d-flex no-gutters">
          <div className="col-md-6 d-flex">
            <div className="img d-flex align-self-stretch align-items-center justify-content-center mb-4 mb-sm-0">
              <img
                src={mechanic}
                className="d-flex justify-content-center align-items-center"
                style={{ height: "400px", width: "100%" }}
                alt="img"
              />
            </div>
          </div>
          <div className="col-md-6 pl-md-5">
            <div className="row justify-content-start py-5">
              <div className="col-md-12 heading-section ftco-animate fadeInUp ftco-animated">
                <span className="subheading">
                  <b className="text-warning">Welcome to Autorepair</b>
                </span>
                <h2 className="mb-4">
                  We help more than 45 years serving customer car
                </h2>
                <p className="text-secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                  nihil laudantium distinctio voluptas cupiditate delectus,
                  temporibus, sequi eos repellendus obcaecati nesciunt, dolor
                  dolorem odit enim. Corrupti labore excepturi quo beatae quos
                  iste dicta temporibus repellendus facere velit amet maiores
                  aut tenetur accusantium, assumenda, modi, molestias natus
                  expedita! Quo, harum unde.
                </p>
                <div className="tabulation-2 mt-4">
                  <ul className="nav nav-pills nav-fill d-md-flex d-block">
                    <li className="nav-item mb-md-0 mb-2">
                      <a
                        className="nav-link active py-2 bg-warning"
                        data-toggle="tab"
                        href="#home1"
                      >
                        Our Mission
                      </a>
                    </li>
                    <li className="nav-item px-lg-2 mb-md-0 mb-2 ">
                      <a
                        className="nav-link py-2 bg-warning active"
                        data-toggle="tab"
                        href="#home2"
                      >
                        Our Vision
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link py-2 mb-md-0 mb-2 bg-warning active"
                        data-toggle="tab"
                        href="#home3"
                      >
                        Our Value
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content rounded mt-2">
                    <div className="tab-pane container p-0 active" id="home1">
                      <p className="text-secondary">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eius dicta iste natus provident illo voluptatem
                        distinctio tenetur aliquid reiciendis alias. Adipisci
                        eveniet voluptates assumenda! Iure corrupti ex vel fuga
                        adipisci, rerum vitae sequi deserunt necessitatibus.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedService;
