import config from "../config/config";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class DataService {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(config.appwriteEndpoint)
      .setProject(config.appwriteProjectID);

    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  // Post Services

  async createPost({ title, slug, content, userId, thumbnaiLImage, status }) {
    try {
      return await this.databases.createDocument(
        config.appwriteDatabaseID,
        config.appwriteCollectionID,
        slug,
        {
          title,
          content,
          thumbnaiLImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("Appwrite Server Error : createPost Error :: ", error);
      return false;
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        config.appwriteDatabaseID,
        config.appwriteCollectionID,
        slug
      );

      return true;
    } catch (error) {
      console.log("Appwrite Server Error : deletePost Error :: ", error);
      return false;
    }
  }

  async updatePost({ title, slug, content, thumbnaiLImage, status }) {
    try {
      return await this.databases.updateDocument(
        config.appwriteDatabaseID,
        config.appwriteCollectionID,
        slug,
        {
          title,
          content,
          status,
          thumbnaiLImage,
        }
      );
    } catch (error) {
      console.log("Appwrite Server Error : updatePost Error :: ", error);
      return false;
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        config.appwriteDatabaseID,
        config.appwriteCollectionID,
        slug
      );
    } catch (error) {
      console.log("Appwrite Server Error : getPost Error :: ", error);
      return false;
    }
  }

  async getAllActivePosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        config.appwriteDatabaseID,
        config.appwriteCollectionID,
        queries
      );
    } catch (error) {
      console.log(
        "Appwrite Server Error : getAllActivePosts : Error :: ",
        error
      );
      return false;
    }
  }

  //   Storage Services

  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        config.appwriteBucketID,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("Appwrite Server Error : uploadFile : Error :: ", error);
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(config.appwriteBucketID, fileId);
      return true;
    } catch (error) {
      console.log("Appwrite Server Error : deleteFile Error :: ", error);
      return false;
    }
  }

  async getFilePreview(fileId) {
    try {

        return await this.bucket.getFilePreview(
            config.appwriteBucketID,
            fileId
        )
        
    } catch (error) {
        console.log("Appwrite Server Error : getFilePreview Error :: ",error);
        return false;
    }
  }
}

const dataService = new DataService();

export default dataService;
