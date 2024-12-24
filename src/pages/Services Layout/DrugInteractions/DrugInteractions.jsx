import React, { useState } from 'react'
import "./DrugInteractions.css"
import { FaCheck } from 'react-icons/fa';
// import { Button, Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const DrugInteractions = () => {
    const [drugs, setDrugs] = useState([]);
    const [drug, setDrug] = useState('');

    const [show, setShow] = useState(false);
    const [message, setMessage] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const handleInputChange = (e) => {
        setDrug(e.target.value);
    }

    const handleAddDrug = () => {
        if (!drug) {
            setShow(true)
            setMessage("Please enter a valid drug name")
            return;
        };
        if (drugs.find(dr => dr.toLowerCase() === drug.toLowerCase())) {
            setShow(true)
            setMessage("This drug is already exists")
            return;
        };
        setDrugs(prev => [...prev, drug]);
        setDrug('');
    }

    const handleRemoveDrug = (dr) => {
        setDrugs(prev => prev.filter(drug => drug !== dr));
    }
    return (
        <>
            <article className='drug-interactions'>
                <header>
                    <div>
                        <p>Discover</p>
                        <h1>Drug Interactions</h1>
                        <p>Enter the effective ingredients of your medications
                            to check for potential interactions.</p>
                    </div>
                </header>
                <div className="middle">
                    <section>
                        <form className="form" id="addDrugForm">
                            <div className="form-cont position-relative">
                                <h6>Drug(s)</h6>
                                <div id="autocomplete"></div>
                                <input className="drug-name" type="text"
                                    placeholder="Enter Drug Name" value={drug} onChange={handleInputChange} />
                                <button type='button' className="add-drug" onClick={handleAddDrug}>Add</button>
                                {drugs.length ? (
                                    <div className="drugs d-flex flex-wrap gap-3  mb-3">
                                        {drugs.map((drug, index) => (
                                            <span key={index} className="drug" onClick={() => handleRemoveDrug(drug)}>
                                                {drug}
                                                <FaCheck className='ms-2 ' />
                                            </span>

                                        ))}
                                    </div>
                                ) : null}
                            </div>

                            <div>
                                <button className="mb-3" type="submit">Analyze</button>
                                <br />
                                <button type='button' className="btn-clear" onClick={() => setDrugs([])}>Clear</button>
                            </div>
                        </form>
                    </section>
                </div>
                <div className="result text-center  p-4">
                    <h3 className="mb-4">
                        <span>3</span> result for Drug interactions!
                    </h3>
                    <div>
                        <h3>Title</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Error quo corporis iste beatae tempore
                            voluptatum tempora, porro distinctio deserunt
                            eligendi consequuntur cupiditate molestias aperiam
                            sit impedit deleniti commodi necessitatibus
                            dolor!</p>
                    </div>
                </div>
            </article>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Error</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {message}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default DrugInteractions