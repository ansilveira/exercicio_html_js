const form = document.getElementById('form-comparacao');

form.addEventListener('submit' , function(e) {    
    e.preventDefault();

    const campoA = document.getElementById('campo-a');
    const campoB = document.getElementById('campo-b');
    const mensagemSucesso = `O Campo A foi informado o número: <b>${campoA.value}</b> O campo B foi informado o número: <b>${campoB.value}</b>`;

    if (campoB.value > campoA.value) {
        alert ('Formulário validado');
               
    } else {
        alert ('Formulário não validado');           
    }

    
} );