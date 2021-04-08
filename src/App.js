import './App.css';
import {Link, Element} from 'react-scroll';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import Media from './components/Media';

var heroImg = {
  backgroundImage: `url("https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/3210473/settings_images/HdiTsSFTmeVgfIrFWM8A_Screen_Shot_2021-03-03_at_12.02.43_PM.png")`,
  height: "900px",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center top",
  backgroundSize: "cover",
  position: "relative",
  backgroundAttachment: "fixed",
  display: "flex",
  zIndex: "1"
}

var heroDiv = {
  textAlign: "center",
  position: "relative",
  marginTop: "3em",
  top: "50px",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: "white",
  opacity: "1",
  fontFamily: "Oswald, sans-serif",
  transition: ".5s opacity ease"
}

var opaque = {
  backgroundColor: "rgba(35, 38, 50, 0.5)",
  height: "100%",
  width: "100%"
}

var items = {
  margin: "0 10px",
  textDecoration: "none",
  color: "white",
  cursor: "pointer"
}

function App() {
  return (
    <div className="App" style={{scrollBehavior: "smooth"}}>
      <Link activeClass="active" spy={true} smooth={true} duration={500} style={{color: "white", cursor: "pointer", padding: "10px", borderRadius: "10px", backgroundColor: "rgba(0,0,0,0.5)", bottom: "20px", right: "20px", position: "fixed"}} to="home">
        ↑ Back to Top
      </Link>
      <div style={heroImg}>
        <div style={opaque}>
          <Element name="home" style={heroDiv}>
            <h1 style={{margin: "-40px 0 10px 0"}}>Sex, Money and Marriage</h1>
            <div style={{width: "100%", height: "100%", display: "flex", justifyContent: "center"}}>
              <Link activeClass="active" spy={true} smooth={true} duration={500} style={items} to="home">Home</Link>
              <Link activeClass="active" spy={true} smooth={true} duration={500} style={items} to="episodes">Episodes</Link>
              <Link activeClass="active" spy={true} smooth={true} duration={500} style={items} to="about">About</Link>
              <Link activeClass="active" spy={true} smooth={true} duration={500} style={items} to="media">Media</Link>
              <Link activeClass="active" spy={true} smooth={true} duration={500} style={items} to="photos">Photos</Link>
              <button style={{margin: "0 10px", textDecoration: "none", backgroundColor: "white", color: "black", cursor: "pointer", padding: "0px 15px", borderRadius: "20px", border: "0", fontFamily: "Oswald, sans-serif", fontWeight: "400"}}>Subscribe</button>
            </div>
            {/* <div style={{display: "flex", alignContent: "flex-end", justifyContent: "center", alignSelf: "flex-end"}}>
            <div style={{width: "50em", height: "1em", backgroundColor: "#ffffff"}}>h</div></div> */}
          </Element>
        </div>
      </div>
      <div style={{scrollBehavior: "smooth"}}>
      <Element name="episodes" style={{backgroundColor: "rgba(35, 38, 50)", marginTop: "-6em", display: "flex", justifyContent: "center", height: "33em"}}>
        <div style={{backgroundColor: "#ffffff", paddingTop: "10px", width: "50em", height: "30em", color: "black", zIndex: "2"}}>
          <h1 style={{fontFamily: "Oswald, sans-serif", fontWeight: "400"}}>Listen to the show:</h1>
          <AudioPlayer autoPlay src="http://example.com/audio.mp3" onPlay={e => console.log("onPlay")}/>
        </div>
      </Element>
      </div>
      <Element name="about" style={{backgroundColor: "rgba(35, 38, 50)", color: "white", paddingBottom: "10em"}}>
          <h1 style={{margin: "0px", fontFamily: "Oswald, sans-serif", fontWeight: "400", paddingBottom: ".2em"}}>Sex, Money and Marriage</h1>
            <p style={{paddingBottom: "5em", width: "60%", marginLeft: "20%"}}>
              This weekly podcast explores key issues involving sex, money and marriage in
              modern day America. The shows objective is to explore multiple points of view on
              subjects that matter. After almost four decades of living together, being married,
              traveling the world, building businesses and negotiating substantial sex drives,
              there are few obstacles this couple hasn’t encountered. After a lifetime of mistakes,
              missteps and successes, the Siebold’s offer a unique perspective.
            </p>
          <h1 style={{margin: "0px", fontFamily: "Oswald, sans-serif", fontWeight: "400", paddingBottom: ".2em"}}>About Us</h1>
          <div style={{display: "flex", justifyContent: "center", alignItems: "flex-start", flexDirection: "column"}}>
            <div style={{width: "100%", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
              <div>
                <img alt="dawn" style={{width: "53.5%", borderRadius: "15px", borderWidth: "5px", borderColor: "white", borderStyle: "solid"}} src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/3210473/settings_images/hNazMd00SGuTTNUcuFdy_DawnSQblackwhite.jpg"/>
                <h2 style={{fontFamily: "Oswald, sans-serif", fontWeight: "500", marginTop: "10px"}}>Dawn Andrews</h2>
                  {/* Dawn is a former award-winning real estate professional specializing in high end properties based in Palm Beach, Florida. In 1999, she was tapped to become President of Siebold Success Network, a start-up founded by her husband Steve and his business partner.<br/><br/>Under Dawn’s leadership over the past 20 years, the company has grown into a multimillion-dollar enterprise that operates in 10 countries around the world. In 2009, she was invited into the National Speakers Association’s Million Dollar Speakers Group and currently serves as the President of the Georgia Speakers Bureau.  In September 2018, Dawn and Steve joined WealthWave® and, within a month, qualified to become Senior Marketing Directors. */}
              </div>
              <div>
                <img alt="steve" style={{width: "53%", borderRadius: "15px", borderWidth: "5px", borderColor: "white", borderStyle: "solid"}} src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/3210473/settings_images/z2GWGgPaR2u8gnLkWRvS_Steve_Siebold_HS.jpeg"/>
                <h2 style={{fontFamily: "Oswald, sans-serif", fontWeight: "500", marginTop: "10px"}}>Steve Siebold</h2>
              </div>
            </div>
            <div style={{display: "flex", justifyContent: "center"}}>
              <p style={{width: "80%", textAlign: "left"}}>
                Steve and Dawn Siebold were married in Freeport, Bahamas on April 6, 1986.
                As a married couple, they’ve struggled, succeeded, failed, fought, made up and
                reinvented their relationship over and over again.<br/><br/>

                Together, they’ve built four multimillion companies from the ground up with offices
                in 40 states and 10 countries around the world. More information regarding the
                couple’s business ventures can be found at <a style={{color: "gray"}} href="https://sieboldnetwork.com/">www.SieboldNetwork.com</a><br/><br/>

                In 2012, Steve wrote a book called <i><u>Sex, Politics and Religion: How Delusional
                Thinking is Destroying America</u></i>, which was panned by critics for its unapologetic
                approach to sensitive subjects such as open marriage, pornography, prostitution,
                war on drugs, assisted suicide, childless by choice, legalized gambling, gun control,
                school prayer, catholic church sex scandal, unions, tantra, and others.
                The premise of Siebold’s philosophy is that no matter what your ideology, our
                society should possess the emotional maturity to engage in robust dialogue to
                elevate our collective consciousness and arrive at a greater level of mutual
                understanding. During a time of unprecedented political polarization, respectful
                discussion/dissention minus ad hominem attacks and demonization is the essence
                of this podcast.<br/><br/>

                Steve and Dawn are Certified Financial Educators and lead a team of financial
                educators and experts with offices in 40 states throughout the U.S. and 4 provinces
                in Canada. Their organization helps thousands of clients protect, invest and grow
                their wealth. Steve and Dawn deliver speeches and seminars on the foundational
                elements of personal finance. In 2020, Steve co-authored the #1 selling personal
                finance book of 2020, <u><i>How Money Works: Stop Being a Sucker</i></u>, with financial titan
                Tom Mathews. The book has sold over 500,000 copies.<br/><br/>

                Steve has been interviewed on over 300 TV shows as a guest expert, including <i>The
                Today Show, Good Morning America, CNN Headline News, Fox Business Network,
                MSNBC, and The Wall Street Journal Special Report</i>. His opinion-editorials on paying
                college athletes, labor unions, war on drugs, gun control, and others have been
                featured in USA Today, Yahoo Finance, U.S. News and World Report, Chicago Sun-
                Times, San Francisco Chronicle, New York Times, Boston Globe and dozens of
                others. He’s written 12 books that have been published in 7 languages and sold 1.6
                million copies. As a professional speaker, ranks among the top one percent of
                income earners worldwide.<br/><br/>

                The Siebold’s reside at Bona Allen Mansion, a 6-acre, 110 year old estate located in
                Buford, Georgia, approximately 50 miles northeast of Atlanta. “The Mansion”, as it’s
                known locally, was the private home of Bonaparte “Bona” Allen, the late 19 th and
                early 20 th century industrialist, who founded and built the <i>Bona Allen Company</i>,
                which for decades was the largest manufacturer of leather goods in the world.<br/><br/>

                Steve and Dawn live with their two rescue dogs, Luna-Tuna and Big Lou.<br/>
              </p>
            </div>
          </div>
        </Element>
        <Element name="media" style={{backgroundColor: "white", color: "rgba(35, 38, 50)", paddingBottom: "10em", display: "flex", justifyContent: "center", height: "100%", width: "75%", marginLeft: "12%", marginTop: "5em", marginBottom: "0em", flexDirection: "column", alignContent: "flex-start"}}>
          <h1 style={{margin: "0px", fontFamily: "Oswald, sans-serif", fontWeight: "400", paddingBottom: ".6em"}}>Media</h1>
          <div style={{textAlign: "center"}}>
            Steve Siebold is a regular guest on TV News shows across the country, including The
            Today Show, Good Morning America, CNN Headline News, Fox Business Network,
            MSNBC, and The Wall Street Journal Special Report.<br/><br/>

            {/* (Post Today Show, Good Morning America, Hardball with Chris Mathews, Fox
            Business Network w/Stuart Varney, and the rest big city interviews on How Money
            Works, (use all the in-studio interviews that you can) */}
          </div>
          <Media />
        </Element>
        <Element name="photos" style={{backgroundColor: "white", color: "rgba(35, 38, 50)", paddingBottom: "10em", display: "flex", justifyContent: "center", height: "100%", width: "75%", marginLeft: "12%", marginTop: "5em", marginBottom: "0em", flexDirection: "column", alignContent: "flex-start"}}>
        <h1 style={{margin: "0px", fontFamily: "Oswald, sans-serif", fontWeight: "400", paddingBottom: ".6em"}}>Photos</h1>
          <div style={{display: "flex", justifyContent: "space-evenly", alignItems: "center"}}>
            <img style={{width: "30%", padding: "0 5em"}} alt="magazine" src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/3210473/settings_images/8UG0oH5bSSAqGXA5ljrQ_magazine.jpg"/>
            <h3 style={{padding: "0 5em"}}>Steve and Dawn on the cover of LAKE Destination Lanier, Home Living in North Georgia</h3>
          </div>
          <div style={{display: "flex", justifyContent: "space-evenly", alignItems: "center"}}>
            <h3 style={{padding: "0 2em"}}>Steve and Dawn with How Money Works co-author, Tom Matthews, on Leadership Live interviewing Bob Proctor</h3>
            <img style={{width: "40%", padding: "4em 5em"}} alt="magazine" src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/3210473/settings_images/cH3ZNlmRqmzGsVLa9If5_wealthwave.jpg"/>
          </div>
          <div style={{display: "flex", justifyContent: "space-evenly", alignItems: "center"}}>
            <img style={{width: "40%", padding: "4em 5em"}} alt="magazine" src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/3210473/settings_images/9oAbt199QECuqkAEhgV0_marriage.jpg"/>
            <h3 style={{padding: "0 2em"}}>A wedding portrait of Steve and Dawn</h3>
          </div>
          <div style={{display: "flex", justifyContent: "space-evenly", alignItems: "center"}}>
            <h3 style={{padding: "0 2em"}}>A picture of Dawn outside of Bona Allen Mansion, the new homebase of Siebold Success Network</h3>
            <img style={{width: "40%", padding: "4em 5em"}} alt="magazine" src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/3210473/settings_images/CecHWLjTViZjXMgaHqOw_mansion.jpg"/>
          </div>
        </Element>
        <Element name="footer" style={{backgroundColor: "rgba(35, 38, 50)", color: "white", padding: "3em", textAlign: "left"}}>
          <div style={{marginLeft: "15%"}}>
            Sex, Money and Marriage Podcast<br/>
            Bona Allen Mansion<br/>
            395 East Main St.<br/>
            Buford, Georgia 30518<br/>
            (Email) <a style={{color: "gray"}} href="mailto: contact@sexmoneymarriage.com">contact@sexmoneymarriage.com</a>
          </div>
        </Element>
    </div>
  );
}

export default App;
