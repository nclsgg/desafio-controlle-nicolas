export interface Filter {
  type: string;
  value: string;
}

export interface SelectedFilters {
  type: string;
  value: string[];
}

export const availableFilters = [
  {
    type: 'type',
    label: 'Tipo'
  },
  {
    type: 'category',
    label: 'Categoria'
  },
  {
    type: 'tags',
    label: 'Tags'
  },
  {
    type: 'account',
    label: 'Conta'
  },
]
