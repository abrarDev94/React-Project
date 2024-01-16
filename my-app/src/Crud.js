import React from 'react'
import { useState } from 'react'
import snake from "./snake.jpg"

export default function AddUser() {
    const [users, setUsers] = useState([])
    const [currentData, setCurrentData] = useState("")
    const [currentEditData, setCurrentEditData] = useState("")
    const [editIndex, setEditIndex] = useState(null)

    const inputHandler = (e) => {
        setCurrentData(e.target.value)
    }

    const addNewUser = () => {
        if (currentData != '') {
            const temp = [...users]
            temp.push(currentData)
            setUsers(temp)
            setCurrentData('')
        }
    }

    const deleteUser = (ind) => {
        const temp = [...users]
        temp.splice(ind, 1)
        setUsers(temp)
    }

    const setEdit = (ind) => {
        setEditIndex(ind)
        setCurrentEditData(users[ind])
    }

    const updateUser = () => {
        const temp = [...users]
        temp[editIndex] = currentEditData
        setUsers(temp)

        setCurrentEditData('')
        setEditIndex(null)
    }

    const submit = (ind) => {
        if (editIndex != null) {
            updateUser()
        }
        else {
            addNewUser()
        }
    }

    return (
        <div className='my-3 mx-3' >
            <img src={snake} style={{ width: '50px', height: '50px' }} />
            <input type='text' value={currentData} onChange={(e) => { inputHandler(e) }} placeholder='enter text her' />
            < button className='my-3 mx-2 btn btn-primary' onClick={submit} > Save</button >
            <br />
            {
                users.map((i, ind) => {
                    return (
                        < div key={ind} >

                            {
                                editIndex == ind ?
                                    <>
                                        <input value={currentEditData} onChange={(e) => { setCurrentEditData(e.target.value) }} />
                                        <button onClick={submit} className='btn btn-primary mx-2'>Save</button>

                                    </>
                                    :
                                    <>
                                        <span>{i}</span>
                                        <button className='btn btn-primary my-2 mx-2' onClick={() => setEdit(ind)}>Edit</button>
                                        <button className='btn btn-primary' onClick={() => deleteUser(ind)}>Delete</button>
                                        <img src={snake} style={{ width: '50px', height: '50px', marginLeft: '10px', borderRadius: '30px' }} />
                                    </>

                            }
                        </div>)
                })

            }
        </div >
    )


}
