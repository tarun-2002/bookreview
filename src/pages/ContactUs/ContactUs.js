import React, { useState } from "react";
import { motion } from "framer-motion";
import "./ContactUs.css"


const ContactUs = () => {
    const [name,setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

  return (
    <section className="contact">
      <motion.form 
        initial={{
          x: "-100vw",
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{ delay: 0.4 }}
      >
        <h2>Contact Us</h2>
        <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Name" />
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />

        <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message..." cols="30" rows="10"></textarea>

        <button type="submit">Send</button>
      </motion.form>

      <motion.div
        className="formBorder"
        initial={{
          x: "100vw",
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{ delay: 0.4 }}
      >
        <motion.div
          initial={{
            y: "-100vh",
            x: "50%",
            opacity: 0,
          }}
          animate={{
            x: "50%",
            y: "-50%",
            opacity: 1,
          }}
          transition={{
            delay: 1.3,
          }}
        >
          <video src="./images/contact.mp4" loop autoPlay muted></video>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactUs;