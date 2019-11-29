<<<<<<< HEAD
//TODO
//setinterval för att få tiden att uppdateras.
//create element i javascript istället för i html


window.addEventListener( 'load', loadSite)
=======
window.addEventListener('load', loadSite)
>>>>>>> 99ac4e3eaa484e99467465897297695fb8bb15b9

function loadSite() {

    const d = new Date();
    console.log(d)
    document.querySelector(".year").innerHTML = d.getFullYear();

    getMonthName();

    document.querySelector(".day").innerHTML = d.getDate();

<<<<<<< HEAD
    getTwoDigitsHour();

    getTwoDigitsMinute();
    
    getWeekdayName();
}


/**
 * changes 0-11 to january-febuary
 */
function getMonthName() {
    const d = new Date();
    const month = new Array(11);
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
   
    const n = month[d.getMonth()];
    document.querySelector(".month").innerHTML = n;
  }

/**
 * Add a 0 before hour 0-9
 * 
 *  */ 
function getTwoDigitsHour() {
    const d = new Date();
    const currentHour = d.getHours();
    
    if (currentHour < 10)
   {
    document.querySelector(".hour").innerHTML = "0" + d.getHours() +" :";
   }
else
   {
    document.querySelector(".hour").innerHTML = d.getHours() +" :";
   }
} 

/**
 * Add a 0 before minute 0-9
 * 
 *  */ 
function getTwoDigitsMinute() {
    const d = new Date();
    const currentMinute = d.getMinutes();
    
    if (currentMinute < 10)
   {
    document.querySelector(".minute").innerHTML = "0" + d.getMinutes();
   }
else
   {
    document.querySelector(".minute").innerHTML = d.getMinutes();
   }
} 
=======
   

    //change 0-6 to Monday-Sunday
    document.querySelector(".weekday").innerHTML = d.getDay();
>>>>>>> 99ac4e3eaa484e99467465897297695fb8bb15b9

    setInterval(getTime, 10000)

}

function getTime() {
    const d = new Date();
 //change 0-9 to 00-09
 document.querySelector(".hour").innerHTML = d.getHours() + " :";

 //change 0-9 to 00-09
 document.querySelector(".minute").innerHTML = d.getMinutes() + " :";

<<<<<<< HEAD
/**
 * changes 0-6 to monday-sunday
 */
function getWeekdayName() {
    const d = new Date();
    const weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
  
    const n = weekday[d.getDay()];
    document.querySelector(".weekday").innerHTML = n;
  }
=======
 //change 0-9 to 00-09
 document.querySelector(".second").innerHTML = d.getSeconds();
}
>>>>>>> 99ac4e3eaa484e99467465897297695fb8bb15b9
