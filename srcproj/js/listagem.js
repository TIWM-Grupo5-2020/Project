
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

    var filtroSexo = sessionStorage.getItem("filtrosexo");
    var filtroSport = sessionStorage.getItem("filtroSport");


    var divBooks = document.getElementById('container');        // THE PARENT DIV.
    var Book_List = xml.getElementsByTagName('product');  
    
    var row=document.createElement('div');
    row.className="row";
    divBooks.appendChild(row);

    var filtro1=document.getElementById('filtro1');
    var filtro2=document.getElementById('filtro2');
    

    if(filtroSexo=='undefined' || filtroSexo=='null')
    {
        filtroSexo='Ambos,Mulher,Homem'; 
        filtro1.innerHTML="<span class='edit-bold'>Sexo:</span> Ambos ";
    }
   
    else
    {
        filtro1.innerHTML="Sexo: "+filtroSexo;
        filtro1.className="fil1";
        filtroSexo+=",Ambos";
    }
    if(filtroSport=='undefined' || filtroSport=='null')
    {
        filtro2.innerHTML="<span class='edit-bold'>Desportos:</span> Todos";
        filtroSport='Futebol,Bodybuilding,Natação,Basquetebol';
    }
    else
    filtro2.innerHTML="Desportos: "+filtroSport;

    var contador=0;
    for (var i = 0; i < Book_List.length; i++) {

        var sexo=Book_List[i].getElementsByTagName("sexo")[0].childNodes[0].nodeValue;
        var sport=Book_List[i].getElementsByTagName("categoria")[0].childNodes[0].nodeValue;

        //alert(filtroSexo);
    
       
            if(filtroSexo.includes(sexo) && filtroSport.includes(sport))
            {
                    // console.log(sexo+" "+sport);
                    contador++;
                    var divColSm=document.createElement("div");
                    divColSm.className="col-sm-3 edit-col";
                    row.appendChild(divColSm);
                    
                    var code=Book_List[i].getElementsByTagName("code")[0].childNodes[0].nodeValue;
                    var anchor=document.createElement('a');
                    anchor.className="anchor";
                    anchor.href="../srcproj/detalhe.html?"+code;
                    
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
         
            
            //sessionStorage.setItem("filtroSport", undefined);
            //sessionStorage.setItem("filtrosexo", undefined);

        
    }
    var esse = document.getElementById("notFound");
    if(contador==0){        
            esse.style.display="block";
    }
    else{
        esse.style.display="none";
    }

};
function ready() {
    loadData();
}
function filtroSexo(p) {
    //alert(p);
    var filtroSexo = p;
    sessionStorage.setItem("filtrosexo", undefined);
    sessionStorage.setItem("filtrosexo", filtroSexo);
    window.location.href="../srcproj/listagem.html";

}
function clean(){
    window.location.href="../srcproj/";
}
function cleanFilters(){
    sessionStorage.setItem("filtroSport", undefined);
    sessionStorage.setItem("filtrosexo", undefined);
    window.location.reload();
}
function filtroSport(p) {
    //alert(p);
    var filtroSport = p;
    sessionStorage.setItem("filtroSport", undefined);
    sessionStorage.setItem("filtroSport", filtroSport);
    window.location.href="../srcproj/listagem.html";
}

// $("#clickEvent").on("click",function(){
//     var block = document.getElementById("c-filtros");
//     var but = document.getElementById("clickEvent");

//     if(block.className!="container-filtros blocked"){
//        block.className="container-filtros blocked"
//        but.style.display="none";
//     }
//     else{
//         block.className="container-filtros unblocked"
//     }

// });