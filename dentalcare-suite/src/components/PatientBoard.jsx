import './PatientBoard.css'

import { PatientCard } from './PatientCard.jsx'
import { TextInput } from './core/TextInput.jsx'
import { Button } from './core/Button.jsx'

import data from '../../resources/patients.json'

export function PatientBoard() {
    const patients = [...data]

    return (
        <>
            <form className='dcs-form-search'>
                <TextInput></TextInput>
                <Button></Button>
            </form>
            <section className='dcs-patientsection'>
                {patients.map(p => {
                    return(
                        <PatientCard key={p.id} firstName={p.firstName} familyName={p.familyName} address={p.address} phoneNumber={p.phoneNumber} details={p.details} />
                    )
                })}
            </section>
        </>
        )
}