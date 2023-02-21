import React, { useEffect, useState } from "react";
import CalenderEmotion from "./CalenderEmotion";

const Calender = ({ curDate, today, diaryList }) => {
  const day = ["일", "월", "화", "수", "목", "금", "토"];

  const viewDate = {
    year: curDate.getFullYear(),
    date: curDate.getDate(),
    month: curDate.getMonth() + 1,
    day: curDate.toLocaleDateString(),
  };

  //0을 전달하면 입력한 달의 마지막 날짜를 가져옴
  const prevLast = new Date(viewDate.year, viewDate.month - 1, 0);
  const thisLast = new Date(viewDate.year, viewDate.month, 0);

  const PLDate = prevLast.getDate(); //지난달 마지막 날짜
  const PLDay = prevLast.getDay(); //지난달 마지막 요일

  const TLDate = thisLast.getDate();
  const TLDay = thisLast.getDay();

  const prevDates = [];
  const thisDates = [...Array(TLDate + 1).keys()].slice(1);
  const nextDates = [];

  // 달력에 표시될 이전 달 날짜
  if (PLDay !== 6) {
    for (let i = 0; i < PLDay + 1; i++) {
      prevDates.unshift(PLDate - i);
    }
  }

  // 달력에 표시 될 다음 달 날짜
  for (let i = 1; i < 7 - TLDay; i++) {
    nextDates.push(i);
  }

  const dates = prevDates.concat(thisDates, nextDates);

  // 이번달 1일의 인덱스 구하기
  const firstDateIndex = dates.indexOf(1);
  // 이번달 마지막날 인덱스 구하기
  const lastDateIndex = dates.lastIndexOf(TLDate);

  // 오늘의 인덱스 구하기
  let findToday = "";
  if (
    viewDate.year === today.getFullYear() &&
    viewDate.month === today.getMonth() + 1
  ) {
    findToday = dates.indexOf(today.getDate());
  }

  const days = [];
  diaryList.map((it) => {
    days.push({
      date: new Date(it.date).getDate(),
      emotion: it.emotion,
    });
  });
  console.log(days);
  const month_dates = [];

  // 전달,다음달 날짜와 이번달 날짜 구분
  dates.map((it, idx) => {
    const condition =
      idx >= firstDateIndex && idx < lastDateIndex + 1 ? "this" : "other";

    //오늘 날짜 체크
    const todayCheck = idx === findToday ? "today" : "";

    let diary_index = -1;

    if (idx >= firstDateIndex && idx < lastDateIndex + 1) {
      diary_index = days.findIndex((day) => day.date === it);
    }

    month_dates[idx] = (
      <div className={["date" + " " + todayCheck]}>
        <span className={condition}>{it}</span>
        {diary_index > -1 && (
          <img
            className="CalenderEmotion"
            src={
              process.env.PUBLIC_URL +
              `assets/emotion${days[diary_index].emotion}.png`
            }
          />
        )}
      </div>
    );
  });

  return (
    <div className="calender">
      <div className="days">
        {day.map((it) => (
          <div className="day">{it}</div>
        ))}
      </div>
      <div className="dates">
        {month_dates.map((it) => (
          <>{it}</>
        ))}
      </div>
    </div>
  );
};

Calender.defaultProps = {
  diaryList: [],
};

export default Calender;
