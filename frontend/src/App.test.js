import React from 'react'
import App from './App'
import { render, screen } from '@testing-library/react'
import HomePage from './Components/HomePage';

test('App Renders',async ()=>{
    render(<App/>)
});

test('Welcome Page', ()=> {
    const { getByRole } = render(<HomePage />);
    const button = getByRole("buttons");
    expect(button).toBeTruthy()
});

