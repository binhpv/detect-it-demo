import React from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';
import detectIt from 'detect-it';
import Interactive from 'react-interactive';
import s from './style';

function TestResult(props) {
  function toString(item) {
    return item === undefined ? 'undefined' : item.toString();
  }
  const { item, detectModule } = props;
  const value = toString(detectModule ? detectIt.state[detectModule][item] : detectIt[item]);
  const color = s.testResultColor(value);
  return <div style={s.testResult}>{item}: <span style={{ color }}>{value}</span></div>;
}
TestResult.defaultProps = {
  detectModule: null,
};
TestResult.propTypes = {
  item: PropTypes.string.isRequired,
  detectModule: PropTypes.string,
};

function App() {
  return (
    <div style={s.root}>
      <h1 id="detect-it" style={s.h1}>Detect It &#8211; Live Detection Test</h1>
      <div style={s.repoLink}>
        <Interactive
          as="a"
          href="https://github.com/rafgraph/detect-it"
          {...s.link}
        >https://github.com/rafgraph/detect-it</Interactive>
      </div>
      <div style={s.code}>
        <div style={s.detects}>
          <TestResult item="deviceType" />
          <TestResult item="passiveEvents" />
          <TestResult item="hasMouse" />
          <TestResult item="hasTouch" />
          <TestResult item="primaryInput" />
        </div>
      </div>


      <h2 id="detect-hover" style={s.h2}>Detect Hover</h2>
      <div style={s.repoLink}>
        <Interactive
          as="a"
          href="https://github.com/rafgraph/detect-hover"
          {...s.link}
        >https://github.com/rafgraph/detect-hover</Interactive>
      </div>
      <div style={s.code}>
        <div style={s.detects}>
          <TestResult item="hover" detectModule="detectHover" />
          <TestResult item="none" detectModule="detectHover" />
          <TestResult item="anyHover" detectModule="detectHover" />
          <TestResult item="anyNone" detectModule="detectHover" />
        </div>
      </div>

      <h2 id="detect-pointer" style={s.h2}>Detect Pointer</h2>
      <div style={s.repoLink}>
        <Interactive
          as="a"
          href="https://github.com/rafgraph/detect-pointer"
          {...s.link}
        >https://github.com/rafgraph/detect-pointer</Interactive>
      </div>
      <div style={s.code}>
        <div style={s.detects}>
          <TestResult item="fine" detectModule="detectPointer" />
          <TestResult item="coarse" detectModule="detectPointer" />
          <TestResult item="none" detectModule="detectPointer" />
          <TestResult item="anyFine" detectModule="detectPointer" />
          <TestResult item="anyCoarse" detectModule="detectPointer" />
          <TestResult item="anyNone" detectModule="detectPointer" />
        </div>
      </div>

      <h2 id="detect-touch-events" style={s.h2}>Detect Touch Events</h2>
      <div style={s.repoLink}>
        <Interactive
          as="a"
          href="https://github.com/rafgraph/detect-touch-events"
          {...s.link}
        >https://github.com/rafgraph/detect-touch-events</Interactive>
      </div>
      <div style={s.code}>
        <div style={s.detects}>
          <TestResult item="hasSupport" detectModule="detectTouchEvents" />
          <TestResult item="browserSupportsApi" detectModule="detectTouchEvents" />
        </div>
      </div>

      <h2 id="detect-passive-events" style={s.h2}>Detect Passive Events</h2>
      <div style={s.repoLink}>
        <Interactive
          as="a"
          href="https://github.com/rafgraph/detect-passive-events"
          {...s.link}
        >https://github.com/rafgraph/detect-passive-events</Interactive>
      </div>
      <div style={s.code}>
        <div style={s.detects}>
          <TestResult item="hasSupport" detectModule="detectPassiveEvents" />
        </div>
      </div>

    </div>
  );
}

render(<App />, document.getElementById('root'));
