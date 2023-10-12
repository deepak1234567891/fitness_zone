// import React, {useContext, useState} from "react"
// import { Navbar, Nav, Form, FormControl, Button, Badge } from 'react-bootstrap'
// import { Link } from 'react-router-dom'
// import {MembersContext} from '../MemberContext'


// const Search = () => {
//     const [search, setSearch] = useState("")
//     const [Add_Members, setAdd_Members] = useContext(MembersContext)

//     const updateSearch = (e) => {
//         setSearch(e.target.value)
//     }

//     const filterAdd_Members = (e) => {
//         e.preventDefault()
//         const Add_Members = Add_Members.data.filter(Add_Members => Add_Members.name.toLowerCase() === search.toLowerCase())
//         setAdd_Members({"data" : [...Add_Members]})
//     }

//     return (
//         <Navbar bg="dark" expand="lg" variant="dark">
//             <Navbar.Brand href="#home">Inventory Management App</Navbar.Brand>
//             <Navbar.Toggle aria-controls="basic-navbar-nav" />
//             <Navbar.Collapse id="basic-navbar-nav">
//                 <Nav className="mr-auto">            
//                     <Badge className="mt-2" variant="primary">Products In stock { Add_Members.data.length}</Badge>
//                 </Nav>
//                 <Form onSubmit={ filterAdd_Members } inline>
//                         <Link to="/add" className="btn btn-primary btn-sm mr-4">Add Product</Link>
//                         <FormControl value = {search} onChange={updateSearch} type="text" placeholder="Search" className="mr-sm-2" />
//                 <Button type="submit"  variant="outline-primary">Search</Button>
//                 </Form>
//             </Navbar.Collapse>
//         </Navbar>

//     );
// }

// export default Search;


// import React, { useState, useEffect } from "react";
// import{ Container } from "react-bootstramp";

// //function Search()
// {
//     const [useData, setUserdata] = useState([]);

//     useEffect(() => {
//         const fetchMemberData = async () => {
//           try {
//             const response = await api.get(`http://127.0.0.1:8000/Add_Members/?skip=0&limit=100`);
//             const memberData = response.data; // Assuming your API returns data in this format
//             setFormData(memberData);
//           } catch (error) {
//             console.error('Error fetching member data:', error);
//           }
//         };
    
//         fetchMemberData();
//       }, []);


        
    
//                 <div className="row mt-3">
//                   <div className="col-md-12 mt-3 mb-3">
//                     <input type="text" name="name" className="form-control" placeholder="Search..."/>
//                   </div>
//                 </div>

//                 return (

//     <table className='table table-striped table-bordered table-hover'>
//         <thead>
//             <tr>
//                 <th>id</th>
//                 <th>Name</th>
//                 <th>age</th>
//                 <th>category</th>
//                 <th>Description</th>
//                 <th>amount</th>
//                 <th>join_date</th>
//                 <th>Actions</th>
//             </tr>
//         </thead>
//         <tbody>
//             {Add_Members.map((member) => (
//                 <tr key={member.id}>
//                     <td>{member.id}</td>
//                     <td>{member.name}</td>
//                     <td>{member.age}</td>
//                     <td>{member.category}</td>
//                     <td>{member.description}</td>
//                     <td>{member.amount}</td>
//                     <td>{member.join_date}</td>
//                 </tr>
//             ))}

//         </tbody>
//         </table>
        
        
//       )

//       export default Search;