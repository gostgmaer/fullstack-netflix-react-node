export const millisecondsToStr = (milliseconds) => {
    let temp = milliseconds / 1000;
    const years = Math.floor(temp / 31536000),
        days = Math.floor((temp %= 31536000) / 86400),
        hours = Math.floor((temp %= 86400) / 3600),
        minutes = Math.floor((temp %= 3600) / 60),
        seconds = temp % 60;

    if (days || hours || seconds || minutes) {
        return (
            (years ? years + "y " : "") +
            (days ? days + "d " : "") +
            (hours ? hours + "h " : "") +
            (minutes ? minutes + "m " : "") 
        );
    }

    return "0 s";
}