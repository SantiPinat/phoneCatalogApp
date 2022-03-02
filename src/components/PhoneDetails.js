import React from 'react'
import { PhonesImg } from './PhonesImg'


export const PhoneDetails = ({...item}) => {

    console.log(item)
    
    const phones = {
        id : item.id,
        model : item.model,
        imgId : item.imgdetail.id,
        imgUrl : item.imgdetail.url
    };
    
    console.log("this is phones" + phones.id)

    return (
            <aside>
                <button type="button" className="btn btn-outline-dark fw-bold" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Details
                </button>

                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title " id="exampleModalLabel" key={item.model}>Detailed info of {item.model}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                            <div className="card m-2 colborder-dark">
{/*                                         <PhonesImg  key={item.imgdetails.id} img={item.imgdetails.url}/>
 */}
                                        <div className="card-body text-dark" >
                                            <h5 className="card-title fw-bold text-center" key={item.model}>{item.model}</h5>
                                            <hr></hr>
                                            <p className="card-title fw-bold text-center">{item.brand}</p>
                                            <p className="card-text" key={item.description} > {item.description} </p>
                                            <p key={item.cameradetails.mpx} > Camera Details: {item.cameradetails.mpx}, {item.cameradetails.zoom} </p>
                                            <p key={item.screen} > {item.screen} </p>
                                            <p key={item.capacity}>{item.capacity}</p>
                                            <p key={item.gps}> {item.gps} </p>
                                            <p key={item.so}> {item.so} </p>
                                            <p className="card-text fw-bold text-center" key={item.price}>u$d {item.price} </p>
                                        </div>
                            </div>
                    </div>
                    <div className="modal-footer justify-content-center">
                        <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-outline-success">Buy</button>
                    </div>
                    </div>
                </div>
                </div>
            </aside>
    )
}
