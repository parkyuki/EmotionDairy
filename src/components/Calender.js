import React from "react";

const Calender = ({ curDate }) => {
  const now = curDate;

  const today = {
    year: now.getFullYear(),
    date: now.getDate(),
    month: now.getMonth() + 1,
    day: now.toLocaleDateString(),
  };
  const prevLast = new Date(today.year, today.month - 1, 0);
  //0을 전달하면 입력한 달의 마지막 날짜를 가져옴
  const thisLast = new Date(today.year, today.month, 0);

  const PLDate = prevLast.getDate(); //지난달 마지막 날짜
  const PLDay = prevLast.getDay(); //지난달 마지막 요일

  const TLDate = thisLast.getDate();
  const TLDay = thisLast.getDay();
  const prevDates = [];
  const thisDates = [...Array(TLDate + 1).keys()].slice(1);
  const nextDates = [];

  if (PLDay !== 6) {
    for (let i = 0; i < PLDay + 1; i++) {
      prevDates.unshift(PLDate - i);
    }
  }

  for (let i = 1; i < 7 - TLDay; i++) {
    nextDates.push(i);
  }
  const dates = prevDates.concat(thisDates, nextDates);

  const day = ["일", "월", "화", "수", "목", "금", "토"];

  const goToday = () => {};
  const firstDateIndex = dates.indexOf(1);
  const lastDateIndex = dates.lastIndexOf(TLDate);

  return (
    <div className="calender">
      <button className="btn" onClick={goToday}>
        오늘
      </button>
      <div className="days">
        {day.map((it) => (
          <div className="day">{it}</div>
        ))}
      </div>
      <div className="dates">
        {dates.map((it) => (
          <div className="date">{it}</div>
        ))}
      </div>
    </div>
  );
};

export default Calender;
