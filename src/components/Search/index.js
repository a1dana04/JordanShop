import React from 'react';
import { useSelector } from 'react-redux';
import BayNowCard from '../BayNow/BayNowCard';


const Search = () => {
    const {search} = useSelector((s)=>s.todo)
  
console.log(search);
    return (
        <div id='search'>
            <div className="container">
                <div className="search flex items-start justify-between flex-wrap p-8">
                    {
                        search.map((el)=><BayNowCard el={el}/>)
                    }
                </div>
            </div>
            
        </div>
    );
};

export default Search;