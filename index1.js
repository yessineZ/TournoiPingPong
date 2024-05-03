let all = document.querySelector(".all") ; 
let numPlayersInput = document.querySelector(".num") ; 
let numberPlayers = 0 ;
console.log(all) ; 
numPlayersInput.addEventListener("change",(e) => {
     numberPlayers= e.target.value ;
     DoingDivs(numberPlayers) ;  
     header.style.display = "block" ;
     console.log(16/2) ; 
});
let header = document.querySelector(".header") ;
window.onload = () => {
 
    header.style.display = "none" ;
}





document.body.querySelector(".btn-add").addEventListener("click",(e)=> {
    let AllInputs = document.querySelectorAll(".playerName") ; 
    
    let AllFirstInputs =Array.from(AllInputs).filter((ele)=> {
                let lab = parseInt(ele.getAttribute("label")) ; 
                console.log(typeof(lab)) ; 
                if(lab=== 1) {
                    return true ;
                }
            });

    let NotYet = AllFirstInputs.filter((ele) => {
        if(ele.hasAttribute("done")) {
            return false ;
        }else {
            return true ;
        }
    });
   

   
    
            
    console.log(NotYet) ;
     

    let addInput = document.querySelector(".add") ;
   
    
     let rand =Math.floor(Math.random() * NotYet.length) ;  
    let name = addInput.value ;
    NotYet[rand].value = name ; 
    NotYet[rand].setAttribute("done",true) ;   
    addInput.value = "" ; 
    


});


function DoingDivs(value) {
    let labels = 1 ; 
    while(value>1)  {
        let div = document.createElement("div") ; 
        let count = value ; 
        while(count>0) {
            let div1 = document.createElement("div") ;

            div1.classList.add("two") ;
            for(let i = 0 ; i < 2 ; i++) {
                let input = document.createElement("input") ;
                input.setAttribute("type","text") ;
                input.setAttribute("label",labels) ; 
                input.classList.add("playerName") ;
                div1.appendChild(input) ;
            }
            div.appendChild(div1) ;
            console.log(count + " count") ; 
            count -= 2 ; 
            
            
            
        }
        
        div.classList.add("col") ;
        all.appendChild(div) ;
        console.log(value + " value") ;
        value /= 2 ;
        labels += 1 ;

    }
}

function InputClick() {
    document.addEventListener("click",(e) => {
        if(e.target.classList.contains("playerName")) {
            
            console.log(e.target.value) ;
            console.log(e.target.getAttribute("label")) ;
            CurrentTarget = parseInt(e.target.getAttribute("label")) ; 
            console.log(CurrentTarget) ; 
        
            AllInputs = document.getElementsByClassName("playerName") ;
            console.log(CurrentTarget) ;  
            console.log(AllInputs) ;
            console.log(Array.from(AllInputs)) ;
              
          let NextInputsList =Array.from(AllInputs).filter((ele)=> {
                let lab = parseInt(ele.getAttribute("label")) ; 
                console.log(typeof(lab)) ; 
                 
                if(lab === CurrentTarget+1) {
                    if(ele.value === "") {
                        console.log("haha") ; 
                        return true ; 
                    }
                }
            });
            console.log(NextInputsList) ;
            NextInputsList[0].value = e.target.value;

            
        }
    })
}

InputClick() ;







