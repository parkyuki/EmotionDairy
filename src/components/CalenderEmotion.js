import React from "react";
import { emotionList } from "../util/emotion";

const CalenderEmotion = ({ days, diaryList }) => {
  //   const a = new Date(diaryList[idx].date);
  diaryList.map((it) => {
    days;
  });

  return (
    <>
      <img
        className="CalenderEmotion"
        src={process.env.PUBLIC_URL + `assets/emotion1.png`}
      />
    </>
  );
};

export default CalenderEmotion;
