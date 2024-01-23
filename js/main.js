// console.log(Vue)

const {createApp} = Vue;

const app = createApp ({
    name: 'ToDo List',
    data() {
        return {
            tasks,

        }
    },
    methods: {
        removeTask(id) {
            this.tasks.forEach((task, i) => {if (id === task.id) this.tasks.splice(i, 1)}) 
        }
    }


});

app.mount('#root')