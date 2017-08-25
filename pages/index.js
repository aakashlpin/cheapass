import c from './palette/three';

export default () => (
  <div className="wrapper">
    <header>
      <div>
        <img
          src="https://cheapass.in/images/fe9a0762.cheapass.png"
          alt="logo"
        />
      </div>
      <div>
        <ul>
          <li><a href="">Plugin</a></li>
          <li><a href="">Signup</a></li>
        </ul>
      </div>
    </header>

    <section role="main">
      <h1>Don't be an idiot buying at MRP!</h1>
      {/* when prices drop <> on bank offers <> on credit card offers <> on festive season offers */}
      <h1 className="bumpup">Get real time alerts <span className="highlighted">when prices drop</span></h1>
      <h1>Receive alerts on <span className="underline">email</span>, <span className="underline">mobile</span>, and <span className="underline">sms</span>.</h1>
    </section>
    <style jsx global>{`
      body {
        font-family: 'Open Sans', sans-serif;
        color: ${c.grey};
      }
      h1, h2, h3, h4, h5, h6 {
        font-family: 'Merriweather', serif;
      }
      .wrapper {
        padding: 1rem;
      }
    `}</style>
    <style jsx>{`
      header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 3rem;
      }
      img {
        width: 134px;
      }
      a {
        color: ${c.blue};
        text-decoration: none;
        border-bottom: 3px solid ${c.blue};
      }
      ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
      }
      ul > li {
        display: inline-block;
        margin-right: 0.5rem;
      }
      ul > li > a {
        display: block;
        padding: 0.25rem 0.5rem;
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
    `}</style>
  </div>
)
