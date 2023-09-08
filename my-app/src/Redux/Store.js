import profileReducer from "./profilePage-reducer";
import dialogsReducer from "./dialogsPage-reducer";
import sidebarReducer from "./miniFriendsList-reducer";



let store = {//"Свой редакс"
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you', likesCount: 15},
                {id: 2, message: 'its my first post', likesCount: 29},
                {id: 3, message: 'This is my new post', likesCount: 1}],
            newPostText: "Simple text"
        },

        dialogsPage: {
            dialogs: [
                {id: 1, name: 'User 1'},
                {id: 2, name: 'User 2'},
                {id: 3, name: 'User 3'},
                {id: 4, name: 'User 4'},
                {id: 5, name: 'User 5'}],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Yo'},
                {id: 3, message: 'Ky'},
                {id: 4, message: 'Hello'}],
            newMessageBody: ""
        },

        miniFriendsList: [
            {id: 1, name: 'User 1', url: 'https://wallpapers.com/images/hd/funny-owl-pictures-cqs5b0p8uxmlxtsj.jpg'},
            {
                id: 2,
                name: 'User 2',
                url: 'https://i.pinimg.com/originals/99/80/bb/9980bb09b8c307934c35cd5d3b1a11fc.png'
            },
            {id: 3, name: 'User 3', url: 'https://picfiles.alphacoders.com/484/484341.jpg'}]

    },//данные

    _callSubscriber() { //заглушка для будущей коллбэк функции, которая ререндерит страницу
    },

    getState() {
        return this._state
    },//получить данные

    subscribe(observer) {//принимаем функцию ререндера
        this._callSubscriber = observer;//копируем эту функцию
    },

    _addPost() {  //добавить пост

        let newPost = {
            id: 4,
            message: this._state.profilePage.newPostText,  //берет текст введенный в текст арию в MyPots
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);//пушим новый пост
        this._state.profilePage.newPostText = ('');//очищаем строку ввода
        this._callSubscriber(this._state);//ререндерит
    },

    _updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText//в данные стейта записывает полученный в текст арии в MyPosts текст
        this._callSubscriber(this._state);//ререндерит
    },

    dispatch(action) { // { type: 'ADD-POST'}

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.miniFriendsList = sidebarReducer(this._state.miniFriendsList, action)

        this._callSubscriber(this._state);

    }


}


export default store;
