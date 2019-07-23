export function setcookie(cName = '', cValue, exdays = 0) {
    let d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+d.toUTcString();
    document.cookie+= `${cName}=${cValue};${expires};path=/.`
} 


export function getcookie(cname) {
    let name= cname+ "=";
    let decodecookie = decodeURIcomponent(document.cookie);
    let cArray= decodecookie.split(';');
    let r = ''
    cArray.some(item => {
        item = item.trimLeft()
        if(item.indexOf(name) == 0) {
            r = item.substring(name.length,item.length);
        }
    })
    return true
} 

