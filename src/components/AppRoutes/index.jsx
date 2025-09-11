import { BrowserRouter as Router, HashRouter, Routes, Route  } from 'react-router'
import Header from '../../layout/DefaultLayout/components/Header';
import DefaultLayout from '../../layout/DefaultLayout';
import Home from '../../pages/Home';
import Profile from '../../pages/Profile';
import ModalDemo from '../../pages/ModalDemo';
import ScrollDemo from '../../pages/ScrollDemo';


function AppRoutes() {
    return (
        <HashRouter>
            <Routes>
                <Route element={<DefaultLayout/>}>
                    <Route index path='/' element={<Home/>}/>
                    <Route index path='/profile' element={<Profile/>}/>
                    <Route index path='/modal-demo' element={<ModalDemo/>}/>
                    <Route index path='/scroll-demo' element={<ScrollDemo/>}/>
                </Route>
            </Routes>
        </HashRouter>
    )
}

export default AppRoutes;