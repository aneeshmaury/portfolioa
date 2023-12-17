import Left from "@/app/(components)/(landing)/left";
import Right from "@/app/(components)/(landing)/right";

export default function LandingLayout() {
  return (
    <div
      className="flex justify-around bg-cyan-300 h-screen w-screen"
      id="home"
    >
      {" "}
      <Left />
      <Right />
    </div>
  );
}
