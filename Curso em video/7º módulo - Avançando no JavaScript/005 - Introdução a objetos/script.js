let amigo = {nome: ['José', 'Paulo'],
 sexo: 'M',
 pseo: 84.5,
 engordar(p=0){
     console.log(`Engordou ${p} Kg`);
    this.peso += p;
 }, };

 console.log(amigo.nome[1]);
