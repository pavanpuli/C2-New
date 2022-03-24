import {useState,useEffect} from 'react'
import axios from 'axios'

export const AddHouse = () => {
  const [formData, setFormData] = useState({
    name:"",
    ownerName:"",
    address:"",
    areaCode:"",
    rent:"",
    bachelor:"",
    married:"",
    image:""
  })

  const API = `http://localhost:8080/houses`;
  
  
  const [data,setData] = useState([])
  
  
  const getData =()=>{
    axios.get(`${API}`).then(res=>{
      setData(res.data)
    })
  }


  const handleChange=(e)=>{
    const {id,value} = e.target;
    setFormData({
      ...formData,
      [id]:value
    })
  }

  const handleCheckbox=(e)=>{
    const{id,value} = e.target;
    const checked = e.target.checked;
    if(checked){
      setFormData({
        ...formData,
        [id]:value,
      })
    }
  }


  const handleSubmit = (e) =>{
    e.preventDefault();
    axios.post(`${API}`,formData).then(()=>{
      setFormData({
        name:"",
        ownerName:"",
        address:"",
        areaCode:"",
        rent:"",
        bachelor:"",
        married:"",
        image:""
      })
    })
  }

  return (
    <div className="addHouseContainer">
      <form onSubmit={handleSubmit}>
        <label>name</label>
        <input type="text" id="name" className="name" value={formData.name} onChange={handleChange} required />
        <br />
        <label>ownerName</label>
        <input value={formData.ownerName}  id="ownerName" type="text" className="ownerName" onChange={handleChange} required />
        <br />
        <label>address</label>
        <input value={formData.address} id="address" type="text" className="address" onChange={handleChange} required />
        <br />
        <label>areaCode</label>
        <input value={formData.areaCode} id="areaCode" type="text" className="areaCode" onChange={handleChange} required />
        <br />
        <label>rent</label>
        <input value={formData.rent} type="text" id="rent" className="rent" onChange={handleChange} required />
        <br />
        <label>preferredTenant</label>
        <br />
        <label>bachelor</label>
        <input value={"bachelor"} id="bachelor" type="checkbox" className="bachelor" onChange={(e)=>{
          handleCheckbox(e)
        }}/>
        <br />
        <label>married</label>
        <input value={"bachelor"} id="married" type="checkbox" className="married" onChange={(e)=>{
          handleCheckbox(e)
        }}/>
        <br />
        <label>image</label>
        <input value={formData.image} id="image" type="text" onChange={handleChange} className="image" required />
        <br />
        <input className="submitBtn" type="submit" />
      </form>
    </div>
  );
};
