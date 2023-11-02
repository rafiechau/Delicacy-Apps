import React from 'react';
import Classes from "../styles/styles.module.scss";
import { Link } from 'react-router-dom';

function Navigation({ categories, fetchData }) {
    return (
        <div className={Classes.categories}>
            <ul>
                {categories.map(category => (
                    <li key={category.idCategory}>
                        <button onClick={() => fetchData(category.strCategory)}>
                            {category.strCategory}
                        </button>
                    </li>
                ))}
                <li>
                    <Link to={'/favorite'}>Favorite</Link>
                </li>
            </ul>
        </div>
    );
}

export default Navigation;