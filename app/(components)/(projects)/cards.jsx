import React from "react";
import Link from "next/link";
import Image from "next/image";

function Cards({ heading, discription, imgLink }) {
  return (
    <>
      {/* <div className="flex justify-center items-center min-h-screen bg-[#ebf5fc]">
        <div className="relative flex justify-around items-center flex-wrap w-[1100px]">
          <div className="m-5 w-80 px-[30px] py-10 bg-[#ebf5fc] rounded-[40px] shadow-[-6px_-6px_20px_rgba(255,255,255,1),6px_6px_20px_rgba(0,0,0,0.1)] hover:shadow-[inset_-6px_-6px_20px_rgba(255,255,255,0.5),inset_6px_6px_20px_rgba(0,0,0,0.05)] hover:scale-[0.98]">
            <div className="  text-center">
              <Image
                src={imgLink}
                alt="sd"
                className="max-w-[120px] hover:scale-[0.98] inline"
                height={100}
                width={100}
              />
            </div>
            <div className="relative mt-5 text-center">
              <h2 className="text-[#0575e6] font-bold text-[1.4em] tracking-[2px]">
                {heading}
              </h2>
              <p className="text-[#3a9bdc] hover:scale-[0.98]">{discription}</p>
              <div className="flex justify-around">
                <Link
                  href="#"
                  className="inline-block text-[#3a9bdc] text-base no-underline shadow-[-4px_-4px_15px_rgba(255,255,255,1),4px_4px_15px_rgba(0,0,0,0.1)] mt-[15px] px-5 py-2.5 rounded-[40px] hover:shadow-[inset_-4px_-4px_10px_rgba(255,255,255,0.5),inset_4px_4px_10px_rgba(0,0,0,0.1)]"
                >
                  <span className="hover:block scale-[0.98]">Read More</span>
                </Link>
                <Link
                  href="#"
                  className="inline-block text-[#3a9bdc] text-base no-underline shadow-[-4px_-4px_15px_rgba(255,255,255,1),4px_4px_15px_rgba(0,0,0,0.1)] mt-[15px] px-7 py-2.5 rounded-[40px] hover:shadow-[inset_-4px_-4px_10px_rgba(255,255,255,0.5),inset_4px_4px_10px_rgba(0,0,0,0.1)]"
                >
                  <span className="hover:block scale-[0.98]">Preview</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="">
        <div className="m-5 w-80 px-[30px] py-10 bg-[#ebf5fc] rounded-[40px] shadow-[-6px_-6px_20px_rgba(255,255,255,1),6px_6px_20px_rgba(0,0,0,0.1)] hover:shadow-[inset_-6px_-6px_20px_rgba(255,255,255,0.5),inset_6px_6px_20px_rgba(0,0,0,0.05)] hover:scale-[0.98]">
          <div className="  text-center">
            <Image
              src={imgLink}
              alt="sd"
              className="max-w-[120px] hover:scale-[0.98] inline"
              height={100}
              width={100}
            />
          </div>
          <div className="relative mt-5 text-center">
            <h2 className="text-[#0575e6] font-bold text-[1.4em] tracking-[2px]">
              {heading}
            </h2>
            <p className="text-[#3a9bdc] hover:scale-[0.98]">{discription}</p>
            <div className="flex justify-around">
              <Link
                href="#"
                className="inline-block text-[#3a9bdc] text-base no-underline shadow-[-4px_-4px_15px_rgba(255,255,255,1),4px_4px_15px_rgba(0,0,0,0.1)] mt-[15px] px-5 py-2.5 rounded-[40px] hover:shadow-[inset_-4px_-4px_10px_rgba(255,255,255,0.5),inset_4px_4px_10px_rgba(0,0,0,0.1)]"
              >
                <span className="hover:block scale-[0.98]">Read More</span>
              </Link>
              <Link
                href="#"
                className="inline-block text-[#3a9bdc] text-base no-underline shadow-[-4px_-4px_15px_rgba(255,255,255,1),4px_4px_15px_rgba(0,0,0,0.1)] mt-[15px] px-7 py-2.5 rounded-[40px] hover:shadow-[inset_-4px_-4px_10px_rgba(255,255,255,0.5),inset_4px_4px_10px_rgba(0,0,0,0.1)]"
              >
                <span className="hover:block scale-[0.98]">Preview</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
