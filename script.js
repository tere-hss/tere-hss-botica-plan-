// Task Manager Class
class TaskManager {
    constructor() {
        this.tasks = [];
        this.currentFilter = 'all';
        this.storageKey = 'todoAppTasks';
        this.init();
    }

    init() {
        this.loadTasks();
        this.setupEventListeners();
        this.render();
    }

    setupEventListeners() {
        const addBtn = document.getElementById('addBtn');
        const taskInput = document.getElementById('taskInput');
        const clearBtn = document.getElementById('clearBtn');
        const filterBtns = document.querySelectorAll('.filter-btn');

        addBtn.addEventListener('click', () => this.addTask());
        taskInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.addTask();
            }
        });

        clearBtn.addEventListener('click', () => this.clearCompleted());

        filterBtns.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                document
                    .querySelectorAll('.filter-btn')
                    .forEach((b) => b.classList.remove('active'));
                e.target.classList.add('active');
                this.currentFilter = e.target.dataset.filter;
                this.render();
            });
        });
    }

    addTask() {
        const taskInput = document.getElementById('taskInput');
        const text = taskInput.value.trim();

        if (!text) {
            alert('Por favor, escribe una tarea.');
            return;
        }

        const newTask = {
            id: Date.now(),
            text: text,
            completed: false,
            createdAt: new Date().toLocaleString('es-ES'),
            priority: 'medium',
        };

        this.tasks.unshift(newTask);
        this.saveTasks();
        taskInput.value = '';
        taskInput.focus();
        this.render();
    }

    deleteTask(id) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
        this.saveTasks();
        this.render();
    }

    toggleTask(id) {
        const task = this.tasks.find((t) => t.id === id);
        if (task) {
            task.completed = !task.completed;
            this.saveTasks();
            this.render();
        }
    }

    clearCompleted() {
        const completedCount = this.tasks.filter((t) => t.completed).length;
        if (completedCount === 0) {
            alert('No hay tareas completadas para limpiar.');
            return;
        }

        if (confirm(`¿Eliminar ${completedCount} tarea(s) completada(s)?`)) {
            this.tasks = this.tasks.filter((t) => !t.completed);
            this.saveTasks();
            this.render();
        }
    }

    getFilteredTasks() {
        switch (this.currentFilter) {
            case 'active':
                return this.tasks.filter((t) => !t.completed);
            case 'completed':
                return this.tasks.filter((t) => t.completed);
            default:
                return this.tasks;
        }
    }

    saveTasks() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.tasks));
    }

    loadTasks() {
        const stored = localStorage.getItem(this.storageKey);
        this.tasks = stored ? JSON.parse(stored) : [];
    }

    render() {
        const taskList = document.getElementById('taskList');
        const emptyState = document.getElementById('emptyState');
        const totalTasks = document.getElementById('totalTasks');
        const completedTasks = document.getElementById('completedTasks');
        const clearBtn = document.getElementById('clearBtn');

        const filteredTasks = this.getFilteredTasks();
        const totalCount = this.tasks.length;
        const completedCount = this.tasks.filter((t) => t.completed).length;

        // Update stats
        totalTasks.textContent = `Total: ${totalCount}`;
        completedTasks.textContent = `Completadas: ${completedCount}`;

        // Toggle clear button
        clearBtn.disabled = completedCount === 0;

        // Clear task list
        taskList.innerHTML = '';

        // Show empty state if no tasks
        if (totalCount === 0) {
            emptyState.classList.add('show');
            return;
        } else {
            emptyState.classList.remove('show');
        }

        // Show filtered tasks
        if (filteredTasks.length === 0) {
            taskList.innerHTML =
                '<li style="text-align: center; padding: 20px; color: var(--text-light);">No hay tareas en esta categoría</li>';
            return;
        }

        filteredTasks.forEach((task) => {
            const li = document.createElement('li');
            li.className = `task-item ${task.completed ? 'completed' : ''}`;

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.className = 'task-checkbox';
            checkbox.checked = task.completed;
            checkbox.addEventListener('change', () => this.toggleTask(task.id));

            const span = document.createElement('span');
            span.className = 'task-text';
            span.textContent = task.text;

            const prioritySpan = document.createElement('span');
            prioritySpan.className = `task-priority priority-${task.priority}`;
            prioritySpan.textContent = task.priority.charAt(0).toUpperCase() + task.priority.slice(1);

            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'btn-delete';
            deleteBtn.textContent = 'Eliminar';
            deleteBtn.addEventListener('click', () => this.deleteTask(task.id));

            const actions = document.createElement('div');
            actions.className = 'task-actions';
            actions.appendChild(deleteBtn);

            li.appendChild(checkbox);
            li.appendChild(span);
            li.appendChild(prioritySpan);
            li.appendChild(actions);

            taskList.appendChild(li);
        });
    }
}

// Initialize the app
const app = new TaskManager();