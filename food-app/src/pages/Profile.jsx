import React from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();

  return (
    <section className="screen active">
      <div className="page-header">
        <h2>Profile</h2>
      </div>

      <div className="profile-top">
        <div className="profile-avatar">
          👩
        </div>

        <h2>Ayesha Khan</h2>

        <p>
          ayesha.khan@gmail.com
        </p>

        <button className="edit-btn">
          ✎ Edit Profile
        </button>
      </div>

      <div className="profile-stats">
        <div className="stat">
          <strong>12</strong>
          <span>Orders</span>
        </div>

        <div className="stat">
          <strong>5</strong>
          <span>Favorites</span>
        </div>

        <div className="stat">
          <strong>2</strong>
          <span>Reviews</span>
        </div>
      </div>

      <div className="profile-menu">
        <ProfileItem
          icon="⌖"
          title="My Addresses"
        />

        <ProfileItem
          icon="▣"
          title="Payment Methods"
        />

        <ProfileItem
          icon="♧"
          title="Notifications"
        />

        <ProfileItem
          icon="?"
          title="Help & Support"
        />

        <ProfileItem
          icon="⚙"
          title="Settings"
        />
      </div>

      <button
        className="btn logout"
        onClick={() =>
          navigate("/")
        }
      >
        Log Out
      </button>
    </section>
  );
}

function ProfileItem({
  icon,
  title,
}) {
  return (
    <button className="profile-menu-item">
      <span>{icon}</span>

      {title}

      <span>›</span>
    </button>
  );
}
