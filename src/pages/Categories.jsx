import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Categories() {

  const location = useLocation()
  const navigate = useNavigate()

  const query = new URLSearchParams(location.search)
  const skip = parseInt(query.get('skip')) || 0; // Valor por defecto
  const limit = parseInt(query.get('limit')) || 15 // Valor por defecto

  const handleNext = () => {
    query.set('skip', skip + limit)
    // query.set('limit', 200)
    navigate({search: query.toString()})
  }

  return (
    <>
      <h1>Categories</h1>
      <h2>Skip: {skip}</h2>
      <h2>Limit: {limit}</h2>

      <button onClick={handleNext}>
        Next
      </button>
    </>
  )
}
