const time = new Date().getHours(); //this is to refer to the current time//
let hello;

if (time >= 0 && time <= 12) {  //if the time is between midnight and 12.00 the message is good morning//
  hello = "Good morning!";
} else if (time > 12 && time <= 18) { //if the time is between 12:00 and 18:00 the message is good afternoon//
  hello = "Good afternoon!";
} else {  //every other time, meaning betwee 18:00 and midnight will result in "good evening" message//
  hello = "Good evening!";
}

document.getElementById("welcome").innerHTML = hello; //when writing the "welcome" id, the text will show the message that is defined under hello//