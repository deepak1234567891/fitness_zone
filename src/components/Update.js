// import React,{ useState, useEffect } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';

// function Update() {
//   const {id} = useParams();
// //   const [inputData, setInputData] = useState((
// //       id: '',
// //       name: '',
// //       age: '',
// //       category: '',
// //       description: '',
// //       amount: '',
// //       join_date: '', // Update to match the field name in formData
    
// //   ))

//   const [formData, setFormData] = useState({
//       id: '',
//       name: '',
//       age: '',
//       category: '',
//       description: '',
//       amount: '',
//       join_date: '' // Update to match the field name in formData
//   });
//   const navigate = useNavigate();

// //   useEffect(() => {
    
// //     .then(res => setInputData(res.data))
// //     .catch(err => console.log(err))
// //   },[])

// useEffect(() => {
// fetchAdd_Members();
// }, []);

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();
//     await api.post('/Add_Members/'+id, formData);
//     // fetchAdd_Members();
//     setFormData({
//      id: '',
//       name: '',
//       age: '',
//       category: '',
//       description: '',
//       amount: '',
//       // is_income: false,
//       join_date: '', // Update to match the field name in formData
//       delete:''
//   })

//   return (
//     <div>
//         <div>
//             <from onSubmit={handleFormSubmit}>
//             <div className='mb-3'>
//                <label htmlFor='name' className='form-label'>
//                  Name
//                </label>
//                <input type='text' className='form-control' id='name' name='name' onChange={handleInputChange} value={formData.name}/>
//              </div>
  
//              <div className='mb-3'>
//                <label htmlFor='age' className='form-label'>
//                  age
//                </label>
//                <input type='text' className='form-control' id='age' name='age' onChange={handleInputChange} value={formData.age}/>
//              </div>
  
//              <div className='mb-3'>
//                <label htmlFor='category' className='form-label'>
//                category
//                </label>
//                <input type='text' className='form-control' id='category' name='category' onChange={handleInputChange} value={formData.category}/>
//              </div>
  
//              <div className='mb-3'>
//                <label htmlFor='description' className='form-label'>
//                  Description
//                </label>
//                <input type='text' className='form-control' id='description' name='description' onChange={handleInputChange} value={formData.description}/>
//              </div>
               
//             <div>
//              <label htmlFor='amount' className='form-label'>
//                amount
//             </label>
//                <input type='text' className='form-control' id='amount' name='amount' onChange={handleInputChange} value={formData.amount}/>
//              </div>
             
//             <div className='mb-3'>
//                <label htmlFor='join_date' className='form-label'>
//                  join_date
//                </label>
//               <input
//                   type='date'
//                   className='form-control'
//                   id='join_date'
//                   name='join_date'
//                   onChange={handleInputChange}
//                   value={formData.join_date}  
//               />
//              </div>
//             </from>
//         </div>
//     </div>
//   )

// }


// const handleUpdate = (id) => {
//   const product = Add_Members.data.filter(Add_Members => Add_Members.id === id)[0]
//   setUpdateAdd_MembersInfo({
//     Add_MembersName: Add_Members.name,
//       QuantityInStock: Add_Members.quantity_in_stock,
//       QuantitySold: Add_Members.quantity_sold,
//       UnitPrice: Add_Members.unit_price,
//       Revenue: Add_Members.revenue,
//       ProductId: id
//   })
//   history.push("/Add_Members")
// }

// const handleSupplier = (id) => {
//   console.log(id)
//   fetch("http://localhost:8000/supplier/" + id, {
//       headers: {
//           Accept: 'application/json'
//       }
//   }).then(resp => {
//       return resp.json()
//   }).then(result => {
//       if (result.status === 'ok') {
//           setSupplierDetail({ ...result.data })
//           history.push("/supplierpage")
//       }
//       else {
//           alert("error")
//       }
//   })

// }

// useEffect(() => {
//   fetchAdd_Members();
//   }, []);

// console.log(products.data)
// return (
//   <div>
//       <Table striped bordered hover>
//   <thead>
//     <tr>
//       <th>id</th>
//       <th>Name</th>
//       <th>age</th>
//       <th>category</th>
//       <th>Description</th>
//       <th>amount</th>
//       <th>join_date</th>
//     </tr>
//   </thead>
//   <tbody>
//   {Add_Members.map((member) => (
//                     <tr key={member.id}>
//                         <td>{member.id}</td>
//                         <td>{member.name}</td>
//                         <td>{member.age}</td>
//                         <td>{member.category}</td>
//                         <td>{member.description}</td>
//                         <td>{member.amount}</td>
//                         <td>{member.join_date}</td>
//                         <td>
//                             <button>
//                             <Link className='update' to={"/update/{member.id}"}>Update</Link>
//                             </button>
//                         </td>
//                     </tr>
//                 ))}
//   </tbody>
// </Table>
//   </div>
// );
// }


