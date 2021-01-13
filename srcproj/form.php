<?php

    if(isset($_POST['submit']) )
    {
        $assunto = $_POST['subject'];
        $opiniao = $_POST['opinion'];
        $pnome=$_POST['nomeclip'];
        $unome=$_POST['nomeclis'];
        $email=$_POST['emailcli'];

        $header='Opinião de '.$pnome.' '.$unome;
        $header=iconv('UTF-8', 'windows-1252', $header);
        $opiniao=iconv('UTF-8', 'windows-1252', $opiniao);
        $email=iconv('UTF-8', 'windows-1252', $email);

        $date=date("Y/m/d");
        require('fpdf.php');
        $pdf = new FPDF(); 
        $pdf->AddPage();

        $pdf->Image('img/h-logo.png',0,0,30,17,'PNG');

        $width_cell=array(60,30,40,60);
        $pdf->SetFillColor(193,229,252); // Background color of header 
        
        //// header is over ///////
        
        $pdf->SetFont('Arial','B',10);
        // First row of data 
        $pdf->Cell($width_cell[0],20,$header,0,0,'L',false); // First column of row 1 
        $pdf->Cell($width_cell[1],20,'',0,0,'C',false); // Second column of row 1 
        $pdf->Cell($width_cell[2],20,'',0,0,'C',false); // Third column of row 1 
        $pdf->Cell($width_cell[3],20,$date,0,1,'R',false); // Fourth column of row 1 
        
        $pdf->MultiCell(190,20,'Assunto: ','','L',false);

        $pdf->SetFont('Arial','',9);

        $pdf->MultiCell(190,10,$opiniao,'','L',false);

        $pdf->SetFont('Arial','I',9);
        $teste="Contacto: ".$email;
        $pdf->Cell(90,10 ,$teste,'','','',false, "mailto:".$email); 
        $pdf->Cell(30,10,'',0,0,'C',false); // Second column of row 1 
        $pdf->Cell(10,10,'',0,0,'C',false); // Third column of row 1 
        $pdf->Cell(10,10,'',0,1,'R',false); // Fourth column of row 1 
        
        //$pdf->Output();
        $dia=date("Y-m-d");
        $hora=date("h-i-sa");
    
        $assunto=$assunto.$dia.$hora;
        $pdf->Output();
        $pdf->Output("Opinioes/".$assunto.".pdf",'F');




        
    }
?>


