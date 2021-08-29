let pacientes = [
    {
        nombre: "Carlos Vega",
        edad: "25 años"
    },
    {
        nombre: "Ricardo Gomez",
        edad: "66 años"
    },
    {
        nombre: "Roberto Alvarez",
        edad: "55 años"
    },
    {
        nombre: "Miguel Fernandez",
        edad: "33 años"
    },
    {
        nombre: "Claudio Cordoba",
        edad: "44 años"
    }
]

let div = $("#tarjeta")
creartarjetas()
function creartarjetas(){
    for(i = 0; i <= pacientes.length; i++){
        div.append(`
        <div id="c${i}" style="border-radius: 15px;" class="card border-0 shadow-sm ">
            <div class="card-body">
                <img style="border-radius: 50%;" width="110px" class="img-fluid float-end" src="./Blake-profile-photo-square.jpg" alt="">
                <h5>${pacientes[i].nombre}</h5>
                <p class="text-muted">$22 años</p>
               
            </div>  `)
    }
}


 function crearpaciente(){
    let texto = $("#paciente").val()
    pacientes.push({
        nombre: texto
    })

    div.html("")

    creartarjetas()
 }

 function borrartarjeta(id){
    $("#" + id).remove() 
}