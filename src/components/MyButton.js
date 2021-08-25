import React from 'react';
import { TouchableOpacity, Text, TextPropTypes } from 'react-native';

const MyButton = props => {
    return (
        <TouchableOpacity
            style={{
                backgroundColor: '#3498db',
                padding: 16,
                margin: 10,
                borderRadius: 10,
            }}
            onPress={() => //alert('Click !!!')}
                            props.onPress()}
        >
            <Text style={{ color: 'white', fontSize: 24}}>
                {props.children || props.title}</Text>
        </TouchableOpacity>
    );
};

MyButton.defaultProps = {
    title: 'Test',
};

/*MyButton.propTypes = {
    title: PropTypes.string,
    onPress: PropTypes.func.isRequired,
};*/

export default MyButton;