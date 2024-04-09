import React from "react";
import Image from "next/image";
import girl from "@/app/image/girl.png";
import TextChanger from "@/app/(components)/(landing)/svg";

function Left() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center mt-4">
        <div className="relative md:w-unit-9xl w-80 h-80 rounded-full bg-gradient-to-br from-head to-subhead flex items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src={girl}
              alt="girl"
              width={300}
              height={300}
              // className="rounded-full"
            />
          </div>
        </div>
        {/* text content  */}
        <div className="mt-10 text-center">
          <h1 className="code2 text-2xl font-bold">Hello Humans!</h1>
          <div className="code2 text-4xl font-semibold mt-2">
            I'm{" "}
            <span
              className="text-head tracking-wider "
              style={{ WebkitTextStroke: "2px #113946" }}
            >
              Aliza
            </span>{" "}
            aka <span className="code3 font-normal text-darkbg">shayaliza</span>
          </div>
          <div className="text-center m-auto w-full ">
            {" "}
            <TextChanger />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Left;
