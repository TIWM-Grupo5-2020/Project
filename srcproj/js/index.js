function filtroSexo(p) {
    //alert(p);
    var filtroSexo = p;
    sessionStorage.setItem("filtrosexo", undefined);
    sessionStorage.setItem("filtrosexo", filtroSexo);
    window.location.href="../srcproj/listagem.html";
}
function clean(){
    sessionStorage.setItem("filtrosexo", undefined);
    sessionStorage.setItem("filtroSport", undefined);
    window.location.href="../srcproj/";
}

function filtroSport(p) {
    //alert(p);
    var filtroSport = p;
    sessionStorage.setItem("filtroSport", undefined);
    sessionStorage.setItem("filtroSport", filtroSport);
    window.location.href="../srcproj/listagem.html";
}
function triggerMan(p){ 
    sessionStorage.setItem("filtrosexo", "Homem");
    sessionStorage.setItem("filtroSport", p);
    window.location.href="../srcproj/listagem.html";
    
}
function triggerWoman(p){ 
    sessionStorage.setItem("filtrosexo", "Mulher");
    sessionStorage.setItem("filtroSport", p);
    window.location.href="../srcproj/listagem.html";
    
}
function goTop(){
    var elmnt = document.getElementById("aboutUs");
    elmnt.scrollIntoView(true);
    window.scrollBy(0, -87);
}


