import React, { useState } from 'react'

export interface Option {
  value: string;
  label: string;
}

interface SelectWithSearchProps {
  options: Option[];
  selectedOptions: Option[];
  onSelectedOptionsChange: (selectedOptions: Option[]) => void;
}

export function SelectWithSearch({ options, selectedOptions,
    onSelectedOptionsChange }: SelectWithSearchProps) 
{
    const [searchTerm, setSearchTerm] = useState('');

    const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        if (event.target.checked) {
          const selectedOption = options.find((option) => option.value === value)
          if (selectedOption) {
            onSelectedOptionsChange([...selectedOptions, selectedOption])
          }
        } else {
          onSelectedOptionsChange(selectedOptions.filter((option) => option.value !== value))
        }
    }

    const filteredOptions = options.filter((option) =>
        option.label.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <>
    <div>
      <div>
        <h2>Selecione uma ou mais opções:</h2>

        {filteredOptions.map((option) => (
            <label key={option.value}>
            <input
              type="checkbox"
              value={option.value}
              checked={selectedOptions.some((selected) => selected.value === option.value)}
              onChange={handleOptionChange}
            />
                {option.label}
            </label>
        ))}
      </div>
      <div>
        <h2>Filtrar opções:</h2>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Digite para filtrar..."
        />
      </div>
      <div>
        {/* <button onClick={handleSaveOptions} disabled={selectedOptions.length === 0}>
          Salvar
        </button> */}
      </div>
    </div>
    </>
  );
}
