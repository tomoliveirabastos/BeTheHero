import React,{useEffect, useState} from 'react';
import logoIMG from '../../assets/logo.svg';
import {FiPower, FiTrash2} from 'react-icons/fi';
import {Link, useHistory} from 'react-router-dom';
import './styles.css';

import api from '../../services/api';

export default function Profile(){
    let [incidents, setIncidents] = useState([]);
    let ongName = localStorage.getItem('ongName');
    let ongId = localStorage.getItem('ongId');
    let history = useHistory();
    let load = async()=>{
        let res = await api.get('incidents',{
            headers:{
                autorization: ongId
            }
        });
        setIncidents(res.data);
    }
    load();

    let deleteRequest = async(id)=>{
        await api.delete(`incidents/${id}`, {
            headers: {
                autorization: ongId
            }
        });
        load();
    }
    let logoutRequest = ()=>{
        localStorage.clear();
        history.push('/');
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoIMG} alt="Be the hero" />
                <span>Bem vinho, {ongName}</span>
                <Link className="button" to="/incident">Cadastrar novo caso</Link>
                <button type="button" onClick={logoutRequest}>
                    <FiPower size={18} color="#e02041" />
                </button>
            </header>
            <h1> Casos cadastrados</h1>
            <ul>
                
                {incidents.map(inc =>(
                    <li key={inc.id}>
                        <strong>CASO:</strong>
                        <p>{inc.title}</p>
                        <strong>Descricao</strong>
                        <p>{inc.description}</p>
                        <strong>Valor:</strong>
                        <p>{Intl.NumberFormat('pt-BR', 'currency', 'BRL').format(inc.value) }</p>

                        <button type="button" onClick={()=>{deleteRequest(inc.id)}}>
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}