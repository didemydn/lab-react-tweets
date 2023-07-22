import React from "react";

const ProfileImage = ({ src, alt }) => {
  return <img src={src} className="profile" alt={alt} />;
};

export default ProfileImage;