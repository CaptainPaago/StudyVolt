import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import State from "./state";

export default interface WidgetProps<T = Record<string, unknown>> {
    id: string;
    name: string;
    section: string;
    config: Record<string, unknown>;
    utilities: unknown;
    state: State;
    dispatch: ThunkDispatch<State, null, AnyAction>;
    settings: T;
}
