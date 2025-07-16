$(document).ready(function(){
        // Máscaras de telefone
        $('#telefone').mask('(00) 0000-0000');
        $('#celular').mask('(00) 00000-0000');
        $('#comercial').mask('(00) 0000-0000');
        // Máscara de CPF/CNPJ
    $('input[name="tipoPessoa"]').on('change', function() {
        const tipo = $(this).val();
        const $campo = $('#cpfCnpj');

        $campo.val(''); //Limpa o valor ao trocar 

        if(tipo === 'fisica'){
            $campo.mask('000.000.000-00');
        }else if(tipo === 'juridica'){
            $campo.mask('00.000.000/0000-00');
        }
    });
});

// 

$('#formulario').on('submit', function (e) {
  e.preventDefault(); // Evita o envio real do formulário
  window.location.href = 'obrigado.html'; // Redireciona para a página de obrigado
});


// Busca de CEP
$('#cep').on('blur', function () {
  const cep = $(this).val().replace(/\D/g, '');

  if (cep.length !== 8) return;

  $.getJSON(`https://brasilapi.com.br/api/cep/v1/${cep}`, function (data) {
    if (!data.erro) {
      $('#rua').val(data.logradouro);
      $('#bairro').val(data.bairro);
      $('#cidade').val(data.localidade);
      $('#ufSelect').val(data.uf);
    } else {
      alert('CEP não encontrado.');
    }
  });
});