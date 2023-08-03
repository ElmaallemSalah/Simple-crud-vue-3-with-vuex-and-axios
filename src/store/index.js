import { createStore } from "vuex";
import axios from 'axios';
export const store = createStore({
  state() {
    return {
      tasks: [],
    };
  },
  mutations: {
    SET_TASKS(state, tasks) {
      state.tasks = tasks;
    },
    ADD_TASK(state, task) {
      state.tasks.push(task);
    },
    DELETE_TASK(state, taskId) {
      state.tasks = state.tasks.filter((task) => task.id !== taskId);
    },
  },
  actions: {
    async fetchTasks({ commit }) {
        try {
          const response = await axios.get('https://fakestoreapi.com/products');
          commit('SET_TASKS', response.data);
        } catch (error) {
          console.error('Error fetching tasks:', error);
        }
      },
  
      async addTask({ commit }, newTask) {
        try {
          const response = await axios.post('https://fakestoreapi.com/products', newTask);
          commit('ADD_TASK', response.data);
        } catch (error) {
          console.error('Error adding task:', error);
        }
      },
  
      async deleteTask({ commit }, taskId) {
        try {
          await axios.delete(`https://fakeapi.example.com/tasks/${taskId}`);
          commit('DELETE_TASK', taskId);
        } catch (error) {
          console.error('Error deleting task:', error);
        }
      },   
},
});

