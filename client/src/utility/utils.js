/**
 * Check submit button should remain disabled or not
 * @param formInput
 * @returns {boolean}
 */
export const checkDisableButton = formInput => {
    for (const property in formInput) {
        if (!formInput[property].isValid) {
            return true;
        }
    }
    return false;
};

export const getAccessToken = localStorage.getItem('accessToken') || '';

export const getUserData = () => {
    const userData = localStorage.getItem('userData') || '';
    return userData ? JSON.parse(userData) : {};
};

export const isUserLoggedIn = () =>  !!Object.keys(getUserData()).length
