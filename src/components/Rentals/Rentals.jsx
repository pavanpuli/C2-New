import "./Rentals.css";
import {useState,useEffect} from 'react'
import axios from 'axios'

export const Rentals = () => {
const [array,setArray] = useState([])
const [data,setData] = useState([])

useEffect(()=>{
  getData();
},[])

const getData =()=>{
  axios.get(`http://localhost:8080/houses`).then(res=>{
    setData(res.data)
  })
}

function compareID(a, b) {
  if (a.id < b.id) {
    return -1;
  }
  if (a.id > b.id) {
    return 1;
  }
  return 0;
}
function compareLow(a, b) {
  if (a.rent < b.rent) {
    return -1;
  }
  if (a.rent > b.rent) {
    return 1;
  }
  return 0;
}
function compareLowArea(a, b) {
  if (a.areacode < b.areacode) {
    return -1;
  }
  if (a.areacode > b.areacode) {
    return 1;
  }
  return 0;
}
function compareHighArea(a, b) {
  if (a.areacode < b.areacode) {
    return 1;
  }
  if (a.areacode > b.areacode) {
    return -1;
  }
  return 0;
}
function compareHigh(a, b) {
  if (a.rent < b.rent) {
    return 1;
  }
  if (a.rent > b.rent) {
    return -1;
  }
  return 0;
}
const sortLow = () => {
  array.sort(compareLow);
  setArray([...array]);
};
const sortHigh = () => {
  array.sort(compareHigh);
  setArray([...array]);
};
const sortLowArea = () => {
  array.sort(compareLowArea);
  setArray([...array]);
};
const sortHighArea = () => {
  array.sort(compareHighArea);
  setArray([...array]);
};

const sortID = () => {
  array.sort(compareID);
  setArray([...array]);
};

  return (
    <div className="rentalContainer">
      <div className="sortingButtons">
        <button className="sortById" onClick={() => sortID()}>Sort by ID</button>
        <button className="sortByRentAsc" onClick={() => sortLow()}>Rent Low to high</button>
        <button className="sortByRentDesc" onClick={() => sortHigh()}>Rent High to low</button>
        <button className="sortByAreaAsc" onClick={() => sortLowArea()}>Area Low to high</button>
        <button className="sortByAreaDesc" onClick={() => sortHighArea()}>Area High to Low</button>
      </div>
      <input
        className="searchAddress"
        type="text"
        placeholder="Search Address"
      />
      <table className="table" border="1">
        <thead>
          <tr>
            <th>Sl.no.</th>
            <th>Name</th>
            <th>Owner Name</th>
            <th>Address</th>
            <th>Area Code</th>
            <th>Rent</th>
            <th>Available For</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {data.map((house, index) => {
            return (
              <tr key={house.id} className="houseDetails">
                <td className="houseId">{house.id}</td>
                <td className="houseName">{house.name} </td>
                <td className="ownersName">{house.ownerName}</td>
                <td className="address">{house.address}</td>
                <td className="areaCode">{house.areaCode}</td>
                <td className="rent">{house.rent}</td>
                <td className="preferredTenants">
                  {/* Show text Both or Bachelors or Married based on values */}
                </td>
                <td className="houseImage">
                  <img src={house.image} alt="house" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
