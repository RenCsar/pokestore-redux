import React from 'react'
import { useParams } from 'react-router-dom'

export const Categoria = () => {
  const params = useParams();
  console.log(params.tipo)
  return (
    <div>Categoria</div>
  )
}
