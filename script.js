// ######## Add-freind Function
const Add_Friend = function(){
    let h1 = document.querySelector("h1")
    let add = document.querySelector("button")
    // let remove = document.querySelector(".remove-frr")

    let a = 0
    add.addEventListener("click", function () {

        if (a == 0){
            h1.innerHTML = "Frr";
            h1.style.color = "#345"
            add.innerHTML = "remove"
            a = 1
        }
            
        else{
            h1.innerHTML = "starnger";
            h1.style.color = "#000"
            add.innerHTML = "add"
            a = 0
        }

    })

    // remove.addEventListener("click", function () {
    //     h1.innerHTML = "remove";
    //     h1.style.color = "#45665443"
    // })
}
Add_Friend()

