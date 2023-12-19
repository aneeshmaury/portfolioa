"use client";
import React, { useState } from "react";
import "./skillCards.css";

function SkillCards() {
  const [isTransition, setIsTransition] = useState(false);

  const handleCardClick = () => {
    setIsTransition((prevIsTransition) => !prevIsTransition);
  };

  const cardsClass = `cards-split ${
    isTransition ? "transition" : ""
  } md:w-4/5 lg:w-3/4 xl:w-2/3`;

  return (
    <>
      <ul className={cardsClass} onClick={handleCardClick}>
        <li className="title">
          <h2 className="font-bold text-xl md:text-2xl lg:text-3xl">
            Split from middle
          </h2>
        </li>
        <li className="card card-1">
          <img
            src="http://lorempixel.com/400/250/city"
            alt="City"
            className="max-w-full h-auto"
          />
          <div className="content">
            <h1 className="text-lg md:text-xl lg:text-2xl">Card 1 Title</h1>
            <p className="text-sm md:text-base lg:text-lg">Card description</p>
          </div>
        </li>
        <li className="card card-2">
          <img
            src="http://lorempixel.com/400/250/food"
            alt="Food"
            className="max-w-full h-auto"
          />
          <div className="content">
            <h1 className="text-lg md:text-xl lg:text-2xl">Card 2 Title</h1>
            <p className="text-sm md:text-base lg:text-lg">Card description</p>
          </div>
        </li>
        <li className="card card-3">
          <img
            src="http://lorempixel.com/400/250/animals"
            alt="Animals"
            className="max-w-full h-auto"
          />
          <div className="content">
            <h1 className="text-lg md:text-xl lg:text-2xl">Card 3 Title</h1>
            <p className="text-sm md:text-base lg:text-lg">Card description</p>
          </div>
        </li>
      </ul>
    </>
  );
}

export default SkillCards;
