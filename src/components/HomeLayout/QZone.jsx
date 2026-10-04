// import React from 'react';
import swim from "../../assets/swimming.png";
import classImage from "../../assets/class.png";
import playGround from "../../assets/playground.png";
import bg from "../../assets/bg.png";

const QZone = () => {
    return (
      <div className="flex flex-col">
        <h1 className="font-bold mt-5 text-lg">Q-Zone</h1>
        <img src={swim} alt="" />
        <img src={classImage} alt="" />
        <img src={playGround} alt="" />
        <img src={bg} alt="" />
      </div>
    );
};

export default QZone;