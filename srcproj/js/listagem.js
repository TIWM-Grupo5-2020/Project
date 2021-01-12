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
    
    var row=document.createElement('div');
    row.className="row";
    divBooks.appendChild(row);

    for (var i = 0; i < Book_List.length; i++) {

        var divColSm=document.createElement("div");
        divColSm.className="col-sm-3 edit-col";
        row.appendChild(divColSm);
        
        var code=Book_List[i].getElementsByTagName("code")[0].childNodes[0].nodeValue;
        var anchor=document.createElement('a');
        anchor.className="anchor";
        anchor.href="/Project/srcproj/detalhe.html?"+code;
        
        divColSm.appendChild(anchor);
        
        var divProdContainer=document.createElement("div");
        divProdContainer.className="prod-container";
        anchor.appendChild(divProdContainer);

        var divImg=document.createElement("div");
        divImg.className="img-wrapper";
        divProdContainer.appendChild(divImg);

        var srcImg=Book_List[i].getElementsByTagName("image")[0].childNodes[0].nodeValue;
        var img=document.createElement("img");
        img.className="imagem";
        img.src=srcImg;
        img.alt="Imagem";
        divImg.appendChild(img);

        

        var divDesc=document.createElement("div");
        divDesc.className="descprod"; 
        divProdContainer.appendChild(divDesc);

        var redirect=document.createElement("p");
        redirect.innerText=Book_List[i].getElementsByTagName("name")[0].childNodes[0].nodeValue;
        divDesc.appendChild(redirect);
    }
};
function ready() {
    loadData();
}