import c from '../palette/three';

export default () => (
  <div>
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
      ul > li {
        display: inline-block;
        margin-right: 0.5rem;
      }
      ul > li > a {
        display: block;
        padding: 0.25rem 0.5rem;
      }
    `}</style>
  </div>
)
