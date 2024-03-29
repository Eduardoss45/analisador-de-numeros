// Seleciona os elementos HTML relevantes
let addNumber = document.querySelector('#num'); // Entrada para adicionar números
let boxItem = document.querySelector('#seltab'); // Lista para exibir os números adicionados
let boxRes = document.querySelector('#res'); // Área para exibir os resultados

let vetInterval = []; // Vetor para armazenar os números adicionados
let qtd = 0;

// Função para verificar se um valor é um número válido entre 1 e 100
function IsNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true;
    } else {
        return false;
    }
}

// Função para verificar se um número já está na lista
function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true;
    } else {
        return false;
    }
}

// Função para adicionar um número à lista
function Adicionar() {
    // Verifica se o valor inserido é um número válido e não está na lista
    if (IsNumero(addNumber.value) && !inLista(addNumber.value, vetInterval)) {
        vetInterval.push(Number(addNumber.value)); // Adiciona o número ao vetor
        // Cria um novo item na lista para exibir o número adicionado
        let newOption = document.createElement('option');
        newOption.text = `Valor ${Number(addNumber.value)} adicionado`;
        boxItem.appendChild(newOption); // Adiciona o novo item à lista
        boxRes.innerHTML = ''; // Limpa a área de resultados
    } else {
        // Exibe mensagem de erro se o valor não for válido ou já estiver na lista
        window.alert('[ERRO] Verifique se seu valor está entre 1 e 100 ou já está na lista.');
    }
    addNumber.value = ''; // Limpa o campo de entrada
    addNumber.focus(); // Coloca o foco de volta no campo de entrada
}

// Função para finalizar e exibir os resultados
function Finalizar() {
    if (vetInterval.length == 0) {
        // Exibe mensagem de erro se a lista estiver vazia
        window.alert('[ERRO] Adicione números antes de finalizar.');
    } else {
        // Calcula o total de números, o maior, o menor, a soma e a média
        let tot = vetInterval.length;
        let ma = vetInterval[0];
        let me = vetInterval[0];
        let som = 0;
        let med = 0;
        for (let i in vetInterval) {
            som += vetInterval[i];
            if (vetInterval[i] > ma) {
                ma = vetInterval[i];
            } else if (vetInterval[i] < me) {
                me = vetInterval[i];
            }
        }
        med = som / tot;

        // Limpa a área de resultados e exibe os resultados calculados
        boxRes.innerHTML = '';
        boxRes.innerHTML += `<p>Ao todo temos ${tot} valores.</p>`;
        boxRes.innerHTML += `<p>O maior foi ${ma}.</p>`;
        boxRes.innerHTML += `<p>O menor foi ${me}.</p>`;
        boxRes.innerHTML += `<p>A soma foi ${som}.</p>`;
        boxRes.innerHTML += `<p>A média foi ${med}.</p>`;
    }
}
