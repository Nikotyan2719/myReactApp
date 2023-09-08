const UPDATE_NEW_MESSAGE_BODY= 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE='SEND-MESSAGE'


let initialState={
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
}

const dialogsReducer = (state = initialState, action) =>{

    let stateCopy
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return  {
                ...state,
                newMessageBody: action.body
            }
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return  {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 5, message: body}]};
        default:
            return state;
    }


}


export const sendMessageCreator = () =>({type: SEND_MESSAGE})//пушит получившиеся сообщение

export const updateNewMessageBodyCreator = (body) =>(//изменяет текст арию по стейту
    {type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;