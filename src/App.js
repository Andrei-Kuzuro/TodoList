import './App.css';
import { ToDoList } from './components/ToDoList/ToDoList';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ToDoList/>
      </Provider>
    </div>
  );
}


export default App;
