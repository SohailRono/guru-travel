import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import fakeData from '../../FakeData/fakeData';

const Destination = () => {
    const { placeName } = useParams();
    const destinationPlace = fakeData.find(p => p.name === placeName);
    const { name, desc } = destinationPlace;
    // console.log('destinationPlace', destinationPlace)

    const [date, setDate] = useState({ from: 0, to: 0 });
    const fromDate = new Date(date.from);
    const toDate = new Date(date.to);
    const diffrence = (toDate - fromDate);
    const totalDays = (((diffrence / 1000) / 3600) / 24);
    const disabled = totalDays < 1;

    // const handleSubmit = () => {

    // }

    // const handleDate = (e) => {
    //     const fromDate = { ...date };
    //     if (e.target.name === 'from') {
    //         fromDate.from = e.target.value;
    //     }
    //     if (e.target.name === 'to') {
    //         fromDate.to = e.target.value;
    //     }

    //     setDate(fromDate);
    // }

    return (
        <div className="section">
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-6 text-white">
                        <h1>{name}</h1>
                        <p>{desc}</p>
                    </div>
                    <div className="col-md-6 ">
                        <form  className="bg-white p-5">
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
                                    {/* <input type="date" onChange={handleDate} className="datepicker form-control input-date" id="from" name="from" /> */}
                                    <input type="date" className="datepicker form-control input-date" id="from" name="from" onChange={(e) => {
                                    const newFrom = {...date};
                                    newFrom.from = e.target.value;
                                    setDate(newFrom)
                                    }} />

                                </div>
                                <div className="form-group col-md-6 font-weight-bold">
                                    <label htmlFor="to">To</label>
                                    {/* <input type="date" onChange={handleDate} className="form-control input-date" id="to" name="to" /> */}
                                    <input type="date" className="form-control input-date" id="to" name="to" onChange={(e) => {
                                    const newTo = {...date};
                                    newTo.to = e.target.value;
                                    setDate(newTo)
                                    }} />
                                </div>
                            </div>
                            <div className="form-group font-weight-bold">
                                <label htmlFor="origin">Destination</label>
                                
                               <Link to={`/booking/${placeName}`}>
                               <input disabled={disabled} type="submit" className="btn btn-warning btn-block" id="origin" value="Start Booking" />
                               </Link>
                            </div>

                        </form>



                    </div>
                </div>
            </div>
        </div>
    );
};

export default Destination;