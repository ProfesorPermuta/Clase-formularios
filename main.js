postValues = (endpoint, form) => {


    var formNode = $(form); //Encontramos el formulario en el DOM

    var data = JSON.stringify( $(formNode).serializeArray()[0] );
    console.log(data);

    
    $.ajax({
        type: "POST",
        url: `http://localhost:3000/${endpoint}`,
        data: data,
        dataType: "application/json",
        success: function (response) {
            console.log(response)
        }
    });

    return false;
}