// export default Update;


// import React, { useContext } from 'react'
// import { Form, Button, Card } from 'react-bootstrap'
// import UpdateAdd_MembersContext, {UpdateContext} from './UpdateAdd_MembersContext'



// const Update = () => {
    
//     const [updateAdd_Members, setUpdateAdd_Members] = useContext(UpdateContext)

//     const updateForm = (e) => {
//         setUpdateAdd_Members({...updateAdd_Members, [e.target.name]: e.target.value})
//     }


//     const postData = async (e) => {
//         e.preventDefault()

//         const url = "http://localhost:8000/Add_Members/" + updateAdd_Members['Add_MembersId']

//         const response = await fetch(url, {
//             method: "PUT",
//             mode: 'cors',
//             cache: 'no-cache',
//             credentials: 'same-origin',
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
//                 name: updateAdd_Members['Name'],
//                 age: updateAdd_Members['age'],
//                 category: updateAdd_Members["category"],
//                 Description: updateAdd_Members['Descriptione'],
//                 amount: updateAdd_Members['amount']
//                 // join_date: updateAdd_Members['join_date']
//             })
//         })

//         response.json().then(resp => {
//             if (resp.status === 'ok') {
//                 alert("updated");
//             }
//             else {
//                 alert("Failed to update")
//             }
//         })

//         setUpdateAdd_Members({
//           id: '',
//           name: '',
//           age: '',
//           category: '',
//           description: '',
//           amount: '',
//           join_date: ''
//         })
//     }

//     return (
//        <Card>
// 			<Card.Body>
// 				<Form  onSubmit={postData} >
// 					<Form.Group controlId='Name'>
// 						<Form.Label>Name</Form.Label>
// 						<Form.Control
// 							type='text'
// 							name='Name'
// 							value={updateAdd_Members.Name}
// 							onChange={updateForm}
// 							placeholder='Name'
// 						/>
// 					</Form.Group>

// 					<Form.Group controlId='age'>
// 						<Form.Label>age</Form.Label>
// 						<Form.Control
// 							type='number'
// 							name='age'
// 							value={updateAdd_Members.age}
// 							onChange={updateForm}
// 							placeholder='age'
// 						/>
// 					</Form.Group>

// 					<Form.Group controlId='category'>
// 						<Form.Label>category</Form.Label>
// 						<Form.Control
// 							type='text'
// 							name='category'
// 							value={updateAdd_Members.category}
// 							onChange={updateForm}
// 							placeholder='category'
// 						/>
// 					</Form.Group>

// 					<Form.Group controlId='Description'>
// 						<Form.Label>Description</Form.Label>
// 						<Form.Control
// 							type='text'
// 							name='Description'
// 							value={updateAdd_Members.Description}
// 							onChange={updateForm}
// 							placeholder='Description'
// 						/>
// 					</Form.Group>

// 					<Form.Group controlId='amount'>
// 						<Form.Label>amount</Form.Label>
// 						<Form.Control
// 							type='text'
// 							name='amount'
// 							value={updateAdd_Members.amount}
// 							onChange={updateForm}
// 							placeholder='amount'
// 						/>
// 					</Form.Group>

// 					<Form.Group controlId='join_dater'>
// 						<Form.Label>join_date</Form.Label>
// 						<Form.Control
// 							type='number'
// 							name='join_date'
// 							value={updateAdd_Members.join_date}
// 							onChange={updateForm}
// 							placeholder='join_date'
// 						/>
// 					</Form.Group>

// 					<Button variant='primary' type='submit'>
// 						Submit
// 					</Button>
// 				</Form>
// 			</Card.Body>
// 		</Card>
//     )
// }

// export default Update;

// import React, { useContext } from 'react';
// import { Form, Button, Card } from 'react-bootstrap';
// // import { UpdateContext } from 'src/UpdateAdd_MembersContext'; // Import the UpdateContext

// const Update = () => {
//     const [updateAdd_Members, setUpdateAdd_Members] //= useContext(UpdateContext);

