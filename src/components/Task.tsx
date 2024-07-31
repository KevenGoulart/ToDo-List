import { CheckCircle, Circle, Trash } from 'phosphor-react'
import styles from './Task.module.css'

interface TaskProps {
    isDone: boolean;
    content: string;
    onToggleTask: (task: string) => void;
    onDeleteTask: (task: string) => void;
}

export function Task({ content, onDeleteTask, isDone, onToggleTask }: TaskProps) {
    function handleDeleteTask(){
        onDeleteTask(content);
    }

    function handleToggleTask(){
        onToggleTask(content);
    }

    return (
        <div className={styles.taskList}>
                <div className={styles.listItems} >
                    <button onClick={handleToggleTask}>
                        {isDone ? (
                            <CheckCircle size={24} weight='fill' />
                        ) : <Circle size={24} /> }
                    </button>
                    <div className={isDone ? styles.contentDone : ''}>
                        {content}
                    </div>
                    <button onClick={handleDeleteTask} title="Deletar task">
                            <Trash size={24} />
                    </button>
                </div>
        </div>
    )
}