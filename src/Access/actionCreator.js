import { APIS } from "./api_factory";
import axios from "axios";

const header = {
    headers: {
        'Content-Type': 'application/json'
    }
}
const header2 = {
    headers: {
        'Content-Type': 'multipart/form-data'
    }
}

export const FirstSignIn = (data, callback, error) => {
    axios
        .post(APIS.FIRST_SIGNIN, data, header)
        .then((res) => {
            callback(res.data)
        })
        .catch((error) => {
            console.log(error, "error")
        })
}

export const SecondSignIn = (data, callback, error) => {
    axios
        .post(APIS.SECOND_SIGNIN, data, header)
        .then((res) => {
            callback(res.data)
        })
        .catch((error) => {
            console.log(error, "error")
        })
}

export const UserLogin = (email, password, callback, error) => {
    axios
        .get(APIS.USER_LOGIN + email + '&password=' + password, header)
        .then((res) => {
            callback(res.data)
        })
        .catch((error) => {
            console.log(error, "error")
        })
}

export const UserLogout = (userId, callback, error) => {
    axios
        .post(APIS.USER_LOGOUT + userId, header)
        .then((res) => {
            callback(res.data)
        })
        .catch((error) => {
            console.log(error, "error")
        })
}

export const getUserProfile = (userId, callback, error) => {
    axios
        .get(APIS.USER_PROFILE_INFO + userId, header)
        .then((res) => {
            callback(res.data)
        })
        .catch((error) => {
            console.log(error, "error")
        })
}

export const updateUserProfile = (data, callback, error) => {
    axios
        .post(APIS.UPDATE_USER_PROFILE_INFO, data, header2)
        .then((res) => {
            callback(res.data)
        })
        .catch((error) => {
            console.log(error, "error")
        })
}

export const getMyCourses = (userId, callback, error) => {
    axios
        .get(APIS.GET_MY_COURSES + userId, header)
        .then((res) => {
            callback(res.data)
        })
        .catch((error) => {
            console.log(error, "error")
        })
}

export const getMyReviewsList = (userId, callback, error) => {
    axios
        .get(APIS.GET_MY_REVIEWS_LIST + userId, header)
        .then((res) => {
            callback(res.data)
        })
        .catch((error) => {
            console.log(error, "error")
        })
}

export const getUserTeacherList = (userId, callback, error) => {
    axios
        .get(APIS.GET_USER_TEACHER_LIST + userId, header)
        .then((res) => {
            callback(res.data)
        })
        .catch((error) => {
            console.log(error, "error")
        })
}

export const getUserAllLatestMessagesList = (userId, callback, error) => {
    axios
        .get(APIS.GET_ALL_LATEST_MESSAGES + userId, header)
        .then((res) => {
            callback(res.data)
        })
        .catch((error) => {
            console.log(error, "error")
        })
}

export const getUserMessagesList = (userId, instructorId, callback, error) => {
    axios
        .get(APIS.GET_CHAT_MESSAGES + userId + '&instructorId=' + instructorId, header)
        .then((res) => {
            callback(res.data)
        })
        .catch((error) => {
            console.log(error, "error")
        })
}

export const sendUserMessagesList = (userId, instructorId, senderId, messageContent, callback, error) => {
    axios
        .post(APIS.SEND_CHAT_MESSAGES + userId + '&instructorId=' + instructorId + '&senderId=' + senderId + '&messageContent=' + messageContent, header)
        .then((res) => {
            callback(res.data)
        })
        .catch((error) => {
            console.log(error, "error")
        })
}

export const getCreateChat = (userId, instructorId, callback, error) => {
    axios
        .get(APIS.GET_CREATE_CHAT + userId + '&instructorId=' + instructorId , header)
        .then((res) => {
            callback(res.data)
        })
        .catch((error) => {
            console.log(error, "error")
        })
}

export const getCartList = (userId, callback, error) => {
    axios
        .get(APIS.GET_CART_LIST + userId , header)
        .then((res) => {
            callback(res.data)
        })
        .catch((error) => {
            console.log(error, "error")
        })
}

export const removeCartList = (userId,courseId, callback, error) => {
    axios
        .delete(APIS.DELETE_CART_ITEM_LIST + userId + '&courseId=' + courseId , header)
        .then((res) => {
            callback(res.data)
        })
        .catch((error) => {
            console.log(error, "error")
        })
}


export const getCourseCategory = (callback, error) => {
    axios
        .get(APIS.GET_COURSE_CATEGORIES , header)
        .then((res) => {
            callback(res.data)
        })
        .catch((error) => {
            console.log(error, "error")
        })
}

export const getSearchCategory = (keyword,callback, error) => {
    axios
        .get(APIS.GET_SEARCH_CATEGORIES + keyword , header)
        .then((res) => {
            callback(res.data)
        })
        .catch((error) => {
            console.log(error, "error")
        })
}

export const getTopCategory = (callback, error) => {
    axios
        .get(APIS.GET_TOP_CATEGORIES , header)
        .then((res) => {
            callback(res.data)
        })
        .catch((error) => {
            console.log(error, "error")
        })
}


export const getTopInstructor = (callback, error) => {
    axios
        .get(APIS.GET_TOP_INSTRUCTOR , header)
        .then((res) => {
            callback(res.data)
        })
        .catch((error) => {
            console.log(error, "error")
        })
}

export const getCategoryFilter = (type,callback, error) => {
    axios
        .get(APIS.GET_CATEGORY_FILTER + type , header)
        .then((res) => {
            callback(res.data)
        })
        .catch((error) => {
            console.log(error, "error")
        })
}

export const getCourseByFilter = (data,callback, error) => {
    axios
        .post(APIS.GET_COURSE_BY_FILTER ,data , header)
        .then((res) => {
            callback(res.data)
        })
        .catch((error) => {
            console.log(error, "error")
        })
}

export const getTopCourseByType = (type,callback, error) => {
    axios
        .get(APIS.GET_TOP_COURSES_BY_TYPE + type , header)
        .then((res) => {
            callback(res.data)
        })
        .catch((error) => {
            console.log(error, "error")
        })
}

export const getCourseDataById = (id,callback, error) => {
    axios
        .get(APIS.GET_COURSE_DATA_BY_ID + id , header)
        .then((res) => {
            callback(res.data)
        })
        .catch((error) => {
            console.log(error, "error")
        })
}

export const getUserDataByUserId = (userId,callback, error) => {
    axios
        .get(APIS.GET_USER_DATA_BY_USERID + userId , header)
        .then((res) => {
            callback(res.data)
        })
        .catch((error) => {
            console.log(error, "error")
        })
}

export const addUserCourseInCart = (userId,courseId,callback, error) => {
    axios
        .get(APIS.ADD_USER_COURSE_IN_CART_BY_ID + userId +"&courseId=" + courseId, header)
        .then((res) => {
            callback(res.data)
        })
        .catch((error) => {
            console.log(error, "error")
        })
}