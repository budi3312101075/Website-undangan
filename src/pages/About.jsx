import React, { useEffect, useState } from "react";
import { Navbar } from "../component";

const About = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  function getCounter() {
    let countDownDate = new Date("Jul 17, 2023 22:00:00").getTime();

    let x = setInterval(function () {
      let now = new Date().getTime();

      let distance = countDownDate - now;

      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
      if (distance < 0) {
        clearInterval(x);
      }
    }, 1000);
  }
  useEffect(() => {
    getCounter();
  }, [seconds]);

  return (
    <>
      <div className="w-full flex items-center justify-center gap-80 flex-col min-h-screen bg-[url('./2.JPG')] bg-cover ">
        <h1 className="text-center tracking-[9px] font-extrabold text-black  ">
          Happy wedding
        </h1>
        <div className=" flex flex-col gap-3">
          <p className=" text-black font-extralight text-4xl text-center border-b-2 border-black py-5 font-dancing">
            Iqbal & Fitri
          </p>
          <small className="text-xl  py-3 tracking-[9px] text-center text-black ">
            17 . 07 . 2023
          </small>
          <div className="grid grid-flow-col gap-5 text-center auto-cols-max text-black">
            <div className="flex flex-col">
              <span className="countdown font-mono text-5xl">
                <span style={{ "--value": `${days}` }}></span>
              </span>
              days
            </div>
            <div className="flex flex-col">
              <span className="countdown font-mono text-5xl">
                <span style={{ "--value": `${hours}` }}></span>
              </span>
              hours
            </div>
            <div className="flex flex-col">
              <span className="countdown font-mono text-5xl">
                <span style={{ "--value": `${minutes}` }}></span>
              </span>
              min
            </div>
            <div className="flex flex-col">
              <span className="countdown font-mono text-5xl">
                <span style={{ "--value": `${seconds}` }}></span>
              </span>
              sec
            </div>
          </div>
        </div>
      </div>
      <div className="h-screen">
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            {/* <img
              src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            /> */}
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
