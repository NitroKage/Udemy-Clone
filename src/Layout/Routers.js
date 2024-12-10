import React from 'react';

export const Mainpage = React.lazy(() => import('../component/Website/MainPages/MainPage'));
export const HomePage = React.lazy(() => import('../component/Website/MainPages/HomePage'));
export const SignIN = React.lazy(() => import('../component/Website/MainPages/SignInPage'));
export const LogIN = React.lazy(() => import('../component/Website/MainPages/LogInPage'));
export const CategoryPage = React.lazy(() => import('../component/Website/MainPages/CategoryPage'));
export const CoursePage = React.lazy(() => import('../component/Website/MainPages/CoursePage'));
export const CourseReviewPage = React.lazy(() => import('../component/Website/MainPages/CourseReview'));
export const CartPage = React.lazy(() => import('../component/Website/MainPages/ShoppingCart'));
export const CheckoutPage = React.lazy(() => import('../component/Website/MainPages/CheckoutPage'));
export const MyCourse = React.lazy(() => import('../component/Website/MainPages/MyCousePage'));
export const InstructorPage = React.lazy(() => import('../component/Website/MainPages/MentorPage'));
export const TopCategories = React.lazy(() => import('../component/Website/MainPages/TopCategoriesInstructor'));
export const TopInstructor = React.lazy(() => import('../component/Website/MainPages/TopCategoriesInstructor'));
export const MyProfile = React.lazy(() => import('../component/Website/MainPages/MyProfilePage'));
export const contactus = React.lazy(() => import('../component/Website/MainPages/Contactus'));
export const InstructorsTerms = React.lazy(() => import('../component/Website/MainPages/Terms'));
export const TeachOnByway = React.lazy(() => import('../component/Website/MainPages/TeachOnByway'));

export const InstructorsView = React.lazy(() => import('../component/InstructorAdmin/InstructorMainPage'));