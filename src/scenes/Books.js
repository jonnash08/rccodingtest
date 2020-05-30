import React from 'react';
import { View, Button } from 'react-native';
import { SET_CONTENT, SET_PAGE, SET_FILE, SET_INDEX } from '../actions/types';
import { connect } from 'react-redux';
import { getBook } from '../utils';
import { DEFAULT_WORDS } from '../config';


const BookScreen = ({ navigation, setContent, setPage, setFile, setIndex, file }) => {
    const openBook = async (bookName) => {
        if (file !== bookName) {
            setPage(1);
            setIndex([0,DEFAULT_WORDS]);
            setFile(bookName);
        }
        const content = await getBook(bookName);
        setContent(content);
        navigation.navigate('Content');
    }

    return (
        <View>
            <Button title='Sample Book 1' onPress={() => openBook('sample_book1')} />
            <Button title='Sample Book 2' onPress={() => openBook('sample_book2')} />
        </View>
    );
};

const mapStateToProps = (state) => {
    return {
        file: state.book.file,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setContent: (content) => dispatch({ type: SET_CONTENT, data: content }),
        setPage: (page) => dispatch({ type: SET_PAGE, data: page }),
        setFile: (file) => dispatch({ type: SET_FILE, data: file }),
        setIndex: (data) => dispatch({ type: SET_INDEX, data }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookScreen);