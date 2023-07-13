import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import './App.css'
import DropdownFilter from '@components/filter/DropdownFilter';
import { useState, useReducer } from 'react';
import mockedRegistry from '@common/mockedRegistry';
import { Filter, SelectedFilters, availableFilters } from '@common/filters';
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import RegistryList from '@components/RegistryList';

interface ActiveFilters {
  type: string,
  label: string
}

const initialState: SelectedFilters[] = [];

const filterReducer = (state: SelectedFilters[], action: { type: string, filter: Filter}) => {
  switch (action.type) {
    case 'UPDATE_FILTER':
      const filterIndex = state.findIndex(item => item.type === action.filter.type);

      if (filterIndex !== -1) {
        const filterAlreadyExists = state[filterIndex];
        const updatedValue = filterAlreadyExists.value.includes(action.filter.value)
          ? filterAlreadyExists.value.filter(value => value !== action.filter.value)
          : [...filterAlreadyExists.value, action.filter.value];

        if (updatedValue.length === 0) {
          return state.filter((_, index) => index !== filterIndex);
        } else {
          return [
            ...state.slice(0, filterIndex),
            { ...filterAlreadyExists, value: updatedValue },
            ...state.slice(filterIndex + 1)
          ];
        }
      } else {
        return [...state, { type: action.filter.type, value: [action.filter.value] }];
      }
    case 'CLEAR_FILTERS':
      return initialState;
    default:
      return state;
  }
};

function App() {
  const [ selectedFilters, dispatch ] = useReducer(filterReducer, initialState);
  const [ activeFilters, setActiveFilters ] = useState<ActiveFilters[]>([
    {
      type: 'type',
      label: 'Tipo'
    }
  ])
  const registry = mockedRegistry

  const handleFilter = (filter: Filter) => {
    dispatch({ type: 'UPDATE_FILTER', filter })
  }

  const handleClearFilters = () => {
    if (activeFilters.length === 0) return
    dispatch({ type: 'CLEAR_FILTERS', filter: { type: '', value: '' } })
    setActiveFilters([])
  }

  const filteredRegistry = registry.filter(item => {
    return selectedFilters.every(filter => {
      for (let i = 0; i < filter.value.length; i++) {
        if (item[filter.type].toString().includes(filter.value[i])) {
          return true
        }
      }
    })
  })

  return (
    <main>
      <div className='wrapper'>
        <h1>Desafio - Controlle</h1>
        <div className='filters-wrapper'>
          <section className='filters-section'>
            {activeFilters.map((filter, index) => (
              <div key={index} className='filter'>
                <DropdownFilter 
                  filter={{ type: filter.type, name: filter.label}}
                  registry={registry}
                  handleFilter={handleFilter}
                  selectedFilters={selectedFilters}
                />
              </div>
            ))}

            {availableFilters.length > activeFilters.length && (
            <Menu menuButton={<MenuButton>+</MenuButton>} onItemClick={(e) => setActiveFilters([...activeFilters, e.value])}>
              {availableFilters.map((filter, index) => (
                !activeFilters.some(item => item.type === filter.type) && (
                  <MenuItem key={index} value={filter} disabled={activeFilters.length === 4}>
                    {filter.label}
                  </MenuItem>
                )
              ))}
            </Menu>
            )}
          </section>

          <div className='filter-options'>
            <div className='clear-filters' onClick={() => handleClearFilters()}>
              Zerar filtros
            </div>
            <div className='save-filters'>
              Salvar filtros
            </div>
          </div>
        </div>

        <RegistryList registry={filteredRegistry}/>
      </div>
    </main>
  )
}

export default App
