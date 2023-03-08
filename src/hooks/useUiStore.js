import { useDispatch, useSelector } from 'react-redux';
import { onCloseDateModal, onOpenDateModal, onUpdateNow, onOpenSuccess, onCloseSuccess } from '../store';


export const useUiStore = () => {

    const dispatch = useDispatch();

    const {
        isDateModalOpen
    } = useSelector(state => state.ui);

    const {
        isSuccessOpen
    } = useSelector(state => state.ui);

    const {
        isNow
    } = useSelector(state => state.ui);

    const openDateModal = () => {
        dispatch(onOpenDateModal())
    }

    const closeDateModal = () => {
        dispatch(onCloseDateModal())
    }

    const OpenSuccess = () => {
        dispatch(onOpenSuccess())
    }

    const CloseSuccess = () => {
        dispatch(onCloseSuccess())
    }

    const updateNow = (data) => {
        dispatch(onUpdateNow(data))
    }

    const toggleDateModal = () => {
        (isDateModalOpen)
            ? openDateModal()
            : closeDateModal();
    }



    return {
        //* Propiedades
        isDateModalOpen,
        isSuccessOpen,
        isNow,

        //* Métodos
        closeDateModal,
        openDateModal,
        toggleDateModal,
        updateNow,
        OpenSuccess,
        CloseSuccess
    }

}