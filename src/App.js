import './App.css';
import ImageUpload from './components/ImageUpload';
import Registration from './components/Registration';
import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
      <h1>AltiusHub Assignment</h1>
      <Registration />
      <ImageUpload />
      <Todo />
    </div>
  );
}

export default App;
