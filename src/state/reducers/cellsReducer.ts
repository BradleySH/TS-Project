import produce from "immer";
import { ActionType } from "../action-types";
import { Action } from "../actions";
import { Cell } from "../cell";

interface CellsState {
  loading: boolean;
  error: string | null;
  order: string[];
  data: {
    [key: string]: Cell;
  }
}

const initialState: CellsState = {
  loading: false,
  error: null,
  order: [],
  data: {},
}

const reducer = produce((state: any = initialState, action: Action): CellsState => {
  switch (action.type) {
    case ActionType.UPDATE_CELL:
      const { id, content } = action.payload;
      state.data[id].content = content;
      return state;

    case ActionType.DELETE_CELL:
      delete state.data[action.payload];
      state.order = state.order.filter((id: any) => id !== action.payload);
      return state;

    case ActionType.MOVE_CELL:
      const { direction } = action.payload
      const index = state.order.findIndex((id: any) => id === action.payload.id);
      // tunary for new index
      const targetIndex = direction === "up" ? index - 1 : index + 1;
      // make sure you cant place it within the bounds of the array
      if (targetIndex < 0 || targetIndex > state.order.length - 1) {
        return state;
      }

      state.order[index] = state.order[targetIndex];
      state.order[targetIndex] = action.payload.id;
      
      return state;

    case ActionType.INSERT_CELL_AFTER:
      const cells: Cell = {
        content: "",
        type: action.payload.type,
        id: randomId(),
      };
      
      state.data[cells.id] = cells;

      const foundIndex = state.order.findIndex(
        (id: any) => id === action.payload.id
      );
      if (foundIndex < 0) {
          state.order.push(cells.id)
      }else {
          state.order.splice(foundIndex + 1, 0, cells.id)
      }
      return state;

    default:
      return state;
  }
});

const randomId = () => {
  return Math.random().toString(36).substr(2, 5);
};

export default reducer;
