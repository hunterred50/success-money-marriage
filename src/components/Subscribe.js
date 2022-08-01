import React, { useEffect } from 'react'
import Modal from 'react-modal'
import * as Scroll from 'react-scroll';
import {Link} from 'react-scroll';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    zIndex                : '100 !important',
    position              : 'fixed',
    padding               : '3em',
    width                 : '20em'
  }
};

const Subscribe = () => {
  var scroll    = Scroll.animateScroll;
  useEffect(() => {
    scroll.scrollTo(8000);
  })

  const [modalIsOpen,setIsOpen] = React.useState(true);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal(){
    setIsOpen(false);
    scroll.scrollToTop();
  }
  return (
    <div>
      <Link activeClass="active" spy={true} smooth={true} duration={500} to="about">
        <button style={{margin: "-20px 10px 0 10px", textDecoration: "none", backgroundColor: "white", color: "black", cursor: "pointer", padding: "5px 15px", borderRadius: "20px", border: "0", fontFamily: "Oswald, sans-serif", fontWeight: "400"}} onClick={openModal}>Subscribe</button>
      </Link>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Subscribe Modal"
      >

        <img alt="header" style={{width:"100%"}} src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2150431699/settings_images/xueq2IppQBeu2QZawoaJ_should_you_be.jpg" />
        <form accept-charset="UTF-8" action="https://bl132.infusionsoft.com/app/form/process/f2f51951e9dd1544badcfd15533558f0" class="infusion-form" id="inf_form_f2f51951e9dd1544badcfd15533558f0" method="POST">
          <div style={{fontFamily: "Oswald, sans-serif", fontWeight: "400", marginBottom: ".6em"}}>Fill out to be notified of new episodes!<br/><br/><i>+ Receive the "Should You Be In Business with Your Spouse?" Questionaire as a signup bonus!</i></div>
          <input name="inf_form_xid" type="hidden" value="f2f51951e9dd1544badcfd15533558f0" />
          <input name="inf_form_name" type="hidden" value="Web Form submitted" />
          <input name="infusionsoft_version" type="hidden" value="1.70.0.348692" />
          <div class="infusion-field">
              <label for="inf_field_FirstName">First Name *</label><br/>
              <input id="inf_field_FirstName" name="inf_field_FirstName" placeholder="First Name *" type="text" />
          </div>
          <div class="infusion-field" style={{marginTop: "5px"}}>
              <label for="inf_field_LastName">Last Name *</label><br/>
              <input id="inf_field_LastName" name="inf_field_LastName" placeholder="Last Name *" type="text" />
          </div>
          <div class="infusion-field" style={{marginTop: "5px"}}>
              <label for="inf_field_Email">Email *</label><br/>
              <input id="inf_field_Email" name="inf_field_Email" placeholder="Email *" type="text" />
          </div>
          <div>
              <div>&nbsp;</div>
          </div>
          <div class="infusion-submit">
              <button class="infusion-recaptcha" id="recaptcha_f2f51951e9dd1544badcfd15533558f0" type="submit" style={{margin: "0", textDecoration: "none", backgroundColor: "black", color: "white", cursor: "pointer", padding: "5px 35px", borderRadius: "20px", border: "0", fontFamily: "Oswald, sans-serif", fontWeight: "400"}}>
                Submit
              </button>
              <button onClick={closeModal} style={{margin: "0 0 0 10px", textDecoration: "none", backgroundColor: "black", color: "white", cursor: "pointer", padding: "5px 35px", borderRadius: "20px", border: "0", fontFamily: "Oswald, sans-serif", fontWeight: "400"}}>
                Close x
              </button>
          </div>
        </form>
        <script type="text/javascript" src="https://bl132.infusionsoft.app/app/webTracking/getTrackingCode"></script>
        <script type="text/javascript" src="https://bl132.infusionsoft.com/resources/external/recaptcha/production/recaptcha.js?b=1.70.0.348692"></script>
        <script src="https://www.google.com/recaptcha/api.js?onload=onloadInfusionRecaptchaCallback&render=explicit" async="async" defer="defer"></script>
        <script type="text/javascript" src="https://bl132.infusionsoft.com/app/timezone/timezoneInputJs?xid=f2f51951e9dd1544badcfd15533558f0"></script>
        <script type="text/javascript" src="https://bl132.infusionsoft.com/js/jquery/jquery-3.3.1.js"></script>
        <script type="text/javascript" src="https://bl132.infusionsoft.app/app/webform/overwriteRefererJs"></script>
      </Modal>
    </div>
  )
}
export default Subscribe;