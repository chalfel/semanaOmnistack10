import React, { useState, useEffect } from 'react';

import './global.css'; 
import './App.css'; 
import './Sidebar.css'
import './Main.css'


function App() {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [githubUsername, setGithubUsername] = useState(0);
  const [techs, setTechs] = useState(0);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);

      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    );
  }, []);
  
  async function handleAddDev(e) {
    e.preventDefault();
  }
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form  onSubmit={handleAddDev}>
          <div className="input-block">
            <label htmlFor="username_github">Usuário do Github</label>
            <input 
              name="github_username" 
              id="username_github"
              onChange={ e => setGithubUsername(e.target.value)} 
              required 
              />
          </div>
          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input 
              name="techs" 
              id="techs" 
              onChange={ e => setTechs(e.target.value)}
              required 
              />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input 
                type="number"
                name="latitude" 
                id="latitude" 
                value={latitude} 
                onChange={ e => setLatitude(e.target.value)}
                required 
                />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input 
                type="number" 
                name="longitude" 
                id="longitude" 
                value={longitude} 
                onChange={ e => setLongitude(e.target.value)}
                required 
                />
            </div>
          </div>
            <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/2254731?s=400&v=4" alt="Diego Fernandes" />
              <div className="user-info">
                <strong>Diego Fernandes</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
              <p>
              CTO na @Rocketseat. Apaixonado pelas melhores tecnologias de desenvolvimento web e mobile.
              </p>
              <a href="https://github.com/diego3g">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/2254731?s=400&v=4" alt="Diego Fernandes" />
              <div className="user-info">
                <strong>Diego Fernandes</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
              <p>
              CTO na @Rocketseat. Apaixonado pelas melhores tecnologias de desenvolvimento web e mobile.
              </p>
              <a href="https://github.com/diego3g">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/2254731?s=400&v=4" alt="Diego Fernandes" />
              <div className="user-info">
                <strong>Diego Fernandes</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
              <p>
              CTO na @Rocketseat. Apaixonado pelas melhores tecnologias de desenvolvimento web e mobile.
              </p>
              <a href="https://github.com/diego3g">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/2254731?s=400&v=4" alt="Diego Fernandes" />
              <div className="user-info">
                <strong>Diego Fernandes</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
              <p>
              CTO na @Rocketseat. Apaixonado pelas melhores tecnologias de desenvolvimento web e mobile.
              </p>
              <a href="https://github.com/diego3g">Acessar perfil no Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
