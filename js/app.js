const appointments = [
    {
        id: 1,
        first: 'Satch',
        last: 'Page',
        apptDate: new Date('February 24, 2025, 13:40:00'),
        dateConfirm: new Date('January 16, 2025, 10:23:00'),
        assignedDr: 'W. Bridges',
        procedure: 'colonoscopy',
        isActive: true
    },
    {
        id: 2,
        first: 'Garry',
        last: 'Johnson',
        apptDate: new Date('February 27, 2025, 10:30:00'),
        dateConfirm: new Date('January 17, 2025, 13:23:00'),
        assignedDr: 'J. Durr',
        procedure: 'vasectomy',
        isActive: true
    },
    {
        id: 3,
        first: 'Donald',
        last: 'Trump',
        apptDate: new Date('February 1, 2025, 12:40:00'),
        dateConfirm: new Date('January 19, 2025, 14:23:00'),
        assignedDr: 'C. Reynolds',
        procedure: 'appendectomy',
        isActive: true
    },
    {
        id: 4,
        first: 'Joe',
        last: 'Biden',
        apptDate: new Date('February 2, 2025, 15:40:00'),
        dateConfirm: new Date('January 7, 2025, 12:33:00'),
        assignedDr: 'J. Durr',
        procedure: 'liver transplant',
        isActive: true
    },
    {
        id: 5,
        first: 'John',
        last: 'Smith',
        apptDate: new Date('February 5, 2025, 08:23:00'),
        dateConfirm: new Date('January 8, 2025, 11:27:00'),
        assignedDr: 'C. Reynolds',
        procedure: 'tonsillectomy',
        isActive: true
    },
    {
        id: 6,
        first: 'Joe',
        last: 'Pass',
        apptDate: new Date('February 11, 2025, 16:35:00'),
        dateConfirm: new Date('January 2, 2025, 16:33:00'),
        assignedDr: 'J. Durr',
        procedure: 'gastric bypass',
        isActive: true
    },
    {
        id: 7,
        first: 'Miles',
        last: 'Davis',
        apptDate: new Date('February 23, 2025, 14:29:00'),
        dateConfirm: new Date('January 13, 2025, 11:43:00'),
        assignedDr: 'C. Reynolds',
        procedure: 'rhinoplasty',
        isActive: true
    },
    {
        id: 8,
        first: 'Johnny',
        last: 'Tsumani',
        apptDate: new Date('March 4, 2025, 08:40:00'),
        dateConfirm: new Date('January 14, 2025, 16:53:00'),
        assignedDr: 'J. Durr',
        procedure: 'sliding genioplasty',
        isActive: true
    },
    {
        id: 9,
        first: 'Charles',
        last: 'Xavier',
        apptDate: new Date('February 6, 2025, 09:45:00'),
        dateConfirm: new Date('January 10, 2025, 07:23:00'),
        assignedDr: 'W. Bridges',
        procedure: 'hair transplant',
        isActive: true
    },
    {
        id: 10,
        first: 'Satch',
        last: 'Page',
        apptDate: new Date('February 1, 2025, 06:40:00'),
        dateConfirm: new Date('January 21, 2025, 12:54:00'),
        assignedDr: 'J. Durr',
        procedure: 'hip replacement',
        isActive: true
    }
]

const myName = document.getElementById('myName')

myName.innerText = 'Appointments'
myName.classList.add('text-center')


/**
 * Pseudocode => writing code in people talk 
 * 
 * Loop through the array of appointments
 *      For each appointment: 
 *          build a card div
 *          add text for last, first, apptDate, procedure, and assignedDr
*           add a button to set appt to inActive ( cancel appointment)
*           display card
 */

const row = document.getElementById('row')


appointments.forEach( appt => {
    const col = document.createElement('div')
    col.classList.add('col')

    const card = document.createElement('div')
    card.classList.add('card')

    card.setAttribute('data-cardId', appt.id)

    console.log(card)

    const cardBody = document.createElement('div')
    cardBody.classList.add('card-body')

    const clientName = document.createElement('h2')
    clientName.classList.add('text-capitalize')

    clientName.innerHTML = `<span id="lastName">${appt.last}</span>, <span id="firstName">${appt.first}</span>`

    //append clientName to card body

    cardBody.appendChild(clientName)

    const dateText = document.createElement('p')

    const dateSpan = `${appt.apptDate.toUTCString()}`
    dateText.innerText = `Appointment Date: ${dateSpan}`

    cardBody.appendChild(dateText)

    const procedure = document.createElement('p')

    procedure.classList.add('text-capitalize', 'text-danger')

    procedure.innerText = `${appt.procedure}`

    cardBody.appendChild(procedure)

    const doctor = document.createElement('p')

    doctor.classList.add('text-capitalize', 'text-primary', 'fst-italic')

    doctor.innerText = `${appt.assignedDr}`

    cardBody.appendChild(doctor)


    card.appendChild(cardBody)

    const cardFooter = document.createElement('div')

    cardFooter.classList.add('card-footer')

    const cancelBtn = document.createElement('button')
    cancelBtn.classList.add('btn', 'btn-danger', 'text-capitalize', 'cancel-btns')

    cancelBtn.setAttribute('data-btnId', appt.id)

    cancelBtn.innerText = 'cancel appointment'

    cardFooter.appendChild(cancelBtn)

    card.appendChild(cardFooter)

    col.appendChild(card)

    row.appendChild(col)


}
    
)

const cancelBtns = document.querySelectorAll('.cancel-btns')

const cards = document.querySelectorAll('.card')

// console.log(cards)

const cancelAppt = (el, arr, attr) => {
    const btnId = el.getAttribute(attr)
    for(let item of arr) {
        if(parseInt(btnId) === item.id && item.hasOwnProperty('isActive')) {
            item.isActive = !item.isActive

            console.log(arr)

        }
    }
}

const changeDisplay = (el) => {

    const btnId = el.getAttribute('data-btnId')
    for(let card of cards) {
        if(card.getAttribute('data-cardId') == btnId) {
            
            el.innerText == 'Cancel Appointment' ? el.innerText = 'Uncancel Appointment' : el.innerText = 'Cancel Appointment' //I FIXED THIS!!!!!!!!

            card.style.backgroundColor == '' ? card.style.backgroundColor = 'gray' : card.style.backgroundColor = ''
        }
        
    }
}



cancelBtns.forEach(button => {
    button.addEventListener('click', () => {

        cancelAppt(button, appointments, 'data-btnId')

        changeDisplay(button)

        
    })
})

/**
 * Array.filter() =>  returns a copy array after filtering through an original array 
 * 
 * ex.  arr1 = [1, 2, 4, 5, 7]
 * 
 *      arr2 = arr1.filter(num => num % 2 == 0)
 */

let arr1 = [1 , 2, 4, 5, 7]

let arr2 = arr1.filter(num => num % 2 == 0)

console.log(arr2)

const bridgesAppts = appointments.filter(appt => appt.assignedDr == 'W. Bridges')
console.log(bridgesAppts)


const pPatients = appointments.filter(appt => appt.last[0] == 'P')
console.log(pPatients)

const transplantPatients = appointments.filter(appt => appt.procedure.includes('transplant')) //filters out all transplant people

console.log(transplantPatients)

const otherDrAppts = appointments.filter(appt => appt.assignedDr !== 'W. Bridges') //filters appts by other doctors
console.log(otherDrAppts)


const febFilter = appointments.filter(appt => appt.apptDate.getMonth() == 1)
console.log(febFilter)








