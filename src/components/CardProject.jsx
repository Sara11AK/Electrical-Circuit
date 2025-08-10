import React from 'react';
import './cardProject.css';

const CardProject = ({ Title, Description, id }) => {
  const handleDetails = (e) => {
    if (!id) {
      console.log("ID kosong");
      e.preventDefault();
      alert("Project details are not available");
    }
  };

  return (
    <div className="card-project group">
      <div className="card-bg">
        <div className="overlay"></div>
        <div className="card-content">

          <div className="text-content">
            <div className="text-left">
              <h3 className="card-title">{Title}</h3>
              <p className="card-description">{Description}</p>
            </div>

          
          </div>
        </div>
        <div className="card-border"></div>
      </div>
    </div>
  );
};

export default CardProject;
