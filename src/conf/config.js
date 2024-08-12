const config = {
    appwriteEndpoint : String(import.meta.env.VITE_APPWRITE_ENDPOINT),
    appwriteProjectId : String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId : String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCategoryCollectionId : String(import.meta.env.VITE_APPWRITE_CATEGORY_COLLECTION_ID),
    appwriteProductCollectionId : String(import.meta.env.VITE_APPWRITE_PRODUCT_COLLECTION_ID),
    appwriteBucketId : String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
}


export default config