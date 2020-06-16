import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './styles.css';

import logo from '../../assets/logo.svg';

const Home = () => {
    return (
        <div id="page-home">
            <div className="content">
                <header>
                <img src={logo} alt="Ecollect" />
                </header>

                <main>
                    <h1>Votre marketplace de collecte de déchets</h1>
                    <p>Nous vous aidons à trouver des points de collecte pour tous vos déchets !</p>

                    <Link to="/create-point">
                        <span>
                            <FiLogIn />
                        </span>
                        <strong>Inscrivez un point de collecte</strong>
                    </Link>
                </main>
            </div>
        </div>
    )
}

export default Home;