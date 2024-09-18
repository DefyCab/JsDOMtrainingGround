const divs = document.querySelectorAll(".mainResult")


console.log(divs)

function checkIfNegative(nodelist) {
    for(let i = 0; i < nodelist.length; i++ ) {
        if(nodelist[i].textContent < 0 ) {
            nodelist[i].classList.add("negativeResult")
        } 
        nodelist[i].classList.add("positiveResult")
    }
}

checkIfNegative(divs)