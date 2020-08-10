import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroCategoria() {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState({
    Name: 'teste',
    Description: 'description',
    Color: 'red'
  });
  
  function handleSubmit(eventInfo) {
    eventInfo.preventDefault();

      setCategories([
        ...categories, newCategory
      ])
    
    // alert('Categoria existente!')
  }

  function setValue(key, value) {
    setNewCategory({
      ...newCategory,
      [key]: value,
    })
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {newCategory.Name}</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Nome da Categoria:
            <input
              type="text"
              value={newCategory.Name}
              onChange={(eventInfo) => {
                 setValue('Name',eventInfo.target.value)
              }}
            />
          </label>
        </div>
        
        <div>      
          <label>
            Descrição:
            <textarea
              type="text"
              value={newCategory.Description}
              onChange={(eventInfo) => {
                setValue('Description',eventInfo.target.value)
              }}
            />
          </label>
        </div>

        <div>
          <label>
            Cor:
            <input
              type="color"
              value={newCategory.Color}
              onChange={(eventInfo) => {
                setValue('Color',eventInfo.target.value)
              }}
            />
          </label>
        </div>

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categories.map((category, index) => (
          <li
            key={`${index}`}
            style={{background: category.Color}}
          >
            {`${category.Name}: ${category.Description}`}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;