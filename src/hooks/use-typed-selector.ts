import {useSelector, TypedUseSelectorHook }from "react-redux";
import {RootState} from "../state";


export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

// export interface TypedUseSelectorHook<TState> {
//     <TSelected>(
//         selector: (state: TState) => TSelected,
//         equalityFn?: (left: TSelected, right: TSelected) => boolean
//     ): TSelected;
// }