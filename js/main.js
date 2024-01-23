// console.log(Vue)

const {createApp} = Vue;

const app = createApp ({
    name: 'ToDo List',
    data() {
        return {
            tasks,
            newTaskText: '',
        }
    },
    methods: {
        removeTask(id) {
            this.tasks.forEach((task, i) => {if (id === task.id) this.tasks.splice(i, 1)}) 
        },
        addTask() {

            if (this.newTaskText) {
                const newTask = {
                    id: new Date().toISOString(),
                    done: false,
                    text: this.newTaskText
                }
    
                this.tasks.push(newTask)
    
                this.newTaskText = ''
            } else {
                return
            }

            
        }
    }


});

app.mount('#root')