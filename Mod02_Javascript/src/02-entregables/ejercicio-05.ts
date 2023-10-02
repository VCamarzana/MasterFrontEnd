console.log('************** DELIVERABLE 05 *********************');
console.log('SLOT MACHINE -----------------');
// El objetivo de este ejercicio es crear una máquina tragaperras utilizando clases donde cada vez que
// juguemos insertemos una moneda. Cada máquina tragaperras (instancia) tendrá un contador de monedas
// que automáticamente se irá incrementando conforme vayamos jugando.
// Cuando se llame al método play el número de monedas se debe incrementar de forma automática y debe
// generar tres booleanos aleatorios que representarán el estado de las 3 ruletas.
// El usuario habrá ganado en caso de que los tres booleanos sean true y se mostrará por consola el mensaje:
// "Congratulations!!!. You won <número de monedas> coins!!"
// y se reiniciaran las monedas almacenadas, ya que las hemos conseguido y han salido de la máquina.
// En caso contrario deberá mostrar otro mensaje: "Good luck next time!!".

class SlothMachine {
    coins: number;
    private total: number;
    constructor(coins: number) {
        this.coins = coins;
        this.total = 0;
    }
    insertCoin() {
        this.total += this.coins;
        return this.total;
    }
    play() {
        this.insertCoin();
        if (Math.random() > 0.3 && Math.random() > 0.3 && Math.random() > 0.3) {
            console.log(`Congratulations!!! You won ${this.total} coins!!!!`);
            this.total = 0;
        } else {
            console.log('Good luck next time!!');
        }
    }
}

const machine1 = new SlothMachine(1);
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 3 coins!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 2 coins!!"
