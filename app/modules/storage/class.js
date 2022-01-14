import AsyncStorage from '@react-native-async-storage/async-storage';

export class LightStorage {

    async getAll() {
        var Temp = {};
        const keys = await AsyncStorage.getAllKeys();
        const result = await AsyncStorage.multiGet(keys);
        for (var item of result) {
            Temp[item[0]] = item[1]
        }
        Temp.status = true
        return Temp;
    }

    async get(key, isJSON) {
        try {
            var data = await AsyncStorage.getItem(key);
            return (isJSON) ? JSON.parse(data) : data;
        } catch (e) {
            console.error("Storage method GET failed", e)
        }
    }

    async set(key, value) {
        try {
            var _v = (typeof value === "object") ? JSON.stringify(value) : value;
            await AsyncStorage.setItem(key, _v)
        } catch (e) {
            console.error("Storage method SET failed", e)
        }
        return { key: key, value: value };
    }

    async remove() {
        try {
            await AsyncStorage.clear()
        } catch (e) {
            console.error("Storage method CLEAR ALL failed", e)
        }
        console.log('Storage cleared');
    }

    async clearAll() {
        try {
            await AsyncStorage.clear()
        } catch (e) {
            console.error("Storage method CLEAR ALL failed", e)
        }
        console.log('Storage cleared');
    }

}