import "./styles/all.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
function App() {
  const [weekArr, setWeekArr] = useState(null);
  const [month, setMonth] = useState("");
  const [yearsDay, setYearsDay] = useState("");
  const [prevArr, setPrevArr] = useState(null);
  const [nowMonthArr, setNowMonthArr] = useState(null);
  const [nextMonthArr, setNextMonthArr] = useState(null);
  const [date, setDate] = useState(new Date());

  const months = [
    "一月",
    "二月",
    "三月",
    "四月",
    "五月",
    "六月",
    "七月",
    "八月",
    "九月",
    "十月",
    "十一月",
    "十二月",
  ];

  const getDateData = () => {
    date.setDate(1);
    const pArr = [];
    const nArr = [];
    const xArr = [];
    const lastDay = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDate();
    const prevLastDay = new Date(
      date.getFullYear(),
      date.getMonth(),
      0
    ).getDate();
    const firstDayIndex = date.getDay();
    const lastDayIndex = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDay();
    const nextDays = 7 - lastDayIndex - 1;
    setMonth(months[date.getMonth()]);
    setYearsDay(new Date().toLocaleDateString());
    for (let x = firstDayIndex; x > 0; x--) {
      pArr.push(prevLastDay - x + 1);
    }
    setPrevArr([...pArr]);
    for (let i = 1; i <= lastDay; i++) {
      nArr.push(i);
    }
    setNowMonthArr([...nArr]);
    for (let j = 1; j <= nextDays; j++) {
      xArr.push(j);
    }
    setNextMonthArr([...xArr]);
    console.log(date);
  };

  useEffect(() => {
    setDate(new Date());
    setWeekArr([
      "星期日",
      "星期一",
      "星期二",
      "星期三",
      "星期四",
      "星期五",
      "星期六",
    ]);
    getDateData();
  }, []);

  const handlePrev = () => {
    date.setMonth(date.getMonth() - 1);
    getDateData();
  };
  const handleNext = () => {
    date.setMonth(date.getMonth() + 1);
    getDateData();
  };
  return (
    <div className="container">
      <div className="calendar">
        <div className="month">
          <FontAwesomeIcon icon={faAngleLeft} onClick={handlePrev} />
          <div className="date">
            <h1>{month}</h1>
            <p>{date.toLocaleDateString()}</p>
          </div>
          <FontAwesomeIcon icon={faAngleRight} onClick={handleNext} />
        </div>
        <div className="weeks">
          {weekArr && weekArr.map((item) => <div key={item}>{item}</div>)}
        </div>
        <div className="days">
          {prevArr &&
            prevArr.map((item) => (
              <div className="prev-date" key={item}>
                {item}
              </div>
            ))}
          {nowMonthArr &&
            nowMonthArr.map((item) => <div key={item}>{item}</div>)}
          {nextMonthArr &&
            nextMonthArr.map((item) => (
              <div className="next-date" key={item}>
                {item}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
