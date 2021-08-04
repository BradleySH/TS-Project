import {useActions } from "../hooks/use-actions"
import "./action-bar.css"
interface ActionBarProps {
    id: string;
}

const ActionBar: React.FC<ActionBarProps> = ({id}) => {
    const {moveCell, deleteCell} = useActions();
    return (
        <div className="action-bar">
            <button className="button is-primary is-small" onClick={() => moveCell(id, "up")}>
                <span className="icon">
                    <i className="fas fa-chevron-up"/>
                </span>
            </button>
            <button className="button is-primary is-small" onClick={() => moveCell(id, "down")}>
                <span className="icon">
                    <i className="fas fa-chevron-down"/>
                </span>
            </button>
            <button className="button is-danger is-small" onClick={() => deleteCell(id)}>
                <span className="icon">
                    <i className="fas fa-window-close"/>
                </span>
            </button>
        </div>
    )
}

export default ActionBar