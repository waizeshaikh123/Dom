// ######## Add-freind Function ##################
// const Add_Friend = function(){
//     let h1 = document.querySelector("h1")
//     let add = document.querySelector("button")
//     // let remove = document.querySelector(".remove-frr")

//     let a = 0
//     add.addEventListener("click", function () {

//         if (a == 0){
//             h1.innerHTML = "Frr";
//             h1.style.color = "#345"
//             add.innerHTML = "remove"
//             a = 1
//         }
            
//         else{
//             h1.innerHTML = "starnger";
//             h1.style.color = "#000"
//             add.innerHTML = "add"
//             a = 0
//         }

//     })

//     // remove.addEventListener("click", function () {
//     //     h1.innerHTML = "remove";
//     //     h1.style.color = "#45665443"
//     // })
// }
// Add_Friend()


// ############ insta like Function ################
// const insta_Like = function(){
//     let  cont = document.querySelector(".cont")
//     let heart  = document.querySelector("i")

//     cont.addEventListener("dblclick", function(){
//     setTimeout(function(){
//         heart.style.opacity = 0.8
//     },0.1000)

//     setTimeout(function(){
//         heart.style.opacity = 0
//     },1000)
    
// })
// }
// insta_Like()



//  ################ Cursor Function ################
// const cursor = function(){
//     let main = document.querySelector(".main");
//     let crs = document.querySelector(".cursor");

//     main.addEventListener("mousemove", function(dets){
//     crs.style.left = dets.x+"px"
//     crs.style.top = dets.y+"px" 
    
// })
// }
// cursor()

//  ############### mouse move Function ###############

// const mouse_move = function(){
    
// let main = document.querySelectorAll(".elem")

//     main.forEach(function(val){
//     val.addEventListener("mouseenter", function(){
//         val.childNodes[3].style.opacity = 1 
//     })
//     val.addEventListener("mouseleave", function(){
//         val.childNodes[3].style.opacity = 0 
//     })
//     val.addEventListener("mousemove",function(dets){
//         val.childNodes[3].style.left = dets.x + "px";  
//     })
// })
// }
// mouse_move()