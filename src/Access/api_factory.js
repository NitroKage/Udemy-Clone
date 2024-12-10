const Base_URL = 'http://localhost:3001/api/';

export const APIS = {
    FIRST_SIGNIN: Base_URL + 'signIn',
    SECOND_SIGNIN: Base_URL + 'signInUpdate',
    USER_LOGIN: Base_URL + 'login?email=',
    USER_LOGOUT: Base_URL + 'logout?userId=',

    // PRofile Tab
    USER_PROFILE_INFO: Base_URL + 'getProfileInfo?userId=',
    UPDATE_USER_PROFILE_INFO: Base_URL + 'updateProfileInfo',
    GET_MY_COURSES: Base_URL + 'getMyCourses?userId=',
    GET_MY_REVIEWS_LIST: Base_URL + 'getMyReviewList?userId=',
    GET_USER_TEACHER_LIST: Base_URL + 'getUserTeacherList?userId=',

    // Profile Chats API

    GET_ALL_LATEST_MESSAGES: Base_URL + 'getAllLatestMessages?userId=',
    GET_CHAT_MESSAGES: Base_URL + 'getMessages?userId=',
    SEND_CHAT_MESSAGES: Base_URL + 'sendMessage?userId=',
    GET_CREATE_CHAT: Base_URL + 'chat?userId=',

    // MY CART APIS 
    GET_CART_LIST: Base_URL + 'getMyCartList?userId=',
    DELETE_CART_ITEM_LIST: Base_URL + 'removeItemFromCart?userId=',

    //CATEGORIES
    GET_COURSE_CATEGORIES: Base_URL + 'getCourseCategory',
    GET_SEARCH_CATEGORIES: Base_URL + 'getSearchCategory?searchKeyword=',
    GET_TOP_CATEGORIES: Base_URL + 'getTopCategory',
    GET_TOP_INSTRUCTOR: Base_URL + 'getTopInstructor',
    GET_CATEGORY_FILTER: Base_URL + 'getCategoryFilter?type=',
    GET_COURSE_BY_FILTER: Base_URL + 'getCourseByFilter',
    GET_TOP_COURSES_BY_TYPE: Base_URL + 'getTopCourse?type=',

    GET_COURSE_DATA_BY_ID: Base_URL + 'getCourseDataById?id=',
    GET_USER_DATA_BY_USERID: Base_URL + 'getUserDatabyUserId?userId=',
    ADD_USER_COURSE_IN_CART_BY_ID: Base_URL + 'AddCourseInCart?userId=',
}
