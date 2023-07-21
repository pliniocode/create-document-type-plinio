
  
export interface State 
{
    showModalBack: boolean;
    showModalSave: boolean;
    showResultModal: boolean;
    saveSuccess: boolean;
}

export enum Actions 
{
  SHOW_MODAL_BACK = 'SHOW_MODAL_BACK',
  HIDE_MODAL_BACK = 'HIDE_MODAL_BACK',
  SHOW_MODAL_SAVE = 'SHOW_MODAL_SAVE',
  HIDE_MODAL_SAVE = 'HIDE_MODAL_SAVE',
  SAVE_SUCCESS = 'SAVE_SUCCESS',
  SHOW_RESULT_MODAL = 'SHOW_RESULT_MODAL',
  HIDE_RESULT_MODAL = 'HIDE_RESULT_MODAL',
}

export interface Action 
{
    type: Actions;
}


export function modalReducer(state: State, action: Action) 
{
  switch (action.type) 
    {
        case Actions.SHOW_MODAL_BACK:
            return {
                ...state,
                showModalBack: true,
            }
        case Actions.HIDE_MODAL_BACK:
            return {
                ...state,
                showModalBack: false,
            }
        case Actions.SHOW_MODAL_SAVE:
            return {
                ...state,
                showModalSave: true,
            }
        case Actions.HIDE_MODAL_SAVE:
            return {
                ...state,
                showModalSave: false,
            }
        case Actions.SAVE_SUCCESS:
            return {
                ...state,
                saveSuccess: Math.random() > 0.5,
            }
        case Actions.SHOW_RESULT_MODAL:
        return {
                ...state,
                showResultModal: true,
            }
        case Actions.HIDE_RESULT_MODAL:
            return {
                ...state,
                showResultModal: false,
            }
        default:
            return state;
    }
}