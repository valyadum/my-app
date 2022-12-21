let state = {
    dialogsPage:{
     dialogs:[
        { id: 1, name: "Dimych" },
        { id: 2, name: "Andrew" },
        { id: 3, name: "Sasha" },
        { id: 4, name: "Victor" },
        { id: 5, name: "Valera" },
      ],
      messages:[
        { id: 1, message: "Hi" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "I'm fine thanks"},
        { id: 4, message: "yo" },
        { id: 5, message: "yo" },
      ]  
    },
    profilePage:{
      posts:[
        { id: 1, message: "Hi, how are you?", like: "43" },
        { id: 2, message: "It's my first post", like: "98" },
      ]  
    }
}
export default state;