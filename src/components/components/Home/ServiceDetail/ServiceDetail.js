import React from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];

const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const ServiceDetail = ({ service }) => {
  const { name, detail, imageUrl } = service;

  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));
  return (
    <div className="col-md-4 services ">
      <div className="d-block d-flex">
        <div className="icon d-flex justify-content-center align-items-center">
          <animated.div
            class="card"
            onMouseMove={({ clientX: x, clientY: y }) =>
              set({ xys: calc(x, y) })
            }
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: props.xys.interpolate(trans) }}
          >
            <img src={imageUrl} alt="" />
          </animated.div>
        </div>
        <div className="media-body pl-3">
          <h3 className="heading">{name}</h3>
          <p>{detail}</p>
          <Link
            to={`/checkout/${name}`}
            className=" text-info text-decoration-none"
          >
            <button type="button" className="btn btn-brand btn-sm mb-4">
              SEND
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
