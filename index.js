// Function: saturdayFun
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  
  // Function: mondayWork
  function mondayWork(task = "go to the office") {
    return `This Monday, I will ${task}.`;
  }
  
  // Function: wrapAdjective
  function wrapAdjective(flair = "*") {
    return function (adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }
  
  // Example usage:
  const encouragingPromptFunction = wrapAdjective("!!!");
  console.log(encouragingPromptFunction("a hard worker")); // Output: "You are !!!a hard worker!!!"
  
