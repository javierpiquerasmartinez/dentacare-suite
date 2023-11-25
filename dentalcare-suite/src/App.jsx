import './App.css'
import { PatientCard } from './components/PatientCard'

export function App(){
    return (
        <>
            <section className='dcs-patientsection'>
                <PatientCard firstName="Javier" familyName="Piqueras Martinez" phoneNumber="+34655601562" address="javipiquerasm@gmail.com" details="Primer Paciente"/>
                <PatientCard firstName="Kenza" familyName="El Alaoui" phoneNumber="+34655601562" address="javipiquerasm@gmail.com" details="Primer Paciente"/>
            </section>
        </>
        )
}