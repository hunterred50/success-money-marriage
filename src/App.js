import './App.css';
import {Link, Element} from 'react-scroll'

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
      <div style={heroImg}>
        <div style={opaque}>
          <div style={heroDiv}>
            <h1 style={{fontSize: "3.2em", margin: "-30px 0 10px 0"}}>Sex, Money and Marriage</h1>
            <div style={{width: "100%", height: "100%", display: "flex", justifyContent: "center"}}>
              <Link activeClass="active" spy={true} smooth={true} duration={500} style={items} to="home">Home</Link>
              <Link activeClass="active" spy={true} smooth={true} duration={500} style={items} to="episodes">Episodes</Link>
              <Link activeClass="active" spy={true} smooth={true} duration={500} style={items} to="about">About</Link>
              <button style={{margin: "0 10px", textDecoration: "none", color: "black", cursor: "pointer", padding: "0px 15px", borderRadius: "20px", border: "0", fontFamily: "Oswald, sans-serif", fontWeight: "400"}}>Subscribe</button>
            </div>
            {/* <div style={{display: "flex", alignContent: "flex-end", justifyContent: "center", alignSelf: "flex-end"}}>
            <div style={{width: "50em", height: "1em", backgroundColor: "#ffffff"}}>h</div></div> */}
          </div>
        </div>
      </div>
      <div style={{scrollBehavior: "smooth"}}>
      <Element name="episodes" style={{backgroundColor: "rgba(35, 38, 50)", marginTop: "-6em", display: "flex", justifyContent: "center", height: "33em"}}>
        <div style={{backgroundColor: "#ffffff", paddingTop: "10px", width: "50em", height: "30em", color: "black", zIndex: "2"}}>
          <h1 style={{fontFamily: "Oswald, sans-serif", fontWeight: "400"}}>Listen to the show:</h1>
        </div>
      </Element>
      </div>
      <Element name="about" style={{backgroundColor: "rgba(35, 38, 50)", color: "white", paddingBottom: "10em"}}>
          <h1 style={{margin: "0px", fontFamily: "Oswald, sans-serif", fontWeight: "400", paddingBottom: "1em"}}>About the Hosts</h1>
          <div style={{display: "flex", justifyContent: "center", alignItems: "flex-start"}}>
            <div style={{width: "50%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
              <img alt="dawn" style={{width: "53.5%", borderRadius: "15px", borderWidth: "5px", borderColor: "white", borderStyle: "solid"}} src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/3210473/settings_images/hNazMd00SGuTTNUcuFdy_DawnSQblackwhite.jpg"/>
              <h2 style={{fontFamily: "Oswald, sans-serif", fontWeight: "500", marginTop: "10px"}}>Dawn Andrews</h2>
              <p style={{width: "80%"}}>
              Dawn is a former award-winning real estate professional specializing in high end properties based in Palm Beach, Florida. In 1999, she was tapped to become President of Siebold Success Network, a start-up founded by her husband Steve and his business partner.<br/><br/>Under Dawn’s leadership over the past 20 years, the company has grown into a multimillion-dollar enterprise that operates in 10 countries around the world. In 2009, she was invited into the National Speakers Association’s Million Dollar Speakers Group and currently serves as the President of the Georgia Speakers Bureau.  In September 2018, Dawn and Steve joined WealthWave® and, within a month, qualified to become Senior Marketing Directors.
              </p>
            </div>
            <div style={{width: "50%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
              <img alt="steve" style={{width: "50%", borderRadius: "15px", borderWidth: "5px", borderColor: "white", borderStyle: "solid"}} src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/3210473/settings_images/z2GWGgPaR2u8gnLkWRvS_Steve_Siebold_HS.jpeg"/>
              <h2 style={{fontFamily: "Oswald, sans-serif", fontWeight: "500", marginTop: "10px"}}>Steve Siebold</h2>
              <p style={{width: "80%"}}>
                Since 1997, Steve Siebold, CSP, CFEd has helped Fortune 100 companies increase sales by $1.3 billion USD through his flagship training program, Mental Toughness University.<br/><br/>

                Siebold has delivered $16 million in keynote speeches at National and International Conventions for companies such as Johnson & Johnson, Ingersoll-Rand, Caterpillar, Merck, GlaxoSmithKline, Toyota, Chrysler-Fiat, Transamerica and hundreds of others. Siebold’s 12 books have sold over 1.6 million copies, including the #1 selling book of 2020 on Personal Finance, How Money Works, with co-author Tom Mathews. Siebold’s books have been translated into 7 languages.<br/><br/>

                He’s a former professional tennis player and national coach. His sports clients include Andre Agassi, the Boston Celtics, Miami Marlins and Ohio State Buckeyes.<br/><br/>

                As the CEO of Siebold Success Network, Steve oversees a team of 118 inside and outside salespeople, which gives him unique insights on how to build a mentally tough sales team.<br/><br/>

                Steve’s work has been featured on every major television network in the United States and Canada, and his interviews and articles have appeared in the Wall Street Journal, Fortune, Forbes, USA Today and hundreds of other publications around the world.<br/><br/>

                As a professional speaker, Steve ranks among the top 1% of income earners worldwide. He is the former chairman of the National Speakers Association’s Million-Dollar Speaker Group.<br/><br/>
              </p>
            </div>
          </div>
        </Element>
    </div>
  );
}

export default App;
