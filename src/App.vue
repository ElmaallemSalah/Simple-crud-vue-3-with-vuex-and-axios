<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-4 text-center">Task Management App</h1>
    <task-create-form />
    <div class="mt-4">
      <h2 class="text-lg font-bold mb-2">Tasks</h2>
      <ul>
        <li v-for="task in tasks" :key="task.id" class="mb-4 bg-white rounded-lg shadow-md p-4">
          <div class="flex justify-between items-center">
            <span class="text-lg">{{ task.title }}</span>
            <div>
              <button
                @click="editTask(task)"
                class="bg-blue-500 hover:bg-blue-600 text-white font-bold px-4 py-2 rounded-md mr-2"
              >
                Edit
              </button>
              <task-delete-button :task-id="task.id" />
            </div>
          </div>
          <task-edit-form v-if="selectedTask === task" :task="selectedTask" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import TaskCreateForm from "./components/TaskCreateForm.vue";
import TaskEditForm from "./components/TaskEditForm.vue";
import TaskDeleteButton from "./components/TaskDeleteButton.vue";

export default {
  components: {
    TaskCreateForm,
    TaskEditForm,
    TaskDeleteButton,
  },
  computed: {
    tasks() {
      return this.$store.state.tasks;
    },
    selectedTask() {
      return this.$store.state.selectedTask;
    },
  },
  mounted() {
    // Fetch tasks from the API when the app is loaded
    this.$store.dispatch("fetchTasks");
  },
  methods: {
    editTask(task) {
      this.$store.commit("SET_SELECTED_TASK", task);
    },
    getImageUrl(url) {
     return new URL(url,import.meta.url).href
      }
  
  },
};
</script>


<style scoped>
/* Custom styles for the Task Management App */
li {
  transition: background-color 0.2s;
}

li:hover {
  background-color: #f7fafc;
}

/* Responsive styles */
@media screen and (max-width: 640px) {
  .container {
    padding: 2rem;
  }
  .text-3xl {
    font-size: 2rem;
  }
  .text-lg {
    font-size: 1.125rem;
  }
  .p-4 {
    padding: 1rem;
  }
}
</style>