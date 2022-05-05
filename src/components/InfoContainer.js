import React from "react";

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
            <img
              src={
                "https://media.istockphoto.com/vectors/tick-icon-vector-symbol-flat-cartoon-green-checkmark-isolated-on-vector-id944026802?b=1&k=20&m=944026802&s=612x612&w=0&h=uLVE2XnPIkwDq1DznBCe85qpcrG_kksm7LTVw1SDpQU="
              }
              style={{
                maxHeight: "50px",
                marginBottom: "10px",
              }}
            />
          </>
        )}
        <h3 className="info-subtitle">{subtitle}</h3>
        <p>{description}</p>
      </div>
    </>
  );
};

export default InfoContainer;
