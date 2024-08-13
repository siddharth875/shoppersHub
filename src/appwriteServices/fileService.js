import config from "../conf/config";
import { Client, Storage, ID } from "appwrite";

class FileService{
    client = new Client()
    bucket
    constructor(){
        this.client.setEndpoint(config.appwriteEndpoint).setProject(config.appwriteProjectId)
        this.bucket = new Storage(this.client)
    }

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                config.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Encountered an error at uploadFile : FileService :", error)
            return false
        }
    }

    async deleteFile(fileId){
        try {
            if(fileId){
            await this.bucket.deleteFile(
                config.appwriteBucketId,
                fileId
            )
            return true
        } else return false
        } catch (error) {
            console.log("Encountered an error at deleteFile : AuthService :", error)
            return false
        }
    }

    getPreview(fileId){
        try {
            return this.bucket.getFilePreview(
                config.appwriteBucketId,
                fileId
            )
        } catch (error) {
            console.log("Encountered an error at getPreview : AuthService :", error)
            return false
        }
    }
}

const fileService = new FileService()

export default fileService