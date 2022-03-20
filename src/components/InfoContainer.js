import React from "react";
import { IconContext } from "react-icons";
import { GoPin } from "react-icons/go";

const InfoContainer = ({ imageUrl, subtitle, description, animate }) => {
  return (
    <>
      <div className={`mb-5 info-container ${animate}`}>
        {imageUrl ? (
          <img
            src={imageUrl}
            style={{
              maxHeight: "50px",
              marginBottom: "10px",
            }}
          />
        ) : (
          <>
            <IconContext.Provider value={{ color: "#352971", size: "2rem" }}>
              <GoPin />
            </IconContext.Provider>
          </>
        )}
        <h3 className="info-subtitle">{subtitle}</h3>
        <p>{description}</p>
      </div>
    </>
  );
};

export default InfoContainer;
