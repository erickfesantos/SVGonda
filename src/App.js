import './App.css';
import Onda from './Assets/waves.svg';
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";

function App() {
  return (
    <div className='box'>
      <div className='sub-box'>
        <div className='pre-content'>


          <div className='content'>

            <p className='ola' >Olá! <br/>Estamos felizes em te ver aqui</p>

            <div className='fast-registration'>
              <button className='google' ><FaGoogle/></button>
              <button className='face'><FaFacebookF/></button>
              <button className='x' ><BsTwitterX/></button>
            </div>

            <div className='ou'>
              <hr className='line'/>
              <p>Ou</p>
              <hr className='line'/>
            </div>
            
            <div className='entries'>
              <div>
                <p>Nome</p><input/><p>Senha</p><input type='password' />
              </div>
              <div>
                <p>E-mail</p><input/><p>Confime senha</p><input type='password'/>
                </div>
            </div>

            <div className='terms'>
              <input  type='checkbox' />
              <p>Eu aceito os termos e condições</p>
            </div>

            <div className='send'>
              <button>Cadastrar</button>
            </div>

          </div>
          
        </div>

        <img src={Onda} />

        <div className='BG'></div>

      </div>
    </div>
  );
}

export default App;