//     const updateForm = (e) => {
//         setUpdateAdd_Members({ ...updateAdd_Members, [e.target.name]: e.target.value });
//     }

//     const postData = async (e) => {
//         // ... your postData logic ...
//     }

//     return (
//         <Card>
//            <Card.Body>
// 				<Form  onSubmit={postData} >
// 					<Form.Group controlId='Name'>
// 						<Form.Label>Name</Form.Label>
// 						<Form.Control
// 							type='text'
// 							name='Name'
// 							value={updateAdd_Members.Name}
// 							onChange={updateForm}
// 							placeholder='Name'
// 						/>
// 					</Form.Group>

// 					<Form.Group controlId='age'>
// 						<Form.Label>age</Form.Label>
// 						<Form.Control
// 							type='number'
// 							name='age'
// 							value={updateAdd_Members.age}
// 							onChange={updateForm}
// 							placeholder='age'
// 						/>
// 					</Form.Group>

// 					<Form.Group controlId='category'>
// 						<Form.Label>category</Form.Label>
// 						<Form.Control
// 							type='text'
// 							name='category'
// 							value={updateAdd_Members.category}
// 							onChange={updateForm}
// 							placeholder='category'
// 						/>
// 					</Form.Group>

// 					<Form.Group controlId='Description'>
// 						<Form.Label>Description</Form.Label>
// 						<Form.Control
// 							type='text'
// 							name='Description'
// 							value={updateAdd_Members.Description}
// 							onChange={updateForm}
// 							placeholder='Description'
// 						/>
// 					</Form.Group>

// 					<Form.Group controlId='amount'>
// 						<Form.Label>amount</Form.Label>
// 						<Form.Control
// 							type='text'
// 							name='amount'
// 							value={updateAdd_Members.amount}
// 							onChange={updateForm}
// 							placeholder='amount'
// 						/>
// 					</Form.Group>

// 					<Form.Group controlId='join_dater'>
// 						<Form.Label>join_date</Form.Label>
// 						<Form.Control
// 							type='number'
// 							name='join_date'
// 							value={updateAdd_Members.join_date}
// 							onChange={updateForm}
// 							placeholder='join_date'
// 						/>
// 					</Form.Group>

// 					<Button variant='primary' type='submit'>
// 						Submit
// 					</Button>
// 				</Form>
// 			</Card.Body>
//         </Card>
//     )
// }

// export default Update;

// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// // import React, { useState } from 'react';
// import api from '../api';

// const Addmembers = () => {
//   // Use an object for initial formData to make it more clear
//   const initialFormData = {
//     id: '',
//     name: '',
//     age: '',
//     category: '',
//     description: '',
//     amount: '',
//     join_date: '',
//     delete: ''
//   };
// const [formData, setFormData] = useState(initialFormData);

// const Update = () => {
//   const { id } = useParams();

//   const [formData, setFormData] = useState({
//     name: '',
//     age: '',
//     category: '',
//     description: '',
//     amount: '',
//     join_date: ''
//   });

//   useEffect(() => {
//     const fetchMemberData = async () => {
//       try {
//         const response = await api.get(`/Add_Members/${id}`);
//         const memberData = response.data; // Assuming your API returns data in this format
//         setFormData(memberData);
//       } catch (error) {
//         console.error('Error fetching member data:', error);
//       }
//     };

//     fetchMemberData();
//   }, [id]);

//   const handleInputChange = (event) => {
//     const { name, value, type, checked } = event.target;
//     const newValue = type === 'checkbox' ? checked : value;

//     setFormData({
//       ...formData,
//       [name]: newValue,
//     });
//   };

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();
    
  //   try {
  //     await api.post('/Add_Members/', formData);
  //     // On successful submission, clear form fields
  //     setFormData(initialFormData);
  //   } catch (error) {
  //     console.error('Error submitting form:', error);
  //     // Handle error here (e.g., show error message to the user)
  //   }
  // };

//   return (
//     <div>
//       <nav className='navbar navbar-dark bg-primary'>
//         <div className='container-fluid'>
//           <a className='navbar-brand' href='#'>
//             Gym Software
//           </a>
//         </div>
//       </nav>

//       <div className='container'>
//         <form onSubmit={handleFormSubmit}>
//           <div className='mb-3'>
//             <label htmlFor='name' className='form-label'>
//               Name
//             </label>
//             <input
//               type='text'
//               className='form-control'
//               id='name'
//               name='name'
//               onChange={handleInputChange}
//               value={formData.name}
//             />
//           </div>
//           {/* Other form fields */}
//           <button type='submit' className='btn btn-primary'>
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Addmembers;


// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import api from '../api';

// const Update = () => {
//   const { id } = useParams();

//   const [formData, setFormData] = useState({
//     name: '',
//     age: '',
//     category: '',
//     description: '',
//     amount: '',
//     join_date: ''
//   });

  // useEffect(() => {
  //   const fetchMemberData = async () => {
  //     try {
  //       const response = await api.get(`/Add_Members/${id}`);
  //       const memberData = response.data; // Assuming your API returns data in this format
  //       setFormData(memberData);
  //     } catch (error) {
  //       console.error('Error fetching member data:', error);
  //     }
  //   };

  //   fetchMemberData();
  // }, [id]);

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;

  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();

  //   try {
  //     await api.put(`/Add_Members/${id}`, formData);
  //     // Handle success (e.g., redirect or show a success message)
  //   } catch (error) {
  //     console.error('Error updating member:', error);
  //     // Handle error (e.g., show error message to the user)
  //   }
  // };

//   return (
//     <div>
//       {/* Update form similar to Addmembers */}
//     </div>
//   );
// };

// export default Update;

// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import api from '../api';

// const Update = () => {
//   const { id } = useParams();
//   // const history = useHistory();

//   const [formData, setFormData] = useState({
//     name: '',
//     age: '',
//     category: '',
//     description: '',
//     amount: '',
//     join_date: ''
//   });

//   useEffect(() => {
//     const fetchMemberData = async () => {
//       try {
//         const response = await api.get(`/Add_Members/${id}`);
//         const memberData = response.data; // Assuming your API returns data in this format
//         setFormData(memberData);
//       } catch (error) {
//         console.error('Error fetching member data:', error);
//       }
//     };

//     fetchMemberData();
//   }, [id]);

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;

//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       await api.put(`/Add_Members/${id}`, formData);
//       // Handle success (e.g., redirect or show a success message)
//       history.push('/MembersList'); // Redirect after successful update
//     } catch (error) {
//       console.error('Error updating member:', error);
//       // Handle error (e.g., show error message to the user)
//     }
//   };

//   return (
//     <div>
//       <nav className='navbar navbar-dark bg-primary'>
//         <div className='container-fluid'>
//           <a className='navbar-brand' href='#'>
//             Gym Software
//           </a>
//         </div>
//       </nav>

//       <div className='container'>
//         <form onSubmit={handleFormSubmit}>
//           <div className='mb-3'>
//             <label htmlFor='name' className='form-label'>
//               Name
//             </label>
//             <input
//               type='text'
//               className='form-control'
//               id='name'
//               name='name'
//               onChange={handleInputChange}
//               value={formData.name}
//             />
//           </div>
//           {/* Other form fields */}
//           <button type='submit' className='btn btn-primary'>
//             Update
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Update;




// import React, { useState, useEffect } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import api from '../api';
// // import axios from 'axios';

// const Update = () => {
//   const { id } = useParams();
//   const [values, setValues] = useState({
//   // const [formData, setFormData] = useState({
//     name: '',
//     age: '',
//     category: '',
//     description: '',
//     amount: '',
//     join_date: ''
//   });

//   useEffect(() => {
//     const fetchMemberData = async () => {
//       try {
//         const response = await api.get(`/Add_Members/${id}`);
//         const memberData = response.data; // Assuming your API returns data in this format
//         setFormData(memberData);
//       } catch (error) {
//         console.error('Error fetching member data:', error);
//       }
//     };

//     fetchMemberData();
//   }, [id]);

  // useEffect(() => {
  //   axios.get('http://localhost:8000/Add_Members/{Add_Members_id}/'+id)
  //   .then(res => {
  //     setValues({...values, name: res.member.name, age: res.member.age, category: res.member.category, description: res.member.description, amount: res.member.amount, join_date: res.member.join_date})
  //     })
  //     .catch(err => console.log(err))
  //   },[])


  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
    

//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   // const handleFormSubmit = async (event) => {
//   //   event.preventDefault();
// const navigate = useNavigate()

