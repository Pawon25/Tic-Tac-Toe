let A11=document.querySelector("#col11");
let A12=document.querySelector("#col12");
let A13=document.querySelector("#col13");
let A21=document.querySelector("#col21");
let A22=document.querySelector("#col22");
let A23=document.querySelector("#col23");
let A31=document.querySelector("#col31");
let A32=document.querySelector("#col32");
let A33=document.querySelector("#col33");
//Creating matrix to calculate the winner
let matrix=[
    ["a","a","a"],
    ["a","a","a"],
    ["a","a","a"]
];

//clearing boxes funtion
let clearbox=()=>{
    A11.textContent="";
    A12.textContent="";
    A13.textContent="";
    A21.textContent="";
    A22.textContent="";
    A23.textContent="";
    A31.textContent="";
    A32.textContent="";
    A33.textContent="";
}
clearbox();

var X_Score=0;
var Y_Score=0;
let Xtoshow= "X: "+X_Score;
let Ytoshow= "O: "+Y_Score;
document.getElementById("xbox").innerText=Xtoshow;
document.getElementById("ybox").innerText=Ytoshow;

let update =(winner)=>{
    if(winner=="X"){
        X_Score=X_Score+1;
    }
    else if(winner=="O"){
        Y_Score=Y_Score+1;
    }
    Xtoshow= "X: "+X_Score;
    Ytoshow= "O: "+Y_Score;
    document.getElementById("xbox").innerText=Xtoshow;
    document.getElementById("ybox").innerText=Ytoshow;
}
let turn="O";
let winner="B";
let printmatrix= (matrix)=>{
    for(let i=0;i<3;i++){
        console.log(matrix[i][0],"|",matrix[i][1],"|",matrix[i][2]);
        console.log("----------------------------------------------")
    }
}
let addletter = (a) =>{
    if(turn != "X" && a.textContent!="X" && a.textContent!="O"){
        a.textContent="O";
        turn="X";
    }
    else if(turn != "O" && a.textContent!="X" && a.textContent!="O"){
        a.textContent="X";
        turn="O";
    }
    switch (a) {
        case A11:
            matrix[0][0]=a.textContent;
            break;

        case A12:
            matrix[0][1]=a.textContent;
            break;

        case A13:
            matrix[0][2]=a.textContent;
            break;

        case A21:
            matrix[1][0]=a.textContent;
            break;

        case A22:
            matrix[1][1]=a.textContent;
            break;

        case A23:
            matrix[1][2]=a.textContent;
            break;

        case A31:
            matrix[2][0]=a.textContent;
            break;
    
        case A32:
            matrix[2][1]=a.textContent;
            break;
    
        case A33:
            matrix[2][2]=a.textContent;
            break;
    
        default:
            break;
    }
}
let winningboxes=[];
let pushboxes=(a,b,c)=>{
    winningboxes[0]=a;
    winningboxes[1]=b;
    winningboxes[2]=c;
};
let winnerHighlight=(winningboxes)=>{
    console.log("Inside winnerHighlight");
    winningboxes[0].classList.add("win-highlight");
    winningboxes[1].classList.add("win-highlight");
    winningboxes[2].classList.add("win-highlight");
    setTimeout(()=>{
    winningboxes[0].classList.remove("win-highlight");
    winningboxes[1].classList.remove("win-highlight");
    winningboxes[2].classList.remove("win-highlight");
    },1500);
}

let needdisable=false;

let checkwin=()=>{
    if(matrix[0][0]===matrix[0][1]  && matrix[0][0]===matrix[0][2] && matrix[0][0]!="a"){
            winner=matrix[0][0];
            console.log("Won by",winner);
            update(winner);
            pushboxes(A11,A12,A13);
            winnerHighlight(winningboxes);
            needdisable = true;
    }
    else if(matrix[1][0]===matrix[1][1] && matrix[1][0]===matrix[1][2] && matrix[1][0]!="a"){
            winner=matrix[1][0];
            console.log("Won by",winner);
            update(winner);
            pushboxes(A21,A22,A23);
            winnerHighlight(winningboxes);
            needdisable = true;
    }
    else if(matrix[2][0]===matrix[2][1] && matrix[2][0]===matrix[2][2] && matrix[2][0]!="a"){
            winner=matrix[2][0];
            console.log("Won by",winner);
            update(winner);
            pushboxes(A31,A32,A33);
            winnerHighlight(winningboxes);
            needdisable = true;
    }
    else if(matrix[0][0]===matrix[1][1] && matrix[1][1]===matrix[2][2] && matrix[2][2]!="a"){
            winner=matrix[0][0];
            console.log("Won by",winner);
            update(winner);
            pushboxes(A11,A22,A33);
            winnerHighlight(winningboxes);
            needdisable = true;
    }
    else if(matrix[0][2]===matrix[1][1] && matrix[1][1]===matrix[2][0] && matrix[2][0]!="a"){
            winner=matrix[2][0];
            console.log("Won by",winner);
            update(winner);
            pushboxes(A13,A22,A31);
            winnerHighlight(winningboxes);
            needdisable = true;
    }
    else if(matrix[0][0]===matrix[1][0] && matrix[2][0]===matrix[1][0] && matrix[1][0]!="a"){
            winner=matrix[0][0];
            console.log("Won by",winner);
            update(winner);
            pushboxes(A11,A21,A31);
            winnerHighlight(winningboxes);
            needdisable = true;
    }
    else if(matrix[0][1]===matrix[1][1] && matrix[2][1]===matrix[1][1] && matrix[1][1]!="a"){
            winner=matrix[0][1];
            console.log("Won by",winner);
            update(winner);
            pushboxes(A12,A22,A32);
            winnerHighlight(winningboxes);
            needdisable = true;
    }
    else if(matrix[0][2]===matrix[1][2] && matrix[2][2]===matrix[1][2] && matrix[1][2]!="a"){
            winner=matrix[0][2];
            console.log("Won by",winner);
            update(winner);
            pushboxes(A13,A23,A33);
            winnerHighlight(winningboxes);
            needdisable = true;
    }
}



