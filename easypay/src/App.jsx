import "./App.css";
import { Pills } from "./components/Pills";

function App() {
  return (
    <section className="bg-black w-screen h-screen">
      {/* title + subtitle + CTA button */}
      <div className="py-8 px-4 mx-auto  text-center lg:py-16 lg:px-12 ">
        <p className="font-babylon mb-4 text-6xl text-white md:text-6xl lg:text-8xl dark:text-white">
          A SAFE <span className="text-main-pink">AND</span> EASY
          <br />
          WAY TO PAY
        </p>
        <p className="mb-8 text-md font-normal text-white lg:text-md sm:px-16 xl:px-48 dark:text-white">
          Simplify your payment process and gain control
          <br />
          over your expenses with our secure platform.
        </p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <button
            href="#"
            className="inline-flex justify-center items-center py-3 px-10 text-sm text-center text-black rounded-lg bg-main-pink"
          >
            Get started
          </button>
        </div>
      </div>
      {/* above it's just the title, subtitle and button */}
      {/* page content */}

      <div className="text-center">
        <Pills />
      </div>
    </section>
  );
}

export default App;

// <div classNameName="bg-slate-950 dark:bg-gray-800 w-screen h-screen ">
//   {/* hero section */}

//     <h1 classNameName="font-babylon text-white">A SAFE AND EASY WAY TO PAY</h1>
//     <p classNameName="text-white font-thiccboi-regular">
//       Simplify your payment process and gain control over your expenses with
//       our secure platform.
//     </p>

//     <p classNameName="font-thiccboi-bold text-white">test another one</p>
//     <button classNameName="text-black bg-main-pink bg-pink">Get Started</button>
//   </div>
// </div>
