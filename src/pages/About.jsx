import React, { useEffect, useState } from "react";

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
      <div className="w-full flex items-center justify-center gap-80 flex-col min-h-screen bg-[url('https://static.republika.co.id/uploads/images/inpicture_slide/_230206161510-231.png')] bg-cover ">
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
      <div className="h-80 flex flex-col items-center justify-evenly  bg-[url('https://img.freepik.com/free-photo/stone-texture_1194-5537.jpg?w=360&t=st=1683815561~exp=1683816161~hmac=9737460fd83be0cceaf2aa1a25f66cc73c05faaea6b9977f69f766c29963c123')] bg-cover">
        <img
          src="https://dynamic.brandcrowd.com/preview/logodraft/b406ebbd-1643-430a-b5ff-2b7547cd1b9c/image/large.png"
          alt="inisial"
          className="w-32 h-32 "
        />
        <small className="text-base">
          تَزَوَّجَ العَبْدُ فَقَدْ كَمَّلَ نَصْفَ الدِّيْنِ ، فَلْيَتَّقِ اللهَ
          فِي النِّصْفِ البَاقِي
        </small>
        <small className="text-justify pr-3 pl-3">
          “Jika seseorang menikah, maka ia telah menyempurnakan separuh
          agamanya. Karenanya, bertakwalah pada Allah pada separuh yang
          lainnya.” (HR. Al Baihaqi)
        </small>
      </div>
      <div className="h-screen bg-black"></div>
    </>
  );
};

export default About;
