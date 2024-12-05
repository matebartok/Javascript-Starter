// React.js Helper File

// ============================
// Basic React Concepts
// ============================

// 1. Create a Functional Component
import React from 'react';

function MyComponent() {
  return <h1>Hello, World!</h1>;
}

export default MyComponent;

// 2. JSX Syntax
// JSX allows us to write HTML-like syntax in JavaScript.
const element = <h1>Hello, JSX!</h1>;

// 3. Render a Component
import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyComponent />);

// ============================
// Props
// ============================

// 4. Passing and Using Props
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

// Usage:
// <Greeting name="Alice" />

// ============================
// State
// ============================

import React, { useState } from 'react';

// 5. useState Hook
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

// ============================
// Lifecycle Methods (Hooks)
// ============================

import React, { useEffect } from 'react';

// 6. useEffect Hook
function Timer() {
  useEffect(() => {
    console.log('Component mounted');
    return () => {
      console.log('Component unmounted');
    };
  }, []);

  return <div>Timer Component</div>;
}

// ============================
// Conditional Rendering
// ============================

// 7. Conditional Rendering
function ConditionalComponent({ isLoggedIn }) {
  return isLoggedIn ? <h1>Welcome!</h1> : <h1>Please log in.</h1>;
}

// ============================
// Lists and Keys
// ============================

// 8. Rendering a List
function ItemList({ items }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

// ============================
// Forms
// ============================

// 9. Controlled Form
function FormExample() {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

// ============================
// Context
// ============================

import React, { createContext, useContext } from 'react';

const ThemeContext = createContext();

// 10. Using Context
function ThemeProvider({ children }) {
  const theme = 'dark';
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}

function ThemedComponent() {
  const theme = useContext(ThemeContext);
  return <div>Current theme: {theme}</div>;
}

// Usage:
// <ThemeProvider>
//   <ThemedComponent />
// </ThemeProvider>

// ============================
// Custom Hooks
// ============================

// 11. Custom Hook Example
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return { count, increment, decrement };
}

// Usage:
// const { count, increment, decrement } = useCounter(10);

// ============================
// Performance Optimization
// ============================

import React, { memo, useCallback, useMemo } from 'react';

// 12. Memoized Component
const MemoizedComponent = memo(function ({ value }) {
  console.log('Rendering MemoizedComponent');
  return <div>{value}</div>;
});

// 13. useCallback Hook
function Parent() {
  const handleClick = useCallback(() => {
    console.log('Button clicked');
  }, []);

  return <button onClick={handleClick}>Click me</button>;
}

// 14. useMemo Hook
function ExpensiveCalculation({ num }) {
  const result = useMemo(() => {
    console.log('Calculating...');
    return num ** 2;
  }, [num]);

  return <div>Result: {result}</div>;
}

// ============================
// Error Boundaries
// ============================

import React from 'react';

// 15. Error Boundary
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

// Usage:
// <ErrorBoundary>
//   <ComponentThatMayError />
// </ErrorBoundary>

// ============================
// React Router
// ============================

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

// 16. React Router Example
function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Switch>
        <Route exact path="/" component={() => <h1>Home</h1>} />
        <Route path="/about" component={() => <h1>About</h1>} />
      </Switch>
    </Router>
  );
}

// ============================
// API Calls
// ============================

import React, { useState, useEffect } from 'react';

// 17. Fetch API Example
function FetchData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <ul>
      {data && data.map((item) => <li key={item.id}>{item.title}</li>)}
    </ul>
  );
}

// ============================
// Additional Concepts
// ============================

// 18. Portals, Ref, Suspense, Lazy, etc. can be added here as needed.
