import config from "../conf/config";
import { Client, Account, ID } from "appwrite";

class AuthService{
    client = new Client()
    account
    constructor(){
        this.client.setEndpoint(config.appwriteEndpoint).setProject(config.appwriteProjectId)
        this.account = new Account(this.client)
    }

    async signUp({email, password, name}){
        try {
            const user = await this.account.create(
                ID.unique(),
                email,
                password,
                name
            )
            if(user){
                return await this.logIn({email, password})
            }
            else
            return true
            
        } catch (error) {
            console.log("Encountered an error at signUp : AuthService :", error)
            return false
        }
    }

    async logIn({email, password}){
        try {
            return await this.account.createEmailPasswordSession(
                email,
                password
            )
        } catch (error) {
            console.log("Encountered an error at logIn : AuthService :", error)
        }
    }

    async logOut(){
        try {
            await this.account.deleteSessions()
        } catch (error) {
            console.log("Encountered an error at logOut : AuthService :", error)
            return false
        }
    }

    async getUser(){
        try {
            return await this.account.get()
        } catch (error) {
            console.log("Encountered an error at getUser : AuthService :", error)
            return false
        }
    }
}

const authService = new AuthService()

export default authService;