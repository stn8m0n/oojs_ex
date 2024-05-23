function Motorista(nome) {
    this.nome = nome;
    this.dizNome = function() {
        console.log(this.nome);
    }
    this.dizAuto = function() {
        console.log(this.auto);
    }
    this.dizAluguel = function() {
        console.log(this.aluguel);
    }
}

function Locacao(nome, auto, aluguel) {
    let _aluguel = aluguel;

    // Getter e setter
    this.getAluguel = function() {
        return _aluguel;
    }

    this.setAluguel = function(valor) { 
       if (typeof valor === 'number') {
            _aluguel = valor;
       }
    } 

    this.diaria = function() {
        const novoAluguel = _aluguel * 1.1; // Multiplica o aluguel por 1.1 para aumentar 10%
        _aluguel = novoAluguel;
    }

    Motorista.call(this, nome);
}

function Moto(nome) {
    Locacao.call(this, nome, "Moto", 300);

    this.diaria = function() {
        const novoAluguel = this.getAluguel() * 1.07;
        this.setAluguel(novoAluguel);
    }
}

function Caminhao(nome) {
    Locacao.call(this, nome, "Caminhao", 1000);
    this.diaria = function() {
        const novoAluguel = this.getAluguel() * 1.15; // Multiplica o aluguel por 1.15 para aumentar 15%
        this.setAluguel(novoAluguel);
    }
}

// Usar referência de locatário. 22/05/2024 05:48

const cliente1 = new Locacao("Paula", "carro", 500);
const cliente2 = new Moto("Pati");
const cliente3 = new Caminhao("Mol");

cliente1.diaria();
console.log(cliente1.getAluguel());

cliente2.diaria();
console.log(cliente2.getAluguel());

cliente3.diaria();
console.log(cliente3.getAluguel());
