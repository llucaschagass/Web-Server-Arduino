// Função para fazer a requisição AJAX
function getDataFromArduino() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Converte a resposta JSON em um objeto JavaScript
            var data = JSON.parse(this.responseText);
            // Exibe os dados na página
            document.getElementById("dadosArduino").innerHTML =
                "<p>Temperatura: " + data.A0 + " ºC</p>" +
                "<p>Proximidade: " + data.A1 + " cm</p>" +
                "<p>Luminosidade: " + data.A2 + " lux</p>";
        }
    };
 
    // Realiza uma requisição POST para o servidor Arduino
    xhttp.open("POST", "http://10.60.128.13/", true);
    xhttp.send();
}

setInterval(getDataFromArduino, 500);

// Chama a função para obter os dados pela primeira vez
getDataFromArduino();