//   const handleFormSubmit =  (e) => {
//     e.preventDefault();
//     axios.post('http://localhost:8000/Add_Members/{Add_Members_id}/'+id, values)
//     .then(res => {
//       navigate('/');
//       // setValues({...values, name: res.member.name, age: res.member.age, category: res.member.category, description: res.member.description, amount: res.member.amount, join_date: res.member.join_date})
//       })
//       .catch(err => console.log(err))
//     }
  //   try {
  //     await api.put(`/Add_Members/${id}`, formData);
  //     // Handle success (e.g., redirect or show a success message)
  //   } catch (error) {
  //     console.error('Error updating member:', error);
  //     // Handle error (e.g., show error message to the user)
  //   }
  // };

  // return (
  //       <div>
  //         <nav className='navbar navbar-dark bg-primary'>
  //           <div className='container-fluid'>
  //             <a className='navbar-brand' href='#'>
  //               Gym Software
  //             </a>
  //           </div>
  //         </nav>
    
  //         <div className='container'>
  //           <form onSubmit={handleFormSubmit}>
  //             <div className='mb-3'>
  //               <label htmlFor='name' className='form-label'>
  //                 Name
  //               </label>
  //               <input
  //                 type='text'
  //                 className='form-control'
  //                 id='name'
  //                 name='name'
  //                 value={values.name}
  //                 onChange={e => setValues({...values, name: e.target.value})}
  //               />
  //             </div>

  //             <div className='mb-3'>
  //              <label htmlFor='age' className='form-label'>
  //                age
  //              </label>
  //              <input type='text' className='form-control' id='age' name='age'  value={values.age} onChange={e => setValues({...values, age: e.target.value})}/>
  //            </div>
  
  //            <div className='mb-3'>
  //              <label htmlFor='category' className='form-label'>
  //              category
  //              </label>
  //              <input type='text' className='form-control' id='category' name='category'  value={values.category} onChange={e => setValues({...values, category: e.target.value})}/>
  //            </div>
  
  //            <div className='mb-3'>
  //              <label htmlFor='description' className='form-label'>
  //                Description
  //              </label>
  //              <input type='text' className='form-control' id='description' name='description' value={values.description} onChange={e => setValues({...values, description: e.target.value})}/>
  //            </div>
               
  //           <div>
  //            <label htmlFor='amount' className='form-label'>
  //              amount
  //           </label>
  //              <input type='text' className='form-control' id='amount' name='amount' value={values.amount} onChange={e => setValues({...values, amount: e.target.value})}/>
  //            </div>
             
  //           <div className='mb-3'>
  //              <label htmlFor='join_date' className='form-label'>
  //                join_date
  //              </label>
  //             <input
  //                 type='date'
  //                 className='form-control'
  //                 id='join_date'
  //                 name='join_date'
  //                 value={values.join_date}  
  //                 onChange={e => setValues({...values, join_date: e.target.value})}
  //             />
  //            </div>

  //             {/* Other form fields */}
  //             <button type='submit' className='btn btn-primary'>
  //               Update
  //             </button>
  //           </form>
  //         </div>
  //       </div>
  //     );
  //   };
    
  //   export default Update;

// import React, { useState, useEffect } from 'react';
// import { useParams, useHistory } from 'react-router-dom';
// import api from '../api';

// const Update = () => {
//   const { id } = useParams();
//   const history = useHistory(); // Get the history object

//   // ... (Rest of the component code)

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       await api.put(`/Add_Members/${id}`, formData);
//       // Handle success (e.g., show a success message)
//       console.log('Member updated successfully');

//       // Navigate to a different page after successful update
//       history.push('/MembersList'); // Replace with the desired route
//     } catch (error) {
//       console.error('Error updating member:', error);
//       // Handle error (e.g., show error message to the user)
//     }
//   };

//   // ... (Rest of the component code)
// };

// export default Update;

    
// import React, { useState,useEffect } from "react";
// // import Addmembers from "./Addmembers";
// import { useParams } from 'react-router-dom';
// import { Link } from 'react-router-dom'
// import api from "../api";

// const Update = () => {
//  const [Add_Members, setAdd_Members] = useState([]);

// const fetchAdd_Members = async () => {
//  const response = await api.get('/Add_Members/');
//  setAdd_Members(response.data);
// };
      
// useEffect(() => {
// fetchAdd_Members();
// }, []);

//     const { id } = useParams();
    
//     const [formData, setFormData] = useState({
//       name: '',
//       age: '',
//       category: '',
//       description: '',
//       amount: '',
//       join_date: ''
//     });
    
