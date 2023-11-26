import './App.css'
import { PatientCard } from './components/PatientCard'

export function App(){

    const patients = [
        {id:'1', firstName: 'Francisco Javier', familyName:'Piqueras Martinez', phoneNumber: '+34655601562', address:'javipiquerasm@gmail.com', details: 'Primer Paciente'},
        {id:'2', firstName: 'Kenza', familyName:'El Alaoui', phoneNumber: '+34655601562', address:'kea@gmail.com', details: 'Myself'},
        {id:'3', firstName: 'Maria del Carmen', familyName:'Carrascosa del Olmo', phoneNumber: '+34655607845', address:'mcarrascosa@gmail.com', details: 'Paciente incorporada en marzo'}
    ]

    return (
        <>
            <header className='dcs-header'>
                <h1>DentalCare Suite</h1>
            </header>
            <main className='dcs-main'>
                <section className='dcs-patientsection'>
                    {patients.map(p => {
                        return(
                            <PatientCard key={p.id} firstName={p.firstName} familyName={p.familyName} address={p.address} phoneNumber={p.phoneNumber} details={p.details} />
                        )
                    })}
                </section>
            </main>
        </>
        )
}