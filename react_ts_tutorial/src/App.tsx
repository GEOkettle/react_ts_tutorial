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
const defaultContainierProps = {
    heading: <strong>My heading</strong>,
    footer : <strong>My footer</strong>
}
type ContainerProps = { children: ReactNode} & typeof defaultContainierProps

function Container({ heading, children,footer }: ContainerProps): ReactElement{ 
    return(
        <div>
            <h1>{heading}</h1>
            {children}
            <h1>{footer}</h1>
        </div>
    )
}
Container.defaultProps=defaultContainierProps
function App() {
  return (
    <div className="App">
          <Heading title={'hillow WOrld'} />
          <HeadingWIthContent><strong>fsdfdsa</strong></HeadingWIthContent>
          <Container>Hello my bello</Container>
    </div>
  );
}

export default App;
