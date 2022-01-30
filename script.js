const STATUS = {
	TO_DO: 'To Do',
	DONE: 'Done',
	IN_PROGRESS: 'In Progress',
};

const DEFAULT_STATUS = STATUS.TO_DO;

const list = {
	'create a new practice task': STATUS.IN_PROGRESS,
	'make a bed': STATUS.DONE,
	'write a post': STATUS.TO_DO,
	'buy some bread': STATUS.TO_DO,
};

function changeStatus(task, status) {
	if (task in list && status) {
		list[task] = status;
		console.log('Status changed! 👌');
	} else {
		console.log('Error! There is no such task or wrong status! 🤷');
	}
}

function addTask(newTask) {
	if (newTask) {
		list[newTask] = DEFAULT_STATUS;
		console.log('New task added! 👌');
	} else {
		console.log('Error! Wrong task! 🤷');
	}
}

function deleteTask(task) {
	if (task in list) {
		delete list[task];
		console.log('The task was deleted! 👌');
	} else {
		console.log('Error, wrong task! 🤷');
	}
}

function showList() {
	let toDo = '';
	let inProgress = '';
	let done = '';

	for (let key in list) {
		switch (list[key]) {
			case STATUS.TO_DO:
				toDo += key + '\n';
				break;
			case STATUS.IN_PROGRESS:
				inProgress = key + '\n';
				break;
			case STATUS.DONE:
				done += key + '\n';
				break;
			default:
				break;
		}
	}
}

showList();