A11.addEventListener("click",()=>{
    console.log("Detecting A11 click");
    addletter(A11);
    checkwin();
})
A11.addEventListener("mouseover",()=>{
    A11.classList.add("change");
})
A11.addEventListener("mouseout",()=>{
    A11.classList.remove("change");
    A11.classList.add("box");
})

/////////////////////////////////
A12.addEventListener("click",()=>{
    console.log("Detecting A12 click");
    addletter(A12);
    checkwin();
})

A12.addEventListener("mouseover",()=>{
    A12.classList.add("change");
})

A12.addEventListener("mouseout",()=>{
    A12.classList.remove("change");
    A12.classList.add("box");
})
// //////////////////////////////////
A13.addEventListener("click",()=>{
    console.log("Detecting A13 click");
    addletter(A13);
    checkwin();
})

A13.addEventListener("mouseover",()=>{
    A13.classList.add("change");
})

A13.addEventListener("mouseout",()=>{
    A13.classList.remove("change");
    A13.classList.add("box");
})
// //////////////////////////////
A21.addEventListener("click",()=>{
    console.log("Detecting A21 click");
    addletter(A21);
    checkwin();
})

A21.addEventListener("mouseover",()=>{
    A21.classList.add("change");
})

A21.addEventListener("mouseout",()=>{
    A21.classList.remove("change");
    A21.classList.add("box");
})
////////////////////////////////////
A22.addEventListener("click",()=>{
    console.log("Detecting A22 click");
    addletter(A22);
    checkwin();
})

A22.addEventListener("mouseover",()=>{
    A22.classList.add("change");
})

A22.addEventListener("mouseout",()=>{
    A22.classList.remove("change");
    A22.classList.add("box");
})
//////////////////////////////////////

A23.addEventListener("click",()=>{
    console.log("Detecting A23 click");
    addletter(A23);
    checkwin();
})

A23.addEventListener("mouseover",()=>{
    A23.classList.add("change");
})

A23.addEventListener("mouseout",()=>{
    A23.classList.remove("change");
    A23.classList.add("box");
})

//////////////////////////////////////////

A31.addEventListener("click",()=>{
    console.log("Detecting A31 click");
    addletter(A31);
    checkwin();
})

A31.addEventListener("mouseover",()=>{
    A31.classList.add("change");
})

A31.addEventListener("mouseout",()=>{
    A31.classList.remove("change");
    A31.classList.add("box");
})

////////////////////////////////////////

A32.addEventListener("click",()=>{
    console.log("Detecting A32 click");
    addletter(A32);
    checkwin();
})

A32.addEventListener("mouseover",()=>{
    A32.classList.add("change");
})

A32.addEventListener("mouseout",()=>{
    A32.classList.remove("change");
    A32.classList.add("box");
})
/////////////////////////////////////

A33.addEventListener("click",()=>{
    console.log("Detecting A33 click");
    addletter(A33);
    checkwin();
})

A33.addEventListener("mouseover",()=>{
    A33.classList.add("change");
})

A33.addEventListener("mouseout",()=>{
    A33.classList.remove("change");
    A33.classList.add("box");
})
//////////////////////////////////////

//Deals with the restrat button: Resets the matrix and style of the button
let restrat=document.querySelector("#restrat");
restrat.addEventListener("click",()=>{
    console.log("CLicking restrat");
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            matrix[i][j]="a";
        }
    }
    restrat.classList.add("restrat-clicked");
    setTimeout(()=>{
        restrat.classList.add("restrat");
        restrat.classList.remove("restrat-clicked");
        clearbox();
    },500);
})