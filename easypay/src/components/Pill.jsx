import React from "react";

// TODO:
// - make font lighter (add to custom fonts)
// make them responsive
// add some animations (subtle)

export const Pill = () => {
  return (
    <div>
      {/* left side pills */}
      <div className="absolute left-2 top-20 transform rotate-12  bg-pill-gray border-[1px] border-pill-border text-gray-400 font-thiccboi-regular py-3 px-5 rounded-full w-[200px]">
        Solutions
      </div>

      <div className="absolute left-[5rem] bottom-[-1rem] transform rotate-[-15deg] bg-pill-gray border-[1px] border-pill-border text-gray-400 font-thiccboi-regular py-3 px-5 rounded-full w-[200px]">
        Simplify
      </div>

      <div className="absolute left-[-5rem] bottom-20 transform rotate-[-15deg] bg-pill-gray border-[1px] border-pill-border text-gray-400 font-thiccboi-regular py-3 px-5 rounded-full w-[200px]">
        Manage
      </div>
    </div>
  );
};
