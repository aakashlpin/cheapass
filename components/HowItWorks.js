import c from '../palette/three';

export default () => (
  <div>
    <h3 className="underline">How it works</h3>
    <ul>
      <li>
        <h4>Grab the link</h4>
        <p>Login and set the price drop alert</p>
      </li>
      <li>
        <h4>We track the prices</h4>
        <p>Our systems ensure you receive real time price drop alerts</p>
      </li>
      <li>
        <h4>Save money &amp; Earn Cashback</h4>
        <p>Get upto 12% Cashback on your purchases</p>
      </li>
    </ul>
    <style jsx>{`
      div {
        text-align: center;
      }
      h3 {
        margin-bottom: 1.5rem;
      }
      ul > li {
        display: block;
        margin-bottom: 2rem;
      }
      ul > li > h4  {
        font-weight: bold;
        color: ${c.green};
      }
    `}</style>
  </div>
);
