import React,{useContext} from 'react'
import NoteContext from './context/NoteContext'
// i have to write for delete note

const Notecrud = (props) => {
    const context=useContext(NoteContext);
    const {deleteNote}=context;
    console.log("jjasida");

    const {name,contact,address,pincode,id,updateFun}=props
    
    const handleClick=(id)=>{
        console.log(id);
        // console.log(title);
        deleteNote(id);
    }
    // here i passed the id of the clicked note to the deleteNote function presenrt in  my notecontext
    // now i have to define deltenote in note context
    const clickForUpdate=(id,name,contact,address,pincode)=>{
        updateFun(id,name,contact,address,pincode);
        console.log("clicked");

    }

    
    
    return (
        
        <div className='col-md-3 my-3'>
            <div className="card" >
                {console.log("yeah ")}
                
                    <div className="card-body">
                        <div className='d-flex justify-content-center'>
                        <div>
                            <img src="thisimageforpatient.png" alt="" />
                        </div>
                        <div>
                        <h5 className="card-title">Name: {name}</h5>
                        
                        <p className="card-text">Contact:{contact}</p>
                        <p className="card-text">Address:{address}</p>
                        <p className="card-text">Pincode:{pincode}</p>

                        </div>
                        
                        <i className="fa-solid fa-trash " onClick={()=>{
                            handleClick(id)

                        }}></i>
                        <i className="fa-solid fa-pen-to-square mx-3" onClick={()=>{
                            clickForUpdate(id,name,contact,address,pincode)}}></i>
                        </div>
                        
                    </div>
            </div>
            </div>
            

        
    )
}

export default Notecrud
