export function create(size = 5) {
    return [...new Array(size)];
  }
  
  export function enqueue(alunos: any[], fileira: any) {
    const emptyIndex = fileira.indexOf(undefined);
    if (emptyIndex === -1) {
      console.log("Fila cheia");
      return fileira;
    }
  
    fileira[emptyIndex] = alunos;
    return fileira;
  }
  
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
  
  export function peek(fileira: any[]) {
    return fileira[0];
  }
  
  export function isEmpty(fileira: any[]) {
    return fileira[0] === undefined;
  }
  
  export function isFull(fileira: any[]) {
    return fileira[fileira.length - 1] !== undefined;
  }
  
  export function clear(fileira: any[]) {
    return create();
  }
  
  export function size(fileira: any[]) {
    return fileira.filter((alunos) => alunos !== undefined).length;
  } 