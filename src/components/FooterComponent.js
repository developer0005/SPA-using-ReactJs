import React from "react";

function Footer(props) {
  return (
    <footer>
      <div className="footer-area" style={{ backgroundColor: "#076F62" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 ">
              <div className="footer-content">
                <div className="footer-head">
                  <h4 style={{ color: "#FFCD43" }}>Follow Us</h4>

                  <p style={{ color: "beige" }}></p>
                  <div className="footer-icons">
                    <ul style={{ listStyleType: "none" }}>
                      <li>
                        <a href="https://web.facebook.com">
                          <i
                            className="fa fa-facebook"
                            style={{ color: "beige" }}
                          ></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com">
                          <i
                            className="fa fa-twitter"
                            style={{ color: "beige" }}
                          ></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com">
                          <i
                            className="fa fa-linkedin"
                            style={{ color: "beige" }}
                          ></i>
                        </a>
                      </li>

                      <li>
                        <a href="https://www.instagram.com">
                          <i
                            className="fa fa-instagram"
                            style={{ color: "beige" }}
                          ></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="footer-content">
                <div className="footer-head">
                  <h4 style={{ color: "#FFCD43" }}>Address</h4>

                  <div className="footer-contacts">
                    <p style={{ color: "beige" }}>
                      <span style={{ color: "#FFCD43" }}>Tel:</span> 0 718 400
                      094
                    </p>
                    <p style={{ color: "beige" }}>
                      <span style={{ color: "#FFCD43" }}>Email:</span>{" "}
                      thespiceresto@gmail.com
                    </p>
                    <p style={{ color: "beige" }}>
                      <span style={{ color: "#FFCD43" }}>Location:</span>{" "}
                      Kigali, Rwanda
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
