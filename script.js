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
	const isValidStatus = status in STATUS;
	console.log(isValidStatus);
	if (task in list) {
		list[task] = status;
		console.log('Status changed! 👌');
	} else {
		console.log('Error! There is no such task or wrong status! 🤷');
	}
}

function addTask(task) {
	if (task in list) {
		console.log('Such task is already exists 🤷');
	} else {
		list[task] = STATUS.IN_PROGRESS;
	}
}

function deleteTask(task) {
	if (task in list) {
		delete list[task];
		console.log('The task was deleted! 👌');
	} else {
		console.log("Such task doesn'nt exists 🤷");
	}
}

function showList() {
	let toDo = '';
	let inProgress = '';
	let done = '';
	const noTask = '\n -';

	for (let task in list) {
		switch (list[task]) {
			case STATUS.TO_DO:
				toDo += `\n "${task}",`;
				break;
			case STATUS.IN_PROGRESS:
				inProgress += `\n "${task}",`;
				break;
			case STATUS.DONE:
				done += `\n "${task}",`;
				break;
			default:
				break;
		}
	}
	console.log(`To Do: ${toDo || noTask}\nIn Progress: ${inProgress || noTask}\nDone: ${done || noTask}`);
}

showList();
// changeStatus('write a post', 'TO_DO')
