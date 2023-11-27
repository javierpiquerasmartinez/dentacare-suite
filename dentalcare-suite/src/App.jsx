import './App.css'
import { PatientBoard } from './components/PatientBoard.jsx'

export function App(){
    return (
        <>
            <header className='dcs-header'>
            <h1>DentalCare Suite</h1>
            </header>
            <main className='dcs-main'>
                <PatientBoard> </PatientBoard>
            </main>
        </>
    )
}