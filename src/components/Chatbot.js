
// import { useState } from 'react'
// import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
// import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';
// import "./Chatbot.css"

// const API_KEY = "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";
// // "Explain things like you would to a 10 year old learning how to code."
// const systemMessage = { //  Explain things like you're talking to a software professional with 5 years of experience.
//     "role": "system", "content": "Explain things like you're talking to a software professional with 2 years of experience."
// }

// function Chatbot() {
//     const [messages, setMessages] = useState([
//         {
//             message: "Hello, I'm your Manage it Well assistant Ask me anything!",
//             sentTime: "just now",
//             sender: "ChatGPT"
//         }
//     ]);
//     const [isTyping, setIsTyping] = useState(false);

//     const handleSend = async (message) => {
//         const newMessage = {
//             message,
//             direction: 'outgoing',
//             sender: "user"
//         };

//         const newMessages = [...messages, newMessage];

//         setMessages(newMessages);

//         // Initial system message to determine ChatGPT functionality
//         // How it responds, how it talks, etc.
//         setIsTyping(true);
//         await processMessageToChatGPT(newMessages);
//     };

//     async function processMessageToChatGPT(chatMessages) { // messages is an array of messages
//         // Format messages for chatGPT API
//         // API is expecting objects in format of { role: "user" or "assistant", "content": "message here"}
//         // So we need to reformat

//         let apiMessages = chatMessages.map((messageObject) => {
//             let role = "";
//             if (messageObject.sender === "ChatGPT") {
//                 role = "assistant";
//             } else {
//                 role = "user";
//             }
//             return { role: role, content: messageObject.message }
//         });


//         // Get the request body set up with the model we plan to use
//         // and the messages which we formatted above. We add a system message in the front to'
//         // determine how we want chatGPT to act. 
//         const apiRequestBody = {
//             "model": "gpt-3.5-turbo",
//             "messages": [
//                 systemMessage,  // The system message DEFINES the logic of our chatGPT
//                 ...apiMessages // The messages from our chat with ChatGPT
//             ]
//         }

//         await fetch("https://api.openai.com/v1/chat/completions", {
//             method: "POST",
//             headers: {
//                 "Authorization": "Bearer " + API_KEY,
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(apiRequestBody)
//         })
//             .then((data) => {
//                 return data.json();
//             })
//             .then((data) => {
//                 console.log(data);

//                 if (data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content) {
//                     setMessages([
//                         ...chatMessages,
//                         {
//                             message: data.choices[0].message.content,
//                             sender: "ChatGPT"
//                         }
//                     ]);
//                     setIsTyping(false);
//                 } else {
//                     console.error("Invalid response format from the GPT-3.5 API");
//                 }
//             })
//             .catch((error) => {
//                 console.error("Error while processing GPT-3.5 response:", error);
//             });
//     }

//     return (
//         <div className="App">
//             <div style={{ position: "relative", height: "800px", width: "700px" }}>
//                 <MainContainer>
//                     <ChatContainer >
//                         <MessageList className='chatContainer'
//                             scrollBehavior="smooth"
//                             typingIndicator={isTyping ? <TypingIndicator content="ChatGPT is typing" /> : null}
//                         >
//                             {messages.map((message, i) => {
//                                 console.log(message)
//                                 return <Message key={i} model={message} />
//                             })}
//                         </MessageList>
//                         <MessageInput placeholder="Type message here" onSend={handleSend} />
//                     </ChatContainer>
//                 </MainContainer>
//             </div>
//         </div>
//     )
// }

// export default Chatbot


import React from 'react'
import "./Chatbot.css"
import ChatBot from 'react-simple-chatbot';
const steps = [
    {
        id: "Greet",
        message: "Hello, Welcome to Manage it Well!! ",
        trigger: "Done",
    },
    {
        id: "Done",
        message: "Please enter your name!",
        trigger: "waiting1",
    },
    {
        id: "waiting1",
        user: true,
        trigger: "Name",
    },
    {
        id: "Name",
        message: "Hi {previousValue}, Please select the category of the issue",
        trigger: "issues",
    },
    {
        id: "issues",
        options: [
            {
                value: "React",
                label: "Dashboard is not visible",
                trigger: "React",
            },
            {
                value: "Want to increase productivity",
                label: "Want to increase productivity",
                trigger: "want to increase productivity",
            },
            { value: "Any other issue", label: "Other issue", trigger: "Other" },
        ],
    },
    {
        id: "React",
        message:
            "Try logging in again with the correct credentials. This will surely help:)",
        trigger: "replies",
    },
    {
        id: "want to increase productivity",
        message:
            "Try navigating to the get some motivation page. The motivational quotes will surely inspire you",
        trigger: "replies",
    },
    {
        id: "Other",
        message:
            " Try contacting on the customer care number 91XXXXXXXXXXX. Our team will resolve your issue ASAP",
        trigger: "replies",
    },
    {
        id: "replies",
        options: [
            {
                value: "OK",
                label: "OK",
                trigger: "OK",
            },
            {
                value: "Thankyou so much for the help",
                label: "Thankyou so much for the help",
                trigger: "Thankyou so much for the help",
            },
        ],
    },
    {
        id: "OK",
        message: " Happy to help",
        trigger: "Contact",
    },
    {
        id: "Thankyou so much for the help",
        message:
            "Happy to help!!",
        trigger: "Contact",
    },
    {
        id: "Contact",
        message:
            "For any other queries reach out to us on 91XXXXXXXXX",
        end: true,
    },

];

function Chat() {
    return (
        <div className="Chat">
            <ChatBot
                steps={steps} />

        </div>
    );
}
export default Chat