'use strict';

const STATUS = {
	TO_DO: 'To Do',
	IN_PROGRESS: 'In Progress',
	DONE: 'Done',
};

const DEFAULT_STATUS = STATUS.TO_DO;

const list = {
	'create a new practice task': STATUS.IN_PROGRESS,
	'make a bed': STATUS.DONE,
	'write a post': STATUS.TO_DO,
};

function changeStatus(task, status) {
	if (task in list) list[task] = status;
}

function addTask(task) {
	if (task in list) {
		return;
	} else {
		list[task] = DEFAULT_STATUS;
	}
}

function deleteTask(task) {
	delete list[task];
}

function showList() {
	const tasks = {
		[STATUS.TO_DO]: '',
		[STATUS.IN_PROGRESS]: '',
		[STATUS.DONE]: '',
	};

	for (let key in list) {
		tasks[list[key]] += `  "${key}",\n`;
	}

	console.log(
		`${STATUS.TO_DO}:
${tasks[STATUS.TO_DO] || ' - '}
${STATUS.IN_PROGRESS}:
${tasks[STATUS.IN_PROGRESS] || ' - '}
${STATUS.DONE}:
${tasks[STATUS.DONE] || ' - '}`
	);
}

addTask('buy some groceries');
addTask('buy some milk at the store');
addTask('write a book');

changeStatus('write a post', 'In Progress');
showList();
