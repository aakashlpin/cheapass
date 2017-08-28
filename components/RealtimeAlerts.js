import React from 'react';
import AnimatedNumber from 'react-animated-number';
import c from '../palette/three';

class RealtimeAlerts extends React.Component {
  render() {
    return (
      <div>
        <h3 className="underline">
          Alerts Sent
        </h3>
        <p>
          <AnimatedNumber
            component="text"
            value={650000}
            style={{
              transition: '0.8s ease-out',
              fontSize: 48,
              transitionProperty:
              'background-color, color, opacity'
            }}
            frameStyle={perc => (
              perc === 100 ? { opacity: 1 } : { opacity: 0.5 }
            )}
            duration={500}
            formatValue={n => n.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
          />
        </p>
        <style jsx>{`
          div {
            text-align: center;
            margin-bottom: 3rem;
          }
        `}</style>
      </div>
    );
  }
}

export default RealtimeAlerts;

