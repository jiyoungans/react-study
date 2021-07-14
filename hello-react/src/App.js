import React, { Component } from 'react';
import ValidationSample from './ValidationSample';
import ScrollBox from './ScrollBox';

/* const App = () => {
    return <EventPracticeFunc />;
}; */

class App extends Component {
    render() {
        return ( 
            <div>
                <ScrollBox ref={(ref) => this.scrollBox = ref} />
                <button onClick={() => this.scrollBox.scrollToBotton()}>맨 밑으로</button>
            </div> 
        );
    }
}

export default App;
