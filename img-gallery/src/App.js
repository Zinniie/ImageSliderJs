import logo from './logo.svg';
import './App.css';
import images from "./ImageSlider/images";
import ImageSlider from "./ImageSlider/imageSlider";

function App() {
  return (
    <div className="App">
    <ImageSlider images={images}/>
    </div>
  );
}

export default App;
