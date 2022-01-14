window.Main = {
    set: {},
    get: {},
    action: {},
    value: {},
    storage: {},
    setState: (id, val) => {
        Main.action[id](val);
        Main.value[id] = val;
    },
    val: (id) => {
        if (Main.value[id] !== undefined)
            return Main.value[id]
    }
}