import React,{useState} from 'react';
import {FiArrowLeft} from 'react-icons/fi';
import './styles.css';
import logoIMG from '../../assets/logo.svg';
import {Link, useHistory} from 'react-router-dom';

import api from '../../services/api';

export default function Incident(){
    let [title, setTitle] = useState('');
    let [description, setDescription] = useState('');
    let [value, setValue] = useState('');
    let history = useHistory();
    let ong_id = localStorage.getItem('ongId');
    

    let handleRequest = async(e)=>{
        e.preventDefault();
        let data = {
            title,
            description,
            value,
            ong_id
        };
        await api.post('incidents', data);
        history.push('/profile');
    }
    return (
        <div className="new-incident">
            <div className="content">
                <section>
                    <img src={logoIMG} alt="Be the hero" />

                    <h1>Cadastro</h1>
                    <p>Faça seu Cadastro, entre na plataforma e ajude pessoas a encontrar os casos da sua ONG</p>
                    
                    <Link className="backlink" to="/profile"><FiArrowLeft size={16} />Voltar</Link>
                    </section>

                    <form onSubmit={handleRequest}>
                        <input placeholder="Título do caso" type="text"
                            value={title}
                            onChange={e=>{setTitle(e.target.value)}}
                        />
                        <textarea placeholder="Descrição"
                            onChange={e=>{setDescription(e.target.value)}}
                        ></textarea>
                        <input placeholder="Valor em reais"
                            value={value}
                            onChange={e=>{setValue(e.target.value)}}
                        type="text"/>
                        <button className="button" type="submit">Cadastrar</button>
                    </form>
                
            </div>
        </div>
    );
}