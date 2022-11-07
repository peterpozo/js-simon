buttonStart = document.querySelector('.start');
boxNumber = document.querySelector('.number');
boxTimer = document.querySelector('.timer');
boxResult = document.querySelector('.result');

function getRandomInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1) ) + min;
}

buttonStart.addEventListener('click', function() {
    boxNumber.classList.remove('hidden');
    buttonStart.classList.add('hidden');
    boxTimer.classList.remove('hidden');
    
    const arrRandoms = [];
        for (let i = 1; i <= 5; i++) {
            let randomNumber;
            randomNumber = getRandomInteger(1, 99);
            arrRandoms.push(randomNumber);

            let lastElement = arrRandoms[arrRandoms.length - 1];

            const eleNumber = document.createElement('div')           
            boxNumber.append(eleNumber)
            eleNumber.innerHTML =lastElement
        };
    console.log(arrRandoms)   

    let counter = 30;
    const idInterval = setInterval(count, 1000);
    const eleTimer = document.createElement('div')           
    boxTimer.append(eleTimer)   

    function count() {
        if (counter === 1 ) {
            boxNumber.classList.add('hidden');
            boxTimer.classList.add('hidden')
            clearInterval(idInterval);

            setTimeout(function () {
                let conteggio = 0
                const arrResult = [];
                for (let i = 1; i <= 5; i++){
                    memory = Number(prompt('Inserisci i numeri che hai memorizzato'))                   
                    if(arrRandoms.includes(memory)){
                        arrResult.push(memory);                     
                        conteggio++
                        console.log(conteggio)                       
                    }    
                };                                           
                boxResult.classList.remove('hidden');

                if (conteggio >= 1){
                    const eleResult1 = document.createElement('div')           
                    boxResult.append(eleResult1)
                    const eleResult2 = document.createElement('div')           
                    boxResult.append(eleResult2)
                    eleResult1.innerHTML = `Complimenti hai memorizzato i numeri: ${arrResult }.`
                    eleResult2.innerHTML = `Totalizzando ${conteggio} punti su 5!`
                } else{
                    const eleResult1 = document.createElement('div')           
                    boxResult.append(eleResult1)
                    eleResult1.innerHTML = `Mi dispiace ma hai perso! Nessuno dei numeri è stato memorizzato.`
                }             
            }, 200)
            
        } else {          
            counter--;          
            eleTimer.innerHTML =`Timer :${counter}`
        };
    };   

     
});