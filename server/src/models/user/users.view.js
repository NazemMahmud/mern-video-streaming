const authUser = user => {
    return {
        data: {
            id: user._id,
            name: user.name,
            email: user.email
        }
    }
}

const getAllUsers = users => {
    return {
        data: users.map(user => {
            return {
                _id: user._id,
                name: user.name,
                email: user.email,
                profilePicture: user.profilePicture,
                isAdmin: user.isAdmin,
                createdAt: user.createdAt,
                updatedAt: user.updatedAt,
                id: user.id,
            }
        })
    }
}

const UserViewModel = {
    authUser, getAllUsers
};

export default UserViewModel;
