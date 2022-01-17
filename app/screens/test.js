import React, { Fragment } from "react";
import { Text, Button } from "react-native";


const _setHome = () => {
    //Example
    Store.dispatch({ type: "demo", payload: "ITS_OKAY" });
}

export const ScreenTest = ({navigation}) => {

    return (
        <Fragment>
            <Text>it`s Tests</Text>

            <Button onPress={() => navigation.navigate('test_stack')} title="Open stack navigation" color="#841584"/>
        </Fragment>
    );
}