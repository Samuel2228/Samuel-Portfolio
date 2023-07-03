let readBtn = document.getElementById('todo-app');
let jambScore = document.getElementById('jamb-score');
let budgetApp = document.getElementById('budget-app');

readBtn.addEventListener('click', ()=> {
    let todoMessage = 'Todo App is an app that I have been praticing and learing since my career as a developer with HTML & CSS. I created this Todo-App recently with my little knowledge of javascript. ';
    alert(`Todo App\n \n ${ todoMessage}`)
})

// Jamb score 

jambScore.addEventListener('click', ()=> {
    let jambMsg = "\n My first project in javascript. Jamb Score is an app use to check student score I've created 3 different Jamb Score.";
     alert(`Jamb Score\n ${jambMsg}`)
})

budgetApp.addEventListener('click', ()=> {
    let budgetMsg = "Budget app is an app used to track finance such as income, savings and debt. I used HTML5 & CSS3 in creating this, app i have'nt implemented JavaSccript in it yet";
    alert(`Budget App\n \n ${budgetMsg}`)
})
