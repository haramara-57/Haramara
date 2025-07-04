import React from 'react'

const Users = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Gestión de Usuarios</h2>
      <p>Aquí puedes gestionar todos los usuarios del sistema.</p>
      <div style={{ marginTop: '20px' }}>
        <button style={{ 
          padding: '10px 20px', 
          backgroundColor: '#007bff', 
          color: 'white', 
          border: 'none', 
          borderRadius: '4px',
          marginRight: '10px'
        }}>
          Agregar Usuario
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

export default Users
