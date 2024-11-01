import React from "react";

const ContactUs = () => {
  return (
    <div className="contact-container bg-teritiary-subtle d-flex justify-content-center align-items-center">
      <div className="container py-5">
        <div className="row g-5 justify-content-center">
          <div className="col-md-10 col-xl-8">
            <div className="row row-cols-1 row-cols-md-2 g-4">
              <div data-aos="fade-up" data-aos-delay="200">
                <div className="bg-light hvr-shutter-out-horizontal d-block p-3 rounded shadow-sm">
                  <div className="d-flex align-items-center mb-2">
                    <i className="fa-solid fa-envelope h3 pe-2"></i>
                    <span className="h5">Email</span>
                  </div>
                  <span>example@domain.com</span>
                </div>
              </div>
              <div data-aos="fade-up" data-aos-delay="400">
                <div className="bg-light hvr-shutter-out-horizontal d-block p-3 rounded shadow-sm">
                  <div className="d-flex align-items-center mb-2">
                    <i className="fa-solid fa-phone h3 pe-2"></i>
                    <span className="h5">Phone</span>
                  </div>
                  <span>+0123456789, +9876543210</span>
                </div>
              </div>
            </div>
            <div
              className="aos-item mt-4"
              data-aos="fade-up"
              data-aos-delay="600"
            >
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
            <div
              className="aos-item mt-4"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <div className="w-100 aos-item__inner rounded overflow-hidden shadow-sm">
                <iframe
                  className="hvr-shadow rounded"
                  width="100%"
                  height="345"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  title="Location Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
