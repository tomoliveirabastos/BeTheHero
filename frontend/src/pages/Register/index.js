import React, {useState}from 'react';
import './styles.css';
import {Link, useHistory } from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import logoIMG from '../../assets/logo.svg';
import api from '../../services/api';

export default function Register(){
    let [name, setName] = useState('');
    let [email, setEmail] = useState('');
    let [whatsapp, setWhatsapp] = useState('');
    let [city, setCity] = useState('');
    let [uf, setUf] = useState('');
    
    let history = useHistory();

    let handleRegister = async(e)=>{
        e.preventDefault();
        let data = {
            name, email, whatsapp, city,uf
        }
        let response = await api.post('ongs', data);
        alert(response.data.id);
        history.push('/');
    }
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoIMG} alt="Be the hero" />

                    <h1>Cadastro</h1>
                    <p>Faça seu Cadastro, entre na plataforma e ajude pessoas a encontrar os casos da sua ONG</p>
                    
                    <Link className="backlink" to="/"><FiArrowLeft size={16} />Voltar</Link>
                    </section>

                    <form onSubmit={handleRegister}>
                        
                        <input placeholder="Nome da ONG" type="text"
                            value={name}
                            onChange={e=>{setName(e.target.value)}}
                        />
                        
                        <input placeholder="E-mail" type="email" 
                            value={email}
                            onChange={e=>{setEmail(e.target.value)}}
                        />
                        
                        <input placeholder="whatsapp" type="text" 
                            value={whatsapp}
                            onChange={e=>{setWhatsapp(e.target.value)}}
                        />
                        
                        <div className="input-group">
                        
                            <input placeholder="Cidade"
                                value={city}
                                onChange={e=>{setCity(e.target.value)}}
                            />
                        
                            <input placeholder="UF" style={{width:80}} 
                                value={uf}
                                onChange={e=>{setUf(e.target.value)}}
                            />
                        </div>
                        <button className="button" type="submit">Cadastrar</button>
                    </form>
            </div>
        </div>
    );
}