import React from "react";

const InfoContainer = ({ imageUrl, subtitle, description, animate }) => {
  return (
    <>
      <div className={`mb-5 info-container ${animate}`}>
        {imageUrl && (
          <img
            src={imageUrl}
            style={{ maxHeight: "50px", marginBottom: "10px" }}
          ></img>
        )}
        <h3 className="info-subtitle">{subtitle}</h3>
        <p>{description}</p>
      </div>
    </>
  );
};

export default InfoContainer;
