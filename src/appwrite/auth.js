// import conf from "../conf/conf.js";
// import { Client, Account, ID } from "appwrite";  //from the documentation 

// export class AuthService {
//     client = new Client();
//     account;

//     constructor() {
//         this.client
//             .setEndpoint(conf.appwriteUrl)
//             .setProject(conf.appwriteProjectId);
//         this.account = new Account(this.client);
//     }

//     async createAccount({email, password, name}) {
//         try {
//             const userAccount = await this.account.create(ID.unique(), email, password, name);

//             if (userAccount) {
//                 // call another method , so that if the userAccount exists make him login too
//                 return this.login({email, password});
//             } else {
//                 return userAccount;
//             }

//         } catch (error) {
//             throw error;
//         }
//     }

//     async login({email, password}) {
//         try {
//            return await this.account.createEmailSession(email , password);
//         } catch (error) {
//             throw error;
//         }
//     }

//     async getCurrentUser() {
//     //     console.log("before try")
//     //     try {
//     //     console.log("after try")

//     //        return await this.account.get();
//     //     } catch (error) {
//     //     console.log("Appwrite service :: getCurrentUser :: error", error);
//     //     }
//     //     return null;
//     // }
//     try {
//         const CurrentUser = await this.account.get();
//         if (CurrentUser) return CurrentUser
//     } catch (error) {
//         throw "You are not loggedin. Please login";
//     }}

//     async logout() {
//         try {
//             return await this.account.deleteSessions();
//         } catch (error) {
//             console.log("Appwrite service :: getCurrentUser :: error", error);
//         }
//     }
// }


// const authService = new AuthService();

// export default authService;




import conf from '../conf/conf.js';
import { Client, Account, ID } from "appwrite";


export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
            
    }

    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // call another method
                return this.login({email, password});
            } else {
               return  userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email, password}) {
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }

        return null;
    }

    async logout() {

        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
        }
    }
}

const authService = new AuthService();

export default authService