import React, { useState } from "react";
import styles from "./Contact.module.css";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    emailAddress: "",
    contact: "",
    propertySize: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Message Sent Successfully!");
  };

  return (
    <div className={styles.pageWrapper}>
      <main className={styles.mainContent}>

    
        <div className={styles.rightside}>

        
          <section className={styles.heroSection}>

            <h1 className={styles.title}>Get in Touch</h1>

            <p className={styles.subtitle}>
              Have questions or need assistance? We are here to help!
              Feel free to reach out to us for any inquiries,
              project consultations, or design requirements.
            </p>

           
            <div className={styles.infoBox}>
              <div className={styles.headingRow}>
                <input type="checkbox" className={styles.checkbox} />

                <h2 className={styles.headings}>Address</h2>
              </div>

              <p className={styles.infoText}>
                4-1084, Kovai Main Road, Nathan Medical Complex,
                Vijayamangalam, Erode (Dist), Tamil Nadu - 638056
              </p>
            </div>

          
            <div className={styles.infoBox}>
              <div className={styles.headingRow}>
                <input type="checkbox" className={styles.checkbox} />

                <h2 className={styles.headings}>Email</h2>
              </div>

              <p className={styles.infoText}>
                msinterior96@gmail.com
              </p>
            </div>

            <div className={styles.infoBox}>
              <div className={styles.headingRow}>
                <input type="checkbox" className={styles.checkbox} />

                <h2 className={styles.headings}>Contact</h2>
              </div>

              <p className={styles.infoText}>
                +91 8056399787
              </p>
            </div>

          </section>

          <img
            className={styles.map}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN3ICG783os20N06p2EcE3hGUngl2CuE0qxw&s"
            alt="contact"
          />

        </div>

      
        <div className={styles.section2}>

          <img
            className={styles.photo}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN2dr6I8wvIKjalaJVe2BBGV8jlkrrSayRpg&s"
            alt="interior"
          />

          <section className={styles.formSection}>

            <h2>Send us a Message</h2>

            <form onSubmit={handleSubmit} className={styles.contactForm}>

              <div className={styles.formRow}>

                <div className={styles.formGroup}>
                  <label>Full Name</label>

                  <input
                    type="text"
                    name="fullName"
                    placeholder="Enter Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label>Email Address</label>

                  <input
                    type="email"
                    name="emailAddress"
                    placeholder="Enter Email"
                    value={formData.emailAddress}
                    onChange={handleChange}
                  />
                </div>

              </div>

              <div className={styles.formGroup}>
                <label>Contact Number</label>

                <input
                  type="text"
                  name="contact"
                  placeholder="Mobile Number"
                  value={formData.contact}
                  onChange={handleChange}
                />
              </div>

          
              <div className={styles.formGroup}>

                <label className={styles.propertyTitle}>
                  What is the size of the property?
                </label>

                <div className={styles.radioGroup}>
                  <label>
                    <input type="radio" name="propertySize" value="2 BHK" />
                    2 BHK
                  </label>

                  <label>
                    <input type="radio" name="propertySize" value="3 BHK" />
                    3 BHK
                  </label>

                  <label>
                    <input type="radio" name="propertySize" value="4 BHK" />
                    4 BHK
                  </label>

                  <label>
                    <input type="radio" name="propertySize" value="5+ BHK" />
                    5+ BHK / Villa / Penthouse
                  </label>

                  <label>
                    <input type="radio" name="propertySize" value="Other" />
                    Other
                  </label>
                </div>

              </div>

              <button type="submit" className={styles.submitBtn}>
                Send Message
              </button>

            </form>

          </section>

        </div>

      </main>
    </div>
  );
}