import React,{useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import './styles.css';


import {FiLogIn} from 'react-icons/fi';
import logoIMG from '../../assets/logo.svg';
import heroesIMG from '../../assets/heroes.png';
import api from '../../services/api';

export default function Logon(){
    let [id, setId] = useState('');
    let history = useHistory();
    let handleLogin = async(e)=>{
        e.preventDefault();

        try{
            const res = await api.post('session', {id});
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', res.data.name);
            history.push('/profile')
        }catch(err){

        }
    }
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoIMG} alt="Be the hero" />
                <form onSubmit={handleLogin}>
                    <h1>Faça seu Login</h1>
                    <input placeholder="Sua ID" 
                        value={id}
                        onChange={e => {setId(e.target.value)}}
                    />
                    <button className="button" type="submit">Entrar</button>
                </form>
                <Link className="linkREL" to="/register">
                    <FiLogIn size={16} color="#e02041" />
                    Não tenho cadastro
                </Link>
            </section>
            <img src={heroesIMG} alt="Heroes"/>
        </div>
    );
}