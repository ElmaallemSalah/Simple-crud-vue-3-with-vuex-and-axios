<template>
   <div v-if="task" class="p-4 bg-white rounded-lg shadow-md">
    <h2 class="text-lg font-bold mb-4">Edit Task</h2>
    <form @submit.prevent="editTask" class="flex flex-col space-y-4">
      <input
        type="text"
        v-model="taskName"
        :placeholder="task.title"
        required
        class="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"
      />
      <button
        type="submit"
        class="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold px-4 py-2 rounded-md"
      >
        Save Changes
      </button>
    </form>
  </div>
  </template>
  
  <script>
  export default {
    props: {
      task: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {
        taskName: "",
      };
    },
    watch: {
      task: {
        immediate: true,
        handler(newTask) {
          this.taskName = newTask.title;
        },
      },
    },
    methods: {
      editTask() {
        // Call the Vuex action to update the task

        console.log("taskname = "+this.taskName);
        this.$store.dispatch("updateTask", { id: this.task.id, title: this.taskName });
       
      },
    },
  };
  </script>
  