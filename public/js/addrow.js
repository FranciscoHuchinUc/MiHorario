$("#agregar").on("click", function () {
  var numTr = $("#schedule tbody tr").length + 1;

  $("#schedule tbody tr:last").after(`<tr>
                <td>
                <select class="dia" name="dia" id="dia">
                    <option disabled selected >Dia</option>
                    <option value="Lunes">Lunes</option>
                    <option value="Martes">Martes</option>
                    <option value="Miercoles">Miercoles</option>
                    <option value="Jueves">Jueves</option>
                    <option value="Viernes">Viernes</option>
                </select>
                </td>
                <td>
                <input class="horas" type="time" name="horas" id="horas">
                </td>
                <td>
                <select name="materia" id="materia">
                    <option disabled selected >Seleccione una Materia</option>
                    <% materia.forEach((mat) => { %>
                        <option> <%= mat.nombre %> </option>
                    <% }); %>
                </select>
                </td>
                <td>
                <select class="short" name="aula" id="aula">
                    <option disabled selected >Aula/Edificio</option>
                    <% aula.forEach((au) => { %>
                        <option> <%= au.id_edificio + '-' + au.num_aula %> </option>
                    <% }); %>
                </select>
                </td>
                <td>
                <select name="docente" id="docente">
                    <option disabled selected >Seleccione un Docente</option>
                    <% docente.forEach((doc) => { %>
                        <option> <%= doc.primer_nombre + ' ' + doc.segundo_nombre + ' ' + doc.apellidop + ' ' + doc.apellidom %> </option>
                    <% }); %>
                </select>
                </td>
             </tr>`);
});