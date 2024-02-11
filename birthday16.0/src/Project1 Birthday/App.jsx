import React, { useState } from 'react'
import data from './Project1 Birthday/Data'
import './Project1 Birthday/App.css'

function App() {
  const [people, setPeople] = useState(data)
  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthdays today</h3>
        {people.map((person) => {
        return (
          <article key={person.id} className='person'>
            <img src={person.image} alt='name'/>
            <div>
              <h4>{person.name}</h4>
              <p>{person.age} years</p>
            </div>
          </article>
        );
      })}
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
  )
}

export default App