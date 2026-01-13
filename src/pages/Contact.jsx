import "../styles/Contact.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.sendForm(
      "service_id",      // ID الخدمة من EmailJS
      "template_id",     // ID القالب
      e.target,
      "user_id"          // User ID من EmailJS
    ).then(
      (result) => {
        alert("Message sent successfully!");
      },
      (error) => {
        alert("Failed to send message, try again.");
      }
    );
  };



  return(
    <>
      <Navbar />

      <div className="contactClass">

        <h2 className="contactTitle">Contact Me</h2>

        <p className="contactSubtitle">
          Feel free to reach out for collaborations or just a friendly hello 👋
        </p>

        <div className="contactContainer">
          <form action="https://formspree.io/f/xqaoybnj" method="POST" onSubmit={ sendEmail } className="contactForm">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea  name="message" placeholder="Your Message" rows="5" required></textarea>
            <button type="submit" className="btn">Send Message</button>
          </form>
        </div>

      </div>

      <Footer />
    </>
  );
}
export default Contact;