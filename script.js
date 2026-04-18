const display = document.getElementById('display');
const btnGrid = document.getElementById('btnGrid');
const modeBtn = document.getElementById('modeBtn');

// (Mode Toggle). isko hum is lye add kr rhy hain ta ky calculator  aur isky button ko hum simple-mode main aur scientific mode main kar sakain

function toggleMode () {
    btnGrid.classList.toggle('simple-mode');modeBtn.innerText = btnGrid.classList.contains('simple-mode') ? 'Sci' : 'Std';
};

// (Default) isko hum is lye add kr rhy hain ta ky calculator aur isky button hmain pehly simple-mode main nazar aye .na keh scientific mode main

    btnGrid.classList.toggle('simple-mode')

    // Light) isko hum is lye use kr rhy hain ta ky calculator aur isky background-color ko je pehly hum ny CSS main likh dia hy ko hum light-mode main hy to dark-mode main kar sakain aur dark-mode main hy to light-mode main kr sakain uper jo scientific option ky sath batti lagi hovi hy isko click kr ky

    function toggleLight() {
        document.body.classList.toggle('light-mode');
    };
     // input isko hum waha use krain gy keh hmary calculator main jo display hy is display pr number ko lana hy to button ko click krny pr wo button waly numer is calculator ky display main nazar aye.mtlb keh likh kr aa jayen.

    function appendValue (val) {
        display.value += val;
    };

// clear value is ko hum us waqt use krain gy keh agar hmary calculator main jo bhi button pr click krny sy displsy main value likhi thi  usko agar hum clear karna chah rhy hain to  button main maojood C press krny pr clear ho jaye ga

    function clearDisplay() {
    display.value = '';
}

// delete value is ko hum us waqt use krain gy keh agar hmary calculator main jo bhi button pr click krny sy displsy main value likhi thi  usko agar hum aik aik kr ky delete karna chah rhy hain to  button main maojood Del press krny pr delete ho jaye ga

    function deleteLast() {
    display.value = display.value.slice(0,-1);
}

// (+/-) is ko hum us waqt use krty hain jb hum koi number ko jamma ko nafi aur nafi ko jamma karna chah rhyn hain

function togglesign() {
    if (!display.value) return;
    display.value = display.value.startsWith('-') ? display.value.slice(1) : '-' + display.value;
}
  // yeh display pr maojood value ko dikhaye ga mtlb agar hum jamma, nafi, zarab, aur taqseem kuch bhi kr rhy hain to yeh unko calculate kr ky display main show kry ga is main (eval) ka jo function hy wo agar qeemat 5+10*2 hy to tab yeh likhty hain keh yeh seh tariqy sy work kry ( is main do function hain jis main try aur catch hy inko apply krny pr agar calculation seh hovi hy to try run ho ga aur agar gallat hovi hy to catch run ho ga example 5++ likh dia to catch work kry ga 

function calculateResult() {
    try{let result = eval(display.value); display.value = result;} 
    catch{display.value = 'error';}
}

function calculateFunction(type) {
    let v = parseFloat(display.value);
    if(isNaN(v))return;


switch(type) {
case'sqrt': display.value = Math.sqrt(v); break; 
case 'cbrt': display.value = Math.cbrt(v); break;
case 'sin': display.value = Math.sin(v * Math.PI/180); break;
case 'cos': display.value = Math.cos(v * Math.PI/180); break;
case 'tan': display.value = Math.tan(v * Math.PI/180); break;
case 'log': display.value = Math.log10(v); break;
case 'ln': display.value = Math.log(v); break;
case 'inv': display.value = 1/v; break;

case 'fact':
            let f = 1;
            for(let i=1; i<=v; i++) f *= i;
            display.value = f;
            break;

}
}


     //Har case ke baad break; kyun hai?
//Ye bohat zaroori hai! break ka matlab hai "bas, kaam ho gaya, ab bahar nikal jao." Agar aap break nahi lagayenge, to computer agla case bhi chala dega, aur aapka result ghalat ho jayega. Ye aise hi hai jaise aik baar order mil jaye to waiter aglay customer ke paas chala jata hai.

//Ye Code kaisay kaam karta hai? (Step-by-Step)
//Value Pakarna: Pehle parseFloat ke zariye screen par likha hua number uthaya jata hai.

//Match Karna: Computer switch mein ja kar dekhta hai ke user ne kaunsa button dabaya (e.g., 'log').

//Calculation: Us case ke andar jo formula likha hai, wo chalta hai.

//Display: Jo jawab aata hai, wo display.value ke zariye wapas screen par nazar aa jata hai.

//Ye sara code isliye likha gaya hai taake aapko har button ke liye alag alag function na banana paray. Sirf aik barray function (calculateFunction) ke andar saari mathematical logics (cases) jama kar di gayi hain.





    



