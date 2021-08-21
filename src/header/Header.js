import React from 'react'
import Dashboard from './Dashboard'

export default function Header({name, email, uid}){

    return (
        <header className='header'>
            <h1 className='header-title'>trackzu</h1>
            
            <div>
                <Dashboard name={name} email={email} uid={uid}/>
            </div>
            
        </header>
    )
}