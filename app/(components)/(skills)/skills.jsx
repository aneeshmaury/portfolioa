// import SkillCards from "@/app/(components)/(skills)/skillCards";
import SkillContainer from "@/app/(components)/(skills)/skillcard";
import "./style.css";
export default function Skills() {
  return (
    <div id="skills" className="">
      <div className="head1 dark:text-head">Skills</div>
      <SkillContainer />
    </div>
  );
}
