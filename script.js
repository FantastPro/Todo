const STATUS = {
	TO_DO: 'To Do',
	DONE: 'Done',
	IN_PROGRESS: 'In Progress',
}

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
		list[newTask] = 'To Do';
		console.log('New task added! 👌');
	} else {
		console.log('Error! Wrong task! 🤷');
	}
}

function deleteTask(task) {
	if (list[task]) {
		delete list[task];
		console.log('The task was deleted! 👌');
	} else {
		console.log('Error, wrong task! 🤷');
	}
}

function showList() {
	// ToDO
	let ToDotasks = '';
	console.log('Todo:');

	for (key in list) {
		if (list[key] === 'To Do') {
			console.log(`  ${key},`);
			ToDotasks += key;
		}
	}
	if (!ToDotasks) console.log('-');

	// In Progress
	let InProgressTasks = '';
	console.log('In Progress:');
	for (key in list) {
		if (list[key] === 'In Progress') {
			console.log(`  ${key},`);
			InProgressTasks += key;
		}
	}
	if (!InProgressTasks) console.log('-');

	// Done
	let doneTasks = '';
	console.log('Done:');
	for (key in list) {
		if (list[key] === 'Done') {
			console.log(`  ${key},`);
			doneTasks += key;
		}
	}
	if (!doneTasks) console.log('-');
}

showList();