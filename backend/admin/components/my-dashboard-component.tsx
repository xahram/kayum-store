import React from 'react';
import { Label, Link } from 'admin-bro';

const Dashboard: React.FC = (props) => {
  return (
    <div style={{ textAlign: 'center', marginTop: '1rem' }}>
      <h1 style={{ fontSize: '2rem' }}>Welcome On Admin Dashboard</h1>
      <h4 style={{ marginBottom: '20px' }}>Hope you are doing well and save</h4>

      <a
        style={{
          outline: 'none',
          padding: '12px 35px',
          cursor: 'pointer',
          background: '#ffb200',
          color: '#fff',
          border: 'none',
          borderRadius: '50px',
        }}
        href="/admin/resources/Product"
      >
        Got Products
      </a>
    </div>
  );
};

export default Dashboard;
