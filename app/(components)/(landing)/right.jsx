import Image from "next/image";
import React from "react";
// import "@/public/lappy.svg";

function Right() {
  return (
    <div className="bg-cyan-900">
      <>
        <Image src="lappy.svg" alt="lappy" width={1500} height={800} />
      </>
    </div>
  );
}

export default Right;
