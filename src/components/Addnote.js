
import React, { useContext, useState } from 'react'

import NoteContext from './context/NoteContext'

const Addnote = () => {
    const context = useContext(NoteContext);
    const { notes, addNote } = context;
    const [note, setNote] = useState({ name: "", contact: "", address: "" , pincode:""});
    function handleClick(e) {
        e.preventDefault();
        console.log("Notes is adding");
        const {name,contact,address,pincode}=note
        addNote(name,contact,address,pincode);
        setNote({ name: "", contact: "", address: "" , pincode:""});
    }
    function getValue(e) {
        
        setNote({ ...note, [e.target.name]: e.target.value })
        // the above syntax says that remaining value of notes object remiain same only those whose value is changing will get changed
    

    }

    return (

        <div className='container text-align-centre'>
            <h2>Add Patient</h2>

            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Name</label>
                    <input type="text" className="form-control" id="title" name="name" aria-describedby="emailHelp" placeholder="Enter name" onChange={getValue} value={note.name} required/>

                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Contact Detail</label>
                    <input type="text" className="form-control" id="description" name="contact" placeholder="Enter contact detail" onChange={getValue} value ={note.contact} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Address</label>
                    <input type="text" className="form-control" id="tag" name="address" placeholder="Enter address" onChange={getValue} value ={note.address} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Pincode</label>
                    <input type="text" className="form-control" id="tag" name="pincode" placeholder="Enter pincode" onChange={getValue} value ={note.pincode} required/>
                </div>
                <button  type="submit" className="btn btn-primary" onClick={handleClick}>Add Patient</button>
            </form>
            {/* disabled={note.name.length<5 || note.address.length<5} */}

        </div>
    )
}

export default Addnote
