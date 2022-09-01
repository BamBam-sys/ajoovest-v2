import {
  Features,
  Hero,
  Nav,
  HowItWorks,
  Faqs,
  CallToAction,
  Footer,
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
      <Footer />
    </div>
  );
}

export default App;
