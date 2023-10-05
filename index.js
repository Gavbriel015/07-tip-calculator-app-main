document.getElementById('miInput').addEventListener('input', function() {
    
    // Obtener el valor actual del campo de entrada
    
    let valor = this.value;
    
    // Invertir el valor (borrar de derecha a izquierda)
    valor = valor.split('').reverse().join('');
  
    // Asignar el valor invertido de nuevo al campo de entrada
    this.value = valor;
  });

const input = document.getElementById('miInput');

  