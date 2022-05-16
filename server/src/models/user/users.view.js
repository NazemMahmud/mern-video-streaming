const authUser = user => {
    return {
        data: {
            id: user._id,
            name: user.name,
            email: user.email
        }
    }
}

const UserViewModel = {
    authUser
};

export default UserViewModel;
