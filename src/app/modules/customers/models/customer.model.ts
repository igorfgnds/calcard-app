export class Customer {
  constructor(
    public id: string = '',
    public nome: string = '',
    public idade: string = '',
    public sexo: string = '',
    public estadoCivil: string = '',
    public estado: string = '',
    public dependentes: string = '',
    public renda: string = null,
    public resultado: string = 'Aprovado', // Resultado fake para simular análise de crédito
    public limite: string = 'entre 1500 - 2000' // Limite fake para simular análise de cŕedito
  ) { }
}