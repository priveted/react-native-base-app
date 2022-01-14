import React, { useState, useEffect, useReducer, useMemo } from 'react';
import { SafeAreaView, StatusBar, Text, TouchableOpacity } from 'react-native';

//Store 
import { InitalKeys } from './app/modules/store/inital';
import { Reducer } from './app/modules/store/reducer';
import { StateString } from './app/components/get-store-state';

//Async storage
import { Storage } from "./app/modules/storage/storage";


import { Navigation } from './app/components/Navigation';

import { HomeScren } from "./app/screens/home";

window.Store = {
    state: {},
    dispatch: {}
}


function App() {
    [Store.state, Store.dispatch] = useReducer(Reducer, InitalKeys);


    useEffect(() => {

        //Import Storage to Store 
        Storage.getAll().then(value => {
            Store.dispatch({ type: "storage/init", payload: value });
            Store.dispatch({ type: "storage/status", payload: true });
        });

    }, []);


    return (
        <SafeAreaView style={{ flex: 1, height: "100%", width: "100%" }}>

            {Store.state.storageStatus &&
                <HomeScren />
            }

            <StateString id="demo" />


        </SafeAreaView>

    );
}
export default App;
