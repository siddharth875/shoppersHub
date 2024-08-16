import config from '../conf/config'
import {Client, Databases} from 'appwrite'

class DatabaseService {
    client = new Client;
    database; 
    collectionIds;
    constructor(){
        this.client.setEndpoint(config.appwriteEndpoint).setProject(config.appwriteProjectId);
        this.database = new Databases(this.client)
    }
    async create(collectionName, slug, data ){
        try {
            return await this.database.createDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId[collectionName],
                slug,
                data
            )
        } catch (error) {
            console.log("Encountered an error at create : DatabaseService :", error)
            return false
        }
    }

    async get(collectionName, slug){
        try {
            return await this.database.getDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId[collectionName],
                slug
            )
        } catch (error) {
            console.log("Encountered an error at get : DatabaseService :", error)
            return false
        }
    }

    async list(collectionName, quary = []){
        try {
            return this.database.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteCollectionId[collectionName],
                quary
            )
        } catch (error) {
            console.log("Encountered an error at list : DatabaseService :", error)
            return false
        }
    }

    async update(collectionName, slug, data){
        try {
            return await this.database.updateDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId[collectionName],
                slug,
                data
            )
        } catch (error) {
            console.log("Encountered an error at update : DatabaseService :", error)
            return false
        }
    }

    async delete(collectionName, slug){
        try {
            await this.database.deleteDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId[collectionName],
                slug
            )
        } catch (error) {
            console.log("Encountered an error at delete : DatabaseService :", error)
            return false
        }
    }

}

const databaseService = new DatabaseService()
export default databaseService
