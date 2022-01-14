import React, { Component, Fragment } from "react";
import { Text, ScrollView, TouchableOpacity } from "react-native";

import { Storage } from "../controllers/storage";

/*
export class HomeScren extends Component {

    constructor(props) {
        super(props);

        this.state = Store.getAll();
      //  this.myRef = React.createRef();
    }

    _StorageSet(props) {
        Storage.set("USER_ID", "id12212121").then(value => {
            Store.stateUpdate(this, "storage", value.key, value.value);
            //if not states action
            // Store.set("storage", value.key, value.value);
        });
    }


    render() {
        return (
            <ScrollView>
                <Text > HOME_SCREEN - {this.state.default.map} = {Store.stateGet(this, "storage", "USER_ID")}
                </Text>
                <Text>STARTED - {this.state.default.map}</Text>

                <Text>
                    {Store.stateGet(this, "default", "app")} -

                    {Store.stateGet(this, "storage", "USER_ID")}
                </Text>
                <TouchableOpacity style={{ backgroundColor: "#ff9900" }} onPress={() => Store.stateUpdate(this, "default", "map", "notHello")}>
                    <Text>Click Me</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ backgroundColor: "#ebebeb" }} onPress={() => Store.stateUpdate(this, "default", "app", "INITED_APP")}>
                    <Text>Click APP ADD</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ backgroundColor: "#ff6600" }} onPress={() => this._StorageSet()}>
                    <Text>Click SHOW USER</Text>
                </TouchableOpacity>
            </ScrollView>

        );
    }
}
*/

const _setHome = () => {
    //Main.set.First("CHANGED_VAL")
   // Main.changeState("First", "CHANGED_VAL")
    //console.log(Main.val.First)
    Store.dispatch({ type: "demo", payload: "ITS_OKAY" });
}

export const HomeScren = () => {

    return (
        <Fragment>
            <Text>HOME_SCREEN - {Store.state.count} </Text>

            <TouchableOpacity style={{ backgroundColor: "#33CCFF" }} onPress={() => _setHome()}>
                <Text>CLICK</Text>
            </TouchableOpacity>
        </Fragment>

    );
}