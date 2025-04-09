import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const Dashboard = () => {
  return (
    <div className="container py-4 bg-light min-vh-100">
      <h2 className="text-center mb-4 fw-bold">🎮 LudoCash Dashboard</h2>

      {/* Wallet Section */}
      <div className="row mb-4">
        <div className="col-md-4 mb-3">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Wallet Balance</h5>
              <p className="card-text fs-4">₹500.00</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3 d-grid">
          <button className="btn btn-success">Deposit</button>
        </div>
        <div className="col-md-4 mb-3 d-grid">
          <button className="btn btn-danger">Withdraw</button>
        </div>
      </div>

      {/* Play Game Section */}
      <div className="row mb-4">
        <div className="col-md-6 mb-3">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title mb-3">Play Ludo</h5>
              <div className="d-grid gap-2">
                <button className="btn btn-primary">2 Player</button>
                <button className="btn btn-primary">4 Player</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title mb-3">Create / Join Room</h5>
              <div className="d-grid gap-2">
                <button className="btn btn-warning">Create Room</button>
                <input
                  type="text"
                  placeholder="Enter Room Code"
                  className="form-control"
                />
                <button className="btn btn-info text-white">Join Room</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bidding Section */}
      <h5 className="mb-3">Select a Bid</h5>
      <div className="d-flex flex-wrap gap-2 mb-5">
        {[10, 50, 100, 500].map((bid) => (
          <button key={bid} className="btn btn-outline-primary px-4">
            ₹{bid}
          </button>
        ))}
      </div>

      {/* Profile & Logout */}
      <div className="p-4 bg-white rounded shadow-sm">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h6 className="fw-semibold mb-1">👤 Username: Kuldeep</h6>
            <small className="text-muted">📱 Phone: +91 7011XXXXXX</small>
          </div>
          <div className="d-flex gap-2">
            <button className="btn btn-warning">Edit Profile</button>
            <button className="btn btn-dark text-white">Logout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
