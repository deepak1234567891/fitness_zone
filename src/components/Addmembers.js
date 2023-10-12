import React, { useState } from 'react';
import api from '../api';


const Addmembers = () => {
//  const [Add_Members, setAdd_Members] = useState([]);
const [formData, setFormData] = useState({
      id: '',
      name: '',
      age: '',
      category: '',
      description: '',
      amount: '',
      join_date: '' // Update to match the field name in formData
  });
    

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;

  setFormData({
      ...formData,
      [name]: newValue,
    });
  };

 
    const handleFormSubmit = async (event) => {
    event.preventDefault();
    await api.post('/Add_Members/', formData);
    // fetchAdd_Members();
    setFormData({
      id: '',
      name: '',
      age: '',
      category: '',
      description: '',
      amount: '',
      // is_income: false,
      join_date: '', // Update to match the field name in formData
      delete:''
    });
  };

  return (
    <>
    <div>
      <nav className='navbar navbar-dark bg-primary'>
        <div className='container-fluid'>
          <a className='navbar-brand' href="#">
            Fitness Zone....
          </a>
        </div>
      </nav>

  <div className='container'>
          <form onSubmit={handleFormSubmit}>
            {/* ... rest of your code ... */}
   
            <div className='mb-3'>
               <label htmlFor='name' className='form-label'>
                 Name
               </label>
               <input type='text' className='form-control' id='name' name='name' onChange={handleInputChange} value={formData.name}/>
             </div>
  
             <div className='mb-3'>
               <label htmlFor='age' className='form-label'>
                 age
               </label>
               <input type='text' className='form-control' id='age' name='age' onChange={handleInputChange} value={formData.age}/>
             </div>
  
             <div className='mb-3'>
               <label htmlFor='category' className='form-label'>
               category
               </label>
               <input type='text' className='form-control' id='category' name='category' onChange={handleInputChange} value={formData.category}/>
             </div>
  
             <div className='mb-3'>
               <label htmlFor='description' className='form-label'>
                 Description
               </label>
               <input type='text' className='form-control' id='description' name='description' onChange={handleInputChange} value={formData.description}/>
             </div>
               
            <div>
             <label htmlFor='amount' className='form-label'>
               amount
            </label>
               <input type='text' className='form-control' id='amount' name='amount' onChange={handleInputChange} value={formData.amount}/>
             </div>
             
            <div className='mb-3'>
               <label htmlFor='join_date' className='form-label'>
                 join_date
               </label>
              <input
                  type='date'
                  className='form-control'
                  id='join_date'
                  name='join_date'
                  onChange={handleInputChange}
                  value={formData.join_date}  
              />
             </div>
    
            <button type='submit' className='btn btn-primary'>
                Submit
            </button>
         </form>

        
          </div>
    </div>
  </>
  )
};       
export default Addmembers;