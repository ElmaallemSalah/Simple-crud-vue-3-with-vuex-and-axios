<template>
    <div class="mt-1">
      <button
        @click="deleteTask"
        class="w-full bg-red-500 hover:bg-red-600 text-white font-bold px-4 py-2 rounded-md mr-2"
      >
    
        Delete
      </button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      taskId: {
        type: Number,
        required: true,
      },
    },
    methods: {
      deleteTask() {
        // Call the Vuex action to delete the task
        this.$store.dispatch("deleteTask", this.taskId);
      },
    },
  };
  </script>
  