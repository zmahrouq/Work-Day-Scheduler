var row = $(".row")
var currentDay = $("#currentDay")
var momentCurrentDay = moment();


for (let i = 0; i < 23; i++) {
    var timeblock = $(`<div data-hour="${i}" class="col-1 border border-primary">
${timeConversion(i)}
</div>
<input id="hour${i}" type="text" class="col-10 border border-primary inputBox" >
<button class="col-1 border border-primary buttons">
Save
</button>`)


row.append(timeblock);
    
var displayHour = moment().hour(i)

console.log(displayHour)

if (displayHour.isSame(momentCurrentDay, 'hour')) {
    timeblock.css('background-color', 'red'); 
}

else if (displayHour.isBefore(momentCurrentDay)) {
    timeblock.css('background-color', 'grey'); 
}


else if (displayHour.isAfter(momentCurrentDay)) {
    timeblock.css('background-color', 'green'); 
}

}

function timeConversion(hour) {
    if (hour == 0) {
        return `${12} AM`
    }
    if (hour > 12) {
        return `${hour - 12} PM`
    }
    if (hour < 12) {
        return `${hour} AM`
    }
    if (hour = 12) {
        return `${12} PM`
    }

}


currentDay.text(moment().format('YYYY MM DD h:mm:ss'));
var k = 0;
var $inputbox = $('.inputBox');

var $allButtons = $('.buttons');
$allButtons.on('click', function(){
    k++;
    var input = $(this)[0].previousSibling.previousSibling;
    console.log(input);
    var currentInput = input.value;
    myStorage.setItem($(this)), currentInput;
})

// var allButtons = document.querySelectorAll('.buttons');
// allButtons.forEach(button =>{
//     button.addEventListener('click', (e) => {
//         console.log(e);
//         let $thisInput  = $((this).siblings());
//         console.log($thisInput);
//     })
// })

var myStorage = window.localStorage
var allInputs = document.querySelectorAll(".inputBox")

allInputs.forEach(input => {
    if (myStorage.getItem(input.value) == null) {
        input.value = ""
    }
    else {
    if (input.value != myStorage.getItem()){
    input.value = myStorage.getItem(input) 
    }    
    }
})