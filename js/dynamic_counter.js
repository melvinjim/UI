var date = new Date();

    formatDate = (date)=>{
        var monthNameShort = date.toLocaleString("en-US", { month: "short" });
        var formatted_date = date.getDay() + " " + + date.getDate() + ", " + monthNameShort + "  " + date.getFullYear();
        return formatted_date;
    }

var hola = document.getElementById("holaputa").innerHTML = formatDate(date)