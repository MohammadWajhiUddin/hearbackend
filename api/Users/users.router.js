const router = require("express").Router();


const {
    // getUsers,
    // getSortedUsers,
    // getSingleUserBasedOnId,
    // getSingleUserBasedOnDifferentParameter,
    registerUser,
    loginUser,
    adduserhealthlogs
    // addMultipleUsers,
    // deleteSingleUser,
    // deleteMultipleUsersBasedOnCertailCriteria,
    // updateSingleUser
} = require("./users.controller")


// router.get("/getUsers",getUsers);
// router.get("/getSortedUserAgeVise/:age",getSortedUsers);
// router.*("/getSingleUserBasedOnId/:id",getSingleUserBasedOnId);
// router.get("/getSingleUserBasedOnDifferentParameter/:age",getSingleUserBasedOnDifferentParameter);
router.post("/registerUser",registerUser);
router.post("/loginUser",loginUser);
router.post("/adduserhealthlogs",adduserhealthlogs);

// router.post("/addMultipleUsers",addMultipleUsers);
// router.delete("/deleteSingleUser/:userid",deleteSingleUser);
// router.delete("/deleteMultipleUsersBasedOnCertailCriteria/:userage",deleteMultipleUsersBasedOnCertailCriteria);
// router.patch("/updateSingleUser/:userid",updateSingleUser);






module.exports = router;