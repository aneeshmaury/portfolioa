import Image from "next/image";
import React from "react";
// import "@/public/lappy.svg";

function Right() {
  return (
    <div className="bg-cyan-900 w-1/2 ">
      <>
        <svg
          id="sw-js-blob-svg"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          {" "}
          <defs>
            {" "}
            <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
              {" "}
              <stop
                id="stop1"
                stop-color="rgba(248, 117, 55, 1)"
                offset="0%"
              ></stop>{" "}
              <stop
                id="stop2"
                stop-color="rgba(251, 168, 31, 1)"
                offset="100%"
              ></stop>{" "}
            </linearGradient>{" "}
          </defs>{" "}
          <path
            fill="none"
            d="M25.8,-22.5C31.3,-13.5,32.4,-2.9,29.7,5.9C27,14.8,20.5,22,12.9,24.9C5.3,27.8,-3.4,26.4,-11.7,22.9C-20.1,19.5,-28,13.8,-30.2,6.3C-32.3,-1.1,-28.6,-10.5,-22.6,-19.6C-16.6,-28.6,-8.3,-37.4,0.9,-38.1C10.1,-38.8,20.2,-31.5,25.8,-22.5Z"
            width="100%"
            height="100%"
            transform="translate(50 50)"
            stroke-width="1"
            style={{ transition: "all 0.3s ease 0s" }}
            stroke="url(#sw-gradient)"
          ></path>{" "}
        </svg>
      </>
    </div>
  );
}

export default Right;
