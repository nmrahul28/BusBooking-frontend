import React from 'react'
import SearchTemplate from '../templates/SearchTemplate.js';
import Searchbusbox from '../organisms/Searchbusbox';
import Header from '../Molecules/Header.js';

const Home = () => {
    return (
        <SearchTemplate
            searchBus={<Searchbusbox />}
            header={<Header />}
        />
    )
}

export default Home
