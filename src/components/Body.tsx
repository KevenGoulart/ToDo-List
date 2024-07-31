import { useState } from 'react'
import { ClipboardText, PlusCircle } from 'phosphor-react'
import styles from './Body.module.css'
import { Task } from './Task'

export function Body() {
    const [tasks, setTasks] = useState<string[]>([])

    const [doneTasks, setDoneTasks] = useState<string[]>([]);

    const [newTask, setNewTask] = useState('')

    function handleCreateNewTask() {
        setTasks([...tasks, newTask])
        setNewTask('')
    }

    function deleteTask(taskToDelete: string) {
        const tasksWithoutDeletedOne = tasks.filter(task => {
            return task !== taskToDelete;
        })

        setTasks(tasksWithoutDeletedOne);

        {(doneTasks.includes(taskToDelete)) 
            setDoneTasks(doneTasks.filter(task => task !== taskToDelete))}
    }

    function toggleTaskCompletion(taskToToggle: string) {
        if (doneTasks.includes(taskToToggle)) {
            setDoneTasks(doneTasks.filter(task => task !== taskToToggle));
        } else {
            setDoneTasks([...doneTasks, taskToToggle]);
        }
    }

    return (
        <div>
            <div className={styles.headerInput}>
            <input 
                className={styles.textInput} 
                type="text" 
                placeholder='Adicione uma nova tarefa' 
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
            />
            <button 
                className={styles.create}
                onClick={handleCreateNewTask}
                disabled={newTask.length === 0}
            >
            Criar
            <PlusCircle size={20} />
            </button>
        </div>

        <div className={styles.taskDiv}>
            <h4 className={styles.taskText}>Tarefas Criadas <span>{tasks.length}</span></h4>
            <h4 className={styles.taskText}>Concluídas <span>{doneTasks.length} de {tasks.length}</span></h4>
        </div>
        <hr className={styles.hr}/>

        {tasks.length > 0 ? (
            <div>
                {tasks.map(task => {
                return (
                <Task
                    key={task}
                    content={task}
                    isDone={doneTasks.includes(task)}
                    onToggleTask={toggleTaskCompletion}
                    onDeleteTask={deleteTask} 
                />
                )
                })}
            </div>
            ) : (
                <div className={styles.backTextDiv}>
                    <ClipboardText size={60} />
                    <h4>Você ainda não tem tarefas cadastradas</h4>
                    <h4 className={styles.backText}>Crie tarefas e organize seus itens a fazer</h4>
                </div>
            )}
        </div>
    )
}