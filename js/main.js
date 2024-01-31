const { createApp } = Vue

createApp({
    data() {
        return {
           tasks: [
           ],

           newTask:{
            text: '',
            textClass:'',
            done: false,
           },

           error:{
            text:'',
            show: false,
           }
        }
    },

    methods: {
        createNewTask(){
            const newTaskCopy = {...this.newTask};

            if(newTaskCopy.text.length < 5){
                this.error.text = 'devi inserire piu di 5 lettere';
                this.error.show = true;
                return
            }

            this.tasks.push(newTaskCopy);
            this.newTask.text = '';
            this.error.show = false;
        },

        newTaskDone(index){
            const task = this.tasks[index];

            task.done = !task.done;
            task.textClass = task.done ? 'text-done' : '';
        },

        deletetask(index){
            this.tasks.splice(index, 1);
        }
    }

}).mount('#app')

