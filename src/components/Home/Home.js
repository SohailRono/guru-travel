import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import fakeData from '../../FakeData/fakeData';
import './Home.css'

const Home = () => {

    const [places, setPlaces] = useState(fakeData);
    const [selectedPlaces, setselectedPlaces] = useState(places[0]);


    return (
        <div className="section p-5">
            <div className="container-fluid">
                <div className="row">


                    <div className="col-md-3">
                        <div className="card border-0 mt-5 bg-transparent text-white" style={{ width: '18rem' }}>
                            <h1 className="text-center">
                                {selectedPlaces.name}</h1>
                            <p>{selectedPlaces.desc}</p>
                            <Link to={"./destination/" + selectedPlaces.name}>
                                <button className="btn btn-warning">Booking</button>
                            </Link>
                        </div>
                    </div>


                    {
                        places.map(place =>
                            <div className="col-md-3 border-0 places" key={place.name}>
                                <div onClick={() => setselectedPlaces(place)} className="mt-5" style={{ width: '18rem' }}>
                                    <img className="card-img-top" src={place.img} alt="Card image cap" />
                                    <h2 className="text-white">{place.name}</h2>
                                </div>
                            </div>
                        )
                    }



                </div>
            </div>
        </div>
    );
};

export default Home;