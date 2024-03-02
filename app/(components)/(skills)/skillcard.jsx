import React from "react";
import "./style.css";

//language skills
const LangSkills = ["C/C#", "C++", "Python", "Javascript"];
const LangLevel = ["Proficient", "Expert", "Fundamental", "Expert"];
//frontend skills
const Skills = ["Html", "Css", "ReactJS", "NextJS", "SAAS"];
const Level = ["Proficient", "Proficient", "Expert", "Expert", "Proficient"];
//backend skills
const BackSkills = ["NodeJS", "ExpressJS", "MongoDB", "SQL", "ORM", "BAAS"];
const BackLevel = [
  "Proficient",
  "Expert",
  "Expert",
  "Proficient",
  "Proficient",
  "Proficient",
];
//software skills
const SoftSkills = ["Github", "Git", "Figma"];
const SoftLevel = ["Proficient", "Proficient", "Expert"];
function SkillContainer() {
  return (
    <>
      {/* Language  */}

      <div>
        <h2 className="head dark:text-subhead">Language</h2>
        <div className="tags-container dark:bg-[#113946]">
          {LangSkills.map((skillCategory, skillIndex) => (
            <div
              className="tg dark:shadow-custom dark:text-subhead"
              key={skillIndex}
            >
              <div className="tag dark:shadow-custom2">
                <div>{skillCategory}</div>

                <div className="card__content dark:bg-[#113946]  bg-white">
                  <div className="inside">{LangLevel[skillIndex]}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Frontend */}
      <div>
        <h2 className="head dark:text-subhead">Frontend</h2>
        <div className="tags-container  dark:bg-[#113946] ">
          {Skills.map((skillCategory, skillIndex) => (
            <div className="tg dark:text-subhead" key={skillIndex}>
              <div className="tag dark:shadow-custom2">
                <div>{skillCategory}</div>

                <div className="card__content  dark:bg-[#113946]  bg-white">
                  <div className="inside">{Level[skillIndex]}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Backend */}
      <div>
        <h2 className="head dark:text-subhead">Backend</h2>
        <div className="tags-container  dark:bg-[#113946]">
          {BackSkills.map((skillCategory, skillIndex) => (
            <div className="tg dark:text-subhead" key={skillIndex}>
              <div className="tag">
                <div>{skillCategory}</div>

                <div className="card__content  dark:bg-[#113946]  bg-white">
                  <div className="inside">{BackLevel[skillIndex]}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Software */}
      <div>
        <h2 className="head dark:text-subhead">Software</h2>
        <div className="tags-container  dark:bg-[#113946]">
          {SoftSkills.map((skillCategory, skillIndex) => (
            <div className="tg dark:text-subhead" key={skillIndex}>
              <div className="tag">
                <div>{skillCategory}</div>

                <div className="card__content  dark:bg-[#113946]  bg-white">
                  <div className="inside">{SoftLevel[skillIndex]}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SkillContainer;
