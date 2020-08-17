import React from 'react';
import './App.css';

function NavMenu(props) {
    return props.items.map((Li) => {
        return (
            <ul>{Li}</ul>
            );
    })
}

function DataItem(props) {
    return (
        <div className="data-item">
            <div className = "di-w50">
                <i className={props.icon}></i>
                <h4>{props.name}</h4>
            </div>
            <div className="di-w50">
                <p>{props.text}</p>
            </div>
        </div>
        );
}

function App() {
    const menuItems = ["Home", "Sobre", "Portifolio", "Contato"];
  return (
    <div className="App">
      <header className="menu-container">
        <NavMenu className="menu-desktop" items={menuItems} />
        <NavMenu className="menu-mobile" items={menuItems} />
      </header>

        <section id="home">
            <img src="https://avatars2.githubusercontent.com/u/69318250?s=400&u=f6a47e68010fa313e99164f80e05c1de63570088&v=4" id="profile" />
            <h2>Guilherme S. Souza</h2>
            <p>Engenheiro e Programador</p>
        </section>

          <section id="sobre">
              <h2> Sobre</h2>
              <div className="desciption">
                  <h3> Ola!</h3>
                  <p>Meu nome é Guilherme Souza e ... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              </div>

              <div className="w50 personal-data">
                  <DataItem icon="fab fa-html5" name="Data de nascimento" text="05/03/1998" />
                  <DataItem icon="fab fa-html5" name="Data de nascimento" text="05/03/1998" />
                  <DataItem icon="fab fa-html5" name="Data de nascimento" text="05/03/1998" />
              </div>

              <div className="w50 personal-data">
                  <DataItem icon="fab fa-html5" name="Data de nascimento" text="05/03/1998" />
                  <DataItem icon="fab fa-html5" name="Data de nascimento" text="05/03/1998" />
                  <DataItem icon="fab fa-html5" name="Data de nascimento" text="05/03/1998" />
              </div>

              <div className="sobre-buttons">
                  <button> CV</button>
                  <button> Entrar em contato</button>
            </div>
          </section>

          <section id="portifolio">
              <img src="https://i.pinimg.com/736x/5b/b4/8b/5bb48b07fa6e3840bb3afa2bc821b882.jpg" />
              <img src="https://cdn.falauniversidades.com.br/wp-content/uploads/2020/04/20183132/pok%C3%A9mon.jpg" />
          </section>

          <section id="contato">
              <fieldset>
                  <label>Nome</label>
                  <input type="text" />
                  <label>Email</label>
                  <input type="email" />
                  <label>Mensagem</label>
                  <input type="text" />
              </fieldset>

          </section>


    </div>
  );
}

export default App;
