const inputBtn = document.querySelector('.btn-add');
const input = document.querySelector('.todo-input');
const toDoList = document.querySelector('.todolist-items');
const toDoItems = document.querySelectorAll('.todolist-item');
let inputValue;
let newToDo

const addToDo = () => {
	inputValue = input.value;
	if (!inputValue == '') {
		newToDo = document.createElement('li');
		newToDo.textContent = inputValue;
		newToDo.classList.add('todolist-item');
		toDoList.appendChild(newToDo);
		toolsArea();
		input.value = '';
	} else {
		console.log('input jest pusty');
	}
};
const toolsArea = () => {
	const toolsDiv = document.createElement('div');
    toolsDiv.classList.add('tools')

	const completeButton = document.createElement('button');
	completeButton.classList.add('complete');
	completeButton.innerHTML = '<i class="fa-solid fa-check"></i>';

	const deleteButton = document.createElement('button');
	deleteButton.classList.add('delete');
	deleteButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';


    toolsDiv.append(completeButton)
    toolsDiv.append(deleteButton)
    newToDo.append(toolsDiv)
};

const deleteToDo = (e) => {
	const toDoToDelete = e.target.closest('li');
	if (e.target.classList.contains('fa-xmark')) {
		toDoToDelete.remove();
	}
};

const completeToDo = (e) => {
	const toDoToComplete = e.target.closest('li');
    const completeCheck = e.target.closest('.fa-check')
	if (e.target.classList.contains('fa-check')) {
		toDoToComplete.classList.toggle('complete');
        completeCheck.classList.toggle('completeCheck')
	}
};

const enterByKey = e => {
	if(e.key === "Enter"){
		addToDo()
	}
}

toDoList.addEventListener('click', deleteToDo);
toDoList.addEventListener('click', completeToDo);
inputBtn.addEventListener('click', addToDo);
document.addEventListener('keydown', enterByKey)