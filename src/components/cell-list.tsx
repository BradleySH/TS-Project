import {Fragment} from "react";
import {useTypedSelector} from "../hooks/use-typed-selector";
import AddCell from "./add-cell";
import CellListItem from "./cell-list-item";
import "./add-cell.css"
import "./cell-list.css";



const CellList: React.FC = () => {
   const cells =  useTypedSelector(({ cells: { order, data } }) => order.map((id: any) => data[id]));
    const renderedCells = cells.map((cell: any) => (
        <Fragment key={cell.id}>
            <CellListItem  cell={cell} />
            <AddCell previousCellId={cell.id} />
        </Fragment>
        ));

        

    return (
    <div className="cell-list">
        <AddCell forceVisible={cells.length === 0} previousCellId={null} />
        {renderedCells}
    </div>)
};

export default CellList