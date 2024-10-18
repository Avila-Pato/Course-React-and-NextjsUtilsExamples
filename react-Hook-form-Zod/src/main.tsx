import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import ZodFormComponent from './components/ZodFormComponent'; 
// import ReactHookFormComponent from './components/ReactHookFormComponent'; 

createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <ZodFormComponent />
    {/* <ReactHookFormComponent /> */}
  </StrictMode>
);
