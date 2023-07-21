/* eslint-disable @typescript-eslint/no-misused-promises */
import { useState } from "react"
import { useFormik } from "formik"

import { SAbas, SField, SFormContainer, SFormHeader, SDivGroup, SInput, SSelect, SOption, SSelectMultiple } from "./styles"
import { Checkbox } from "../index"
import { createDocumentSchema, initialValuesCreateDocument, createDocumentType, optionsAvailability } from "../../Models"


export function Form() {
    const [output, setOutput] = useState('')
    const [abaVisible, setAbaVisible] = useState<number>(1)
    const [isProcessExist, setIsProcessExist] = useState(false)

    const formik = useFormik({
        initialValues: initialValuesCreateDocument,
        validationSchema: createDocumentSchema,
        onSubmit: (values: createDocumentType) => {
            console.log(values)
            console.log();
            setOutput(JSON.stringify(values, null, 2))
        },
    });

    const { handleSubmit, getFieldProps, setFieldValue, handleBlur, touched, errors } = formik


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

        <SFormContainer onSubmit={handleSubmit} id="data-form">
        {abaVisible === 1 && (<>
            <SDivGroup>
            <SField>
                <label htmlFor="typeDocument">
                    Nome do Tipo de Documento*
                    <span> {touched["typeDocument"] && errors["typeDocument"]} </span>
                </label>
                <SInput type="text" id="name" 
                    {...getFieldProps("namtypeDocumente")} 
                    placeholder="Digite o nome do tipo de documento" />
            </SField>

            <SField>
                <label htmlFor="newProcessNumber">
                    Número do Processo*
                    <span> {touched["newProcessNumber"] && errors["newProcessNumber"]} </span>
                </label>
                <SInput type="text" 
                    id="newProcessNumber" 
                    {...getFieldProps("newProcessNumber")}
                    placeholder="00036/2022" 
                    disabled={isProcessExist}/>

                <div className="field-group">
                <Checkbox 
                    checked={isProcessExist} 
                    {...getFieldProps("isProcessExist")}
                    onChange={handleCheckboxChange} 
                    label={"Dar continuidade a número de processo?"} 
                />
                </div>
                <span> {touched["processNumber"] && errors["processNumber"]} </span>
                <SInput type="text" 
                    id="processNumber" 
                    {...getFieldProps("processNumber")}
                    placeholder="00036/2022" 
                    disabled={!isProcessExist}/>
            </SField>

            <SField>
                <label htmlFor="processing">
                    Tramitação 
                </label>
                <span> {touched["processing"] && errors["processing"]} </span>
                <SSelect id="processing" {...getFieldProps("processing")} defaultValue="Selecione uma opção válida.">
                    <SOption value="ambos">Ambas</SOption>
                    <SOption value="private">Privada</SOption>
                    <SOption value="public">Pública</SOption>
                </SSelect>
            </SField>

            <SField>
                <label htmlFor="insertionDocMethod">
                    Método de Inserção do Documento * 
                </label>
                <span> {touched["insertionDocMethod"] && errors["insertionDocMethod"]} </span>
                <SSelect id="insertionDocMethod" {...getFieldProps("insertionDocMethod")} defaultValue="Selecione o item">
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
                <span className="errorMessage"> {touched["indexes"] && errors["indexes"]} </span>
                <SSelect id="indexes" {...getFieldProps("indexes")}  defaultValue="Sim">
                    <SOption value="yes">Sim</SOption>
                    <SOption value="no">Não</SOption>
                </SSelect>
            </SField>

            <SField>
                <label htmlFor="signature">
                    Assinatura
                </label>
                <SSelect id="signature" {...getFieldProps("signature")} defaultValue="">
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
                    {...getFieldProps("availability")} 
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
                    onBlur={handleBlur}
                    defaultValue={formik.values.availability}
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