import React from 'react';
import c from '../palette/three';

export default () => (
  <div className="row">
    <h3 className="text-center">All Categories Supported</h3>
    <ul>
      <li><a>
        <span>
          <img src="http://res.cloudinary.com/cheapass/image/upload/c_scale,h_120/v1503919815/phone_pwdbrj.jpg" alt="phone" />
        </span>
        <span>
          Mobiles and Computers
        </span>
      </a></li>
      <li><a>
        <span>
          <img src="http://res.cloudinary.com/cheapass/image/upload/c_scale,h_120/v1503924352/pets_qsfec8.jpg" alt="home" />
        </span>
        <span>
          Home, Kitchen and Pets
        </span>
      </a></li>
      <li><a>
        <span>
          <img src="http://res.cloudinary.com/cheapass/image/upload/c_scale,h_120/v1503919815/book_fvcg6t.jpg" alt="books" />
        </span>
        <span>
          Books and eBooks
        </span>
      </a></li>
      <li><a>
        <span>
          <img src="http://res.cloudinary.com/cheapass/image/upload/c_scale,h_120/v1503923955/men_ryjmka.jpg" alt="shoes" />
        </span>
        <span>
          Sports, Fitness and Bags
        </span>
      </a></li>
      <li><a>
        <span>
          <img src="http://res.cloudinary.com/cheapass/image/upload/c_scale,h_120/v1503919815/women_iidgzy.jpg" alt="fashion" />
        </span>
        <span>
          Women's and Men's Fashion
        </span>
      </a></li>
      <li><a>
        <span>
          <img src="http://res.cloudinary.com/cheapass/image/upload/c_scale,h_120/v1503924464/camera_pzathe.jpg" alt="TV" />
        </span>
        <span>
          TV, Appliances and Electronics
        </span>
      </a></li>
      <li><a>
        <span>
          <img src="http://res.cloudinary.com/cheapass/image/upload/c_scale,h_120/v1503924288/shampoo_rfdprk.jpg" alt="beauty" />
        </span>
        <span>
          Beauty, Health and Grocery
        </span>
      </a></li>
    </ul>
    <div className="columns small-12 medium-8 large-9">
      <section>
        <iframe
          src="https://cheapass.in/embed/amazon/5940f6c6a9dbdc6d64bba29d"
          frameBorder="0"
          height="550px"
          width="100%"
        />
      </section>
    </div>
    <div className="columns small-12 medium-4 large-3">
      <aside>
        <div id="hint--graph">
          <div className="hint">
            <span className="pulse" />
            <h5>Interact with the price graph on the left by moving your mouse</h5>
            <p>Our systems continously track prices in the background and send you smart price drop alerts.</p>
          </div>
        </div>
        <div id="hint--button">
          <div className="hint">
            <span className="pulse" />
            <h5>Click the button on left to set an alert</h5>
            <p>Try it. You can remove this later.</p>
          </div>
        </div>
      </aside>
    </div>
    <style jsx>{`
      aside {
        position: relative;
        min-height: 610px;
      }
      h3 {
        margin-bottom: 3rem;
      }
      .hint {
        position: relative;
      }
      .hint .pulse {
        position: absolute;
        left: -2rem;
        top: 0;
      }
      #hint--graph {
        position: absolute;
        top: 10rem;
        left: 0;
      }
      #hint--button {
        position: absolute;
        bottom: 0px;
        left: 0;
      }
      ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 4rem;
      }
      ul li {
        margin-right: 1rem;
      }
      ul li a {
        display: block;
        text-align: center;
      }
      ul li a span:first-child {
        display: block;
        min-height: 120px;
      }
      ul li a img {
        display: block;
        margin: 0 auto 1rem;
        vertical-align: middle;
      }
    `}</style>
  </div>
);
