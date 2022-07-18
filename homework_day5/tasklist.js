
class Task {
    constructor(taskName, completionStatus) {
        this.taskName = taskName;
        this.completionStatus = 'Incomplete';
    }
}

class UserInterface {
    constructor() {
        this.taskInput = document.getElementById('task-input');
        this.completionStatusInput = 'Not Completed';
        this.form = document.getElementById('form');
        this.tableBody = document.getElementById('table-body');

        this.tasks = [];
    }

    bindEventListeners() {
        this.form.addEventListener('submit', (e) => this.onFormSubmit(e));
    }

    onFormSubmit(event) {
        event.preventDefault();

        const task = new Task(
            this.taskInput.value,
            this.completionStatusInput.value,
        );

        this.tasks.push(task);
        this.populateTaskTable();

        this.taskInput.value = '';
        this.completionStatusInput = '';
    }

    populateTaskTable() {
        
        this.tableBody.innerHTML = '';

        for (const task of this.tasks) {
            const row = document.createElement('tr');

            const taskNameCell = document.createElement('td');
            const taskCompletionStatusCell = document.createElement('td');
            const actionsCell = document.createElement('td'); 

            const checkButton = document.createElement('button');

            taskNameCell.innerHTML = task.taskName;
            taskCompletionStatusCell.innerHTML = task.completionStatus;
            checkButton.innerHTML = '✓';

            checkButton.addEventListener('click', (e) => this.onCheckButtonClick(task));
            actionsCell.append(checkButton);

            row.append(taskNameCell);
            row.append(taskCompletionStatusCell);
            row.append(actionsCell);
            this.tableBody.append(row);
        }
    }

    onCheckButtonClick(taskToCheck) {
        this.tasks = this.tasks.filter((task) => {
            return task.taskName !== taskToCheck.taskName;
        });
        this.populateTaskTable();
    }
}

const ui = new UserInterface();
ui.bindEventListeners();