
import './CSS/Dashboard.css'
import EditProfileModal from './EditProfileModal';
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';


const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const [profile, setProfile] = useState({ nickname: "Kuldeep", avatar: "" });

  return (
    <div className="dashboard-wrapper min-vh-100 ">

     

{/* Wallet Section  */}
<div className="w-100 mb-4 px-4">
<div className="wallet-section w-100 mb-4">
    <div className="card-body d-flex flex-column justify-content-center py-4">
      <h5 className="card-title fw-bold">Wallet Balance</h5>
      <p className="card-text fs-4 mb-0">₹500.00</p>
    </div>
  </div>

{/* Deposit & Withdraw - New Row Below */}
<div className="row mb-4">
  <div className="col-md-6 mb-3">
    <button className="btn btn-green  ">Deposit</button>
  </div>
  <div className="col-md-6 mb-3">
    <button className="btn btn-red  ">Withdraw</button>
  </div>
</div>


      {/* Play Game Section */}
      <div className="row mb-4">
  <div className=" col-md-6 mb-3">
    <div className=" play-ludo  h-100" >
      <div className="card-body d-flex flex-column justify-content-center">
        <h5 className="card-title fw-bold mb-3">Play Ludo</h5>
        <div className="d-flex gap-3">
          <button className="btn-player btn-primary">2 Player</button>
          <button className="btn-player btn-primary">4 Player</button>
        </div>
      </div>
    </div>
  </div>

  <div className="col-md-6 mb-3">
    <div className="create-room  h-100">
      <div className="card-body d-flex flex-column justify-content-center">
        <h5 className="card-title fw-bold mb-3">Create / Join Room</h5>
        <div className="d-grid gap-2">
          <button className="btn btn-warning">Create Room</button>
          <input
            type="text"
            placeholder="Enter Room Code"
            className="form-control"
          />
          <button className="btn btn-info text-white mb-4">Join Room</button>
        </div>
      </div>
    </div>
  </div>
</div>


      {/* Bidding Section */}
      <h5 className=" bid mb-3 ">Select a Bid</h5>
      <div className="d-flex flex-wrap gap-2 mb-5">
        {[10, 50, 100, 500].map((bid) => (
          <button key={bid} className="bid-btn  px-4">
            ₹{bid}
          </button>
        ))}
      </div>
   

      

      {showModal && (
        <EditProfileModal
          onClose={() => setShowModal(false)}
          onSave={(data) => setProfile(data)}
        />
      )}


      {/* Profile & Logout */}
      {/* <div className="account-card p-4 rounded-4 shadow-lg">
  <div className="d-flex justify-content-between align-items-center flex-wrap">
    <div>
      <h5 className="acc-text fw-bold mb-1 text-white">👤 Kuldeep</h5>
      <p className="acc-text text-muted mb-0">📱 +91 7011XXXXXX</p>
    </div>
    <div className="d-flex gap-3 mt-3 mt-md-0">
      <button className="btn edit-btn">Edit Profile</button>
      <button className="btn logout-btn">Logout</button>
    </div>
  </div>
</div> */}


<div className="account-card p-4 bg-white rounded shadow-sm d-flex flex-column flex-md-row justify-content-between align-items-center">
  <div className="d-flex flex-column flex-md-row align-items-center gap-3">
    <img
      src={profile.avatar || "https://th.bing.com/th/id/OIP.2p1J27DPpDX4uJSCuU79OAHaEK?rs=1&pid=ImgDetMain"}
      alt="Avatar"
      className="rounded-circle"
      style={{ width: "60px", height: "60px", objectFit: "cover" }}
    />
    <div>
    <div className="username">
  <div className="user-info d-flex align-items-center  gap-2 mb-1">
    <FontAwesomeIcon icon={faCircleUser} className="profile-icon" />
    <h6 className="acc-text ">{profile.nickname}</h6>
  </div>
  <div className="user-info d-flex align-items-center justify-content-center gap-2">
    <FontAwesomeIcon icon={faPhone} className="phone-icon" />
    <small className="acc-text">Phone: +91 7011XXXXXX</small>
  </div>
</div>

    </div>
  </div>

  <div className="d-flex gap-3 mt-3 mt-md-0">
    <button className="btn edit-btn" onClick={() => setShowModal(true)}>Edit Profile</button>
    <button className="btn logout-btn">Logout</button>
  </div>
</div>
</div>

    </div>
  );
};

export default Dashboard;
