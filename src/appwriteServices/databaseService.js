import config from '../conf/config'
import {Client, Databases} from 'appwrite'

class DatabaseService {
    client = new Client;
    database; 
    collectionIds;
    constructor(){
        this.client.setEndpoint(config.appwriteEndpoint).setProject(config.appwriteProjectId);
        this.database = new Databases(this.client)
        this.collectionIds = {
            category : config.appwriteCategoryCollectionId,
            product : config.appwriteProductCollectionId
        }
    }
    async create(collectionName, slug, data ){
        try {
            return await this.database.createDocument(
                config.appwriteDatabaseId,
                this.collectionIds[collectionName],
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
                this.collectionIds[collectionName],
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
                this.collectionIds[collectionName],
                quary
            )
        } catch (error) {
            console.log("Encountered an error at list : DatabaseService :", error)
            return false
        }
    }

    async update(collectionIds, slug, data){
        try {
            
        } catch (error) {
            console.log("Encountered an error at update : DatabaseService :", error)
            return false
        }
    }

}

const databaseService = new DatabaseService()
export default databaseService
