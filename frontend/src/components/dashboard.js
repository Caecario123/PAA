import React,{useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

const Dashboard = () => {
const [Siswa, setSiswa] = useState([]);

useEffect(()=>{
    getSiswa();
},[]);

const getSiswa = async()=>{
    const response = await axios.get('http://localhost:5000/siswa');
    setSiswa(response.data);
}

const deleteSiswa = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/delete/${id}`);
      getSiswa();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
                <Link to={'add'} className='button is-success'> Add New</Link>
            <table className='table is-striped is-fullwidth'>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                        {Siswa.map((siswa, index)=>(
                            <tr key={siswa.id}>
                                <td>{index+1}</td>
                                <td>{siswa.name}</td>
                                <td>{siswa.email}</td>
                                <td>{siswa.gender}</td>
                                <td>
                                    <Link to={'edit/${siswa.id}'} 
                                    className='button is-small is-info'>Edit</Link>
                                    <button onClick={()=>deleteSiswa(siswa.id)} className='button is-small is-danger'>Delete</button>
                                </td>
                                </tr>
                        ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Dashboard