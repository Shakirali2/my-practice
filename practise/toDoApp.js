const tasks = [
    {
        id: 1,
        task: "Task 1",
        description: "Design a Website"
    },
    {
        id: 2,
        task: "Task 2",
        description: "Build the Website"
    },
    {
        id: 3,
        task: "Task 3",
        description: "Test the Website"
    }
]

tasks.forEach((item) => {
    console.log(item.task);
    console.log(item.description);
    console.log("===========");
})

const deleteToDo = (id) => {
    const index = tasks.findIndex((tasks) => tasks.id === id)
    tasks.splice(index,1)
}
deleteToDo(2)
console.log(tasks);


