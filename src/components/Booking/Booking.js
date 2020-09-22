import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import fakeData from '../../FakeData/fakeData';
import star from '../../images/Icon/star_1_.png';

const Booking = () => {
    const { placeName } = useParams();
    const { hotels, map } = fakeData.find(place => place.name === placeName);

    console.log(hotels, map)
    return (
        <div className="section" id="booking">
            <div className="container-fluid">
                <div className="row">
                    <h3 className="text-dark pl-5 py-3">Stay in {placeName}</h3>
                </div>
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        {
                            hotels.map(p =>
                                <div className="d-flex justify-content-between p-5">
                                    <div className="col-md-6 col-sm-12">
                                        <img src={p.photo} alt="" />
                                    </div>
                                    <div className="col-md-6 col-sm-12 text-left">
                                        <h5 className="text-dark">{p.name}</h5>
                                        <p className="text-info small">{p.guests} guests  {p.bedrooms}  bedrooms  {p.bedrooms}  bed  {p.baths} baths</p>
                                        <p className="text-dark small">{p.others}</p>
                                        <div className="d-flex justify-content-between">
                                            <p className="text-dark small">Rating: <img src={star} alt="" className="icon-img" /> {p.rating}</p>
                                            <p className="text-dark small">$ {p.perNight}/per night</p>
                                            <p className="text-dark small">$ total: </p>
                                        </div>
                                       <Link to="/login">
                                       <button className="btn btn-warning btn-sm btn-block">Book Now</button></Link>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <div className="col-md-6 col-sm-12 p-5">
                        <iframe title={placeName} src={map} frameborder="3" width="100%" height="100%"></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;