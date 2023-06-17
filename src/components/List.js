import React,{useState} from 'react'

function List() {
    const [newitem,SetNewItem]=useState("")
    const [items,SetItems]=useState([])

    function AddItem() {
        if (!newitem){
            alert("Enter Item");
            return;
        }
        document.querySelector('.container .end-part').classList.add("active")
       const item={
        id:Math.floor(Math.random()*100),
        value:newitem
       }
       SetItems(oldlist=>[...oldlist,item])
       SetNewItem("")
    }
    function deleteItem(id){
     const updateArray=items.filter(item=>item.id!==id)
      SetItems(updateArray)
    }
  return (
    <div>
       <div className='container'>
             <div className='entered-part'>
                    <input value={newitem} placeholder='Add New Item' onChange={e=>SetNewItem(e.target.value)}/>
                    <button onClick={()=>AddItem()}>Add</button>
             </div>
             <div className='end-part'>
                    <ul>
                        {  
                            items.map((item,index)=>(
                                <li key={item.key}>{index+1+")"}  {item.value} <i onClick={()=>deleteItem(item.id)} class="fa-solid fa-trash-can"></i></li>
                                ))
                        }
                    </ul>
             </div>
          </div>
    </div>
  )
}
export default List
