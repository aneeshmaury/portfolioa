import Left from "@/app/(components)/(landing)/left";
import Right from "@/app/(components)/(landing)/right";

export default function LandingLayout() {
  return (
    <div className="flex justify-around bg-cyan-300" id="home">
      {" "}
      <Left />
      <Right />
    </div>
  );
}
