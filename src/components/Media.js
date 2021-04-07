import React, { Component } from 'react'
import {Link, Element} from 'react-scroll';

export default class Media extends Component {
  constructor(props) {
    super(props);
    this.state = {
        displayAtl: false,

        vid: "https://fast.wistia.net/embed/iframe/w2f1j6q077?videoFoam=true",
        title: "Become wealthy by thinking like the wealthy",
        subtitle: "Today Show - HRPT • NBC • NEW YORK"
    }
    this.toggle = this.toggle.bind(this);
    this.setVid = this.setVid.bind(this);
}

toggle(city) {
    if(city === "atl") {
        this.setState(state => ({
            displayAtl: !state.displayAtl
        }));
    }
}

  setVid(link, title, subtitle) {
    this.setState(state => ({
      vid: link,
      title: title,
      subtitle: subtitle
    }));
  }

  render() {
    return (
      <div>
        <div id="thumbnails" style={{display: "flex", flexWrap: "wrap", flexDirection: "row", alignContent: "flex-start", alignItems: "flex-start", justifyContent: "center"}}>
          <Link activeClass="active" spy={true} smooth={true} duration={500} to="video">
            <div style={{padding: "1em", display: "flex", flexDirection: "column"}} className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/w2f1j6q077?videoFoam=true", "Become wealthy by thinking like the wealthy", "Today Show - HRPT • NBC • NEW YORK")}>
              <img style={{width: "15em"}} alt="hrpt" onClick={this.toggle.bind(this, "augusta")} src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/3210473/settings_images/p6bnSooyQsmxoyooOsIg_hrpt.PNG" />
              <div style={{width: "15em"}}>The Today Show</div>
            </div>
          </Link>
          <Link activeClass="active" spy={true} smooth={true} duration={500} to="video">
          <div style={{padding: "1em", display: "flex", flexDirection: "column"}} className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/6qnsb70pex?videoFoam=true", "Sex and Politics", "CCTV • America • Beijing")}>
            <img style={{width: "15em"}} alt="hrpt" onClick={this.toggle.bind(this, "augusta")} src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/3210473/settings_images/7Lr7aPZYStqw9ZZOL4qO_gma.PNG" />              
            <div style={{width: "15em"}}>Good Morning America</div>
          </div>
          </Link>
          <Link activeClass="active" spy={true} smooth={true} duration={500} to="video">
          <div style={{padding: "1em", display: "flex", flexDirection: "column"}} className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/hcbqyfyee4?videoFoam=true", "Sex and Politics", "CCTV • America • Beijing")}>
            <img style={{width: "15em"}} alt="hrpt" onClick={this.toggle.bind(this, "augusta")} src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/3210473/settings_images/H0VU5yFISVKBW2AN6kqj_hardball.PNG" />              
            <div style={{width: "15em"}}>Hardball With Chris Matthews</div>
          </div>
          </Link>
          <Link activeClass="active" spy={true} smooth={true} duration={500} to="video">
          <div style={{padding: "1em", display: "flex", flexDirection: "column"}} className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/a3u08pm45t?videoFoam=true", "Are the rich leaving the middle class behind?", "Varney & Co - Millionaire Households • FOX • New York")}>
            <img style={{width: "15em"}} alt="hrpt" onClick={this.toggle.bind(this, "augusta")} src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/3210473/settings_images/uP4arZWoQXYADqdMs08u_varney.PNG" />              
            <div style={{width: "15em"}}>Varney & Co</div>
          </div>
          </Link>
          <Link activeClass="active" spy={true} smooth={true} duration={500} to="video">
          <div style={{padding: "1em", display: "flex", flexDirection: "column"}} className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/4yi7q0dc83?videoFoam=true", "Can thinking like a rich person help you become one?", "Good Morning Texas • ABC WFAA 8 • Dallas")}>
            <img style={{width: "15em"}} alt="hrpt" onClick={this.toggle.bind(this, "augusta")} src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/3210473/settings_images/lenWtnOQlCUS9EOGSbpA_dallas.PNG" />              
            <div style={{width: "15em"}}>Good Morning Texas</div>
          </div>
          </Link>
          <Link activeClass="active" spy={true} smooth={true} duration={500} to="video">
          <div style={{padding: "1em", display: "flex", flexDirection: "column"}} className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/18kolhfab4?videoFoam=true", "Sex and Politics", "CCTV • America • Beijing")}>
            <img style={{width: "15em"}} alt="hrpt" onClick={this.toggle.bind(this, "augusta")} src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/3210473/settings_images/4wEmIKG6QbaKOkveJzQa_beijing.PNG" />              
            <div style={{width: "15em"}}>CCTV</div>
          </div>
          </Link>
        </div>

        <Element name="video">
          <div id="video" style={{width: "100%", display: "flex", flexDirection: "column", color: "black", fontFamily: "arial", fontSize: "16px", fontWeight: "bold", marginLeft: ".4em", marginTop: "2em"}}>
            <div className="wistia_responsive_padding" style={{padding: "56.25% 0 0 0", position: "relative"}}><div className="wistia_responsive_wrapper" style={{height: "100%", left: "0", position: "absolute", top: "0", width: "100%"}}>
            <iframe src={this.state.vid} title="20130109-tdy_klg_hrpt_ NY Video" allow="autoplay; fullscreen" allowtransparency="true" frameBorder="0" scrolling="no" className="wistia_embed" name="wistia_embed" allowFullScreen width="100%" height="100%"></iframe></div></div>
            <script src="https://fast.wistia.net/assets/external/E-v1.js" async></script><br/>
            <div style={{fontSize: "1.5em"}}>{this.state.title}
              <div style={{fontSize: "0.5em", fontWeight: "normal", paddingTop: "5px"}}>{this.state.subtitle}</div>
            </div>
          </div>
        </Element>
      </div>
    )
  }
}
