import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import AlbumFeature from './features/AlbumFeature';
import CounterFeature from './features/Counter';
import HomePage from './features/home';
import ProductFeature from './features/Product';
import ToDoFeature from './features/ToDo';
function App() {

  return (
    <div className='App'>

      <Header />
      <Routes>
        <Route path='/home' element={<Navigate to='/' replace />} />
        <Route path='/' element={<HomePage />} />
        <Route path="/counter" element={<CounterFeature />} />
        <Route path="/todos" element={<ToDoFeature />} />
        <Route path="/albums" element={<AlbumFeature />} />
        <Route path="/products/*" element={<ProductFeature />} />
      </Routes>

    </div>
  );
}

export default App;
