// ... (your imports and component setup)
// import React,{ useState,useEffect } from "react";

// const MembersList = () => {
// const [Add_Members, setAdd_Members] = useState([]);
// const [searchQuery, setSearchQuery] = useState('');
// const [currentPage, setCurrentPage] = useState(1);
// const [membersPerPage] = useState(10);

// const indexOfLastMember = currentPage * membersPerPage;
// const indexOfFirstMember = indexOfLastMember - membersPerPage;
// const currentMembers = Add_Members.slice(indexOfFirstMember, indexOfLastMember);


// const handlePreviousPage = () => {
//   if (currentPage > 1) {
//     setCurrentPage(currentPage - 1);
//   }
// };

// const handleNextPage = () => {
//   const totalPages = Math.ceil(Add_Members.length / membersPerPage);
//   if (currentPage < totalPages) {
//     setCurrentPage(currentPage + 1);
//   }
// };

//   // ... (your existing code)

//   // Generate an array of page numbers based on the total number of pages
//   const totalPages = Math.ceil(Add_Members.length / membersPerPage);
//   const numbers = Array.from({ length: totalPages }, (_, i) => i + 1);

//   const changepage = (page) => {
//     setCurrentPage(page);
//   };

//   const nextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   return (
//     <div>
//       {/* ... (your existing code) */}
//       <table className='table table-striped table-bordered table-hover'>
//             <thead>
//                 <tr>
//                     <th>id</th>
//                     <th>Name</th>
//                     <th>age</th>
//                     <th>category</th>
//                     <th>Description</th>
//                     <th>amount</th>
//                     <th>join_date</th>
//                     <th>Actions</th>
//                 </tr>
//             </thead>

//             {/* <tbody>
//                     {Add_Members.filter(member => {
//                         const searchFields = ['name', 'age', 'category', 'description', 'amount', 'join_date'];
//                         return searchFields.some(field =>
//                           typeof member[field] === 'string' && member[field].toLowerCase().includes(searchQuery.toLowerCase())
//                         );
//                     }).map((member) => (
//        */}
//        <tbody>
//                     <tr key={member.id}>
//                         <td>{member.id}</td>
//                         <td>{member.name}</td>
//                         <td>{member.age}</td>
//                         <td>{member.category}</td>
//                         <td>{member.description}</td>
//                         <td>{member.amount}</td>
//                         <td>{member.join_date}</td>

//                       <td>
//        </tbody>
//       <ul className="pagination">
//         <li className="page-item">
//           <a href="#" className="page-link" onClick={handlePreviousPage}>
//             Prev
//           </a>
//         </li>
//         {numbers.map((n, i) => (
//           <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
//             <a href="#" className="page-link" onClick={() => changepage(n)}>
//               {n}
//             </a>
//           </li>
//         ))}
//         <li className="page-item">
//           <a href="#" className="page-link" onClick={handleNextPage}>
//             Next
//           </a>
//         </li>
//       </ul>

//   );
// }

// export default MembersList;