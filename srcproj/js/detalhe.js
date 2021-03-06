function loadData(p) {
    var oXHR = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');

    function reportStatus() {
        if (oXHR.readyState == 4)               // REQUEST COMPLETED.
            showTheList(this.responseXML,p);      // ALL SET. NOW SHOW XML DATA.
    }

    oXHR.onreadystatechange = reportStatus;
    oXHR.open("GET", "../srcproj/xml/products.xml", true);        // true = ASYNCHRONOUS REQUEST (DESIRABLE), false = SYNCHRONOUS REQUEST.
    oXHR.send();
}

function showTheList(xml,p) {
      // THE PARENT DIV.
    var Book_List = xml.getElementsByTagName('product');  
    var found=false;
    for (var i = 0; i < Book_List.length; i++) {

        var code=Book_List[i].getElementsByTagName("code")[0].childNodes[0].nodeValue;
        if(code==p)
        {
            var div=document.getElementById('div_img');
            
            var src=Book_List[i].getElementsByTagName("image")[0].childNodes[0].nodeValue;
            document.getElementById("image").src =src;

            var name=Book_List[i].getElementsByTagName("name")[0].childNodes[0].nodeValue;
            document.getElementById("name").innerText=name;

            var price=Book_List[i].getElementsByTagName("price")[0].childNodes[0].nodeValue;
            document.getElementById("price").innerText=price+"€";

            var size=Book_List[i].getElementsByTagName("tamanho")[0].childNodes[0].nodeValue;
            document.getElementById("size").innerText="Tamanhos Disponiveis: "+size;

            var sexo=Book_List[i].getElementsByTagName("sexo")[0].childNodes[0].nodeValue;
            document.getElementById("sexo").innerText="Sexo: "+sexo;




            found=true;
            break;
        }

    }
    if(found==false)
    {
        window.location.href="../srcproj/listagem.html";
    }
};
    function ready() {
            
        var v1 =parent.document.URL.substring(parent.document.URL.indexOf('?')+1, parent.document.URL.length);
        if(isNaN(v1))
        {
            window.location.href="../srcproj/listagem.html";
        }
        loadData(v1);
        
    }
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