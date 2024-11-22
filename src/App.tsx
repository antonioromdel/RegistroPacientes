
import { ToastContainer } from 'react-toastify'
import PatientForm from './components/PatientForm'
import PatientList from './components/PatientList'
import './index.css'
import "react-toastify/dist/ReactToastify.css"

function App() {

  return (
    <>
      <section className='container mx-auto mt-20'>
        <h1 className='font-black text-5xl text-center md:w-2/3 md:mx-auto'>Seguimiento de Pacientes</h1>

        <section className='mt-12 md:flex'>

          <PatientForm />
          <PatientList />

        </section>

      </section>
      <ToastContainer />
    </>
  )
}

export default App
