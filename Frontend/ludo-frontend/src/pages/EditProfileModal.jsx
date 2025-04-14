import React, { useState } from "react";
import "./CSS/EditProfileModal.css";

const EditProfileModal = ({ onClose, onSave }) => {
  const [nickname, setNickname] = useState("Kuldeep");
  const [avatar, setAvatar] = useState("https://th.bing.com/th/id/OIP.2p1J27DPpDX4uJSCuU79OAHaEK?rs=1&pid=ImgDetMain");

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setAvatar(imageUrl);
    }
  };

  const handleSave = () => {
    onSave({ nickname, avatar });
    onClose();
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-container">
        <h4 className="text-warning fw-bold mb-3">🎨 Edit Your Profile</h4>

        <div className="text-center mb-3">
          <img
            src={avatar}
            alt="Avatar Preview"
            className="rounded-circle"
            style={{ width: "100px", height: "100px", objectFit: "cover", border: "3px solid #ffcc00" }}
          />
        </div>

        <label className="form-label text-white">Upload Avatar</label>
        <input type="file" className="form-control mb-3" accept="image/*" onChange={handleAvatarChange} />

        <label className="form-label text-white">Nickname</label>
        <input
          type="text"
          className="form-control mb-4"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />

        <div className="d-flex justify-content-end gap-2">
          <button className="btn btn-secondary" onClick={onClose}>Cancel</button>
          <button className="btn btn-success" onClick={handleSave}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;
