import { BrowserRouter as Router, HashRouter, Routes, Route  } from 'react-router'

import DefaultLayout from '@/layout/DefaultLayout';
import Home from '@/pages/Home';
import Profile from '@/pages/Profile';
import ModalDemo from '@/pages/ModalDemo';
import ScrollDemo from '@/pages/ScrollDemo';
import PerformanceDemo from '@/pages/PerformanceDemo';
import FocusDemo from '@/pages/FocusDemo';
import HOCDemoPage from '@/pages/HOCDemopage';
import RenderPropsDemo from '@/pages/RenderPropsDemo';
import CustomHooksDemo from '@/pages/CustomHooksDemo';


function AppRoutes() {
    return (
        <HashRouter>
            <Routes>
                <Route element={<DefaultLayout/>}>
                    <Route index path='/' element={<Home/>}/>
                    <Route index path='/profile' element={<Profile/>}/>
                    <Route index path='/modal-demo' element={<ModalDemo/>}/>
                    <Route index path='/scroll-demo' element={<ScrollDemo/>}/>
                    <Route index path='/performance-demo' element={<PerformanceDemo/>}/>
                    <Route index path='/focus-demo' element={<FocusDemo/>}/>
                    <Route index path='/hoc-demo-page' element={<HOCDemoPage/>}/>
                    <Route index path='/render-props-demo' element={<RenderPropsDemo/>}/>
                    <Route index path='/custom-hooks-demo' element={<CustomHooksDemo/>}/>
                </Route>
            </Routes>
        </HashRouter>
    )
}

export default AppRoutes;