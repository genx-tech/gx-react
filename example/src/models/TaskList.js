import taskList from "../../mock/list.json"; 

export default {
    reactive: false,    
    state: {
        filters: {}
    },
    actions: {
        load_: (filters) => Promise.resolve(filters ? taskList.filter(task => filters.entries().find(([k,v]) => task[k] == v) != null) : taskList)
    },
    effects: {
        onLoading: () => this.load_(),        
        onChange: () => this.load_(),
    }
};