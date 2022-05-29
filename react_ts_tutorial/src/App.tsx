import React, {ReactElement, ReactNode} from 'react';

import './App.css';
//Conventional props
function Heading({ title }: { title: string }) { 
    return <h1>{title}</h1>
}
function HeadingWIthContent({ children }: { children: ReactNode }): ReactElement { 
    return <h1>{children}</h1>
}
// default props
function App() {
  return (
    <div className="App">
          <Heading title={'hillow WOrld'} />
          <HeadingWIthContent><strong>fsdfdsa</strong></HeadingWIthContent>
    </div>
  );
}

export default App;
