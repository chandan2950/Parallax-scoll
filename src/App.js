
import ImageOne from '../src/components/ImageOne'
import ImageThree from './components/Imagethree';
import ImageTwo from './components/Imagetwo';
import Textbox from './components/Textbox';

function App() {
  return (
    <div className="start">
      <ImageOne name='Space'/>
      <Textbox/>
      <ImageTwo name='Galaxy'/>
      <Textbox/>
      <ImageThree name='Space Station'/>
    </div>
  );
}

export default App;
