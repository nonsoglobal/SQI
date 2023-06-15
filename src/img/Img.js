import { useState } from 'react'

const Img = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [myclass, setClass] = useState("")
    const [national, setNational] = useState("")

    // const setUsername =  (e)=>{
    //     console.log(e)
    // }


    const setInfo = (e) => {
        e.preventDefault()
        const data = { username, email, myclass, national };
        console.log(data);
    }
    return (
        <>
            {/* <div>Img</div> */}
            {/* <div> */}
            {/* <img src={require('../img/Sqi model.png')} alt="" /> */}

            {/* </div> */}

            <form className='w-50 mx-auro my-3 border shadow rounded p-3' action="">
                <h1 className='text-primary'>user info</h1>
                <div className='form-group'>
                    <label htmlFor="Username">Usernsme</label>
                    <input onChange={(e) => setUsername(e.target.value)} className='form-control' type="text" />
                    {/* <input onChange={(e)=>setUsername(e.target.value)} className='form-control' type="text" /> */}

                </div>
                <div className='form-group'>
                    <label htmlFor="Username">Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="" />
                </div>
                <div className='form-group'>
                    <label htmlFor="Username">Class</label>
                    <input onChange={(e) => setClass(e.target.value)} type="text" className="form-control" id="" />
                </div>

                <div className='form-group'>
                    <label htmlFor="Username">Nationality</label>
                    <input onChange={(e) => setNational(e.target.value)} type="text" className="form-control" id="" />
                </div>

                <div className='my-3 text-center'>
                    <button type='submit' onClick={setInfo} className='btn btn-danger w-75 text-white fw-bold'>Save Information</button>
                </div>


            </form>
        </>

    )
}

export default Img