import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import logo from '../../assets/logo.svg';

const CreatePoint = () => {
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
                        <li>
                            <img src="http://localhost:3333/uploads/huiles.svg"alt="Teste"/>
                            <span>Huile</span>
                        </li>
                        <li>
                            <img src="http://localhost:3333/uploads/batteries.svg"alt="Teste"/>
                            <span>Batterie</span>
                        </li>
                        <li>
                            <img src="http://localhost:3333/uploads/organiques.svg"alt="Teste"/>
                            <span>Huile</span>
                        </li>
                        <li>
                            <img src="http://localhost:3333/uploads/lampes.svg"alt="Teste"/>
                            <span>Huile</span>
                        </li>
                        <li>
                            <img src="http://localhost:3333/uploads/papiers-cartons.svg"alt="Teste"/>
                            <span>Huile</span>
                        </li>
                        <li>
                            <img src="http://localhost:3333/uploads/electroniques.svg"alt="Teste"/>
                            <span>Electroniques</span>
                        </li>
                    </ul>
                </fieldset>
            </form>
        </div>
    )
};

export default CreatePoint;