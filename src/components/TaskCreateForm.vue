<template>
  <div class="p-4 bg-white rounded-lg shadow-md">
    <h2 class="text-lg font-bold mb-4">Create New Task</h2>
    <form @submit.prevent="createTask" class="flex flex-col space-y-4">
      <input
        type="text"
        v-model="newTaskName"
        placeholder="Task Name"
        required
        class="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"
      />
      <button
        type="submit"
        class="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold px-4 py-2 rounded-md"
      >
        Add Task
      </button>
    </form>
  </div>
</template>
  
  <script>
  export default {
    data() {
      return {
        newTaskName: "",
      };
    },
    methods: {
      createTask() {
       
        this.$store.dispatch("addTask", { title: this.newTaskName });
        this.newTaskName = "";
      },
    },
  };
  </script>
  