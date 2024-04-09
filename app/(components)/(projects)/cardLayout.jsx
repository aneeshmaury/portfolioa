import React from "react";
import Cards from "@/app/(components)/(projects)/cards";
import { PiFireFill } from "react-icons/pi";

function CardLayout() {
  return (
    <div className="flex flex-wrap justify-center  ">
      <Cards
        heading={"Vital Flow"}
        discription={
          <>
            <div className="mt-2 font-bold text-lg">Health Care Website</div>
            <div>
              <div className="mt-2 mb-1 font-semibold">Features</div>
              <div>
                <div className="flex gap-1">
                  <PiFireFill />
                  <span> Admin and Normal User</span>
                </div>
                <div className="flex gap-1">
                  <PiFireFill />
                  <span>Calculators and Trackers</span>
                </div>
                <div className="flex gap-1">
                  <PiFireFill />
                  <span>Hospital & Doctor Profile</span>
                </div>
              </div>
            </div>
            <div>
              <div className="mt-2 mb-1 font-semibold">Techs</div>
              <div className="flex justify-around">
                <div className="flex">
                  <span> NextJS</span>
                </div>
                <div className="flex gap-1">
                  <span>MongoDB</span>
                </div>
              </div>
              <div className="flex justify-around">
                <div className="flex">
                  <span>TailwindCSS</span>
                </div>
                <div className="flex gap-1">
                  <span>ExpressJS</span>
                </div>
              </div>
              <div className="flex justify-around">
                <div className="flex">
                  <span>Framer Motion</span>
                </div>
                <div className="flex gap-1">
                  <span>Redux</span>
                </div>
              </div>
            </div>
            <div className="ui-btn mt-2 mb-2 hover:bg-lightsubhead">
              <span className="text-redbtn dark:text-green-300 ">Code</span>
            </div>
          </>
        }
        imgLink={
          "https://cdn.pixabay.com/photo/2021/03/27/06/31/code-6127616__340.png"
        }
      />
      <Cards
        heading={"GamingHub"}
        discription={
          <>
            <div className="mt-2 font-bold text-lg">Gaming Website</div>
            <div>
              <div className="mt-2 mb-1 font-semibold">Features</div>
              <div>
                <div className="flex gap-1">
                  <PiFireFill />
                  <span>Tic Tack Toe</span>
                </div>
                <div className="flex gap-1">
                  <PiFireFill />
                  <span>Snake Game</span>
                </div>
                <div className="flex gap-1">
                  <PiFireFill />
                  <span>Flappy Ball</span>
                </div>
              </div>
            </div>
            <div>
              <div className="mt-2 mb-1 font-semibold">Techs</div>
              <div className="flex justify-around">
                <div className="flex">
                  <span> ReactJS</span>
                </div>
                <div className="flex gap-1">
                  <span>React Router</span>
                </div>
              </div>
              <div className="flex justify-around">
                <div className="flex">
                  <span>Axios</span>
                </div>
                <div className="flex gap-1">
                  <span>TailwindCSS</span>
                </div>
              </div>
              <div className="flex justify-around">
                <div className="flex">
                  <span>Framer Motion</span>
                </div>
                {/* <div className="flex gap-1">
                  <span></span>
                </div> */}
              </div>
            </div>
            <div className="ui-btn mt-2 mb-2 hover:bg-lightsubhead">
              <span className="text-redbtn dark:text-green-300 ">Code</span>
            </div>
          </>
        }
        imgLink={
          "https://cdn.pixabay.com/photo/2021/03/27/06/31/code-6127616__340.png"
        }
      />
      <Cards
        heading={"Gym Trainer"}
        discription={
          <>
            <div className="mt-2 font-bold text-lg">Gym UI Website</div>
            <div>
              <div className="mt-2 mb-1 font-semibold">Features</div>
              <div>
                <div className="flex gap-1">
                  <PiFireFill />
                  <span>Admin Progress Graphs</span>
                </div>
                <div className="flex gap-1">
                  <PiFireFill />
                  <span>Calender Todo's</span>
                </div>
                <div className="flex gap-1">
                  <PiFireFill />
                  <span>Students Notification</span>
                </div>
              </div>
            </div>
            <div>
              <div className="mt-2 mb-1 font-semibold">Techs</div>
              <div className="flex justify-around">
                <div className="flex">
                  <span>ReactJS</span>
                </div>
                <div className="flex gap-1">
                  <span>Bootstrap</span>
                </div>
              </div>
              <div className="flex justify-around">
                <div className="flex">
                  <span>Graph.io</span>
                </div>
                <div className="flex gap-1">
                  <span>CalenderJS</span>
                </div>
              </div>
              <div className="flex justify-around">
                <div className="flex">
                  <span>React Router</span>
                </div>
                <div className="flex gap-1">
                  <span>Navigation</span>
                </div>
              </div>
            </div>
            <div className="ui-btn mt-2 mb-2  hover:bg-lightsubhead">
              <span className="text-redbtn dark:text-green-300">Code</span>
            </div>
          </>
        }
        imgLink={
          "https://cdn.pixabay.com/photo/2021/03/27/06/31/code-6127616__340.png"
        }
      />
    </div>
  );
}

export default CardLayout;
