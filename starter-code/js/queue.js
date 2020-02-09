const queueUL = document.querySelector(".list-queue");
const queueInput = document.querySelector(".queue-input");
const warningTopQueue = document.querySelector("#queue-container .warning-top");
const warningBottomQueue = document.querySelector("#queue-container .warning-bottom");
const addQueue = document.querySelector(".btn-add-queue");
const dequeue = document.querySelector(".btn-take-dequeue");

const sizeStructure = 10;
const queue = new QueueDataStructure(sizeStructure);

const  clearQueueInput  = () => {
    queueInput.value = "" 
};

const generateListQueue = () => {
    warningTopQueue.style.display = "none";
    warningBottomQueue.style.display = "none";
    queueUL.innerHTML = "";
    let length = queue.display().length;
    let size = sizeStructure - length;
    queue.display().forEach(item => {
        let li = document.createElement("li");
        li.className = "active";
        li.innerText = item;
        queueUL.appendChild(li);
    });
    for (let i = 0; i < size; i++) {
        let li = document.createElement("li");
        li.className = "inactive";
        li.innerHTML = '&nbsp;';
        queueUL.appendChild(li);
    }
};
generateListQueue();

const generateWarningQueue = type => {
    if (type === "underflow") {
        warningBottomQueue.style.display = "block";
        warningBottomQueue.innerText = type;
    } else if (type === "overflow") {
        warningTopQueue.style.display = "block";
        warningTopQueue.innerText = type;
    }    
};

const addEndEnqueue = () => {
    if (queue.enqueue(queueInput.value) === -1){
        generateWarningQueue("overflow");
    } else {
        clearQueueInput();
        generateListQueue();
    };
    console.log(queue.display());
};
const takeEndDequeue = () => {
    if (queue.dequeue() === -1){
        generateWarningQueue("underflow");
    } else {
        generateListQueue();
    };
    console.log(queue.display())
};


addQueue.addEventListener('click', addEndEnqueue);
dequeue.addEventListener('click', takeEndDequeue);