import React, { useState,useEffect } from "react";
import Addmembers from "./Addmembers";
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import api from "../api";

const MembersList = () => {
const [Add_Members, setAdd_Members] = useState([]);
const [searchQuery, setSearchQuery] = useState('');
const [currentPage, setCurrentPage] = useState(1);
const [membersPerPage] = useState(10);

const indexOfLastMember = currentPage * membersPerPage;
const indexOfFirstMember = indexOfLastMember - membersPerPage;
const currentMembers = Add_Members.slice(indexOfFirstMember, indexOfLastMember);

const fetchAdd_Members = async () => {
 const response = await api.get('/Add_Members/');
 setAdd_Members(response.data);
};
      
useEffect(() => {
fetchAdd_Members();
}, []);

    const { id } = useParams();
    
    const [formData, setFormData] = useState({
      name: '',
      age: '',
      category: '',
      description: '',
      amount: '',
      join_date: ''
    });
    
    useEffect(() => {
      const fetchMemberData = async () => {
        try {
          const response = await api.get(`/Add_Members/${id}`);
          const memberData = response.data; // Assuming your API returns data in this format
          setFormData(memberData);
        } catch (error) {
          console.error('Error fetching member data:', error);
        }
      };
  
      fetchMemberData();
    }, [id]);
  
    //  const handleInputChange = (event) => {
    //    const { name, value } = event.target;
  
    //   setFormData({
    //     ...formData,
    //     [name]: value,
    //   });
    // };
  
    // const handleFormupdate = async (event) => {
    //   event.preventDefault();
  
    //   try {
    //     await api.put(`/Add_Members/{Add_Members_id}/`, formData);
    //     // Handle success (e.g., redirect or show a success message)
    //   } catch (error) {
    //     console.error('Error updating member:', error);
    //     // Handle error (e.g., show error message to the user)
    //   }


    // };

    const handleDelete = (id) => {
      
      const newAdd_Members = Add_Members.filter(member => member.id !==id)
      setAdd_Members(newAdd_Members)
    }

    return (
      <div>
         <div className="mb-3">
            <input
               type="text"
               className="form-control"
               placeholder="Search members..."
               value={searchQuery}
               onChange={(e) => setSearchQuery(e.target.value)}
            />
         </div>
    
        <table className='table table-striped table-bordered table-hover'>
            <thead>
                <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>age</th>
                    <th>category</th>
                    <th>Description</th>
                    <th>amount</th>
                    <th>join_date</th>
                    <th>Actions</th>
                </tr>
            </thead>
          
            <tbody>
                    {Add_Members.filter(member => {
                        const searchFields = ['name', 'age', 'category', 'description', 'amount', 'join_date'];
                        return searchFields.some(field =>
                          typeof member[field] === 'string' && member[field].toLowerCase().includes(searchQuery.toLowerCase())
                        );
                    }).map((member) => (
      
                    <tr key={member.id}>
                        <td>{member.id}</td>
                        <td>{member.name}</td>
                        <td>{member.age}</td>
                        <td>{member.category}</td>
                        <td>{member.description}</td>
                        <td>{member.amount}</td>
                        <td>{member.join_date}</td>
                        
                      <td>
                           <Link  className='btn btn-primary'to={`/update/${member.id}`}>
                                 Update
                           </Link>
                           <button className='btn btn-danger' type='button' onClick={() => handleDelete(member.id)}>
                                 Delete
                           </button>
                      </td>     
                           
                    </tr>
                    ))}
            </tbody>
         </table>
         {Add_Members.length > membersPerPage && (
            <div className="pagination">
               <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
               <span>{currentPage}</span>
               <button onClick={() => setCurrentPage(currentPage + 1)} disabled={indexOfLastMember >= Add_Members.length}>Next</button>
            </div>
         )}
      </div>
      
   );
}

export default MembersList;


