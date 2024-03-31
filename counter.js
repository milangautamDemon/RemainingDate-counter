


function getTimeDifference() {

    const currentDate = new Date(); // initialize current date & time
    const visitingDate = new Date("Apr 2, 2024 6:46:00"); // initialize visiting date & time

    const visitDatetext = document.querySelector(".visitDate");
    visitDatetext.textContent = visitingDate; // display visit date

    const TimeDifference = (visitingDate.getTime()-currentDate.getTime())/1000; // remaining visit date in secs.
    const getRemainingVisitDays = Math.floor(TimeDifference/(60*60*24)); // remaining visit days.
    const getRemainingVisithours = Math.floor((TimeDifference/(60*60))%24); // remaining visit hours.
    const getRemainingVisitMins = Math.floor((TimeDifference/60)%60); // remaining visit mins.
    const getRemainingVisitSecs = Math.floor((TimeDifference)%60); // remaining visit secs.

    const input = document.querySelectorAll("input"); // all input tag to display
    const visitvalues = [getRemainingVisitDays, getRemainingVisithours, getRemainingVisitMins, getRemainingVisitSecs];

    visitvalues.forEach((element, index) => {  // loop to set value in inputs
       input[index].value = element;
    });

}

// getTimeDifference(); 

setInterval(() => { //callback function (calling function in every sec)
    getTimeDifference(); 
}, 1000);


