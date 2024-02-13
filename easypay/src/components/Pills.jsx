import React from "react";
import { Pill } from "./Pill";

export const Pills = () => {
  return (
    <div className="relative">
      <Pill title="Saving" className="absolute top-2 left-3"></Pill>
      {/* <Pill title="Payment" /> */}
    </div>
  );
};
