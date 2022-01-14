import React from "react";
import { Text, View } from "react-native";
export const StateString = (props) => {
    if (props.id !== undefined) {
        return (<Text> {Store.state[props.id]} </Text>)
    }
}
