import UseFetchHookCheck from './list/usefetch/test.jsx';
import UseOnClickOutsideTest from './list/useoutsideclick/test.jsx';
import UseWindowResizeTest from './list/useresizewindow/test.jsx';

function App() {
  return (
    <div className="App">
      <UseFetchHookCheck />
      <UseOnClickOutsideTest />
      <UseWindowResizeTest/>
    </div>
  );
}

export default App;
