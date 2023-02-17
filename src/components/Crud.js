import React, {useRef,useState } from 'react';
import './Global.css';

function Crud() {
  const list = [
    {
        id: 1, 
        name: "Saurav",
        company: "Carrier Conuslt"
    },
    {
        id: 2, 
        name: "Ram",
        company: "scss consulting"
    },
]
const [lists, setList] = useState(list)
const [updateState, setUpdateState] = useState(-1)
return(
    <div className='crud'>
        <div>
          <h1 className='h1'>Crud App</h1>
        <AddList setList = {setList }/>
        <form onSubmit={handleSubmit}>
        <table>
            {
                lists.map((current) => (
                    updateState === current.id ? <EditList current={current} lists={lists} setList={setList}/> :
                    <tr>
                        <td>{current.name}</td>
                        <td>{current.company}</td>
                        <td>
                            <button className='edit' onClick={() => handleEdit(current.id)}>Edit</button>
                            <button className='delete' type='button' onClick={() => handleDelete(current.id)}>Delete</button>
                        </td>
                    </tr>
                ))
            }
        </table>
        </form>
        </div>
    </div>
)

function handleEdit(id) {
    setUpdateState(id)
}
function handleDelete(id) {
    const newlist = lists.filter((li) => li.id !== id)
    setList(newlist)
}
function handleSubmit(event) {
    event.preventDefault()
    const name = event.target.elements.name.value
    const company = event.target.elements.company.value
    const newlist = lists.map((li) => (
        li.id === updateState ? {...li, name:name, company: company} : li
    ))

    setList(newlist)
    setUpdateState(-1)
}
}

function EditList({current, lists, setList}) {
function handInputname(event) {
    const value = event.target.value;
    const newlist = lists.map((li) => (
        li.id === current.id ? {...li, name :value} : li
    ))

    setList(newlist)
}
function handInputcompany(event) {
    const value = event.target.value;
    const newlist = lists.map((li) => (
        li.id === current.id ? {...li, company :value} : li
    ))

    setList(newlist)
}
return(
    <tr>
        <td><input type="text" onChange={handInputname} name='name' value={current.name}/></td>
        <td><input type="text" onChange={handInputcompany} name='price' value={current.company}/></td>
        <td><button type='submit'>Update</button></td>
    </tr>
)
}

function AddList({setList}) {
const nameRef = useRef()
const companyRef = useRef()

function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const price = event.target.elements.company.value;
    const newlist = {
        id: 3,
        name,
        price
    }
    setList((prevList)=> {
        return prevList.concat(newlist)
    })
    nameRef.current.value = ""
    companyRef.current.value = ""
}
return(
    <form className='addForm' onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" ref={nameRef}/>
        <input type="text" name="price" placeholder="Company" ref={companyRef}/>
        <button type="submit">Add</button>
    </form>
)
}
export default Crud;
