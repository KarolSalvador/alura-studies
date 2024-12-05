import { Itarefa } from '../../types/tarefas';
import Item from './Item';
import style from './Lista.module.scss';


function Lista({ tarefas }: { tarefas: Itarefa[]}) {
    
    return (
        <aside className={style.listaTarefas}>
            <h2> Estudos do dia </h2>
            <ul>
                {tarefas.map((item, index) => (  //.map retorna um JSX conforme indicado, no caso um li 
                    <Item 
                        key={index}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default Lista;