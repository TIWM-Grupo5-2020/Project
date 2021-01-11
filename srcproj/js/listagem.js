function loadData() {
    var oXHR = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');

    function reportStatus() {
        if (oXHR.readyState == 4)               // REQUEST COMPLETED.
            showTheList(this.responseXML);      // ALL SET. NOW SHOW XML DATA.
    }

    oXHR.onreadystatechange = reportStatus;
    oXHR.open("GET", "../srcproj/xml/products.xml", true);        // true = ASYNCHRONOUS REQUEST (DESIRABLE), false = SYNCHRONOUS REQUEST.
    oXHR.send();
}

function showTheList(xml) {

    var divBooks = document.getElementById('container');        // THE PARENT DIV.
    var Book_List = xml.getElementsByTagName('product');  
    
    for (var i = 0; i < Book_List.length; i++) {

        var divC1=document.createElement("div");
        divC1.className="column";
        divBooks.appendChild(divC1);

        var srcImg=Book_List[i].getElementsByTagName("image")[0].childNodes[0].nodeValue;
        var img=document.createElement("img");
        img.className="imagem";
        img.src=srcImg;
        img.alt="Imagem";
        divC1.appendChild(img);

        var code=Book_List[i].getElementsByTagName("code")[0].childNodes[0].nodeValue;

        var divC2=document.createElement("div");
        divC2.className="column2";
        divBooks.appendChild(divC2);
        var redirect=document.createElement("a");
        redirect.innerText=Book_List[i].getElementsByTagName("name")[0].childNodes[0].nodeValue;
        redirect.href="/Project-master/srcproj/detalhe.html?"+code;
        divC2.appendChild(redirect);
    }
};