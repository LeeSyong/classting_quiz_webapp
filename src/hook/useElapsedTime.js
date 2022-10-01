import { intervalToDuration } from "date-fns";

function useElapsedTime() {
  const getElapsedTime = () => {
    const endTime = new Date().getTime();
    const startTime = localStorage.getItem("startTime");

    const elapsedTime = intervalToDuration({
      start: 0,
      end: endTime - startTime,
    });

    const zeroPad = (num) => String(num).padStart(2, "0");

    const formatted = `${zeroPad(elapsedTime.minutes)}분 ${zeroPad(
      elapsedTime.seconds,
    )}초`;

    return formatted;
  };

  return getElapsedTime();
}

export default useElapsedTime;
