import React, { useState } from 'react'
import { View, StyleSheet, TextInput, Button } from 'react-native'

const AddToDo = ({ submitHandler }) => {
    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val);
    }

    return (
        <View>
            <TextInput
                style={styles.input} 
                placeholder='new todo ...'
                onChangeText={changeHandler}
            />

            <Button 
                title='add todo'
                color='teal'
                onPress={()=>{ submitHandler(text)}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderRightColor: '#ddd'
    }
})

export default AddToDo
