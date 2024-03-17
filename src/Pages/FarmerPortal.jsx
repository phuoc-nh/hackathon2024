import React from 'react';
import './CSS/FarmerPortal.css';
import { gql, useQuery } from '@apollo/client';


const GET_JOB = gql`
  query Job($id: MongoID!) {
    job(_id: $id) {
      _id
      jobDate
      supplier {
        company
      }
      supplierAddress {
        address
      }
      customer {
        company
      }
      customerAddress {
        address
      }
    }
  }
`;



const FarmerPortal = () => {
  const jobId = localStorage.getItem('jobId');
  console.log('jobId', jobId);
  const { loading, error, data } = useQuery(GET_JOB, {
    variables: { id: jobId }
  });

  console.log({ loading, error, data });

  const formsData = [
    { id: 'billTo', label: 'Bill to', value: data?.job?.customer.company },
    { id: 'pickupFrom', label: 'Pick up from', value: data?.job?.supplier.company},
    { id: 'pickLocation', label: 'Pick location', value: data?.job?.supplierAddress.address},
    { id: 'deliverTo', label: 'Deliver to', value: data?.job?.customer.company },
    { id: 'deliverLocation', label: 'Deliver location', value: data?.job?.customerAddress.address }
  ]

  return (
    <div className='farmer-portal'>
      <h1 className='portal-title'>Farmer Portal</h1>

      <div className='section job-detail'>
        <h2>Order Details</h2>
        <input type="date" className="input-field"/>
      </div>

      <div className='section job-route'>
        <h2>Order Route</h2>
        {formsData.map(({ id, label, value }) => (
          <div key={id} className="form-group">
            <label htmlFor={id}>{label}:</label>
            <input id={id} type="text" className="input-field" value={value} />
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

