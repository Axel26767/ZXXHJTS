const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    Swal.fire({
        title: 'Enviar mensaje de WhatsApp',
        html: '<textarea id="swal-input1" class="swal2-textarea" readonly>Si quiero ser tu novia 😍❤❤</textarea>' +
              '<input id="swal-input2" class="swal2-input" placeholder="Número destinatario (sin espacios ni guiones)">',
        showCancelButton: true,
        confirmButtonText: 'Enviar',
        preConfirm: function () {
          return new Promise(function (resolve) {
            resolve([
              document.getElementById('swal-input1').value,
              document.getElementById('swal-input2').value
            ])
          })
        }
      }).then(function (result) {
        if (result.value) {
          var mensaje = encodeURIComponent(result.value[0]);
          var destinatario = result.value[1];
          window.location.href = 'https://wa.me/' + destinatario + '?text=' + mensaje;
        }
      });
      
      
      
      
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('click',function() {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ha ocurrido un error, haga clic en INGRESAR para resolver el problema.',
        showCancelButton: true,
        confirmButtonText: 'Ingresar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.value) {
          // Aquí agregas el código que redirige a la página que deseas
          window.location.href = "https://longdogechallenge.com/";
        }
      })
    
    
    
});

