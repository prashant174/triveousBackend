const express=require("express")
const { signUp, logIn } = require("../controllers/authController")

const userRouter=express.Router()

// /**
//  * @swagger
//  * components:
//  *    schemas:
//  *      User:
//  *       type:object
//  *         required:
//  *            - name
//  *            - email
//  *            - password
//  *            - role
//  *           properties:
//  *             id:
//  *               type:String
//  *               description: The auto generated id of the book
//  *             name:
//  *               type:String
//  *               description:the user name
//  *             email:
//  *               type:String
//  *               description:the user email
//  *             password:
//  *                type:String
//  *                description:the user password
//  *             role:
//  *                type:String
//  *                description:the user role
//  *           example:
//  *              id:jg546345
//  *              name:user1
//  *              email:user1@gmail.com
//  *              password:geu4627
//  *              role:customer
//  *          
//  */

userRouter.post("/signUp",signUp)
userRouter.post("/login",logIn)

module.exports={
    userRouter
}