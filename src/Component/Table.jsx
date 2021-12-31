import React from 'react'
import {Button, Table} from "react-bootstrap"
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable"
const  Report = () => {

    const  generate = () => {
        var doc = new jsPDF('p', 'pt', 'letter');
        var x = 10
        var y = 20;
        doc.text(20,x = x+10,"Package")
        doc.text(220, y = y +35, "Service Type : M");
        doc.autoTable({
            html: '#simple_table',
            startY: 65,
            theme: 'grid',
        })
        doc.text(220, y = y +140, "Service Type : S");
        doc.autoTable({
            html: '#myreport',
            startY: 200,
            theme: 'grid',
        })
        doc.save('Marks_Of_Students.pdf');
    }
    
    //  const exportPDF = () => {
    //     var doc = new jsPDF();
    //     var text = doc.text(20,20,"Text")
    //     doc.autoTable(text,{
    //         html: '#mytable',
    //         theme:"grid",
    //         bodyStyles: {minCellHeight: 10},
    //         didDrawCell: function(data) {
    //             console.log(data)
    //           if (data.column.index === 4 && data.cell.section === 'body') {
    //              var td = data.cell.raw;
    //              var img = td.getElementsByTagName('img')[0];
    //              var dim = data.cell.height - 6
    //              var dim2 = data.cell.width - 10
    //              console.log(dim)
    //              console.log(dim2)
    //              var textPosX = data.cell.x +2 ;
    //              var textPosY = data.cell.y + 3;
    //              console.log(textPosX)
    //              console.log(textPosY)
    //              doc.addImage(img.src,"JPEG",textPosX,textPosY, dim, dim2);
    //           }
    //         }
    //       });
    //       doc.autoTable({
    //         html: '#myreport',
    //         theme:"grid",
    //         bodyStyles: {minCellHeight: 10},
    //         didDrawCell: function(data) {
    //             console.log(data)
    //           if (data.column.index === 4 && data.cell.section === 'body') {
    //              var td = data.cell.raw;
    //              var img = td.getElementsByTagName('img')[0];
    //              var dim = data.cell.height - 6
    //              var dim2 = data.cell.width - 10
    //              console.log(dim)
    //              console.log(dim2)
    //              var textPosX = data.cell.x +2 ;
    //              var textPosY = data.cell.y + 3;
    //              console.log(textPosX)
    //              console.log(textPosY)
    //              doc.addImage(img.src,"JPEG",textPosX,textPosY, dim, dim2);
    //           }
    //         }
    //       });
    //       doc.save("LimsPlusReport.pdf")
    //   }
    return (
        <>

<Table id="simple_table" striped bordered hover>
<thead>
                    <tr>
                    <th>Panel Code</th>
                    <th>Panel name</th>
                    <th>Package</th>
                    <th>Service Type</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr align="center">
                    <td>SLV002</td>
                    <td>Master Panel</td>
                    <td>MST002</td>
                    <td>M</td>
                    <td>Delete</td>
                    </tr>
                    <tr>
                    <td></td>
                    <td>Master Panel</td>
                    <td>MST003</td>
                    <td>D</td>
                    <td>Delete</td>
                    </tr>
                    <tr>
                    <td>SLV004</td>
                    <td>Master Panel</td>
                    <td>MST002</td>
                    <td>L</td>
                    <td>Delete</td>
                    </tr>
                </tbody>
    </Table>
    <h2>Service Type:M</h2>
            <Table id="myreport" striped bordered hover>
                <thead>
                    <tr>
                    <th>Panel Code</th>
                    <th>Panel name</th>
                    <th>Package</th>
                    <th>Service Type</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td>SLV002</td>
                    <td>Master Panel</td>
                    <td>MST002</td>
                    <td>M</td>
                    <td>Delete</td>
                    </tr>
                    <tr>
                    <td>SLV002</td>
                    <td>Master Panel</td>
                    <td>MST002</td>
                    <td>M</td>
                    <td>Delete</td>
                    </tr>
                    <tr>
                    <td>SLV002</td>
                    <td>Master Panel</td>
                    <td>MST002</td>
                    <td>M</td>
                    <td>Delete</td>
                    </tr>
                    <tr>
                    <td>SLV002</td>
                    <td>Master Panel</td>
                    <td>MST002</td>
                    <td>M</td>
                    <td>Delete</td>
                    </tr>
                    <tr>
                    <td>SLV002</td>
                    <td>Master Panel</td>
                    <td>MST002</td>
                    <td>M</td>
                    <td>Delete</td>
                    </tr>
                </tbody>
            </Table>
            {/* <div id="">
                <h2>Service Type:S</h2>
            <Table id="mytable" striped bordered hover>
                <thead>
                    <tr>
                    <th>Panel Code</th>
                    <th>Panel name</th>
                    <th>Package</th>
                    <th>Service Type</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr align="center">
                    <td>SLV002</td>
                    <td>Master Panel</td>
                    <td>MST002</td>
                    <td>M</td>
                    <td>Delete</td>
                    </tr>
                    <tr>
                    <td>SLV003</td>
                    <td>Master Panel</td>
                    <td>MST003</td>
                    <td>D</td>
                    <td>Delete</td>
                    </tr>
                    <tr>
                    <td>SLV004</td>
                    <td>Master Panel</td>
                    <td>MST002</td>
                    <td>L</td>
                    <td>Delete</td>
                    </tr>
                </tbody>
            </Table>
            <h2>Service Type:M</h2>
            <Table id="myreport" striped bordered hover>
                <thead>
                    <tr>
                    <th>Panel Code</th>
                    <th>Panel name</th>
                    <th>Package</th>
                    <th>Service Type</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td>SLV002</td>
                    <td>Master Panel</td>
                    <td>MST002</td>
                    <td>M</td>
                    <td>Delete</td>
                    </tr>
                    <tr>
                    <td>SLV002</td>
                    <td>Master Panel</td>
                    <td>MST002</td>
                    <td>M</td>
                    <td>Delete</td>
                    </tr>
                    <tr>
                    <td>SLV002</td>
                    <td>Master Panel</td>
                    <td>MST002</td>
                    <td>M</td>
                    <td>Delete</td>
                    </tr>
                    <tr>
                    <td>SLV002</td>
                    <td>Master Panel</td>
                    <td>MST002</td>
                    <td>M</td>
                    <td>Delete</td>
                    </tr>
                    <tr>
                    <td>SLV002</td>
                    <td>Master Panel</td>
                    <td>MST002</td>
                    <td>M</td>
                    <td>Delete</td>
                    </tr>
                </tbody>
            </Table>
            </div> */}
            <Button variant="secondary"  onClick={generate}> Generate Report</Button>
        </>
    )
}

export default Report
