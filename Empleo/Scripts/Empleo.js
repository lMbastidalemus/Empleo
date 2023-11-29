$(document).ready(function () {
    GetAll();
})

function GetAll() {
    $.ajax({
        type: "GET",
        url: "https://besvc.capacitateparaelempleo.org/api/inscriptions/TestReport",
        success: function (result) {

            var datos = 
            "<h1 class='text-center'>"  + result.people[0].name + " " + result.people[0].lastName + "</h1>"
           + "<p class='text-center'>"  + result.email + "</p>"
            $("#div").append(datos);

            $.each(result.inscriptions, function (i, empleo) {
                var filas =
                    "<tr>"
                    + "<td>" + empleo.inscripcionDate + "</td>"
                    + "<td>" + empleo.course.name + "</td>"
                    + "<td>" + empleo.course.sector.name + "</td>"
                    + "<td>" + "<img width=150px    src=" + empleo.course.imageUrl + " />" + "</td>"
                    
            
                + "</tr>";
                $("#tblEmpleo tbody").append(filas);
            })
        },
        error: function (result) {
            alert("Error al consultar los datos", result.responseJSON.ErrorMessage)
        }

    })
}
