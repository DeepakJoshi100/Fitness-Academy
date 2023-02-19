import React from "react";

function MainPage() {
  return (
    <>
      <div className="relative flex flex-col items-center gap-10 m-1">
        <h1 className="text-5xl font-black duration-700 translate-x-2 translate-y-2 hover:text-orange-500 hover:-translate-x-2 hover:-translate-y-1">
          Rajan's Fitness Factory
        </h1>

        <h2 className="relative flex text-xl font-bold text-black">
          <h2>
            “I don’t count my sit-ups. I only start counting when it starts
            hurting because they’re the only ones that count.”
          </h2>
          <h5 className="relative text-right text-orange-500 top-6">
            - Muhammad Ali
          </h5>
        </h2>

        <p className="w-1/2 px-8 py-1 my-6 text-lg font-semibold tracking-widest text-center text-orange-400 border-2 rounded-lg bg-transparentS">
          Rajan's Fitness Factory is a place for training and exercise, as well
          as to unwind, socialize, and recharge. Consequently, a good gym is a
          facility that promotes physical activity, provides a safe, functional,
          and comfortable workout environment, and promotes enjoyment,
          recreation and socialization. There is a good workout environment and
          a lot that is possible here for everyone.
        </p>
        <div className="grid grid-cols-3 gap-3">
          <span className="object-cover duration-500 aspect-square hover:translate-x-2 hover:translate-y-2">
            <img
              src="https://i.pinimg.com/736x/75/e8/8e/75e88e87855db204d0e75c6315d8b01d.jpg"
              className="w-full h-full rounded-md shadow-md"
            />
          </span>
          <span className="object-cover duration-500 aspect-square hover:translate-x-2 hover:translate-y-2">
            <img
              src="http://quotationwalls.com/img/motivational/hit-the-gym-mobile.jpg"
              className="w-full h-full rounded-md shadow-md"
            />
          </span>
          <span className="object-cover duration-500 hover:translate-y-2 aspect-square hover:-translate-x-2">
            <img
              src="https://w0.peakpx.com/wallpaper/224/511/HD-wallpaper-who-cares-text-iphone-iphone-iphone-gym-motivation-gym-motivation-quotes-zyzz-thumbnail.jpg"
              className="w-full h-full rounded-md shadow-md"
            />
          </span>
        </div>
        <p className="my-6 text-3xl font-black text-orange-600 duration-500 ">
          <p className="duration-500 hover:text-black hover:translate-x-2">
            The gym has the following key features:
          </p>
          <ul
            type="circle"
            className="flex flex-col gap-4 my-2 text-sm font-black text-black "
          >
            <li>* Trainee at the gym</li>
            <li>* A good protein and supplement diet</li>
            <li>* Seated Dip Machine</li>
            <li>* Bench Press</li>
            <li>* Decline Bench Press</li>
            <li>* Incline Bench Press and many more.</li>
          </ul>
        </p>
        <div className="flex flex-col items-center gap-4 mb-10 text-4xl text-black">
          <p className="font-black text-green-500">Timings</p>
          <p className="text-lg font-black text-center text-blue-400">
            The revised timings for opening of Rajan's Fitness Factory will now
            be as follows :-
            <ul>
              <li className="text-black">The arrangement for winters only.</li>
              <li className="text-gray-700">
                {" "}
                Morning Session - 6:00 AM to 1:00 PM
              </li>
              <li className="text-red-500"> Lunch Break 1:00 PM to 3:00 PM</li>
              <li className="text-gray-700">
                {" "}
                Evening Session - 3.00 PM to 8:00 PM
              </li>
            </ul>
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 mb-10 text-4xl text-orange-400">
          <h1 className="font-black">Contact Details</h1>
          <p className="text-lg font-bold text-black">
            Address - Saijana, Khatima, U.S.Nagar(Uttarakhand)
          </p>
          <p className="text-lg font-bold text-black">Number - 1234567890</p>
        </div>
      </div>
    </>
  );
}

export default MainPage;
