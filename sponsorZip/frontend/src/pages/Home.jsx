import React, {useEffect, useState} from "react";
import axios from 'axios';
import Spinner from '../components/Spinner';
import {Link} from 'react-router-dom';
import {AiOutlineEdit} from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete} from 'react-icons/md';
import BooksTable from "../components/home/BooksTable";
import BooksCard from "../components/home/BooksCard";
import filterInfluencer from '../assets/img/filterInfluencerEdited.png';
// import filterInfluencer from '../../img/';
import MyHeading from '../components/MyHeading';

const Home = () =>{
    const [sponsors, setSponsors] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showType, setShowType] = useState('table');
    useEffect(()=>{
        setLoading(true);
        axios
        .get('/sponsor')
        .then((response)=>{
            setSponsors(response.data.data);
            setLoading(false);
        })
        .catch((error)=>{
            console.log(error);
            setLoading(false);
        });
    }, []);
    return(
    <>
        <div className="p-4">
            <div className="flex justify-center items-center gap-x-4">
                <button
                className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
                onClick={()=> setShowType('table')}
                >Table
                </button>

                <button
                className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
                onClick={()=> setShowType('card')}
                >Card
                </button>
            </div>
            <div className="flex justify-between items-center">
                <h1 className="text-3x1 mx-2 my-4">Sponsors List</h1>
                <Link to='/sponsor/add'>
                    <MdOutlineAddBox className='text-sky-800 text-4x1'/>
                </Link>
            </div>
            {loading ? <Spinner /> : showType === 'table' ? (<BooksTable sponsors={sponsors}/>) : (<BooksCard sponsors={sponsors}/>)}
        </div>

        {/* <MyHeading name="Aman Mashqoor" age="24"/> */}
        
    <div>
        <img style={{width: "auto"}} src={filterInfluencer}></img>
    </div>
    </>
    )
}

export default Home
