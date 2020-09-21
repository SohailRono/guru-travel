import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../FakeData/fakeData';

const Destination = (props) => {
    const { placeName } = useParams();
    const destinationPlace = fakeData.find(p => p.name === placeName);
    const { name, desc } = destinationPlace;
    console.log('destinationPlace', destinationPlace)

    const [date, setDate] = useState({from:0,to:0});

    const handleSubmit = () => {
        
    }

    const handleDate = (e) => {
        const fromDate = {...date};
        fromDate.from = e.target.value;
        setDate(fromDate);
        console.log(fromDate)
    }

    return (
        <div className="section">
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-6 text-white">
                        <h1>{name}</h1>
                        <p>{desc}</p>
                    </div>
                    <div className="col-md-6 ">
                        <form onSubmit={handleSubmit} className="bg-white p-5">
                            <div className="form-group font-weight-bold">
                                <label htmlFor="origin">Origin</label>
                                <input disabled type="text" className="font-weight-bold form-control p-2 bg-lightgrey" id="origin" value="Dhaka" />
                            </div>
                            <div className="form-group font-weight-bold">
                                <label htmlFor="origin">Destination</label>
                                <input disabled type="text" className="font-weight-bold form-control p-2 bg-lightgrey" id="origin" value={name} />
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6 font-weight-bold">
                                    <label htmlFor="from">From</label>
                                    <input type="date" onChange={handleDate}  className="datepicker form-control input-date" id="from" name="from" />
                                   
                                </div>
                                <div className="form-group col-md-6 font-weight-bold">
                                    <label htmlFor="to">To</label>
                                    <input type="date" onChange={handleDate}  className="form-control input-date" id="to" name="to" />
                                </div>
                            </div>
                            <div className="form-group font-weight-bold">
                                <label htmlFor="origin">Destination</label>
                                <input type="submit" className="btn btn-warning btn-block" id="origin" value="Start Booking" />
                            </div>

                        </form>

                       

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Destination;