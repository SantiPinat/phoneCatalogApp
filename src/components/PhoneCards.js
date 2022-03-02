import React, {useEffect, useState} from 'react';
import { PhoneDetails } from './PhoneDetails';

export const PhoneCards = () => {

    const [phones, setPhones] = useState([])

    useEffect(() => {
        getPhones()
    }, [])
    
    const getPhones = async() => {

        const url = 'http://localhost:9641/phones';
        const resp = await fetch( url );
        const phone = await resp.json();
        setPhones(phone);
    }
    
    return (
            <aside className="row justify-content-center">
                    {
                        phones.map(item => (
                            <div className="card m-2 col-md-3 border-dark">
                                <div className="row g-0">
                                    <div className="col-md-4">
                                         <img src={item.images.imgdetails.url} key={item.images.imgdetails.id}  className="img-fluid rounded-start p-2 " alt="A phone detail pic" style={{width:100}}/>
 
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body text-dark" >
                                            <h5 className="card-title fw-bold" key={item.id}>{item.model}</h5>
                                            <p className="card-text" key={item.description}> {item.description} </p>
                                            <p className="card-text fw-bold" key={item.price} >u$d {item.price} </p>

                                            <PhoneDetails key={item} phone={item}/>
                                            
                                        </div>

                                    </div>

                                </div>
                            </div>
                        ) )
                    }
            </aside>

    )
};
