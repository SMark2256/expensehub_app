// Admin.js
import React from "react";
import { Admin, Resource } from "react-admin";
import { FirebaseAuthProvider } from "react-admin-firebase";
import firebaseDataProvider from "./utils/firebaseDataProvider";
import { UserList, UserEdit, UserCreate } from "./User";
import { PostList, PostEdit, PostCreate } from "./Post";
import { CommentList, CommentEdit, CommentCreate } from "./Comment";

// Firebase konfiguráció importálása a külön fájlból
import firebaseConfig from "./firebaseConfig";

const authProvider = FirebaseAuthProvider(firebaseConfig, {
    userProfilePath: "users",
    userAdminProp: "isAdmin",
});

const App = () => (
    <Admin dataProvider={firebaseDataProvider} authProvider={authProvider}>
        <Resource
            name="users"
            list={UserList}
            edit={UserEdit}
            create={UserCreate}
        />
        <Resource
            name="posts"
            list={PostList}
            edit={PostEdit}
            create={PostCreate}
        />
        <Resource
            name="comments"
            list={CommentList}
            edit={CommentEdit}
            create={CommentCreate}
        />
        {/* További erőforrásokat adhatsz hozzá szükség szerint */}
    </Admin>
);

export default App;
