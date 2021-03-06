import "./ContactUs.css";

function ContactUs() {
  return (
    <div className="contactUs__container">
      <div className="contactUs">
        <h2 className="contactUs__title">Contact Us</h2>
        <form
          className="contactForm"
          action="https://formsubmit.co/72b011a7b2fab9a3ae2782f89237fdf3"
          method="post"
        >
          <div className="emailInput">
            <input
              className="contactUs__email"
              type="email"
              name="Email"
              placeholder="Email Address"
              required
            />
            <input type="hidden" name="_next" value="https://barbets.info" />
          </div>
          <div className="messageInput">
            <textarea
              name="Message"
              className="contactUs__message"
              type="text"
              placeholder="Message..."
              required
            />
          </div>
          <div className="btn">
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
      <div className="contactUs__socialIcons">
        <a
          href="https://www.instagram.com/barbets_app/"
          target="_blank"
          alt="BarBets Instagram"
        >
          <i class="fab fa-instagram"></i>
        </a>
        <a href="https://www.twitter.com" target="_blank" alt="BarBets Twitter">
          <i class="fab fa-twitter"></i>
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          alt="BarBets Facebook"
        >
          <i class="fab fa-facebook-f"></i>
        </a>
      </div>
    </div>
  );
}

export default ContactUs;
