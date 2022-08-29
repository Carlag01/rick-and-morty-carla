import React from "react";

const Characters = ({characters = []}) => {
    return(
        <div className="row" >
            {characters.map((item, index) => (
                <div key={index} className="col mt">
                    <div className="card text-white bg-dark card border-info border border-3" style={{ minWidth: " 150px " }}>
                        <img src={item.image}/>
                        <div className="card-body">
                            <h5 className="card-title text-uppercase fst-italic text-info">{item.name}</h5>
                            <hr />
                            <p className="fw-light text-info ">Ubicacion: {item.location.name}</p>
                            <p className="fw-light text-info">Especie: {item.species}</p>
                            <p className="fw-light text-info">Origen: {item.origin.name}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
export default Characters

