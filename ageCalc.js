document.querySelector("#submit").addEventListener("click", function () {  //The Document method querySelector() returns the first Element within the document that matches the specified selector, or group of selectors.
    const update = function () {
        let dob = document.querySelector("#dob").value
        day = new Date(dob), //Date methods allow you to get and set the year, month, day, hour, minute, second, and millisecond of date objects, using either local time or UTC
            time = day.getTime(),
            today = new Date(),
            timenow = today.getTime(),
            value = timenow - time,
            sec = Math.floor(value / 1000), //The Math.floor() static method always rounds down and returns the largest integer less than or equal to a given number.
            min = Math.floor(value / (1000 * 60)),
            hour = Math.floor(value / (1000 * 60 * 60)),
            day = Math.floor(value / (1000 * 60 * 60 * 24)),
            week = Math.floor(value / (1000 * 60 * 60 * 24 * 7)),
            month = Math.floor(value / (1000 * 60 * 60 * 24 * 30.4375)),
            year = Math.floor(value / (1000 * 60 * 60 * 24 * 365.25));
        
        
        let insert = function (x, y) {
            document.querySelector(x).innerHTML = y;
        }

        insert("#year", year + "-Years");
        insert("#month", month + "-Months");
        insert("#week", week + "-Weeks");
        insert("#day", day + "-Days");
        insert("#hour", hour + "-Hours");
        insert("#min", min + "-Minutes");
        insert("#sec", sec + "-Seconds");
    }
    setInterval(update, 1000);
})