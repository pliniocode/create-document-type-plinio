/* eslint-disable @typescript-eslint/no-misused-promises */
import { useState } from "react"
import { useFormik } from "formik"
import * as Yup from 'yup';

import { SAbas, SField, SFormContainer, SFormHeader, SDivGroup, SInput, SSelect, SOption, SSelectMultiple } from "./styles"
import { Checkbox } from "../index"


const optionsAvailability = [
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
  
const createDocumentSchema = Yup.object().shape({
    availability: Yup.array().min(1, 'Selecione pelo menos uma opção.'),
});

export function Form() {
    const [output, setOutput] = useState('')
    const [abaVisible, setAbaVisible] = useState<number>(1)
    const [isProcessExist, setIsProcessExist] = useState(false)

    const formik = useFormik({
        initialValues: {
            availability: [] as string[],
        },
        validationSchema: createDocumentSchema,
        onSubmit(values) {
            console.log(values.availability)
            setOutput(JSON.stringify(values, null, 2))
        },
    });

    const { handleSubmit, getFieldProps, setFieldValue, touched, errors } = formik


    function showAba (aba: number) 
    {
        setAbaVisible(aba)
    }

    function handleCheckboxChange ()
    {
        setIsProcessExist(!isProcessExist);
    }

    return (
        <>
        <SFormHeader>
            <SAbas className={abaVisible === 1 ? 'aba-active' : 'aba-inactive'} onClick={() => showAba(1)}>
                Dados
            </SAbas>
            <SAbas className={abaVisible === 2 ? 'aba-active' : 'aba-inactive'} onClick={() => showAba(2)}>
                Permissões
            </SAbas>
        </SFormHeader>

        <SFormContainer id="data-form" onSubmit={handleSubmit}>
        {abaVisible === 1 && (<>
            <SDivGroup>
            <SField>
                <label htmlFor="name">
                    Nome do Tipo de Documento*
                    {<span > Campo obrigatório</span>}
                </label>
                <SInput type="text" id="name" name="name" placeholder="Digite o nome do tipo de documento" />
            </SField>

            <SField>
                <label htmlFor="newProcessNumber">
                    Número do Processo*
                    {<span > error</span>}
                </label>
                <SInput type="text" 
                    id="newProcessNumber" 
                    name="newProcessNumber"
                    placeholder="00036/2022" 
                    disabled={isProcessExist}/>

                <div className="field-group">
                <Checkbox 
                    checked={isProcessExist} 
                    onChange={handleCheckboxChange} 
                    label={"Dar continuidade a número de processo?"} 
                />
                </div>
                <SInput type="text" 
                    id="processNumber" 
                    name="processNumber"
                    placeholder="00036/2022" 
                    disabled={!isProcessExist}/>
            </SField>

            <SField>
                <label htmlFor="processing">
                    Tramitação 
                </label>
                <SSelect id="processing" name="processing" defaultValue="Ambas">
                    <SOption value="Ambas">Ambas</SOption>
                    <SOption value="private">Privada</SOption>
                    <SOption value="public">Pública</SOption>
                </SSelect>
            </SField>

            <SField>
                <label htmlFor="insertionDocMethod">
                    Método de Inserção do Documento * 
                </label>
                <SSelect id="insertionDocMethod" name="insertionDocMethod" defaultValue="Selecione o item">
                    <SOption>Selecione o item</SOption>
                    <SOption value="upload">Upload manual</SOption>
                    <SOption value="write">Redigir online</SOption>
                    <SOption value="automatic">Automático (impressora virtual)</SOption>
                </SSelect>
            </SField>

            </SDivGroup>
            
            <SDivGroup>
            <SField>
                <label htmlFor="indexes">
                    Vincular Índices ao Documento? *
                </label>
                <SSelect id="indexes" {...getFieldProps("indexes")}  defaultValue="Sim">
                    <SOption value="yes">Sim</SOption>
                    <SOption value="no">Não</SOption>
                </SSelect>
            </SField>

            <SField>
                <label htmlFor="signature">
                    Assinatura
                </label>
                <SSelect id="signature" name="signature" defaultValue="">
                    <SOption>Selecione o item</SOption>
                    <SOption value="eletronic">Eletrônica</SOption>
                    <SOption value="manual">Manuscrita</SOption>
                </SSelect>
            </SField>

            <SField>
                <label htmlFor="insertionMethod">
                    Satus
                </label>
                <SSelect id="insertionMethod" name="insertionMethod" defaultValue="">
                    <SOption>Selecione o item</SOption>
                    <SOption value="active">Ativo</SOption>
                    <SOption value="inactive">Inativo</SOption>
                </SSelect>
            </SField>

            <SField>
                <label htmlFor="availability">
                    Disponível para Todos os Departamentos? *
                </label>
                <span className="errorMessage">
                    {touched["availability"] && errors["availability"]}
                </span>
                 <SSelectMultiple
                    name="availability"
                    multiple
                    onChange={(e) => {
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                    const options = e.target.options;
                    const availability: string[] = [];
                    for (let i = 0; i < options.length; i++) {
                        if (options[i].selected) {
                            availability.push(options[i].value);
                        }
                    }
                    void setFieldValue('availability', availability);
                    }}
                    onBlur={formik.handleBlur}
                    value={formik.values.availability}
                >
                    {optionsAvailability.map((option) => (
                        <SOption key={option.value} value={option.value}>
                            {option.label}
                        </SOption>
                    ))}
                    </SSelectMultiple>
            </SField>

            </SDivGroup>
        </>)}

        {abaVisible === 2 && (<> 
            <p>Conteúdo da aba 2</p>
        
        </>)}
            
        </SFormContainer>

        <pre className="text-sm">
            {output}
        </pre>
        </>
    )
}