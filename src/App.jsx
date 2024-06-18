import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profilcard from './Components/Profilcard'

const App = () => {
  const users = [
    {
      name: 'Yourri',
      age: 30,
      profilePicture: 'https://images.pexels.com/photos/925263/pexels-photo-925263.jpeg?auto=compress&cs=tinysrgb&w=600',
      bio: 'A lover of the lenses'
    },
    {
      name: 'Lil Dark',
      age: 25,
      profilePicture: 'https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      bio: 'A  popular rapp musician making the hits.'
    },
    {
      name: 'Lebron',
      age: 35,
      profilePicture: 'https://images.pexels.com/photos/4376514/pexels-photo-4376514.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      bio: 'Greatest of all time active player'
    }
  ];

  return (
    <div className="app">
      {users.map((user, index) => (
        <Profilcard
          key={index}
          name={user.name}
          age={user.age}
          profilePicture={user.profilePicture}
          bio={user.bio}
        />
      ))}
    </div>
  );
};

export default App;