let cels = document.querySelector("#C");
let fa = document.querySelector("#F");
let ke = document.querySelector("#F");
let ra = document.querySelector("#R");
let btns = document.querySelectorAll("button");


btns.forEach((btn) =>{
    btn.addEventListener("click", (e) =>{
        let tempe = e.target.innerHTML;

        if(tempe == "C"){
           let CC = parseFloat(C.value);
           
           F.placeholder = (((CC*9/5)+32).toFixed(1));
           K.placeholder = ((CC+273.15).toFixed(1));
           R.placeholder = ((((CC + 273.15)*9)/5).toFixed(1));



         }else if(tempe == "K") {
            let KK = parseFloat(K.value);
            C.placeholder = ((KK-273.15).toFixed(1));
            F.placeholder = (((KK-273.15)*9/5+32).toFixed(1));
            R.placeholder = ((KK*1.8).toFixed(1));



        }else if(tempe == "F"){
            let FF = parseFloat(F.value);
 
            C.placeholder = (((FF-32)*5/9).toFixed(1));
            K.placeholder = ((((FF-32)*5/9)+273.15).toFixed(1));
            R.placeholder = ((FF+459).toFixed(1));


            
         }else if(tempe == "R") {
            let RR = parseFloat(R.value);
 
            C.placeholder = (((RR-491.67)*5/9).toFixed(1));
            F.placeholder = ((RR-459.67).toFixed(1));
            K.placeholder = ((RR*5/9).toFixed(1));



         }else if(tempe == "resetar"){
            C.placeholder = "";
            F.placeholder = "";
            K.placeholder = "";
            R.placeholder = "";
         }

    })
})
