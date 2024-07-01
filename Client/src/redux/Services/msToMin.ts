export function formatMillisecToMin(milliseconds:number) {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const formattedTime = `${(minutes % 60)
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
return formattedTime;
}
