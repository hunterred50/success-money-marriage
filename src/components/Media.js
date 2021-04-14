import React, { Component } from 'react'
import {Link, Element} from 'react-scroll';

export default class Media extends Component {
  constructor(props) {
    super(props);
    this.state = {
        vid: "https://fast.wistia.net/embed/iframe/w2f1j6q077?videoFoam=true",
        title: "Become wealthy by thinking like the wealthy",
        subtitle: "Today Show - HRPT • NBC • NEW YORK"
    }
    this.setVid = this.setVid.bind(this);
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
              <img style={{width: "15em"}} alt="hrpt" src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/3210473/settings_images/p6bnSooyQsmxoyooOsIg_hrpt.PNG" />
              <div style={{width: "15em"}}>The Today Show</div>
            </div>
          </Link>
          <Link activeClass="active" spy={true} smooth={true} duration={500} to="video">
            <div style={{padding: "1em", display: "flex", flexDirection: "column"}} className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/6qnsb70pex?videoFoam=true", "Sex and Politics", "CCTV • America • Beijing")}>
              <img style={{width: "15em"}} alt="hrpt" src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/3210473/settings_images/7Lr7aPZYStqw9ZZOL4qO_gma.PNG" />              
              <div style={{width: "15em"}}>Good Morning America</div>
            </div>
          </Link>
          <Link activeClass="active" spy={true} smooth={true} duration={500} to="video">
            <div style={{padding: "1em", display: "flex", flexDirection: "column"}} className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/hcbqyfyee4?videoFoam=true", "Sex and Politics", "CCTV • America • Beijing")}>
              <img style={{width: "15em"}} alt="hrpt" src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/3210473/settings_images/H0VU5yFISVKBW2AN6kqj_hardball.PNG" />              
              <div style={{width: "15em"}}>Hardball With Chris Matthews</div>
            </div>
          </Link>
          <Link activeClass="active" spy={true} smooth={true} duration={500} to="video">
            <div style={{padding: "1em", display: "flex", flexDirection: "column"}} className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/a3u08pm45t?videoFoam=true", "Are the rich leaving the middle class behind?", "Varney & Co - Millionaire Households • FOX • New York")}>
              <img style={{width: "15em"}} alt="hrpt" src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/3210473/settings_images/uP4arZWoQXYADqdMs08u_varney.PNG" />              
              <div style={{width: "15em"}}>Varney & Co</div>
            </div>
          </Link>
          <Link activeClass="active" spy={true} smooth={true} duration={500} to="video">
            <div style={{padding: "1em", display: "flex", flexDirection: "column"}} className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/b3e75isnnn?videoFoam=true", "How to spring clean your finances", "KTLA Morning News HMW • CW 5 KTLA • Los Angeles")}>
              <img style={{width: "15em"}} alt="hrpt" src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/3210473/settings_images/kcgViLSTS2CSbkP5CpKr_Capture0.PNG" />              
              <div style={{width: "15em"}}>KTLA Morning News</div>
            </div>
          </Link>
          <Link activeClass="active" spy={true} smooth={true} duration={500} to="video">
            <div style={{padding: "1em", display: "flex", flexDirection: "column"}} className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/5omcueeiz8?videoFoam=true", "How to shop smart this holiday season", "Good Day Charlotte HMW • Fox 46 WJZY • Charlotte")}>
              <img style={{width: "15em"}} alt="hrpt" src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/3210473/settings_images/dYOwThLSZyUhKrCWOE7w_0.PNG" />              
              <div style={{width: "15em"}}>Good Day Charlotte</div>
            </div>
          </Link>
          <Link activeClass="active" spy={true} smooth={true} duration={500} to="video">
            <div style={{padding: "1em", display: "flex", flexDirection: "column"}} className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/6pfo74ffhq?videoFoam=true", "How do we change our attitudes about money?", "Daytime HMW • NBC 8 WFLA • Tampa")}>
              <img style={{width: "15em"}} alt="hrpt" src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/3210473/settings_images/wOuQ1XjQlyUNAeib8xYM_0.PNG" />              
              <div style={{width: "15em"}}>Great Day Tampa Bay</div>
            </div>
          </Link>
          <Link activeClass="active" spy={true} smooth={true} duration={500} to="video">
            <div style={{padding: "1em", display: "flex", flexDirection: "column"}} className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/cjtmupcwv7?videoFoam=true", "New Year, New Way of Approaching Money", "First Coast Living HMW • NBC 12 WTLV • Jacksonville")}>
              <img style={{width: "15em"}} alt="hrpt" src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/3210473/settings_images/GWf7K2qQ7qqk9ztU6GXs_0.PNG" />              
              <div style={{width: "15em"}}>First Coast Living</div>
            </div>
          </Link>
          <Link activeClass="active" spy={true} smooth={true} duration={500} to="video">
            <div style={{padding: "1em", display: "flex", flexDirection: "column"}} className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/kes9bdzy16?videoFoam=true", "Creating Your Own Financial Story", "Living East Tennessee HMW • ABC 6 WATE • Knoxville")}>
              <img style={{width: "15em"}} alt="hrpt" src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/3210473/settings_images/Hb4KNbm2QS6wqttBMcri_0.PNG" />              
              <div style={{width: "15em"}}>Living East Tennessee</div>
            </div>
          </Link>
          <Link activeClass="active" spy={true} smooth={true} duration={500} to="video">
            <div style={{padding: "1em", display: "flex", flexDirection: "column"}} className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/4yi7q0dc83?videoFoam=true", "Can thinking like a rich person help you become one?", "Good Morning Texas • ABC WFAA 8 • Dallas")}>
              <img style={{width: "15em"}} alt="hrpt" src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/3210473/settings_images/htzeo4ejRVu8QeWdKFPE_0.PNG" />              
              <div style={{width: "15em"}}>Good Morning Texas</div>
            </div>
          </Link>
          <Link activeClass="active" spy={true} smooth={true} duration={500} to="video">
            <div style={{padding: "1em", display: "flex", flexDirection: "column"}} className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/e194aundq3?videoFoam=true", "Financial Literacy in America", "Great Day San Antonio HMW • CBS 5 KENS • San Antonio")}>
              <img style={{width: "15em"}} alt="hrpt" src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/3210473/settings_images/1rzKaw7FS5aQqGqLZqYg_0.PNG" />              
              <div style={{width: "15em"}}>Great Day San Antonio</div>
            </div>
          </Link>
          <Link activeClass="active" spy={true} smooth={true} duration={500} to="video">
            <div style={{padding: "1em", display: "flex", flexDirection: "column"}} className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/0vdvvmb7q0?videoFoam=true", "Maintaining Financial Security During the Pandemic", "Morning News HMW • Fox 31 KDVR • Denver")}>
              <img style={{width: "15em"}} alt="hrpt" src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/3210473/settings_images/dhnnl3NSTauUzhH0YrF4_0.PNG" />              
              <div style={{width: "15em"}}>Morning News</div>
            </div>
          </Link>
          <Link activeClass="active" spy={true} smooth={true} duration={500} to="video">
            <div style={{padding: "1em", display: "flex", flexDirection: "column"}} className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/2mm9vdowgo?videoFoam=true", "How far will stimulus checks go during the COVID-19 crisis?", "Fox 5 • FOX 5 WTTG • Washington")}>
              <img style={{width: "15em"}} alt="hrpt" src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/3210473/settings_images/23isocQHQQ6SPz4sLWQw_0.PNG" />              
              <div style={{width: "15em"}}>Great Day Tampa Bay</div>
            </div>
          </Link>
          <Link activeClass="active" spy={true} smooth={true} duration={500} to="video">
            <div style={{padding: "1em", display: "flex", flexDirection: "column"}} className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/5qno1yo1i2?videoFoam=true", "Do's and Don't's When Getting Stimulus Check", "ABC 3 HMW  • ABC 3 KIII • Corpus Christi")}>
              <img style={{width: "15em"}} alt="hrpt" src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/3210473/settings_images/iDZzIblbTDGWZTNUQyAk_0.PNG" />              
              <div style={{width: "15em"}}>ABC 3 Corpus Christi</div>
            </div>
          </Link>
          <Link activeClass="active" spy={true} smooth={true} duration={500} to="video">
            <div style={{padding: "1em", display: "flex", flexDirection: "column"}} className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/u8ufckwijf?videoFoam=true", "Spending vs. Saving during the COVID crisis", "On Your Side HMW • ABC 2 KATU • Portland")}>
              <img style={{width: "15em"}} alt="hrpt" src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/3210473/settings_images/coCcVgcESfEYZ74kTvNd_0.PNG" />              
              <div style={{width: "15em"}}>On Your Side Portland</div>
            </div>
          </Link>
          <Link activeClass="active" spy={true} smooth={true} duration={500} to="video">
            <div style={{padding: "1em", display: "flex", flexDirection: "column"}} className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/1qcrskar9e?videoFoam=true", "Money Management with Steve Siebold", "CBS 12 HMW • CBS 12 KEYC • Mankato")}>
              <img style={{width: "15em"}} alt="hrpt" src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/3210473/settings_images/9FSoXlqnS3iS6bFyyMLL_0.PNG" />              
              <div style={{width: "15em"}}>CBS 12 Mankato</div>
            </div>
          </Link>
          <Link activeClass="active" spy={true} smooth={true} duration={500} to="video">
            <div style={{padding: "1em", display: "flex", flexDirection: "column"}} className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/uhf94svpvf?videoFoam=true", "Financial pivots to make during the COVID crisis", "San Antonio Living HMW • News 4 WOAI • San Antonio")}>
              <img style={{width: "15em"}} alt="hrpt" src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/3210473/settings_images/PFsU8wZFRrGegG9CtZS1_0.PNG" />              
              <div style={{width: "15em"}}>San Antonio Living</div>
            </div>
          </Link>
          <Link activeClass="active" spy={true} smooth={true} duration={500} to="video">
            <div style={{padding: "1em", display: "flex", flexDirection: "column"}} className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/p59ugzdj4s?videoFoam=true", "In a world full of chaos comes massive opportunities to make money", "KTLA Morning News HMW • CW 5 KTLA • Los Angeles")}>
              <img style={{width: "15em"}} alt="hrpt" src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/3210473/settings_images/x49BpK5KTdmgINe6TOg7_0.PNG" />              
              <div style={{width: "15em"}}>KTLA Morning News</div>
            </div>
          </Link>
          <Link activeClass="active" spy={true} smooth={true} duration={500} to="video">
            <div style={{padding: "1em", display: "flex", flexDirection: "column"}} className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/vqqe2oke7w?videoFoam=true", "The right ways to teach your kids about money", "WTOL 11 HMW • CBS 11 WTOL • Toledo")}>
              <img style={{width: "15em"}} alt="hrpt" src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/3210473/settings_images/tijx3ZQSnMPC7MaYyvMg_0.PNG" />              
              <div style={{width: "15em"}}>CBS 11 Toledo</div>
            </div>
          </Link>
          <Link activeClass="active" spy={true} smooth={true} duration={500} to="video">
            <div style={{padding: "1em", display: "flex", flexDirection: "column"}} className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/1qf4w8z63q?videoFoam=true", "Breaking some of the biggest myths about money", "Studio 3 HMW • NBC 3 WSAZ • Huntington")}>
              <img style={{width: "15em"}} alt="hrpt" src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/3210473/settings_images/D9wwEW3GRKaDfr642xNb_0.PNG" />              
              <div style={{width: "15em"}}>Studio 3 NBC Huntington</div>
            </div>
          </Link>
          <Link activeClass="active" spy={true} smooth={true} duration={500} to="video">
            <div style={{padding: "1em", display: "flex", flexDirection: "column"}} className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/4bzv82ar62?videoFoam=true", "If you want to make money, you have to know how it works", "San Antonio Live HMW • KSAT 12 • San Antonio")}>
              <img style={{width: "15em"}} alt="hrpt" src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/3210473/settings_images/3qpl9BTMQAiuXhEPTTKK_0.PNG" />              
              <div style={{width: "15em"}}>San Antonio Live</div>
            </div>
          </Link>
          <Link activeClass="active" spy={true} smooth={true} duration={500} to="video">
            <div style={{padding: "1em", display: "flex", flexDirection: "column"}} className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/8e6agmvwlr?videoFoam=true", "How to regain your financial foothold after COVID", "Mass Appeal HMW • CW 22 WWLP • Springfield")}>
              <img style={{width: "15em"}} alt="hrpt" src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/3210473/settings_images/jnrATzDZRvWVKFpUGpbd_0.PNG" />              
              <div style={{width: "15em"}}>Mass Appeal Springfield</div>
            </div>
          </Link>
          <Link activeClass="active" spy={true} smooth={true} duration={500} to="video">
            <div style={{padding: "1em", display: "flex", flexDirection: "column"}} className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/1zkngrb8k7?videoFoam=true", "The best ways to teach your kids about money", "The Morning Blend • TMJ4 Today • Milwaukee")}>
              <img style={{width: "15em"}} alt="hrpt" src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/3210473/settings_images/Alv7UKhHTRTroJTbD2lH_0.PNG" />              
              <div style={{width: "15em"}}>The Morning Blend Milwaukee</div>
            </div>
          </Link>
          <Link activeClass="active" spy={true} smooth={true} duration={500} to="video">
            <div style={{padding: "1em", display: "flex", flexDirection: "column"}} className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/lbss7fnlyb?videoFoam=true", "Breaking down some of the most common money myths and misconceptions", "The Jennie Show • News 6 WJBF • Augusta")}>
              <img style={{width: "15em"}} alt="hrpt" src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/3210473/settings_images/u0Eo92RGQW2m7dhNSMmI_0.PNG" />              
              <div style={{width: "15em"}}>The Jennie Show Augusta</div>
            </div>
          </Link>
          <Link activeClass="active" spy={true} smooth={true} duration={500} to="video">
            <div style={{padding: "1em", display: "flex", flexDirection: "column"}} className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/6a1f66smrd?videoFoam=true", "How to regain your financial footing during the pandemic", "News 8 HMW • CBS 8 KFMB • San Diego")}>
              <img style={{width: "15em"}} alt="hrpt" src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/3210473/settings_images/uvWn29WSyk0dn3jVkV0w_0.PNG" />              
              <div style={{width: "15em"}}>CBS 8 San Diego</div>
            </div>
          </Link>
          <Link activeClass="active" spy={true} smooth={true} duration={500} to="video">
            <div style={{padding: "1em", display: "flex", flexDirection: "column"}} className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/bdnzzx7ccw?videoFoam=true", "Common money myths and how to regain your financial footing from the pandemic", "Good Morning Arizona HMW • CBS 5 GMAZ • Phoenix")}>
              <img style={{width: "15em"}} alt="hrpt" src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/3210473/settings_images/jOrbLcHS3CNCHFnBefkX_0.PNG" />              
              <div style={{width: "15em"}}>Good Morning Arizona</div>
            </div>
          </Link>
          <Link activeClass="active" spy={true} smooth={true} duration={500} to="video">
            <div style={{padding: "1em", display: "flex", flexDirection: "column"}} className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/han1jy2ex7?videoFoam=true", "Easy ways to start making money right now ahead of the holiday season", "Daytime with Kimberly & Esteban HMW • Fox 29 KABB • San Antonio")}>
              <img style={{width: "15em"}} alt="hrpt" src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/3210473/settings_images/Ue51pIqUSLOHKABnbETk_0.PNG" />              
              <div style={{width: "15em"}}>Daytime with Kimberly & Esteban</div>
            </div>
          </Link>
          <Link activeClass="active" spy={true} smooth={true} duration={500} to="video">
            <div style={{padding: "1em", display: "flex", flexDirection: "column"}} className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/xra46nd7t3?videoFoam=true", "Tips for managing your finances during the holidays and the pandemic", "KTVU How Money Works • Fox 2 KTVU • San Francisco")}>
              <img style={{width: "15em"}} alt="hrpt" src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/3210473/settings_images/InShDTm0Rs6V6wh8nHa3_0.PNG" />              
              <div style={{width: "15em"}}>Fox 2 KTVU San Francisco</div>
            </div>
          </Link>
          <Link activeClass="active" spy={true} smooth={true} duration={500} to="video">
            <div style={{padding: "1em", display: "flex", flexDirection: "column"}} className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/ebrojxfnxi?videoFoam=true", "Money and the holiday shopping season", "KWCH How Money Works • CBS 12 KWCH • Wichita")}>
              <img style={{width: "15em"}} alt="hrpt" src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/3210473/settings_images/HhmAGbejR4OW4Qzck5Xj_0.PNG" />              
              <div style={{width: "15em"}}>CBS 12 Wichita</div>
            </div>
          </Link>
          <Link activeClass="active" spy={true} smooth={true} duration={500} to="video">
            <div style={{padding: "1em", display: "flex", flexDirection: "column"}} className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/lyi1zvdfy3?videoFoam=true", "Money and spending during the holiday season", "ABC 27 How Money Works • ABC 27 WHTM • Harrisburg")}>
              <img style={{width: "15em"}} alt="hrpt" src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/3210473/settings_images/r136QMPoTE6jZzNjKtJr_0.PNG" />              
              <div style={{width: "15em"}}>ABC 27 Harrisburg</div>
            </div>
          </Link>
          <Link activeClass="active" spy={true} smooth={true} duration={500} to="video">
            <div style={{padding: "1em", display: "flex", flexDirection: "column"}} className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/xvt4p2pmwg?videoFoam=true", "Avoiding debt while holiday shopping", "KENS 5 How Money Works • CBS 5 KENS • San Antonio")}>
              <img style={{width: "15em"}} alt="hrpt" src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/3210473/settings_images/iWG4av01Rnae1aYVE5iy_0.PNG" />              
              <div style={{width: "15em"}}>CBS 5 San Antonio</div>
            </div>
          </Link>
          <Link activeClass="active" spy={true} smooth={true} duration={500} to="video">
            <div style={{padding: "1em", display: "flex", flexDirection: "column"}} className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/16kwbq8e68?videoFoam=true", "How not to overspend this holiday shopping season", "Fox 4 How Money Works • Fox 4 WDAF • Kansas City")}>
              <img style={{width: "15em"}} alt="hrpt" src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/3210473/settings_images/xa7Y9zajTXCMcEyxm1PJ_0.PNG" />              
              <div style={{width: "15em"}}>Fox 4 Kansas City</div>
            </div>
          </Link>
          <Link activeClass="active" spy={true} smooth={true} duration={500} to="video">
            <div style={{padding: "1em", display: "flex", flexDirection: "column"}} className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/fvvg3r441t?videoFoam=true", "'How Money Works' Author Steve Siebold on Studio 10", "Studio 10 • NBC Lansing • Lansing")}>
              <img style={{width: "15em"}} alt="hrpt" src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/3210473/settings_images/YAxyDVfSEWlhapNm4V6H_0.PNG" />              
              <div style={{width: "15em"}}>NBC Lancing</div>
            </div>
          </Link>
          <Link activeClass="active" spy={true} smooth={true} duration={500} to="video">
            <div style={{padding: "1em", display: "flex", flexDirection: "column"}} className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/pzqyrrxpy8?videoFoam=true", "How to teach kids important money lessons at the holidays", "Morning News • PHL17 • Philadelphia")}>
              <img style={{width: "15em"}} alt="hrpt" src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/3210473/settings_images/btd6mSIRSmOoL35tcexJ_0.PNG" />              
              <div style={{width: "15em"}}>Morning News Philadelphia</div>
            </div>
          </Link>
          <Link activeClass="active" spy={true} smooth={true} duration={500} to="video">
            <div style={{padding: "1em", display: "flex", flexDirection: "column"}} className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/lhhbx0qhsg?videoFoam=true", "Tips To Teach Your Kids About Money", "Breakfast Television • City TV • Toronto")}>
              <img style={{width: "15em"}} alt="hrpt" src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/3210473/settings_images/h5Egc10yTI6PdB0jnzPY_0.PNG" />              
              <div style={{width: "15em"}}>Breakfast Television Toronto</div>
            </div>
          </Link>
          <Link activeClass="active" spy={true} smooth={true} duration={500} to="video">
            <div style={{padding: "1em", display: "flex", flexDirection: "column"}} className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/pzezbzsbvc?videoFoam=true", "Help your kids better understand money during the holiday season", "CTV News Calgary • CTV Canada • Calgary")}>
              <img style={{width: "15em"}} alt="hrpt" src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/3210473/settings_images/LhoZr9euRxySARqoSywi_0.PNG" />              
              <div style={{width: "15em"}}>CTV News Calgary</div>
            </div>
          </Link>
          <Link activeClass="active" spy={true} smooth={true} duration={500} to="video">
            <div style={{padding: "1em", display: "flex", flexDirection: "column"}} className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/g6ennnjirg?videoFoam=true", "Some of the most common money myths and misconceptions", "Great Day San Antonio • CBS 5 KENS • San Antonio")}>
              <img style={{width: "15em"}} alt="hrpt" src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/3210473/settings_images/4eGgPNyS2W5lt5UuxXBA_0.PNG" />              
              <div style={{width: "15em"}}>CBS 5 San Antonio</div>
            </div>
          </Link>
          <Link activeClass="active" spy={true} smooth={true} duration={500} to="video">
            <div style={{padding: "1em", display: "flex", flexDirection: "column"}} className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/g6ennnjirg?videoFoam=true", "5 tips for setting yourself up for financial success in the new year", "Good Morning Arizona • CBS 5 GMAZ • Phoenix")}>
              <img style={{width: "15em"}} alt="hrpt" src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/3210473/settings_images/zcNzt9CoTwSOTtAd8V3Y_0.PNG" />              
              <div style={{width: "15em"}}>Good Morning Arizona</div>
            </div>
          </Link>
          <Link activeClass="active" spy={true} smooth={true} duration={500} to="video">
            <div style={{padding: "1em", display: "flex", flexDirection: "column"}} className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/jx1df9wjzg?videoFoam=true", "How couples with different financial philosophies can get on the same financial page", "WAVE 3 Listens Live! • NBC WAVE 3 • Louisville")}>
              <img style={{width: "15em"}} alt="hrpt" src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/3210473/settings_images/B7onUpbvRwqkkgHHGgbo_0.PNG" />              
              <div style={{width: "15em"}}>WAVE 3 Louisville</div>
            </div>
          </Link>
          <Link activeClass="active" spy={true} smooth={true} duration={500} to="video">
            <div style={{padding: "1em", display: "flex", flexDirection: "column"}} className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/hr2md0i36o?videoFoam=true", "What couples can do when they don't see eye-to-eye on money", "Global News Canada • Global News Morning • Vancouver")}>
              <img style={{width: "15em"}} alt="hrpt" src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/3210473/settings_images/7dzrLM59SY2q9KlI9Qp6_0.PNG" />              
              <div style={{width: "15em"}}>Global News Canada</div>
            </div>
          </Link>
          <Link activeClass="active" spy={true} smooth={true} duration={500} to="video">
            <div style={{padding: "1em", display: "flex", flexDirection: "column"}} className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/235u6n2y9d?videoFoam=true", "How couples can see eye-to-eye when it comes to money", "9&10 News the four • 9&10 News WWTV • Traverse City")}>
              <img style={{width: "15em"}} alt="hrpt" src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/3210473/settings_images/VF10lOodQ6mzjYGSyMdw_0.PNG" />              
              <div style={{width: "15em"}}>9&10 News the four</div>
            </div>
          </Link>
          <Link activeClass="active" spy={true} smooth={true} duration={500} to="video">
            <div style={{padding: "1em", display: "flex", flexDirection: "column"}} className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/x10kigytuf?videoFoam=true", "How couples can see eye-to-eye on money as Valentine's Day approaches", "Fox 17 Morning News • Fox 17 WXMI • Grand Rapids")}>
              <img style={{width: "15em"}} alt="hrpt" src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/3210473/settings_images/h4mFl4t5Ssu6iiI1eysT_0.PNG" />              
              <div style={{width: "15em"}}>Fox 17 Morning News</div>
            </div>
          </Link>
          <Link activeClass="active" spy={true} smooth={true} duration={500} to="video">
            <div style={{padding: "1em", display: "flex", flexDirection: "column"}} className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/vfczqpbfu2?videoFoam=true", "Don't Let the Money Kill the Love", "Fox 59 • Indianapolis")}>
              <img style={{width: "15em"}} alt="hrpt" src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/3210473/settings_images/fdHRUnqZR6KHmbz5SwNJ_0.PNG" />              
              <div style={{width: "15em"}}>Fox 59 Indianapolis</div>
            </div>
          </Link>
          <Link activeClass="active" spy={true} smooth={true} duration={500} to="video">
            <div style={{padding: "1em", display: "flex", flexDirection: "column"}} className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/xprl71q9q1?videoFoam=true", "How couples can see eye-to-eye on money as Valentine's Day approaches", "The Morning Blend • TMJ4 Today • Milwaukee")}>
              <img style={{width: "15em"}} alt="hrpt" src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/3210473/settings_images/ljbTmPiS8yPclXZ6iGch_0.PNG" />              
              <div style={{width: "15em"}}>Great Day Tampa Bay</div>
            </div>
          </Link>
          {/* <Link activeClass="active" spy={true} smooth={true} duration={500} to="video">
            <div style={{padding: "1em", display: "flex", flexDirection: "column"}} className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/xprl71q9q1?videoFoam=true", "How do we change our attitudes about money?", "Daytime HMW • NBC 8 WFLA • Tampa")}>
              <img style={{width: "15em"}} alt="hrpt" src="" />              
              <div style={{width: "15em"}}>Great Day Tampa Bay</div>
            </div>
          </Link> */}
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
