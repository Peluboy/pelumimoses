import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/contact.css";
import emailjs from "emailjs-com";

const ContactSection = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const templateParams = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      budget: formData.get("budget"),
      message: formData.get("message"),
    };

    emailjs
      .send(
        "service_ryd5p9u",
        "template_e0b1l2p",
        templateParams,
        "Aqe18N5CTkPIEP2Ya"
      )
      .then((response) => {
        console.log("Email sent successfully!", response.text);
        toast.success("Message sent successfully!"); // Show success toast
        event.target.reset(); // Reset the form fields
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        toast.error("Error sending email"); // Show error toast
      });
  };

  return (
    <section className="contact__area scroll-to-page" id="contact">
      <div className="container">
        <div className="contact__content content__width">
          <div className="section__header">
            <h4 className="subtitle scroll-animation">
              <i className="las la-comment"></i>
              contact
            </h4>

            <h1 className="scroll-animation">
              Let's work <span>Together</span>
            </h1>
            {/* <h3 className="scroll-animation">pelumimoses04@gmail.com</h3> */}
            <ToastContainer position="bottom-right" />
            <form
              className="contact__form scroll-animation"
              onSubmit={handleSubmit}
            >
              <div className="contact__list grid">
                <div className="input__group">
                  <label htmlFor="full-name">
                    full name <sup>*</sup>
                  </label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    id="name"
                    name="name"
                    required
                  />
                </div>
                <div className="input__group">
                  <label htmlFor="email">
                    email <sup>*</sup>
                  </label>
                  <input
                    type="email"
                    placeholder="Your email"
                    id="email"
                    name="email"
                    required
                  />
                </div>
                <div className="input__group">
                  <label htmlFor="phone">
                    phone <span>(optional)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your phone number"
                    id="phone"
                    name="phone"
                  />
                </div>
                <div className="input__group">
                  <label htmlFor="budget">
                    budget <span>(optional)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Budget"
                    id="budget"
                    name="budget"
                  />
                </div>
                <div className="input__group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    placeholder="Write your message here ..."
                    id="message"
                    name="message"
                    required
                  ></textarea>
                </div>

                <div className="input__group submit__btn-wrap">
                  <button type="submit" className="theme__btn">
                    send message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
