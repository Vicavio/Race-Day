let raceNumber = Math.floor(Math.random() * 1000);
let registrationTime = false;
registrationTime === true ? console.log("Registered early") : console.log("Registered late");
let runnerAge = 27;
if (runnerAge >= 18 && registrationTime){
    raceNumber += 1000
};
if (runnerAge > 18 && registrationTime){
    console.log (`You start at 9:30 am. This will be your race number: "${raceNumber}"`);
} else if (runnerAge > 18 && !registrationTime ){
    console.log (`You start at 11:00 am. Your race number will be: "${raceNumber}"`);
  } else if (runnerAge < 18){
    console.log(`You start at 12:30 pm. This will be your race number: "${raceNumber}"`);
  } else {
      console.log("What is your age?");
  }