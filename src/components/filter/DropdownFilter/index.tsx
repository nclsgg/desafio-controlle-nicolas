import { useCallback, memo, useState } from 'react';
import { Filter, SelectedFilters } from '@common/filters';
import { Registry } from '@common/mockedRegistry';
import { BsChevronDown } from 'react-icons/bs';
import './styles.css';

interface IProps {
  filter: {
    type: string,
    name: string,
  },
  registry: Registry[],
  selectedFilters: SelectedFilters[],
  handleFilter: (filter: Filter) => void
}

function DropdownFilter({ filter, registry, handleFilter, selectedFilters }: IProps) {
  const [ search, setSearch ] = useState('')

  const handleToggleDropdown = useCallback(() => {
    const dropdownOptions = document.querySelector(`.dropdown-select__options-wrapper.${filter.type}`);
    const dropdownOverlay = document.querySelector(`.dropdown-overlay.${filter.type}`);
    const dropdownIcon = document.querySelector(`.dropdown-select__input__icon.${filter.type}`);
    dropdownOptions?.classList.toggle('show');
    dropdownOverlay?.classList.toggle('show');
    dropdownIcon?.classList.toggle('rotate');
  }, [filter.type]);

  const options = registry
  .flatMap(item => item[filter.type])
  .filter((value, index, self) => self.indexOf(value) === index);

  const filteredOptions = search.length > 0 ? options.filter(option => option.toString().toLowerCase().includes(search.toLowerCase())) : options;

  const currentFilters = selectedFilters.filter(item => item.type === filter.type);
  const currentFilterValues = currentFilters.map(item => item.value.join(', '));
  const currentFilterText = currentFilterValues.length > 0 ? currentFilterValues : 'Selecione...';

  return (
    <>
      <div className={`dropdown-overlay ${filter.type}`} onClick={() => handleToggleDropdown()}/>
      <div key={filter.type} className='dropdown-wrapper'>
        <label className='dropdown-title'>{filter.name}:</label>
        <div className='dropdown-select'>
          <div className='dropdown-select__input' onClick={() => handleToggleDropdown()}>
            <span className='dropdown-select__input__span'>{currentFilterText}</span>
            <BsChevronDown className={`dropdown-select__input__icon ${filter.type}`}/>
          </div>
          <div className={`dropdown-select__options-wrapper ${filter.type}`}>
            <div className='dropdown-select__options__search'>
              <input className='dropdown-select__options__search-input' type='text' placeholder='Pesquisar...' onChange={e => setSearch(e.target.value)}/>
            </div>
            <div className='dropdown-select__options'>
              {filteredOptions.map((option, index) => (
                <label key={index} className='dropdown-item'>
                  <input type='checkbox' id={`${filter.type}-${index}`} name={`${filter.type}-${index}`} value={option} onChange={() => handleFilter({ type: filter.type, value: option.toString() })}/>
                  <span className='checkmark'></span>
                  <label htmlFor={`${filter.type}-${index}`}>{option}</label>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default memo(DropdownFilter);