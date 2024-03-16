// import React, { useState } from 'react'
// import './CSS/FarmerPortal.css'
// export const FarmerPortal = () => {

//   return (
//     <div className='farmer-portal'>
//       <h1>Farmer Portal</h1>
//       <div className='job-detail'>
//         <h2>Order Details</h2>
//         <input type="date" />
//       </div>

//       <div className='job-route'>
//         <h2>Order Route</h2>
//         <label htmlFor="">Bill to:</label>
//         <input type="text" />
//         <label htmlFor="">Pick up from</label>
//         <input type="text" />
//         <label htmlFor="">Pick location</label>
//         <input type="text" />
//         <label htmlFor="">Deliver to</label>
//         <input type="text" />
//         <label htmlFor="">Deliver location</label>
//         <input type="text" />
//       </div>

//       <div className='item'>
//         <h2>Items</h2>
//         <label htmlFor="">Item:</label>
//         <input type="text" />
//         <label htmlFor="">Quantity:</label>  
//         <input type="number" />
//         <label htmlFor="">Unit:</label>
//         <input type="number" />
//       </div>
//     </div>
//   )
// }


// import React from 'react';
// import './CSS/FarmerPortal.css';

// const FarmerPortal = () => {
//   return (
//     <div className='farmer-portal'>
//       <h1>Farmer Portal</h1>

//       <div className='job-detail'>
//         <h2>Order Details</h2>
//         <input type="date" />
//       </div>

//       <div className='job-route'>
//         <h2>Order Route</h2>
//         <div className="form-group">
//           <label htmlFor="billTo">Bill to:</label>
//           <input id="billTo" type="text" />
//         </div>

//         <div className="form-group">
//           <label htmlFor="pickupFrom">Pick up from:</label>
//           <input id="pickupFrom" type="text" />
//         </div>

//         <div className="form-group">
//           <label htmlFor="pickLocation">Pick location:</label>
//           <input id="pickLocation" type="text" />
//         </div>

//         <div className="form-group">
//           <label htmlFor="deliverTo">Deliver to:</label>
//           <input id="deliverTo" type="text" />
//         </div>

//         <div className="form-group">
//           <label htmlFor="deliverLocation">Deliver location:</label>
//           <input id="deliverLocation" type="text" />
//         </div>
//       </div>

//       <div className='item'>
//         <h2>Items</h2>
//         <div className="form-group">
//           <label htmlFor="item">Item:</label>
//           <input id="item" type="text" />
//         </div>

//         <div className="form-group">
//           <label htmlFor="quantity">Quantity:</label>
//           <input id="quantity" type="number" />
//         </div>

//         <div className="form-group">
//           <label htmlFor="unit">Unit:</label>
//           <input id="unit" type="text" />
//         </div>
//       </div>

//       <div className='button-group'>
//         <button>Accept</button>
//         <button>Deny</button>
//       </div>
//     </div>
//   );
// };

// export default FarmerPortal;

import React from 'react';
import './CSS/FarmerPortal.css';

const FarmerPortal = () => {
  return (
    <div className='farmer-portal'>
      <h1 className='portal-title'>Farmer Portal</h1>

      <div className='section job-detail'>
        <h2>Order Details</h2>
        <input type="date" className="input-field" />
      </div>

      <div className='section job-route'>
        <h2>Order Route</h2>
        {[
          { id: 'billTo', label: 'Bill to' },
          { id: 'pickupFrom', label: 'Pick up from' },
          { id: 'pickLocation', label: 'Pick location' },
          { id: 'deliverTo', label: 'Deliver to' },
          { id: 'deliverLocation', label: 'Deliver location' }
        ].map(({ id, label }) => (
          <div key={id} className="form-group">
            <label htmlFor={id}>{label}:</label>
            <input id={id} type="text" className="input-field" />
          </div>
        ))}
      </div>

      <div className='section item'>
        <h2>Items</h2>
        {['item', 'quantity', 'unit'].map(id => (
          <div key={id} className="form-group">
            <label htmlFor={id}>{id.charAt(0).toUpperCase() + id.slice(1)}:</label>
            <input id={id} type={id === 'quantity' ? 'number' : 'text'} className="input-field" />
          </div>
        ))}
      </div>

      <div className='button-group'>
        <button className='accept-button'>Accept</button>
        <button className='deny-button'>Deny</button>
      </div>
    </div>
  );
};

export default FarmerPortal;

