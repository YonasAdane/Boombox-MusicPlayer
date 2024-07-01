export function formatRelativeTime(givendate:string) {
    let givenDate = new Date(givendate);
    let currentDate = new Date();
    let timeDiff = currentDate.getTime() - givenDate.getTime();
    let secondsDiff = Math.floor(timeDiff / 1000);
    let minutesDiff = Math.floor(secondsDiff / 60);
    let hoursDiff = Math.floor(minutesDiff / 60);
    let daysDiff = Math.floor(hoursDiff / 24);
    let weeksDiff = Math.floor(daysDiff / 7);
    let monthsDiff = Math.floor(daysDiff / 30);
    let yearsDiff = Math.floor(daysDiff / 365);
    if (yearsDiff > 0) {
    return `${yearsDiff} ${yearsDiff === 1 ? 'year' : 'years'} ago`;
    } else if (monthsDiff > 0) {
    return `${monthsDiff} ${monthsDiff === 1 ? 'month' : 'months'} ago`;
    } else if (weeksDiff > 0) {
    return `${weeksDiff} ${weeksDiff === 1 ? 'week' : 'weeks'} ago`;
    } else if (daysDiff > 0) {
    return `${daysDiff} ${daysDiff === 1 ? 'day' : 'days'} ago`;
    } else if (hoursDiff > 0) {
    return `${hoursDiff} ${hoursDiff === 1 ? 'hour' : 'hours'} ago`;
    } else if (minutesDiff > 0) {
    return `${minutesDiff} ${minutesDiff === 1 ? 'minute' : 'minutes'} ago`;
    } else {
    return `${secondsDiff} ${secondsDiff === 1 ? 'second' : 'seconds'} ago`;
    }
}

