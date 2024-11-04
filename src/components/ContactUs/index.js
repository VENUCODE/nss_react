import React from "react";

const ContactUs = () => {
  return (
    <div className="contact-container bg-teritiary-subtle d-flex justify-content-center align-items-center">
      <div className="container py-5">
        <div className="row g-5 justify-content-center">
          <div className="col-md-10 col-xl-8">
            <div className="row row-cols-1 row-cols-md-2 g-4">
              <div>
                <div className="bg-light hvr-shutter-out-horizontal d-block p-3 rounded shadow-sm">
                  <div className="d-flex align-items-center mb-2">
                    <i className="fa-solid fa-envelope h3 pe-2"></i>
                    <span className="h5">Email</span>
                  </div>
                  <span>example@domain.com</span>
                </div>
              </div>
              <div>
                <div className="bg-light hvr-shutter-out-horizontal d-block p-3 rounded shadow-sm">
                  <div className="d-flex align-items-center mb-2">
                    <i className="fa-solid fa-phone h3 pe-2"></i>
                    <span className="h5">Phone</span>
                  </div>
                  <span>+0123456789, +9876543210</span>
                </div>
              </div>
            </div>
            <div className=" mt-4">
              <div className="bg-light hvr-shutter-out-horizontal d-block p-3 rounded shadow-sm">
                <div className="d-flex align-items-center mb-2">
                  <i className="fa-solid fa-location-pin h3 pe-2"></i>
                  <span className="h5">Office location</span>
                </div>
                <span>
                  Rajiv Gandhi University of Knowledge Technologies, ongole
                  Campus,Andhra Pradesh
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
