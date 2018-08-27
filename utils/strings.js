const ENGLISH = {
    BILLNO:"Bill No."
}
const HINDI = {
    BILLNO:"Bhugtan No."
}

let LANG = 1;

//lang == 0 means English
// lang == 1 means Hindi
export const setLang = (value) =>{
    switch(value){
        case ("EN" || 0):{
            LANG = 0;
            return;
        }
        case ("HI" || 1):{
            LANG = 1;
            return;
        }
        default :{
            LANG = 0;
            return;
        }
    }
}

export const STRINGS = [
    ENGLISH,
    HINDI
]


