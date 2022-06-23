import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'
import Checkout from './pages/Checkout'
import Home from './pages/Home'

export default function MainRoutes() {
    return (
        <>
        <Routes>
            <Route path="/"  element={<Home/>} />
        </Routes>

        <Routes>
            <Route path="/checkout"  element={<Checkout/>} />
        </Routes>
        </>
    )
}