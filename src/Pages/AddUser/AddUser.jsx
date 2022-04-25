import React , {useState} from "react"
import TextField from '@mui/material/TextField';
import "./adduser.scss"


const AddUser = (props) => {

    const [name , setName] = useState("")
    const [lastname , setLastname] = useState("")
    const [phone , setPhone] = useState("")
    const [country , setCountry] = useState("")

    const handlePhone  = (number) => {
        if((/[1-4]/g).test(number) && number.length == 11){
            setPhone(number)
        }
        else{
            setPhone("")
        }
    }
    
    const add = () => {
        var newUser = {
            id : props.data.length + 1 ,
            lastName : lastname ,
            firstName : name , 
            Phone : phone , 
            Country : country
        }

        props.addUser(newUser)
        props.history.replace("/userData")
    }

    return(
        <div className="adduser">
            <p>Add User</p>
            <div className="form">
                <TextField className="input"  label="Fistname" variant="outlined" placeholder="Mohammad" type={"text"} onChange = {(e)=>{setName(e.target.value)}}/>
                <TextField className="input"  label="LastName" variant="outlined" placeholder="Shishegar"  type={"text"} onChange = {(e)=>{ setLastname(e.target.value)}}/>
                <TextField className="input"  label="Phone" variant="outlined" placeholder="09135554466"  onChange = {(e)=>{  handlePhone(e.target.value)}}/>
                <TextField className="input"  label="Country" variant="outlined" placeholder="Iran"  type={"text"} onChange = {(e)=>{setCountry(e.target.value)}}/>
            </div>
            <div className="btn">
                <button className="add" disabled= {name && lastname && phone && country ? false : true} onClick={()=> add()}>Add New User</button>
            </div>
        </div>
    )
}

export default AddUser