import { UserListType } from "../../App";
import "./UserProfile.css";

interface UserProfileProptypes {
  selectedUser: UserListType | null;
}

function UserProfile({ selectedUser }: UserProfileProptypes) {
  return (
    <div className="user-profile">
      <div className="user-top">
        <div className="user-img">
          <img
            className="profile-photo"
            src={selectedUser?.image}
            alt={"user"}
          />
        </div>
        <h4 className="name">
          {selectedUser?.name}
          {selectedUser?.status === "Active" && <span className="dot"></span>}
        </h4>
        <p className="email">{selectedUser?.email}</p>
        <p className="plan">Your Plan: Standard</p>
        <button className="active-user-btn">Active User</button>
      </div>
      <div className="user-bottom">
        <h5 className="plan-uses">Plan Uses</h5>
        <div className="click-wrap">
          <div className="click-left">
            <h3 className="count">2,450</h3>
            <p className="title">clicks reviewed</p>
          </div>
          <div className="click-right">
            <h3 className="count">5000</h3>
            <p className="title">Monthly clicks</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default UserProfile;
