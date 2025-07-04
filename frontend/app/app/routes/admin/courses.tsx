import React from 'react'

const courses = () => {
    return (
      <div style={{ padding: '20px' }}>
        <h2>Gestión de Cursos</h2>
        <p>Aquí puedes gestionar todos los Cursos del sistema.</p>
        <div style={{ marginTop: '20px' }}>
          <button style={{ 
            padding: '10px 20px', 
            backgroundColor: '#007bff', 
            color: 'white', 
            border: 'none', 
            borderRadius: '4px',
            marginRight: '10px'
          }}>
            Agregar Curso
          </button>
          <button style={{ 
            padding: '10px 20px', 
            backgroundColor: '#28a745', 
            color: 'white', 
            border: 'none', 
            borderRadius: '4px'
          }}>
            Exportar Lista
          </button>
        </div>
      </div>
    )
  }
  
export default courses