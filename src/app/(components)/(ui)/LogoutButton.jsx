"use client"

import React from 'react'
import Button from './Button'
import { logout } from 'lib/actions/clientLogout'

export default function LogoutButton() {
  return (
  <div><Button variant='default' onClick={() => logout()} >Logout</Button></div>
  )
}
