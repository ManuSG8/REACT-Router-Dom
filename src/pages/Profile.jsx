import React from 'react'
import { useParams } from 'react-router-dom'

export default function Profile() {

  const { username } = useParams()

  return (
    <h1>Profile: {username}</h1>
  )
}
