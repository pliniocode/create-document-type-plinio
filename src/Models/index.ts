import * as Yup from 'yup';

export const createDocumentSchema = Yup.object().shape({
    typeDocument: Yup.string().required('Campo obrigatório'),
    isProcessExist: Yup.boolean(),
    newProcessNumber: Yup.string().optional(), 
    processNumber: Yup.string().when('isProcessExist', {
        is: true,
        then: (processNumber) => processNumber.required('Este campo é obrigatório quando o checkbox estiver marcado.'),
    }),
    processing: Yup.string().oneOf(['ambos', 'private', 'public']),
    insertionDocMethod: Yup.string().oneOf(['upload', 'write', 'automatic']),
    signature: Yup.string().oneOf(['eletronic', 'manual']),
    indexes: Yup.string().oneOf(['yes', 'no']),
    availability: Yup.array().min(1, 'Selecione pelo menos uma opção.'),
});

export type createDocumentType = Yup.InferType<typeof createDocumentSchema>

export const initialValuesCreateDocument = {
    typeDocument: '',
    isProcessExist: false,
    newProcessNumber: '',
    processNumber: '',
    processing: 'Ambas',
    insertionDocMethod: '',
    indexes: '',
    availability: [] as string[],
}

export const optionsAvailability = [
    {value: 'no', label: 'Não'},
    {value: '001', label: '001 - Administração'},
    {value: '002', label: '002 - Licitação'},
    {value: '003', label: '003 - Administração'},
    {value: '004', label: '004 - Licitação'},
    {value: '005', label: '005 - Compras'},
    {value: '006', label: '006 - Administração'},
    {value: '007', label: '007 - Licitação'},
    {value: '008', label: '008 - Compras'},
    {value: '009', label: '009 - Administração'},
    {value: '010', label: '010 - Licitação'},
    {value: '011', label: '011 - Compras'},
]