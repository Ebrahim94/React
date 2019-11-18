import { combineReducers } from 'redux'

const songsReducer = () => {
    return [
        { title: 'No Scrubs', duration: '4:05' },
        { title: 'Macarena', duration: '2:30' },
        { title: 'All Star', duration: '3:15' },
        { title: 'I Want It That Way', duration: '3:05' }
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'CREATE_SONG') {
        return action.payload
    } else {
        return selectedSong
    }
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})

