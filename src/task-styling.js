const { compareAsc } = require("date-fns");

function dateStyling(taskdate, div) {
    let dateStyle = compareAsc(new Date(taskdate), new Date());
    if(dateStyle > 0){
        div.classList.add("greenStyle");
    }else{
        div.classList.add("redStyle");
    }
}

function priorityStyle(taskpriority, priority) {
    if(taskpriority === "1"){
        priority.classList.add("priority1");
    } else if(taskpriority === "2"){
        priority.classList.add("priority2");
    } else if(taskpriority === "3"){
        priority.classList.add("priority3");
    }else if(taskpriority === "4"){
        priority.classList.add("priority4");
    }
}


export { dateStyling, priorityStyle }

