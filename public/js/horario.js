
const btnAdd = document.querySelector('#btnAdd');

btnAdd.addEventListener('click', () => {

    generatePDF();

}, false);

function generatePDF() {

    var docente = document.getElementById('docente').value;

    var doc = new jsPDF();
    doc.setFont("courier");
    doc.setFontSize(12);
    doc.setFontType("italic");
    doc.text(20, 20, 'Instituto Tecnológico Superior de Calkiní en el Estado de Campeche');
    doc.setFontType("bold");
    doc.setFontSize(18);
    doc.text(15, 40, 'Horario de Clase');
    doc.setFontSize(14);
    doc.text(15, 45, 'Docente ' + docente);
    doc.autoTable({
        startY: 50,
        html: '#schedule',
    });

    var out = doc.output();
    var fileName = "data:application/pdf;base64," + btoa(out); // Obtener el nombre del archivo y la transcodificación

    var iframe = "<iframe width='100%' height='100%' src='" + fileName + "'></iframe>";

    var x = window.open();
    x.document.open();
    x.document.write(iframe);
    x.document.close();

    document.location.href = fileName;
}