//     useEffect(() => {
//       const fetchMemberData = async () => {
//         try {
//           const response = await api.get(`/Add_Members/${id}`);
//           const memberData = response.data; // Assuming your API returns data in this format
//           setFormData(memberData);
//         } catch (error) {
//           console.error('Error fetching member data:', error);
//         }
//       };
  
//       fetchMemberData();
//     }, [id]);
  
//     const handleInputChange = (event) => {
//       const { name, value } = event.target;
  
//       setFormData({
//         ...formData,
//         [name]: value,
//       });
//     };
  
//     const handleFormSubmit = async (event) => {
//       event.preventDefault();
  
//       try {
//         await api.put(`/Add_Members/{Add_Members_id}/`, formData);
//         // Handle success (e.g., redirect or show a success message)
//       } catch (error) {
//         console.error('Error updating member:', error);
//         // Handle error (e.g., show error message to the user)
//       }


//     };

//     return (
//       <div>
//       <nav className='navbar navbar-dark bg-primary'>
//         <div className='container-fluid'>
//           <a className='navbar-brand' href="#">
//             Gym Software
//           </a>
//         </div>
//       </nav>

//   <div className='container'>
//           <form onSubmit={handleFormSubmit}>
//             {/* ... rest of your code ... */}
   
//             <div className='mb-3'>
//                <label htmlFor='name' className='form-label'>
//                  Name
//                </label>
//                <input type='text' className='form-control' id='name' name='name'  onChange={e => setFormData({...FormData, name: e.target.value})} value={formData.name}/>
//              </div>
  
//              <div className='mb-3'>
//                <label htmlFor='age' className='form-label'>
//                  age
//                </label>
//                <input type='text' className='form-control' id='age' name='age' onChange={e => setFormData({...FormData, age: e.target.value})} value={formData.age}/>
//              </div>
  
//              <div className='mb-3'>
//                <label htmlFor='category' className='form-label'>
//                category
//                </label>
//                <input type='text' className='form-control' id='category' name='category' onChange={e => setFormData({...FormData, category: e.target.value})} value={formData.category}/>
//              </div>
  
//              <div className='mb-3'>
//                <label htmlFor='description' className='form-label'>
//                  Description
//                </label>
//                <input type='text' className='form-control' id='description' name='description' onChange={e => setFormData({...FormData, description: e.target.value})} value={formData.description}/>
//              </div>
               
//             <div>
//              <label htmlFor='amount' className='form-label'>
//                amount
//             </label>
//                <input type='text' className='form-control' id='amount' name='amount' onChange={e => setFormData({...FormData, amount: e.target.value})} value={formData.amount}/>
//              </div>
             
//             <div className='mb-3'>
//                <label htmlFor='join_date' className='form-label'>
//                  join_date
//                </label>
//               <input
//                   type='date'
//                   className='form-control'
//                   id='join_date'
//                   name='join_date'
//                   onChange={e => setFormData({...FormData, join_date: e.target.value})}
//                   value={formData.join_date}  
//               />
//              </div>
    
//                   {/* Other form fields */}
//                   <button type='submit' className='btn btn-primary'>
//                     Update
//                   </button>
//                 </form>
//               </div>
//             </div>
//           );
//         };
        
//         export default Update;


import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import api from "../api";

const Update = () => {
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
        const response = await api.get(`/Add_Members/{Add_Members_id}/`);
        const memberData = response.data;
        setFormData(memberData);
      } catch (error) {
        console.error('Error fetching member data:', error);
      }
    };

    fetchMemberData();
  }, [id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await api.put(`/Add_Members/${id}/`, formData); // Fix the endpoint URL
      // Handle success (e.g., redirect or show a success message)
    } catch (error) {
      console.error('Error updating member:', error);
      // Handle error (e.g., show error message to the user)
    }
  };

  return (
    <div>
      <nav className='navbar navbar-dark bg-primary'>
        <div className='container-fluid'>
          <a className='navbar-brand' href="#">
            Gym Software
          </a>
        </div>
      </nav>

      <div className='container'>
        <form onSubmit={handleFormSubmit}>
          <div className='mb-3'>
            <label htmlFor='name' className='form-label'>
              Name
            </label>
            <input
              type='text'
              className='form-control'
              id='name'
              name='name'
              onChange={(e) => handleInputChange(e)}
              // value={formData.name}
              value={formData.name}
              // onChange={e => setFormData({...formData, name: e.target.value})}
            />
          </div>

          {/* Other input fields */}
          
          <button type='submit' className='btn btn-primary'>
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default Update;
