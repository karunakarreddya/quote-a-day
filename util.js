function getCountryCodeLocal(country){
    var code=0;
    switch(country){
        case 'India' : code=10; break;
        case 'Andra' : code=122; break;
        default: code=-1;break;
    }
    return code;
}
function print(){
    console.log("Contry Code");
}
module.exports ={
    getCountryCode:getCountryCodeLocal,
    print:print
};