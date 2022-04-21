var date = new Date();

formatDate = (date)=>{
    var monthNameShort = date.toLocaleString("en-US", { month: "short" });
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var formatted_date = weekday[date.getDay()] + " " + + date.getDate() + ", " + monthNameShort + "  " + date.getFullYear() + "---" + + date.getHours() + ":" + + date.getMinutes();
    return formatted_date;
}
document.getElementById("dinamic-date").innerHTML = formatDate(date)