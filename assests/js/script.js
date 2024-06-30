const form = document.getElementById('form');

form.addEventListener('submit', function(event) { // Adiciona um ouvinte de evento (event listener) ao elemento do formulário (form). Esse ouvinte escuta especificamente o evento de submit (envio) do formulário.
//Define uma função anônima que será executada quando o evento de submit for acionado. O parâmetro event representa o objeto do evento que contém informações sobre o evento de envio.
        event.preventDefault() //impede o carregamento da pagina no momento em que da submit no forms

        const weight = document.getElementById('weight').value;
        const height = document.getElementById('height').value;

        const imc = (weight / (height * height)).toFixed(2);
        
        const value = document.getElementById('value');
        let description = '';

        value.classList.add('attention');

        document.getElementById('infos').classList.remove('hidden'); //Remove a classe hidden de infos após o calculo do imc


        if(imc < 18.5){
            description = 'Cuidado! Você esta abaixo do peso!' // Adicionamos a frase na variavel 'description' que estava vazia
        }else if(imc >= 18.5 && imc <=25){
            description = 'Você está no peso ideal!'
            value.classList.remove('attention');
            value.classList.add('normal');
        }else if(imc > 25 && imc <= 30){
            description = 'Cuidado! Você esta com sobrepeso!'
        }else if(imc > 30 && imc <=35){
            description = 'Cuidado! Você esta com obesidade moderada!'
        }else if(imc > 35 && imc <= 40){
            description = 'Cuidado! Você esta com obesidade severa!'
        }else{
             description = 'Cuidado! Você esta com obesidade morbida!'
        }

        value.textContent = imc.replace('.', ','); // Aqui mostra o IMC na pagina HTML
        document.getElementById('description').textContent = description;



});