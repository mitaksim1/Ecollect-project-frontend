import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { Map, TileLayer, Marker } from 'react-leaflet';
import api from '../../services/api';

import './styles.css';

import logo from '../../assets/logo.svg';

// Définition des types des données attendues pour les items
interface Item {
    id: number;
    title: string;
    image_url: string
}

const CreatePoint = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        api.get('items').then(response => {
            setItems(response.data);
        })
    }, []);

    return (
        <div id="page-create-point">
            <header>
                <img src={logo} alt="Ecollect"/>

                <Link to="/">
                    <FiArrowLeft />
                    Retour à la page d'accueil
                </Link>;   
            </header>

            <form>
                <h1>Inscription d'un <br /> point de collecte</h1>

                <fieldset>
                    <legend>
                        <h2>Donées</h2>
                    </legend>

                    <div className="field">
                         <label htmlFor="name">Nom de l'éntité</label>
                         <input 
                             type="text"
                             name="name"
                             id="name"                        
                         />
                    </div>

                   <div className="field-group">
                    <div className="field">
                         <label htmlFor="email">Email</label>
                         <input 
                             type="email"
                             name="email"
                             id="email"                        
                         />
                    </div>

                    <div className="field">
                         <label htmlFor="telephone">Téléphone</label>
                         <input 
                             type="text"
                             name="telephone"
                             id="telephone"                        
                         />
                    </div>
                   </div>

                </fieldset>

                <fieldset>
                    <legend>
                        <h2>Adresse</h2>
                        <span>Séléctionnez une adresse dans la carte</span>
                    </legend>

                    <Map center={[45.8703421, 1.2636387]} zoom={15}>
                        <TileLayer
                            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />

                        <Marker position={[45.8703421, 1.2636387]} />
                    </Map>

                    <div className="field-group">
                        <div className="field">
                            <label htmlFor="region">Region</label>
                            <select name="region" id="region">
                                <option value="0">Séléctionnez une région</option>
                            </select>
                        </div>
                        <div className="field">
                            <label htmlFor="city">Ville</label>
                            <select name="city" id="city">
                                <option value="0">Séléctionnez une ville</option>
                            </select>
                        </div>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>
                        <h2>Items à collecter</h2>
                        <span>Séléctionnez un ou plusieurs items</span>
                    </legend>

                    <ul className="items-grid">
                        {items.map(item => (
                          <li>
                            < img src="http://localhost:3333/uploads/huiles.svg"alt="Teste"/>
                            <span>Huile</span>
                         </li>  
                        ))}    
                    </ul>
                </fieldset>

                <button type="submit">
                    Enregistrer ce point de collecte
                </button>
            </form>
        </div>
    )
};

export default CreatePoint;