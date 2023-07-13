export type Registry = {
  type: string;
  account: string;
  category: string;
  user: string;
  value: number;
  costCenter: string;
  tags: string[];
  [key: string]: string | number | string[];
}

const mockedRegistry: Registry[] = [
  {
    type: 'Entrada',
    account: 'Caixa',
    category: 'Salario',
    user: 'Nicolas',
    value: 100,
    costCenter: 'RH',
    tags: ['salario', 'nicolas', 'rh'],
  },
  {
    type: 'Entrada',
    account: 'Conta corrente',
    category: 'Venda',
    user: 'Mariana',
    value: 250,
    costCenter: 'Vendas',
    tags: ['venda', 'mariana', 'vendas'],
  },
  {
    type: 'Saida',
    account: 'Caixa',
    category: 'Compras',
    user: 'Lucas',
    value: 50,
    costCenter: 'Suprimentos',
    tags: ['compras', 'lucas', 'suprimentos', 'nicolas'],
  },
  {
    type: 'Entrada',
    account: 'Conta corrente',
    category: 'Reembolso',
    user: 'Ana',
    value: 80,
    costCenter: 'Financeiro',
    tags: ['reembolso', 'ana', 'financeiro'],
  },
  {
    type: 'Saida',
    account: 'Caixa',
    category: 'Aluguel',
    user: 'Pedro',
    value: 300,
    costCenter: 'Financeiro',
    tags: ['aluguel', 'pedro', 'financeiro'],
  },
  {
    type: 'Saida',
    account: 'Caixa',
    category: 'Despesas pessoais',
    user: 'João',
    value: 150,
    costCenter: 'Pessoal',
    tags: ['despesas pessoais', 'joão', 'pessoal'],
  },
  {
    type: 'Saida',
    account: 'Conta corrente',
    category: 'Pagamento',
    user: 'Julia',
    value: 200,
    costCenter: 'Financeiro',
    tags: ['pagamento', 'julia', 'financeiro'],
  },
  {
    type: 'Entrada',
    account: 'Caixa',
    category: 'Reembolso',
    user: 'Fernanda',
    value: 70,
    costCenter: 'Financeiro',
    tags: ['reembolso', 'fernanda', 'financeiro'],
  },
  {
    type: 'Saida',
    account: 'Caixa',
    category: 'Compras',
    user: 'Gustavo',
    value: 100,
    costCenter: 'Suprimentos',
    tags: ['compras', 'gustavo', 'suprimentos'],
  },
  {
    type: 'Saida',
    account: 'Caixa',
    category: 'Compras',
    user: 'Gustavo',
    value: 100,
    costCenter: 'Suprimentos',
    tags: ['compras', 'gustavo', 'suprimentos'],
  },
  {
    type: 'Entrada',
    account: 'Mastercard',
    category: 'Salário',
    user: 'João',
    value: 2000,
    costCenter: 'Recursos Humanos',
    tags: ['salário', 'joão', 'recursos humanos'],
  },
  {
    type: 'Saida',
    account: 'Visa',
    category: 'Aluguel',
    user: 'Maria',
    value: 500,
    costCenter: 'Finanças',
    tags: ['aluguel', 'maria', 'finanças'],
  },
  {
    type: 'Entrada',
    account: 'American Express',
    category: 'Vendas',
    user: 'Pedro',
    value: 1500,
    costCenter: 'Comercial',
    tags: ['vendas', 'pedro', 'comercial'],
  },
]

export default mockedRegistry;