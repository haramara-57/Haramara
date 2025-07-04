import React from 'react'

const products = () => {
    return (
      <div style={{ padding: '20px' }}>
        <h2>Gestión de Productos</h2>
        <p>Aquí puedes gestionar todos los Productos del sistema.</p>
        <div style={{ marginTop: '20px' }}>
          <button style={{ 
            padding: '10px 20px', 
            backgroundColor: '#007bff', 
            color: 'white', 
            border: 'none', 
            borderRadius: '4px',
            marginRight: '10px'
          }}>
            Agregar Producto
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

export default products