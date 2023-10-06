document.addEventListener('DOMContentLoaded', function() {
    const inputBill = document.querySelector('#bill');
    const msgError = document.querySelector('#msgError');
    const msgErrorBill = document.querySelector('#msgErrorBill');
    const inputPeople  = document.querySelector('#numPeople');
    const resetBtn = document.querySelector('#resetBtn');
    const botonPorcentaje = document.querySelectorAll('.botonporcentaje');

    const tipHTML = document.querySelector('#tip');
    const totalHTML = document.querySelector('#total');


    let valorBill = 0;
    let valorPorcentaje = 0;
    let valorPersonas = 0;

    const customInput = document.querySelector('.botoninput');
    customInput.addEventListener('click', () => {
        botonPorcentaje.forEach(btn => {
            btn.classList.remove('selected');
        });
    });

    inputPeople.addEventListener('input', (e) => {
        valorPersonas = parseFloat(e.target.value);
        if(e.target.value === "0"){
            Error(msgError, inputPeople);
        } else {
            removeError(msgError, inputPeople);
        }
        calcularTotal()
    })
    inputBill.addEventListener('input', (e) => {
        valorBill = parseFloat(e.target.value);
        if(e.target.value === "0"){
            Error(msgErrorBill, inputBill);
        } else {
            removeError(msgErrorBill, inputBill);
        }
        calcularTotal()

    })
    botonPorcentaje.forEach(button => {
        button.addEventListener('click', (e) => {
            botonPorcentaje.forEach(btn => {
                btn.classList.remove('selected');
            });

            e.target.classList.add('selected');

            valorPorcentaje = parseFloat(e.target.value);
            calcularTotal();
        });
    });

    resetBtn.addEventListener('click', resetValues);

    function Error(idError, input) {
        idError.textContent = 'Can\'t be zero';
        input.classList.add('border', 'border-red-400');
    }
    
    function removeError(idError, input) {
        idError.textContent = '';
        input.classList.remove('border', 'border-red-400');
    }
    function calcularTotal() {
        if (valorBill > 0 && valorPersonas > 0 && valorPorcentaje > 0) {
            const total = valorBill * valorPorcentaje / 100;
            
            totalHTML.textContent = '$' + total.toFixed(2);
            
            const perPerson = total / valorPersonas;
            tipHTML.textContent = '$' + perPerson.toFixed(2);
            
        }
    }
    function resetValues() {
        inputBill.value = '';
        inputPeople.value = '';
        valorBill = 0;
        valorPersonas = 0;
        valorPorcentaje = 0;

        totalHTML.textContent = '0.00';
        tipHTML.textContent = '0.00';
        
        botonPorcentaje.forEach(btn => {
            btn.classList.remove('selected');
        });

    }
    
})