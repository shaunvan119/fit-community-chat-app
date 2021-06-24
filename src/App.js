
import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed.jsx';

import './App.css';



const App = () => {
    return (
        <ChatEngine
            height="100vh"
            projectID="cda420d1-2334-4a46-a2de-41631fe596a8"
            userName="Fit-Chat-App"
            userSecret="Goodlife1982"
            renderChatFeed={(chatAppProps) => <ChatFeed { ...chatAppProps} />}
            />
        
    );
}

export default App;
