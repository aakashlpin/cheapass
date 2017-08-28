import c from '../palette/three';
import Header from '../components/Header';
import RealtimeAlerts from '../components/RealtimeAlerts';
import HowItWorks from '../components/HowItWorks';
import Content from '../components/Content';

export default () => (
  <div>
    <Header />
    <div className="cover">
      <div className="wrapper">
        <section role="main">
          <h2>Don't be an idiot buying at MRP!</h2>
          {/* when prices drop <> on bank offers <> on credit card offers <> on festive season offers */}
          <h1>Get real time alerts <span className="highlighted">when prices drop.</span></h1>
          <h5>Receive notifications on <span className="underline">email</span>, <span className="underline">mobile</span>, and <span className="underline">sms</span>.</h5>
        </section>

        <form action="">
          <input type="text" placeholder="What would you like to buy cheaper?" />
          <div className="input-subtext">
            <span>Supported on:</span>
            <ul>
              <li>
                <a href="">
                  <img src={'/static/images/flipkart.jpg'} alt="Flipkart" />
                  <span>Flipkart</span>
                </a>
              </li>
              <li>
                <a href="">
                  <img src={'/static/images/amazon.jpg'} alt="Amazon India" />
                  <span>Amazon India</span>
                </a>
              </li>
              <li>
                <a href="">
                  <img src={'/static/images/snapdeal.jpg'} alt="Snapdeal" />
                  <span>Snapdeal</span>
                </a>
              </li>
              <li>
                <a href="">
                  <img src={'/static/images/myntra.jpg'} alt="Snapdeal" />
                  <span>Myntra</span>
                </a>
              </li>
            </ul>
          </div>
        </form>
      </div>
    </div>

    <Content />

    {/* <RealtimeAlerts />
    <HowItWorks /> */}
    {/* TODO */}
    {/* - add about the blog links carousel */}
    {/* - add the offer banners carousel */}
    {/* - add the media carousel  */}
    {/* - add the provision for hottest products on cheapass */}
    <style jsx>{`
      section {
        margin-bottom: 4rem;
      }
      .cover {
        background: ${c.background};
        padding-top: 2rem;
        padding-bottom: 2rem;
        margin-bottom: 2rem;
      }
      h1 {
        line-height: 6rem;
      }
      h2 {
        line-height: 3.5rem;
      }
      ul {
        display: inline;
      }
      ul > li {
        display: inline-block;
        margin-right: 0.5rem;
      }
      ul > li:first-child {
        margin-left: 0.5rem;
      }
      ul > li > a {
        display: block;
        text-decoration: none;
      }
      ul > li > a > img {
        width: 1.2rem;
        vertical-align: middle;
        margin-right: 2px;
      }
      form {
        display: block;
        width: 640px;
        margin: 0 auto 1rem;
      }
      form input {
        display: block;
        width: 100%;
        height: 64px;
        border: 3px solid ${c.green};
        font-size: 1.5rem;
        padding: 0.2rem 1rem;
        margin-bottom: 0.5rem;
      }
    `}</style>
  </div>
)
