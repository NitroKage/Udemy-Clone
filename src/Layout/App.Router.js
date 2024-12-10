import OurRoutes from './Routes';
import * as Routers from './Routers';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import { AppProvider } from '../context/AppContext';
function AppRouter() {
    return (
        <Router>
            <AppProvider>
                <Suspense>
                    <Routes>
                        <Route path={OurRoutes.Mainpage} element={<Routers.Mainpage />}> 
                            <Route index element={<Routers.HomePage />} />
                            <Route path={OurRoutes.SignIN} element={<Routers.SignIN />} />
                            <Route path={OurRoutes.LogIN} element={<Routers.LogIN />} />
                            <Route path={OurRoutes.CategoryPage} element={<Routers.CategoryPage />} />
                            <Route path={OurRoutes.CoursePage} element={<Routers.CoursePage />} />
                            <Route path={OurRoutes.CourseReviewPage} element={<Routers.CourseReviewPage />} />
                            <Route path={OurRoutes.CartPage} element={<Routers.CartPage />} />
                            <Route path={OurRoutes.CheckoutPage} element={<Routers.CheckoutPage />} />
                            <Route path={OurRoutes.MyCourse} element={<Routers.MyCourse />} />
                            <Route path={OurRoutes.InstructorPage} element={<Routers.InstructorPage />} />
                            <Route path={OurRoutes.TopCategories} element={<Routers.TopCategories />} />
                            <Route path={OurRoutes.TopInstructor} element={<Routers.TopInstructor />} />
                            <Route path={OurRoutes.MyProfile} element={<Routers.MyProfile />} />
                            <Route path={OurRoutes.contactus} element={<Routers.contactus />} />
                            <Route path={OurRoutes.InstructorsTerms} element={<Routers.InstructorsTerms />} />
                            <Route path={OurRoutes.TeachOnByway} element={<Routers.TeachOnByway />} />
                        </Route>
                        <Route path={OurRoutes.InstructorsView} element={<Routers.InstructorsView />}>
                            
                        </Route>
                    </Routes>
                </Suspense>
            </AppProvider>
        </Router>
    );
}

export default AppRouter;
