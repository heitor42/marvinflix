import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroCategoria() {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState({
    name: '',
    description: '',
    color: ''
  });
  
  function handleSubmit(eventInfo) {
    eventInfo.preventDefault();

      setCategories([
        ...categories, newCategory
      ])

    setValue({
      name: '',
      description: '',
      color: ''
    })    
  }

  function setValue(key, value) {
    setNewCategory({
      ...newCategory,
      [key]: value,
    })
  }

  function handleChange(eventInfo) {
    const { value } = eventInfo.target;

    setValue(
      eventInfo.target.getAttribute('name'),
      value
     )
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {newCategory.name}</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Nome da Categoria:
            <input
              type="text"
              name='name'
              value={newCategory.name}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>      
          <label>
            Descrição:
            <textarea
              type="text"
              name='description'
              value={newCategory.description}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            Cor:
            <input
              type="color"
              name='color'
              value={newCategory.color}
              onChange={handleChange}
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
            style={{background: category.color}}
          >
            {`${category.name}: ${category.description}`}
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