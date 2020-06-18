import React, { useEffect, useState, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { Map, TileLayer, Marker } from 'react-leaflet';
import axios from 'axios';
import api from '../../services/api';

import './styles.css';

import logo from '../../assets/logo.svg';

// Définition des types des données attendues pour les items
interface Item {
    id: number;
    title: string;
    image_url: string
}

interface APIRegionResponse {
    nom: string;
}

const CreatePoint = () => {
    /**
     * State: items
     */
    const [items, setItems] = useState<Item[]>([]); // On pourrait aussi écrire useState<Array<Item>>([])

    /**
     * State: regions
     */
    const [regions, setRegions] = useState<string[]>([]);

    /**
     * State région séléctionné
     */
    const [selectedRegion, setSelectedRegion] = useState('0');

    /**
     * Récupères les item de notre api
     */
    useEffect(() => {
        api.get('items').then(response => {
            setItems(response.data);
        })
    }, []);

    /**
     * Récupères la localisation grâce à l'api géoGouv
     */
    useEffect(() => {
        axios.get<APIRegionResponse[]>('https://geo.api.gouv.fr/departements').then(response => {
            // console.log(response);
            const regions = response.data.map(region => region.nom);

            setRegions(regions);
        });
    }, []);

    /**
     * Recupères les villes selon région
     */
    useEffect(() => {

    }, []);

    /**
     * 
     */
    function handleSelectRegion(event: ChangeEvent<HTMLSelectElement>) {
        const region = (event.target.value);

        setSelectedRegion(region);
    }

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
                            <select 
                                name="region" 
                                id="region" 
                                value={selectedRegion} 
                                onChange={handleSelectRegion}
                            >
                                <option value="0">Séléctionnez une région</option>
                                {regions.map(region => (
                                    <option key={region} value={region}>{region}</option>
                                ))}
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
                          <li key={item.id}>
                            < img src={item.image_url} alt={item.title} />
                            <span>{item.title}</span>
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