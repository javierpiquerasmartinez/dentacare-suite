import './PatientCard.css'

export function PatientCard ({firstName, familyName, phoneNumber, address, details}) {
    return (
        <article className='dcs-patientcard'>
            <header>{firstName} {familyName}</header>
            <section>
                <div>{phoneNumber}</div>
                <div>{address}</div>
                <div>{details}</div>
            </section>
        </article>
    )
}