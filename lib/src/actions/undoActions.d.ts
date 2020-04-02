export declare const UNDOABLE: string;
export interface StartUndoableAction {
}
export declare const startUndoable: (action: any) => StartUndoableAction;
export declare const UNDO: string;
export interface UndoAction {
}
export declare const undo: () => UndoAction;
export declare const COMPLETE: string;
export interface CompleteAction {
}
export declare const complete: () => CompleteAction;
export declare const START_OPTIMISTIC_MODE: string;
export interface StartOptimisticModeAction {
}
export declare const startOptimisticMode: () => StartOptimisticModeAction;
export declare const STOP_OPTIMISTIC_MODE: string;
export interface StopOptimisticModeAction {
}
export declare const stopOptimisticMode: () => StopOptimisticModeAction;
