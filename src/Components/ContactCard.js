import React from "react";
import user from "../image/user.png";

const ContactCard = (props) => {
  const { name, email } = props.contacts;
  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "15px" }}
      ></i>
    </div>
  );
};

export default ContactCard;
