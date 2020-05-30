import React, { useEffect, useState } from 'react';
import { Text, } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import { SET_PAGE, SET_INDEX } from '../actions/types';
import { connect } from 'react-redux';
import { DEFAULT_WORDS } from '../config';

const ContentScreen = ({ content, page, setPage, firstIndex, lastIndex, setIndex }) => {
    const [displayContent, setDisplayContent] = useState();
    const [length, setLength] = useState();

    useEffect(() => {
        splitContent();
    }, []);


    const splitContent = (cmd) => {
        if (content) {
            let nContent;
            if (cmd == 'next' && lastIndex < length) {
                let nFirstIndex = firstIndex + DEFAULT_WORDS;
                let nLastIndex = lastIndex + DEFAULT_WORDS;
                nContent = content.split(' ').slice(nFirstIndex, nLastIndex);

                setIndex([nFirstIndex, nLastIndex]);
                setPage(page + 1);
            } else if (cmd == 'previous' && page > 1) {
                let nFirstIndex = firstIndex - DEFAULT_WORDS;
                let nLastIndex = lastIndex - DEFAULT_WORDS;
                nContent = content.split(' ').slice(nFirstIndex, nLastIndex);

                setIndex([nFirstIndex, nLastIndex]);
                setPage(page - 1);
            } else {
                nContent = content.split(' ').slice(firstIndex, lastIndex);
                setLength(content.split(' ').length);
            }
            setDisplayContent(nContent.join(' '));
        }
    }

    const config = {
        velocityThreshold: 0.3,
        directionalOffsetThreshold: 80
      };

    return (
        <GestureRecognizer
            onSwipeLeft={() => splitContent('next')}
            onSwipeRight={() => splitContent('previous')}
            config={config}
            style={{ flex: 1, justifyContent: 'center', marginHorizontal: 100  }}
        >
            <Text style={{ fontSize: 20 }}>{displayContent}</Text>
        </GestureRecognizer>
    );
};

const mapStateToProps = (state) => {
    const { book } = state;
    return {
        content: book.content,
        page: book.page,
        firstIndex: book.firstIndex,
        lastIndex: book.lastIndex
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setPage: (pageNumber) => dispatch({ type: SET_PAGE, data: pageNumber }),
        setIndex: (data) => dispatch({ type: SET_INDEX, data }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContentScreen);