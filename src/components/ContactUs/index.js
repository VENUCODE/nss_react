import React from "react";
import Map from "./Map";
import "./contact.css";
import { IoMdLocate } from "react-icons/io";

const ContactUs = () => {
  return (
    <div className="contact-container d-flex justify-content-center align-items-center ff-p">
      <div className="container py-5">
        <div className="row g-5 justify-content-center">
          <div className="col-lg-8 col-md-10 col-12">
            <div className="bg-transparent p-4 rounded shadow-sm">
              <div className="section bg-light p-2 rounded-2">
                <div className="d-flex align-items-center mb-3">
                  <i className="fa-solid fa-envelope h3 pe-3 text-primary"></i>
                  <div>
                    <h5 className="mb-1">Programme Coordinator Email</h5>
                    <p className="mb-0">nss@rguktong.ac.in</p>
                  </div>
                </div>
              </div>
              <div className="section mt-4 bg-light p-2 rounded-2">
                <div className="d-flex align-items-center mb-3">
                  <i className="fa-solid fa-location-pin h3 pe-3 text-primary"></i>
                  <div>
                    <h5 className="mb-1">
                      <IoMdLocate /> Office Location
                    </h5>
                    <p className="mb-0">
                      E-BLOCK ground floor, Rajiv Gandhi University of Knowledge
                      Technologies, Ongole Campus, Andhra Pradesh, 523225
                    </p>
                  </div>
                </div>
              </div>
              <div className="section mt-4">
                <div className="card border-0 shadow-sm">
                  <div className="card-header bg-red-light text-white">
                    <div className="d-flex align-items-center">
                      <i className="fa-solid fa-phone h3 pe-2"></i>
                      <span className="h5">Program Officer Emails</span>
                    </div>
                  </div>
                  <div className="card-body">
                    <dl className="row">
                      {[
                        {
                          name: "Unit 1 PO",
                          email: "nssunit1po@rguktong.ac.in",
                        },
                        {
                          name: "Unit 2 PO",
                          email: "nssunit2po@rguktong.ac.in",
                        },
                        {
                          name: "Unit 3 PO",
                          email: "nssunit3po@rguktong.ac.in",
                        },
                        {
                          name: "Unit 4 PO",
                          email: "nssunit4po@rguktong.ac.in",
                        },
                        {
                          name: "Unit 5 PO",
                          email: "nssunit5po@rguktong.ac.in",
                        },
                        {
                          name: "Unit 6 PO",
                          email: "nssunit6po@rguktong.ac.in",
                        },
                      ].map((unit, index) => (
                        <div key={index} className="mt-1 d-flex">
                          <dt className="col-sm-4 text-blueb  p-2 ff-p justify-content-center">
                            {unit.name} email
                          </dt>
                          <dd className="col-sm-8 p-2 align-items-center bg-info-subtle">
                            <a href={`mailto:${unit.email}`}>{unit.email}</a>
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-10 col-12">
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
