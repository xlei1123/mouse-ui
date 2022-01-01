import React, { useEffect, useState } from 'react';
import styles from './index.less';
interface Iprops {
  isShowDay?: boolean;
  isShowHour?: boolean;
  isShowMinutes?: boolean;
  format?: {
    day: string;
    hours: string;
    minutes: string;
    seconds: string;
  };
  day?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
  onTimeUp?: () => void;
}

let timer: NodeJS.Timeout | undefined;

// 将时间统一转化为秒
const toSeconds = (
  day: number = 0,
  hours: number = 0,
  minutes: number = 0,
  seconds: number = 0,
): number => day * 60 * 60 * 24 + hours * 60 * 60 + minutes * 60 + seconds;

// 将秒数统一转化设定的格式
const calculateTime = (propsSeconds: number, isShowDay?: boolean) => {
  let [day, hours, minutes, seconds] = [0, 0, 0, 0];
  if (propsSeconds > 0) {
    day = isShowDay ? Math.floor(propsSeconds / (60 * 60 * 24)) : 0;
    hours = Math.floor(propsSeconds / (60 * 60)) - day * 24;
    minutes = Math.floor(propsSeconds / 60) - day * 24 * 60 - hours * 60;
    seconds =
      Math.floor(propsSeconds) -
      day * 24 * 60 * 60 -
      hours * 60 * 60 -
      minutes * 60;
  }
  return {
    day,
    hours,
    minutes,
    seconds,
  };
};

const index = (props: Iprops) => {
  let afterToSeconds = 0;
  const {
    day,
    hours,
    minutes,
    seconds,
    isShowDay,
    isShowHour = true,
    isShowMinutes = true,
    format,
  } = props;
  afterToSeconds = toSeconds(day, hours, minutes, seconds);
  // 时间渲染
  const [countDownTime, setCountDownTime] = useState<{
    day: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>();

  const countDown = () => {
    afterToSeconds--;
    const {
      day: _day,
      hours: _hours,
      minutes: _minutes,
      seconds: _seconds,
    } = calculateTime(afterToSeconds, isShowDay);

    setCountDownTime({
      day: _day,
      hours: _hours,
      minutes: _minutes,
      seconds: _seconds,
    });

    if (afterToSeconds < 0) {
      clearTimer();
      props.onTimeUp && props.onTimeUp();
      return;
    }

    timer = setTimeout(() => {
      countDown();
    }, 1000);
  };

  const clearTimer = () => {
    if (timer) clearTimeout(timer);
  };

  useEffect(() => {
    countDown();
  }, []);

  return (
    <div className={styles[`mouse-ui-count-down`]}>
      {isShowDay ? (
        <span>
          {countDownTime?.day}
          {format?.day || '天'}
        </span>
      ) : null}
      {isShowHour ? (
        <span>
          {countDownTime?.hours}
          {format?.hours || '小时'}
        </span>
      ) : null}
      {isShowMinutes ? (
        <span>
          {countDownTime?.minutes}
          {format?.minutes || '分'}
        </span>
      ) : null}
      <span>
        {countDownTime?.seconds}
        {format?.seconds || '秒'}
      </span>
    </div>
  );
};

export default index;
