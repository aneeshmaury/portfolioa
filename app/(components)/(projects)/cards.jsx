"use client";
import React, { useState } from "react";

function Cards({ heading, discription, imgLink }) {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <>
      <div className="ml-4 mr-4 mb-2">
        <div className="m-5 w-80 px-[30px] py-10 rounded-[40px] shadow-[-6px_-6px_20px_rgba(255,255,255,1),6px_6px_20px_rgba(0,0,0,0.1)] hover:shadow-[inset_-6px_-6px_20px_rgba(255,255,255,0.5),inset_6px_6px_20px_rgba(0,0,0,0.05)] hover:scale-[0.98]">
          <div className="text-center">
            <img
              src={imgLink}
              alt="sd"
              className="max-w-[120px] hover:scale-[0.98] inline"
              height={100}
              width={100}
            />
          </div>
          <div className="relative mt-5 text-center">
            <h2 className="text-lightsubhead dark:text-subhead font-bold text-[1.4em] tracking-[2px]">
              {heading}
            </h2>
            {showDescription ? (
              <p className="text-lighttext code hover:scale-[0.98] dark:text-text">
                {discription}
              </p>
            ) : null}
            <div className="flex justify-around mt-3">
              <div
                onClick={toggleDescription}
                className="inline-block dark:text-subhead  text-base no-underline shadow-[-4px_-4px_15px_rgba(255,255,255,1),4px_4px_15px_rgba(0,0,0,0.1)] mt-[15px] px-5 py-2.5 rounded-[40px] hover:shadow-[inset_-4px_-4px_10px_rgba(255,255,255,0.5),inset_4px_4px_10px_rgba(0,0,0,0.1)]"
              >
                <span className="hover:block scale-[0.98]">
                  {showDescription ? "Read Less" : "Read More"}
                </span>
              </div>
              <div className="inline-block dark:text-subhead text-base no-underline shadow-[-4px_-4px_15px_rgba(255,255,255,1),4px_4px_15px_rgba(0,0,0,0.1)] mt-[15px] px-5 py-2.5 rounded-[40px] hover:shadow-[inset_-4px_-4px_10px_rgba(255,255,255,0.5),inset_4px_4px_10px_rgba(0,0,0,0.1)]">
                <span className="hover:block scale-[0.98]">Preview</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
