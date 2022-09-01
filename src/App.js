import {
  Features,
  Hero,
  Nav,
  HowItWorks,
  Faqs,
  CallToAction,
} from './components';
function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Features />
      <HowItWorks />
      <Faqs />
      <CallToAction />
    </div>
  );
}

export default App;
