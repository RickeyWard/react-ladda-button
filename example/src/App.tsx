import 'react-ladda-button/dist/ladda.min.css';
import './bootstrap.min.css';
import React, { useState } from 'react';
import LaddaButton, { EXPAND_LEFT, EXPAND_RIGHT, EXPAND_UP, EXPAND_DOWN, CONTRACT, CONTRACT_OVERLAY, ZOOM_OUT, ZOOM_IN, SLIDE_LEFT, SLIDE_RIGHT, SLIDE_UP, SLIDE_DOWN } from 'react-ladda-button';


const withLoadingHook = <P extends object>(Component: React.ComponentType<P>): React.FC<P> =>
  ({...props}:P) => {
      const [loading, setLoading] = useState(false);    
      return <Component {...props as P} loading={loading} onClick={()=>{
        setLoading(true);
        setTimeout(()=>{setLoading(false)},5000);
      }} />;
  };

const withProgressHook = <P extends object>(Component: React.ComponentType<P>): React.FC<P> =>
  ({...props}:P) => {
      const [progress, setProgress] = useState<number|null>(null);    
      return <Component {...props as P} loading={!!progress} progress={progress} onClick={()=>{
        setProgress(0.01);
        const inc = () => {
          setTimeout(() => {
            let nv = 0;
            setProgress((p:any)=>{
              nv = p + 0.05;
              return nv
            });
            if (nv < 1) inc(); else setTimeout(() => {
              setProgress(null);
            }, 75);
          }, Math.random() * (500 - 100) + 100);
        }
        inc();
      }} />;
  };

const ExLoadingLaddaButton = withLoadingHook(LaddaButton);
const ExProgressLaddaButton = withProgressHook(LaddaButton);

const App = () => {
  
  return <article className="examples">
    <div className="intro">
      <h1>Ladda... but ported to react!</h1>
      <p>
        A UI concept which merges loading indicators into the action that invoked them. Primarily intended for use with forms where 
        it gives users immediate feedback upon submit rather than leaving them wondering while the browser does its thing. 
        Ladda is by <a href="http://hakim.se">Hakim El Hattab</a> / <a href="https://twitter.com/hakimel">@hakimel</a>.
      </p>
      <p>
        This is <strong>not a wrapper</strong> but a port of ladda written in <i>typescript</i> with <i>hooks</i> for react 16.8+, this project is by <a href="http://diamonddrake.com/#/about">Rickey Ward</a>.
      </p>
      <h2>To get started</h2>
      <code>npm i react-ladda-button  |  yarn add react-ladda-button</code>
      <p>include the CSS <small>themeless for custom button styles like use with bootstrap</small></p>
      <code>import 'react-ladda-button/dist/ladda.min.css';  |  import 'react-ladda-button/dist/ladda-themeless.min.css';
      </code>
      <p>Import and get Ladda-ing</p>
      <pre>
        {"import LaddaButton, { EXPAND_LEFT } from 'react-ladda-button\n\nconst MyComponent ()=> (\n  <LaddaButton data-style={EXPAND_LEFT}>Submit</LaddaButton>\n);"}
      </pre>
    </div>
    {([EXPAND_LEFT, EXPAND_RIGHT, EXPAND_UP, EXPAND_DOWN] as const).map((sv)=>(
      <section key={sv}>
        <h3>{sv}</h3>
        <ExLoadingLaddaButton data-color="green" data-style={sv}>Submit</ExLoadingLaddaButton>
      </section>
    ))}
    {([CONTRACT, CONTRACT_OVERLAY, ZOOM_IN, ZOOM_OUT] as const).map((sv)=>(
      <section key={sv}>
        <h3>{sv}</h3>
        <ExLoadingLaddaButton style={{zIndex: sv === CONTRACT_OVERLAY ? 10 : 'unset'}} data-color="red" data-style={sv}>Submit</ExLoadingLaddaButton>
      </section>
    ))}
    {([SLIDE_LEFT, SLIDE_RIGHT, SLIDE_UP, SLIDE_DOWN] as const).map((sv)=>(
      <section key={sv}>
        <h3>{sv}</h3>
        <ExLoadingLaddaButton data-color="blue" data-style={sv}>Submit</ExLoadingLaddaButton>
      </section>
    ))}
    <h3>Built-in progress bar</h3>
    <section>
      <h3>{EXPAND_LEFT}</h3>
      <ExProgressLaddaButton data-color="purple" data-style={EXPAND_LEFT}>Submit</ExProgressLaddaButton>
    </section>
    <section>
      <h3>{CONTRACT}</h3>
      <ExProgressLaddaButton data-color="purple" data-style={CONTRACT}>Submit</ExProgressLaddaButton>
    </section>
    <div className="intro mt-6r">
    <h2>Alternate Styles</h2>
      <p>You can use ladda with custom styles super easy, just use the themless css import. I've had great success with tailwindcss and bootstrap</p>
      <code>import 'react-ladda-button/dist/ladda.themeless.min.css'</code>
      <p>Ladda works great with bootstrap! Using the themeless css along side standard boostrap classes</p>
      <code>className="btn btn-primary"</code>
      <p>example:</p>
      <pre>
        {"import LaddaButton, { EXPAND_LEFT } from 'react-ladda-button\nimport 'react-ladda-button/dist/ladda.themeless.min.css\n\nconst MyComponent ()=> (\n  <LaddaButton className=\"btn btn-primary btn-lg\" data-style={EXPAND_LEFT}>Submit</LaddaButton>\n);"}
      </pre>
      </div>
      <div className="bootstrapfont">
        {([EXPAND_LEFT, EXPAND_RIGHT, EXPAND_UP, EXPAND_DOWN] as const).map((sv)=>(
          <section key={`bootstrap-${sv}`}>
            <h3>{sv}</h3>
            <ExLoadingLaddaButton className="btn btn-success btn-lg" data-style={sv}>Submit</ExLoadingLaddaButton>
          </section>
        ))}
        {([CONTRACT, CONTRACT_OVERLAY, ZOOM_IN, ZOOM_OUT] as const).map((sv)=>(
          <section key={`bootstrap-${sv}`}>
            <h3>{sv}</h3>
            <ExLoadingLaddaButton style={{zIndex: sv === CONTRACT_OVERLAY ? 10 : 'unset'}} className="btn btn-danger btn-lg" data-style={sv}>Submit</ExLoadingLaddaButton>
          </section>
        ))}
        {([SLIDE_LEFT, SLIDE_RIGHT, SLIDE_UP, SLIDE_DOWN] as const).map((sv)=>(
          <section key={`bootstrap-${sv}`}>
            <h3>{sv}</h3>
            <ExLoadingLaddaButton className="btn btn-primary btn-lg" data-style={sv}>Submit</ExLoadingLaddaButton>
          </section>
        ))}
        <h3>Built-in progress bar</h3>
        <section>
          <h3>{EXPAND_LEFT}</h3>
          <ExProgressLaddaButton className="btn btn-lg btn-info" data-style={EXPAND_LEFT}>Submit</ExProgressLaddaButton>
        </section>
        <section>
          <h3>{CONTRACT}</h3>
          <ExProgressLaddaButton className="btn btn-lg btn-info" data-style={CONTRACT}>Submit</ExProgressLaddaButton>
        </section>
      </div>
  </article>
}

export default App;
