import { useReducer } from 'react'
import { Actions, State, modalReducer } from '../../reducers/reducerModal'
import { BackButton, SFlowContainer, SaveButton } from "./styles"

import HelpIcon from '../../assets/help_circle_outline.svg'
import OkIcon from '../../assets/check_ok.svg'
import AttentionIcon from '../../assets/error_outline.svg'
import { Modal } from '../Modal'

const initialState: State = {
    showModalBack: false,
    showModalSave: false,
    showResultModal: false,
    saveSuccess: false,
  }  

export function Flow() {
    const [state, dispatch] = useReducer(modalReducer, initialState)
    const url = "https://www.epaper.com/configuracoes/tipos-de-documentos/novo-tipo-de-documento"

    const links = url
        .slice(url.indexOf('.com'))
        .split('/')
        .slice(1, )

    // const home = url.slice(0, url.indexOf('.com'));
    function handleCancel() 
    {
        console.log('handleCancel')
        dispatch({ type: Actions.HIDE_MODAL_BACK })
    }

    function handleContinue() 
    {
        if (state.showModalBack) 
        dispatch({ type: Actions.HIDE_MODAL_BACK })
        
        if (state.showModalSave) 
        dispatch({ type: Actions.HIDE_MODAL_SAVE })
    }

    function handleSave() 
    {
        dispatch({ type: Actions.HIDE_MODAL_BACK })
        dispatch({ type: Actions.SAVE_SUCCESS })
        dispatch({ type: Actions.SHOW_RESULT_MODAL })
    }

    function handleResultModalClose()
    {
        dispatch({ type: Actions.HIDE_RESULT_MODAL });
        dispatch({ type: Actions.HIDE_MODAL_SAVE });
    }

    return (
        <SFlowContainer>
            <nav>
            {links.map((link, index) => {
                if (link.length <= 0)
                return null

                const linkText = link
                    .split('-')
                    .map(str => str.charAt(0).toUpperCase() + str.slice(1))
                    .join(' ')
                const linkUrl = url.slice(0, url.indexOf(link) + link.length)
                const isLastLink = links[index + 1] != undefined ? false : true

                return (
                <div key={linkText}>
                    <a href={linkUrl}>{linkText}</a>
                    {!isLastLink && <span> &gt; </span>}
                </div>
                );
            })}
            </nav>
            
            <div className="btns-flow">
                <BackButton onClick={() => dispatch({ type: Actions.SHOW_MODAL_BACK })}>Voltar</BackButton>
                <SaveButton onClick={() =>  dispatch({ type: Actions.SHOW_MODAL_SAVE })} type="submit" form="data-form">Salvar Documento</SaveButton>
            </div>
             {/* Render the modals*/}
            {state.showModalBack && (
                <Modal>
                <>
                    <h2>Cancelar Novo Tipo de Documento?</h2>
                    <img src={HelpIcon} />
                    <p>Se voltar, o tipo de documento atual não será
                    salvo no sistema. Deseja cancelar o novo
                    tipo de documento e voltar?
                    </p>
                    <div className="modal-buttons">
                    <BackButton onClick={() => handleContinue()}>Continuar criando</BackButton>
                    <SaveButton onClick={() => handleCancel()}>Cancelar e Voltar</SaveButton>
                    </div>
                </>
            </Modal>
            )}

            {state.showModalSave && (
                <Modal>
                <>
                    <h2>Salvar Tipo de Documento?</h2>
                    <img src={HelpIcon} />
                    <p>
                    Tem certeza que deseja salvar esse  tipo de documento? 
                    </p>
                    <div className="modal-buttons">
                    <BackButton onClick={() => handleContinue()}>Voltar</BackButton>
                    <SaveButton onClick={() => handleSave()}>Salvar</SaveButton>
                    </div>
                </>
                </Modal>
            )}

            {state.showResultModal && (
                <Modal>
                <>
                    <h2>
                    {state.saveSuccess ? 
                    'O tipo de documento foi salvo com sucesso!' : 'Ops, Algo Deu Errado!'}
                    </h2>
                    {state.saveSuccess ?
                    <>
                    <img src={OkIcon} />
                    <div className="modal-buttons">
                        <SaveButton onClick={handleResultModalClose}>Ok</SaveButton>
                    </div>
                    </> : 
                    <>
                    <img src={AttentionIcon} />
                    <p>'Ocorreu um problema ao salvar os dados. Por favor, tente novamente.'</p>
                    <div className="modal-buttons">
                        <BackButton onClick={handleResultModalClose}>Voltar</BackButton>
                    </div>
                    </>  
                    }
                    </>
                </Modal>
            )}
        </SFlowContainer>
    )
}

