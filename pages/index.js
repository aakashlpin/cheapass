import c from '../palette/three';
import Header from '../components/Header';

export default () => (
  <div className="wrapper">
    <Header />
    <section role="main">
      <h1>Don't be an idiot buying at MRP!</h1>
      {/* when prices drop <> on bank offers <> on credit card offers <> on festive season offers */}
      <h1 className="bumpup">Get real time alerts <span className="highlighted">when prices drop</span></h1>
      <h1>Receive notifications on <span className="underline">email</span>, <span className="underline">mobile</span>, and <span className="underline">sms</span>.</h1>
    </section>

    <section>
      <form action="">
        <input type="text" placeholder="What would you like to buy?" />
        <div>Supported on:
          <ul>
            <li>
              <a href="">
                <img src={'/static/images/amazon.jpg'} alt="Amazon India" />
                <span>Amazon India</span>
              </a>
            </li>
            <li>
              <a href="">
                <img src={'/static/images/flipkart.jpg'} alt="Flipkart" />
                <span>Flipkart</span>
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
    </section>
    <style jsx>{`
      section {
        margin-bottom: 4rem;
      }
      .highlighted {
        padding: 0.1rem 0.5rem;
        background: ${c.green};
        color: ${c.white};
      }
      .bumpup {
        font-size: 2.5rem;
      }
      .underline {
        border-bottom: 4px solid ${c.green};
      }
      ul {
        display: inline;
      }
      ul > li {
        display: inline-block;
        margin-right: 0.5rem;
      }
      ul > li > a {
        display: block;
        text-decoration: none;
        color: ${c.green};
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
        border: 1px solid ${c.grey};
        font-size: 1.5rem;
        padding: 0.2rem 1rem;
        margin-bottom: 0.5rem;
      }
    `}</style>
  </div>
)
