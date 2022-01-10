function addPerson(e) {
  e.preventDefault();
  const row = createRow({
    day: $("#dia").val(),
    from: $("#from").val(),
    to: $("#to").val(),
    materia: $("#materia").val(),
  });
  $("table tbody").append(row);
  clean();
}

function createRow(data) {
  return (
    `<tr>` +
    `<td>${data.day}</td>` +
    `<td>${data.from + ' - ' + data.to}</td>` +
    `<td>${data.materia}</td>` +
    `</tr>`
  );
}

function clean() {
    $('#dia').val('');
    $('#horas').val('');
    $('#materia').val('');
    $('#dia').focus();
  }