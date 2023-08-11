import React from "react";
import "./Social.css";

const Social = () => {
  return (
    <section id="contact" class="footer_wrapper mt-3 mt-md-0">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-4 col-md-6 text-center text-md-start">
            <div class="footer-logo mb-3 mb-md-0"></div>
          </div>
          <div class="col-lg-4 col-md-6">
            <ul class="list-unstyled d-flex justify-content-center justify-content-md-end justify-content-lg-center social-icon mb-3 mb-md-0">
              <li>
                <a href="https://instagram.com/its_hubli_12?igshid=ZDdkNTZiNTM=">
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/profile.php?id=100012995282072">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/himanshu-singh-832321232/">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Social;
