import { defineStore } from "pinia";

const defaultTasks = [
    { id: '1', title: 'Something', state: 'TASK_INBOX' },
    { id: '2', title: 'Something more', state: 'TASK_INBOX' },
    { id: '3', title: 'Something else', state: 'TASK_INBOX' },
    { id: '4', title: 'Something again', state: 'TASK_INBOX' },
]

export const useTaskStore = defineStore({
    id: 'taskbox',
    state: () => ({
        tasks: defaultTasks,
        status: 'idle',
        error: null,
    }),
    actions: {
        archiveTask(id) {
            const task = this.tasks.find((task) => task.id === id);
            if (task) {
                task.state = 'TASK_ARCHIVED';
            }
        },
        pinTask(id) {
            const task = this.tasks.find((task) => task.id === id);
            if (task) {
                task.state = 'TASK_PINNED';
            }
        },
    },
    getters: {
        getFilteredTasks: (state) => {
            const filteredTasks = state.tasks.filter(
                (t) => t.state === 'TASK_INBOX' || t.state === 'TASK_PINNED'
            );
            return filteredTasks;
        },
    },
})