/*function sorteia(){
var vetor = []
var numero = 1

while (numero <= 15) {
    var aleatorio = Math.round(Math.random()*25)
    if (aleatorio != 0 ) {
        var achou = false
        for (var i=0;i<=25;i++) {
            if (aleatorio == vetor[i]) {
                achou = true
                break
            }
        }
        if (achou == false) {
            vetor.push(aleatorio)
            numero++        
        }
    } 


    
}

return vetor

}


for (let i=1;i<=6;i++) {
    console.log(`${i}º Sorteio : ${sorteia()} `)
}

*/

function ordenar(a,b) { //para ordenar em ordem crescente tem que usar essa função em conjunto do metodo sort obs:ordem decrescente é só inverter b por a
    return a-b
}

function aleatorio() {
    var vetor = []
    var numero = 1
    while (numero <= 6) {
        var aleatorio = Math.round(Math.random() * 60 )
        if (aleatorio !=  0) {
            var achou = false
            for (let i = 0; i <= vetor.length; i++) {
                if (aleatorio == vetor[i]) {
                    achou = true
                    break
                }
            }
            if (achou == false) {
                vetor.push(aleatorio)
                numero++
            }
        }
    }
    return vetor.sort(ordenar)
}

function clicar() {
    var resp = document.getElementById("res")
    var num1 = Number(document.getElementById("num").value)
    
    if (num1 == 0 ) {
        alert("[ERRO] SE TU NÃO QUERIA SORTEAR NADA VEIO AQUI PRA QUE?")
        alert("Bora lá macho, tente novamente você consegue! ")
    } else {
        resp.innerHTML=""
        for (let i = 1; i <= num1; i++) {
            resp.innerHTML = resp.innerHTML + `O resultado do ${i}º sorteio foi : ${aleatorio()} <br>`
        }    

    }
        
}

