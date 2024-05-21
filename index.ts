const fileira = [
    "Fileira 1",
    "Fileira 2",
    "Fileira 3"
]

const alunos = [
    "João",
    "Felipe",
    "Maria",
    "José",
    "Ana",
    "Carlos",
    "Pedro",
    "Paulo",
    "Lucas",
    "Mariana",
    "Juliana",
    "Fernanda",
    "Rafael",
    "Ricardo",
    "Jorge",
    "Miguel",
  ];
// Array de alunos nas fileira

// Cada fileira pode ter NO MÁXIMO 5 alunos

// Inserindo/populando 5 alunos por fileira

// Função main
export function dequeue(fileira: any[],alunos: any[]) {
    if (fileira[0] === undefined) {
      console.log(alunos[0]+"se levantou da cedeira, tchau"+alunos[0]+"!");
      return fileira;
    }
  
    const firstValue = fileira[0];
  
    for (let i = 0; i < fileira.length - 1; i++) {
      fileira[i] = fileira[i + 1];
    }
  
    return firstValue;
  }

